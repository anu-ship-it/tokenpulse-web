import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata(
  'Privacy Policy — TokenPulse',
  'TokenPulse Privacy Policy. We collect no personal data. All usage data stays on your device.',
  '/privacy'
)

const sections = [
  {
    title: 'The short version',
    highlight: true,
    body: `TokenPulse does not collect, store, or transmit your personal data. Everything stays on your device. We do not read your conversations. We do not track your browsing. We do not sell data. The only data that ever leaves your device is what you voluntarily submit through our contact or waitlist forms.`,
  },
  {
    title: 'What data the extension collects',
    highlight: false,
    body: `The TokenPulse Chrome extension reads token usage statistics from AI platforms you are already signed into. This includes estimated token counts, context window utilization percentages, and rate limit data from Claude's internal API. This data is stored locally in your browser using Chrome's storage API. It never leaves your device. It is not sent to any TokenPulse server.`,
  },
  {
    title: 'What data the extension does NOT collect',
    highlight: false,
    body: `TokenPulse does not read the content of your conversations. It does not collect your name, email address, or any personally identifiable information. It does not track which websites you visit. It does not record keystrokes or form inputs. It does not take screenshots. It does not share any data with third parties.`,
  },
  {
    title: 'Permissions we request and why',
    highlight: false,
    body: `Storage: to save your usage history and settings locally on your device.\n\nAlarms: to poll Claude's usage endpoint on a configurable interval (default: every 5 minutes) so the rate limit data stays current.\n\nHost permissions for claude.ai, chatgpt.com, gemini.google.com, chat.deepseek.com: to inject the live token bar above the input box and read session usage data. We access only the usage data — not your conversation content.\n\nTabs: to open new tabs when you click platform links in the extension popup.`,
  },
  {
    title: 'Website analytics',
    highlight: false,
    body: `token-pulse.in uses Vercel's built-in analytics, which collects anonymised page view data (page URL, referrer, country, device type). No cookies are set. No personally identifiable information is collected. This data is used solely to understand which pages are visited and is not shared with third parties.`,
  },
  {
    title: 'Waitlist and contact forms',
    highlight: false,
    body: `When you submit your email address via the Pro waitlist form or contact form, we store your email address and the content of your submission. This data is used only to contact you about TokenPulse Pro launch, respond to your message, and send product updates you have opted into. We do not sell, rent, or share this data with third parties. You can request deletion of your data at any time by emailing support@token-pulse.in.`,
  },
  {
    title: 'Email communications',
    highlight: false,
    body: `If you join the Pro waitlist, you will receive a confirmation email and a notification when Pro launches. You may receive occasional product updates. You can unsubscribe from any email by replying with "unsubscribe" or emailing support@token-pulse.in.`,
  },
  {
    title: 'Third-party services',
    highlight: false,
    body: `We use Resend to send transactional emails. Resend processes email addresses solely for the purpose of delivering emails on our behalf. We use Google Sheets as a backend store for waitlist submissions. Both services are bound by their own privacy policies and do not use your data for advertising or third-party purposes.`,
  },
  {
    title: 'Data retention',
    highlight: false,
    body: `Local extension data (usage history, settings) is stored in your browser indefinitely until you uninstall the extension or clear browser data. Waitlist and contact form submissions are retained until you request deletion. You can request deletion at any time by emailing support@token-pulse.in.`,
  },
  {
    title: 'Your rights',
    highlight: false,
    body: `You have the right to access, correct, or delete any personal data we hold about you. Since the extension stores all data locally on your device, you control that data directly through your browser settings. For data submitted through our website forms (waitlist, contact), email support@token-pulse.in and we will respond within 30 days.`,
  },
  {
    title: 'Children',
    highlight: false,
    body: `TokenPulse is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has submitted personal information, contact us at support@token-pulse.in and we will delete it promptly.`,
  },
  {
    title: 'Changes to this policy',
    highlight: false,
    body: `We may update this Privacy Policy as the product evolves. We will update the effective date below when we do. Continued use of TokenPulse after changes constitutes acceptance of the updated policy. For significant changes, we will notify waitlist members by email.`,
  },
  {
    title: 'Contact',
    highlight: false,
    body: `Questions about this Privacy Policy? Email support@token-pulse.in or visit token-pulse.in/contact. We will respond within 30 days.`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(108,95,255,0.04)_0%,transparent_60%)]"/>
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-6 pt-32 pb-24">

          {/* Header */}
          <div className="mb-12">
            <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-4">
              Legal
            </div>
            <h1 className="text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.05em] leading-[1.07] text-[#EDEEF2] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[14px] text-[#72728A] leading-relaxed">
              Last updated: July 2026
            </p>
          </div>

          {/* Privacy badge */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              '✓ No personal data collected by extension',
              '✓ No conversation content read',
              '✓ No third-party data sharing',
              '✓ All local storage',
            ].map(item => (
              <div key={item} className="flex items-center gap-2 bg-[rgba(0,229,160,0.06)] border border-[rgba(0,229,160,0.15)] rounded-lg px-3 py-1.5">
                <span className="font-mono text-[11px] font-semibold text-[#00E5A0]">{item}</span>
              </div>
            ))}
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <div
                key={i}
                className={`pb-10 border-b border-white/5 last:border-0 ${
                  section.highlight
                    ? 'bg-[rgba(108,95,255,0.04)] border border-[rgba(108,95,255,0.12)] rounded-xl p-6 -mx-6'
                    : ''
                }`}
              >
                <h2 className="text-[18px] font-bold text-[#EDEEF2] tracking-tight mb-3">
                  {!section.highlight && `${i}. `}{section.title}
                </h2>
                <div className="text-[14px] text-[#72728A] leading-[1.85] whitespace-pre-line">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
