import { NextResponse } from 'next/server'
import { resend, FROM_EMAIL, NOTIFICATION_EMAIL } from '@/lib/resend'
import { appendToSheet } from '@/lib/sheets'
import { waitlistEmail } from '@/lib/emails'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const timestamp = new Date().toISOString()
    const source = req.headers.get('referer') || 'direct'

    // Write to Google Sheets
    await appendToSheet('Waitlist', [timestamp, email, source])

    // Notify us
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `New Pro waitlist signup: ${email}`,
      html: `<div style="font-family:monospace;background:#080809;color:#EDEEF2;padding:24px;border-radius:12px">
        <h2 style="color:#6C5FFF;margin:0 0 16px">New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${timestamp}</p>
        <p><strong>Source:</strong> ${source}</p>
      </div>`,
    })

    // Auto-responder to user
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "You're on the TokenPulse Pro waitlist ✓",
      html: waitlistEmail(),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Waitlist API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
