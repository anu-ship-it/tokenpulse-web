import { NextResponse } from 'next/server'
import { getResend, FROM_EMAIL, NOTIFICATION_EMAIL } from '@/lib/resend'
import { appendToSheet } from '@/lib/sheets'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const timestamp = new Date().toISOString()
    const source = req.headers.get('referer') || 'direct'

    // 1. Write to Google Sheets (gracefully degrades if creds missing)
    await appendToSheet('Waitlist', [timestamp, email, source])

    // 2. Notify us
    await getResend().emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `New Pro waitlist signup: ${email}`,
      html: `
        <div style="font-family:monospace;background:#080809;color:#EDEEF2;padding:24px;border-radius:12px">
          <h2 style="color:#6C5FFF;margin:0 0 16px">New Waitlist Signup</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Time:</strong> ${timestamp}</p>
          <p><strong>Source:</strong> ${source}</p>
        </div>
      `,
    })

    // 3. Confirm to user
    await getResend().emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "You're on the TokenPulse Pro waitlist",
      html: `
        <div style="font-family:-apple-system,sans-serif;background:#080809;color:#EDEEF2;padding:32px;border-radius:16px;max-width:480px">
          <img src="https://raw.githubusercontent.com/anu-ship-it/TokenPulse/main/src/icons/icon128.png" width="40" height="40" style="border-radius:10px;margin-bottom:20px"/>
          <h1 style="font-size:22px;font-weight:700;margin:0 0 8px;letter-spacing:-0.5px">You're on the list.</h1>
          <p style="color:#72728A;line-height:1.7;margin:0 0 20px">
            We'll email you the moment TokenPulse Pro is ready. As an early waitlist member, your pricing is locked — even after we raise it at launch.
          </p>
          <h3 style="color:#00E5A0;font-size:14px;margin:0 0 12px">What's coming in Pro:</h3>
          <ul style="color:#72728A;line-height:2;padding-left:20px;margin:0 0 24px">
            <li>Unlimited AI providers (Grok, Perplexity, Cursor, Mistral + more)</li>
            <li>90-day usage history with graphs</li>
            <li>Rate limit predictions</li>
            <li>Sync across Chrome, Edge, Brave, Arc, VSCode</li>
            <li>Weekly AI usage email reports</li>
            <li>Export CSV / JSON / PDF</li>
          </ul>
          <p style="color:#32324A;font-size:12px;font-family:monospace">
            TokenPulse · token-pulse.in · Built by Anoop Kumar & Mansi Rathore
          </p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Waitlist API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
