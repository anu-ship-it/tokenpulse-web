import { NextRequest, NextResponse } from 'next/server'
import { resend, FROM, REPLY_TO } from '@/lib/resend'
import { appendRow } from '@/lib/sheets'

export async function POST(req: NextRequest) {
  try {
    const { email, plan = 'pro' } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // 1. Append to Google Sheet (graceful degradation)
    await appendRow({
      sheet: 'Waitlist',
      values: [email, plan, req.headers.get('user-agent') ?? ''],
    })

    // 2. Send confirmation to user
    await resend.emails.send({
      from: FROM,
      replyTo: REPLY_TO,
      to: email,
      subject: "You're on the TokenPulse Pro waitlist",
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto;padding:40px 24px;background:#080809;color:#EDEEF2">
          <div style="margin-bottom:28px">
            <span style="font-size:13px;font-weight:700;color:#6C5FFF;letter-spacing:1px;text-transform:uppercase">TokenPulse</span>
          </div>
          <h1 style="font-size:24px;font-weight:700;letter-spacing:-0.5px;margin-bottom:14px;color:#EDEEF2">
            You're on the list.
          </h1>
          <p style="font-size:15px;color:#7A7A8C;line-height:1.7;margin-bottom:20px">
            You've secured early access to <strong style="color:#EDEEF2">TokenPulse Pro</strong> — and you've locked the early adopter price permanently, even after we raise it at launch.
          </p>
          <p style="font-size:15px;color:#7A7A8C;line-height:1.7;margin-bottom:28px">
            While you wait, install the free Chrome extension to start tracking your usage today:
          </p>
          <a href="https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic"
             style="display:inline-block;background:#6C5FFF;color:#fff;padding:12px 24px;border-radius:9px;font-size:14px;font-weight:600;text-decoration:none">
            Install Free Chrome Extension
          </a>
          <p style="font-size:12px;color:#36364A;margin-top:40px;line-height:1.6">
            Built by Anoop Kumar & Mansi Rathore · Alpha<br>
            <a href="https://token-pulse.in" style="color:#6C5FFF;text-decoration:none">token-pulse.in</a>
          </p>
        </div>
      `,
    })

    // 3. Notify founder
    await resend.emails.send({
      from: FROM,
      to: process.env.NOTIFICATION_EMAIL ?? REPLY_TO,
      subject: `New waitlist signup — ${plan} — ${email}`,
      html: `<p>New waitlist signup</p><p>Email: ${email}<br>Plan: ${plan}<br>Time: ${new Date().toISOString()}</p>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[waitlist]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
