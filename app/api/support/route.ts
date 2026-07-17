import { NextResponse } from 'next/server'
import { resend, FROM_EMAIL, NOTIFICATION_EMAIL } from '@/lib/resend'
import { appendToSheet } from '@/lib/sheets'
import { supportEmail } from '@/lib/emails'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const { email, type, message } = await req.json()

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const timestamp = new Date().toISOString()

    await appendToSheet('Support', [timestamp, email || 'not provided', type, message])

    // Notify us
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `TokenPulse support: ${type} from ${email || 'anonymous'}`,
      html: `<div style="font-family:monospace;background:#080809;color:#EDEEF2;padding:24px;border-radius:12px">
        <h2 style="color:#6C5FFF;margin:0 0 16px">Support Message</h2>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Email:</strong> ${email || 'not provided'}</p>
        <p><strong>Time:</strong> ${timestamp}</p>
        <p><strong>Message:</strong></p>
        <p style="color:#72728A;background:#0E0E11;padding:12px;border-radius:8px;white-space:pre-wrap">${message}</p>
      </div>`,
    })

    // Auto-responder to user
    if (email && email.includes('@')) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: 'We got your message — TokenPulse',
        html: supportEmail(type),
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Support API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
