import { NextRequest, NextResponse } from 'next/server'
import { resend, FROM, REPLY_TO } from '@/lib/resend'
import { appendRow } from '@/lib/sheets'

export async function POST(req: NextRequest) {
  try {
    const { reason, detail } = await req.json()

    await appendRow({
      sheet: 'Uninstall',
      values: [reason ?? 'not selected', detail ?? ''],
    })

    await resend.emails.send({
      from: FROM,
      to: process.env.NOTIFICATION_EMAIL ?? REPLY_TO,
      subject: `[Uninstall] ${reason ?? 'not selected'}`,
      html: `
        <p><strong>Reason:</strong> ${reason ?? 'not selected'}</p>
        <p><strong>Detail:</strong> ${detail ?? 'none'}</p>
        <p style="color:#888;font-size:12px">${new Date().toISOString()}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[uninstall]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
