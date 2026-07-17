import { NextResponse } from 'next/server'
import { resend, FROM_EMAIL, NOTIFICATION_EMAIL } from '@/lib/resend'
import { appendToSheet } from '@/lib/sheets'
import { uninstallEmail } from '@/lib/emails'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const { reason, detail, email } = await req.json()
    const timestamp = new Date().toISOString()

    await appendToSheet('Uninstall', [timestamp, reason || 'not selected', detail || '', email || ''])

    // Notify us
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `TokenPulse uninstall: ${reason}`,
      html: `<div style="font-family:monospace;background:#080809;color:#EDEEF2;padding:24px;border-radius:12px">
        <h2 style="color:#EF4444;margin:0 0 16px">Uninstall Feedback</h2>
        <p><strong>Reason:</strong> ${reason}</p>
        <p><strong>Detail:</strong> ${detail || 'none'}</p>
        <p><strong>Email:</strong> ${email || 'not provided'}</p>
        <p><strong>Time:</strong> ${timestamp}</p>
      </div>`,
    })

    // Auto-responder — only if user provided email
    if (email && email.includes('@')) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: 'Thanks for the feedback — TokenPulse',
        html: uninstallEmail(),
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Uninstall API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
