import { NextRequest, NextResponse } from 'next/server'
import { resend, FROM, REPLY_TO } from '@/lib/resend'
import { appendRow } from '@/lib/sheets'

export async function POST(req: NextRequest) {
  try {
    const { email, type, message } = await req.json()

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message required' }, { status: 400 })
    }

    await appendRow({
      sheet: 'Support',
      values: [email ?? 'not provided', type ?? 'other', message],
    })

    await resend.emails.send({
      from: FROM,
      to: process.env.NOTIFICATION_EMAIL ?? REPLY_TO,
      replyTo: email ?? REPLY_TO,
      subject: `[Support] ${type ?? 'other'} — ${email ?? 'anonymous'}`,
      html: `
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Email:</strong> ${email ?? 'not provided'}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${message}</p>
        <p style="color:#888;font-size:12px">${new Date().toISOString()}</p>
      `,
    })

    if (email) {
      await resend.emails.send({
        from: FROM,
        replyTo: REPLY_TO,
        to: email,
        subject: "We got your message — TokenPulse Support",
        html: `
          <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto;padding:40px 24px;background:#080809;color:#EDEEF2">
            <span style="font-size:13px;font-weight:700;color:#6C5FFF;letter-spacing:1px;text-transform:uppercase">TokenPulse</span>
            <h1 style="font-size:22px;font-weight:700;margin:20px 0 12px;color:#EDEEF2">Message received.</h1>
            <p style="font-size:14px;color:#7A7A8C;line-height:1.7">We read every message and usually reply within 24 hours. Your message:</p>
            <blockquote style="border-left:2px solid #6C5FFF;padding:12px 16px;margin:16px 0;font-size:13px;color:#7A7A8C;background:#0F0F12;border-radius:4px">
              ${message}
            </blockquote>
            <p style="font-size:12px;color:#36364A;margin-top:32px">
              TokenPulse · <a href="https://token-pulse.in" style="color:#6C5FFF;text-decoration:none">token-pulse.in</a>
            </p>
          </div>
        `,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[support]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
