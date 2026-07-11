import { NextResponse } from "next/server";
import { resend, FROM_EMAIL, NOTIFICATION_EMAIL } from "@/lib/resend";
import { appendToSheet } from "@/lib/sheets";
import { error } from "console";

export async function POST(req: Request) {
  try {
    const { email, type, message } = await req.json()

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const timestamp = new Data().toISOString()

    await appendToSheet('Support', [timestamp, email || 'not provided', type, message])

    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `TokenPulse support: ${type} from ${email || 'anonymous'}`,
      html: `
        <div style="font-family:monospace;background:#080809;color:#EDEEF2;padding:24px;border-radius:12px">
        <h2 style="color:#6C5FFF;margin:0 0 16px">Support Message</h2>
        <p><strong>Type:</strong> ${type}</p>
        
      `
    })
  }
}