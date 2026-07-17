// Branded email templates for TokenPulse auto-responders

const BASE_URL = 'https://token-pulse.in'
const LOGO_URL = 'https://raw.githubusercontent.com/anu-ship-it/TokenPulse/main/src/icons/icon128.png'

const wrapper = (content: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TokenPulse</title>
</head>
<body style="margin:0;padding:0;background:#080809;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#080809;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:32px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;padding-right:10px;">
                    <img src="${LOGO_URL}" width="32" height="32" alt="TokenPulse" style="display:block;border-radius:8px;border:1px solid rgba(108,95,255,0.3);">
                  </td>
                  <td style="vertical-align:middle;">
                    <span style="font-size:15px;font-weight:700;color:#EDEEF2;letter-spacing:-0.3px;">TokenPulse</span>
                  </td>
                  <td style="vertical-align:middle;padding-left:8px;">
                    <span style="font-family:monospace;font-size:9px;font-weight:600;color:#6C5FFF;background:rgba(108,95,255,0.12);border:1px solid rgba(108,95,255,0.25);padding:2px 7px;border-radius:4px;">alpha</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#0E0E11;border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:36px 36px 32px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:24px;text-align:center;">
              <p style="font-family:monospace;font-size:10px;color:#32324A;margin:0 0 6px;">
                TokenPulse · <a href="${BASE_URL}" style="color:#32324A;text-decoration:none;">token-pulse.in</a>
              </p>
              <p style="font-family:monospace;font-size:10px;color:#32324A;margin:0;">
                Built by Anoop Kumar &amp; Mansi Rathore
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

// ── Shared helpers ────────────────────────────────────────────────

const h1 = (text: string) =>
    `<h1 style="font-size:24px;font-weight:700;color:#EDEEF2;margin:0 0 10px;letter-spacing:-0.5px;line-height:1.2;">${text}</h1>`

const p = (text: string) =>
    `<p style="font-size:14px;color:#72728A;line-height:1.75;margin:0 0 16px;">${text}</p>`

const divider = () =>
    `<div style="height:1px;background:rgba(255,255,255,0.05);margin:24px 0;"></div>`

const badge = (text: string, color = '#6C5FFF', bg = 'rgba(108,95,255,0.10)', border = 'rgba(108,95,255,0.22)') =>
    `<span style="font-family:monospace;font-size:10px;font-weight:600;color:${color};background:${bg};border:1px solid ${border};padding:3px 9px;border-radius:5px;display:inline-block;margin-bottom:20px;">${text}</span>`

const liveItem = (text: string) =>
    `<tr>
    <td style="padding:6px 0;vertical-align:top;">
      <span style="color:#00E5A0;font-size:13px;padding-right:10px;">✓</span>
    </td>
    <td style="padding:6px 0;">
      <span style="font-size:13px;color:#72728A;line-height:1.5;">${text}</span>
    </td>
  </tr>`

const btn = (text: string, href: string, primary = true) =>
    `<a href="${href}" style="display:inline-block;padding:12px 24px;border-radius:10px;font-size:13px;font-weight:700;text-decoration:none;${primary
        ? 'background:#6C5FFF;color:#ffffff;'
        : 'background:#141418;color:#EDEEF2;border:1px solid rgba(255,255,255,0.08);'
    }">${text}</a>`

// ── 1. Waitlist confirmation ───────────────────────────────────────

export function waitlistEmail(): string {
    return wrapper(`
    ${badge('⭐ Pro Waitlist · Confirmed', '#00E5A0', 'rgba(0,229,160,0.08)', 'rgba(0,229,160,0.2)')}
    ${h1("You're on the list.")}
    ${p("Your spot is confirmed and your early-adopter price is locked — even after we raise it at launch. We'll email you the moment Pro is ready.")}
    ${divider()}
    <p style="font-family:monospace;font-size:10px;font-weight:600;color:#32324A;text-transform:uppercase;letter-spacing:1px;margin:0 0 14px;">What's coming in Pro</p>
    <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:24px;">
      ${liveItem('90-day usage history with graphs')}
      ${liveItem('Rate limit predictions — estimated time left at current pace')}
      ${liveItem('Sync across Chrome, Edge, Brave, Arc, VSCode')}
      ${liveItem('Unlimited platforms — Grok, Perplexity, Cursor, Mistral + more')}
      ${liveItem('Weekly AI usage email report')}
      ${liveItem('Export history as CSV / JSON / PDF')}
      ${liveItem('AI usage timeline across all tools')}
    </table>
    ${divider()}
    <p style="font-size:13px;color:#72728A;line-height:1.75;margin:0 0 20px;">
      While you wait — the free extension is live and tracking right now. If you haven't installed it yet:
    </p>
    ${btn('Install Free Extension', 'https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic')}
    &nbsp;&nbsp;
    ${btn('View Roadmap', `${BASE_URL}/#roadmap`, false)}
    ${divider()}
    <p style="font-size:12px;color:#32324A;line-height:1.6;margin:0;">
      Questions? Reply to this email or visit <a href="${BASE_URL}/contact" style="color:#6C5FFF;text-decoration:none;">token-pulse.in/contact</a>
    </p>
  `)
}

// ── 2. Contact / Support confirmation ────────────────────────────

export function supportEmail(type: string): string {
    const typeLabel: Record<string, string> = {
        bug: 'Bug Report',
        feature: 'Feature Request',
        pro: 'Pro Waitlist Question',
        press: 'Press Enquiry',
        partnership: 'Partnership',
        other: 'General Enquiry',
        support: 'Support Request',
    }

    const label = typeLabel[type] || 'Enquiry'

    return wrapper(`
    ${badge(`📬 ${label} · Received`, '#6C5FFF', 'rgba(108,95,255,0.10)', 'rgba(108,95,255,0.22)')}
    ${h1('Thanks — message received.')}
    ${p("We read every message personally and usually reply within 24 hours. You don't need to send a follow-up.")}
    ${divider()}
    <table cellpadding="0" cellspacing="0" style="width:100%;background:#141418;border:1px solid rgba(255,255,255,0.05);border-radius:10px;margin-bottom:24px;">
      <tr>
        <td style="padding:16px 18px;">
          <p style="font-family:monospace;font-size:9px;font-weight:600;color:#32324A;text-transform:uppercase;letter-spacing:1px;margin:0 0 6px;">Type</p>
          <p style="font-size:13px;font-weight:600;color:#EDEEF2;margin:0;">${label}</p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 18px 16px;">
          <p style="font-family:monospace;font-size:9px;font-weight:600;color:#32324A;text-transform:uppercase;letter-spacing:1px;margin:0 0 6px;">Response time</p>
          <p style="font-size:13px;font-weight:600;color:#00E5A0;margin:0;">Usually within 24 hours</p>
        </td>
      </tr>
    </table>
    ${p('While you wait, these might help:')}
    <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:24px;">
      ${liveItem(`<a href="${BASE_URL}/blog" style="color:#6C5FFF;text-decoration:none;">Read the blog</a> — guides on Claude rate limits, token optimization, and AI cost tracking`)}
      ${liveItem(`<a href="${BASE_URL}/#roadmap" style="color:#6C5FFF;text-decoration:none;">Check the roadmap</a> — see what's coming in Pro`)}
      ${liveItem(`<a href="https://github.com/anu-ship-it/TokenPulse" style="color:#6C5FFF;text-decoration:none;">View source on GitHub</a> — TokenPulse is open source`)}
    </table>
    ${btn('Visit token-pulse.in', BASE_URL, false)}
  `)
}

// ── 3. Uninstall thank you ────────────────────────────────────────

export function uninstallEmail(): string {
    return wrapper(`
    ${badge('Feedback · Received', '#72728A', 'rgba(255,255,255,0.04)', 'rgba(255,255,255,0.08)')}
    ${h1('Thanks for the feedback.')}
    ${p("We read every uninstall response and use it to decide what to build next. Genuinely — this helps.")}
    ${divider()}
    ${p("If you ran into a bug or a missing feature, we'd love to fix it. TokenPulse is actively developed and Pro is coming with significantly more functionality.")}
    <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:24px;">
      ${liveItem('Rate limit predictions and 90-day history in Pro')}
      ${liveItem('Firefox support coming soon')}
      ${liveItem('VSCode extension on the roadmap')}
      ${liveItem('More platforms — Grok, Perplexity, Cursor, Mistral')}
    </table>
    ${divider()}
    <p style="font-size:13px;color:#72728A;line-height:1.75;margin:0 0 20px;">
      Changed your mind? Reinstall takes 30 seconds.
    </p>
    ${btn('Reinstall TokenPulse', 'https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic', false)}
    ${divider()}
    <p style="font-size:12px;color:#32324A;line-height:1.6;margin:0;">
      Have more to say? Reply to this email or visit <a href="${BASE_URL}/contact" style="color:#6C5FFF;text-decoration:none;">token-pulse.in/contact</a>
    </p>
  `)
}
