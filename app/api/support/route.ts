import { NextResponse } from "next/server";
import { resend, FROM_EMAIL, NOTIFICATION_EMAIL } from "@/lib/resend";
import { appendToSheet } from "@/lib/sheets";

export async function POST(req: Request) {
  try {
    const { email, type, message } = await req.json()

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const timestamp = new Date().toISOString()

    await appendToSheet('Support', [timestamp, email || 'not provided', type, message])

    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `TokenPulse support: ${type} from ${email || 'anonymous'}`,
      html: `
        <div style="font-family:monospace;background:#080809;color:#EDEEF2;padding:24px;border-radius:12px">
        <h2 style="color:#6C5FFF;margin:0 0 16px">Support Message</h2>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Email:</strong> ${timestamp}</p>
        <p><strong>Time:</strong></p>
        <p><strong>Message:</strong></p>
        <p style="color:#72728A;background:#0E0E11;padding;12px;border-radius:8px;white-space:pre-wrap">${message}</p>
      </div>  
      `,
    })

    if (email && email.includes('@')) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: 'We got you message - TokenPulse Support',
        html: `
          <div style="font-family:-apple-system,sans-serif;background:#080809;color:#EDEEF2;padding:32px;border-radius:16px;max-width: 480px>
          <h1 style="font-size:20px;font-weight;margin:0 0 8px">Thanks - message reveived.</h1>
          <p style="color:#72728A;line-height:1.7;margin:0 0 16px">
          We read every message and usually reply within 24 hours.
          </p>
          <p style="color:#32324A;font-size:12px;font-family:monospace">
          TokenPulse · token-pulse.in
          </p>
         </div> 
        `,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Support API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
