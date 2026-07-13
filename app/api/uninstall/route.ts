import { NextResponse } from 'next/server'
import { getResend, FROM_EMAIL, NOTIFICATION_EMAIL } from '@/lib/resend'
import { appendToSheet } from '@/lib/sheets'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const { reason, detail } = await req.json()
    const timestamp = new Date().toISOString()

    await appendToSheet('Uninstall', [timestamp, reason || 'not selected', detail || ''])

    await getResend().emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `TokenPulse uninstall feedback: ${reason}`,
      html: `
        <div style="font-family:monospace;background:#080809;color:#EDEEF2;padding:24px;border-radius:12px">
          <h2 style="color:#EF4444;margin:0 0 16px">Uninstall Feedback</h2>
          <p><strong>Reason:</strong> ${reason}</p>
          <p><strong>Detail:</strong> ${detail || 'none'}</p>
          <p><strong>Time:</strong> ${timestamp}</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Uninstall API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
