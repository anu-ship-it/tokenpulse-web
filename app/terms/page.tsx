import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata(
  'Terms of Service — TokenPulse',
  'Terms of Service for TokenPulse. Read our terms before using the extension or website.',
  '/terms'
)

const sections = [
  {
    title: 'Acceptance of Terms',
    body: `By installing the TokenPulse Chrome extension or using token-pulse.in, you agree to these Terms of Service. If you do not agree, do not use TokenPulse.`,
  },
  {
    title: 'What TokenPulse Does',
    body: `TokenPulse is a browser extension that reads token usage data from AI platforms you are already signed into (Claude, ChatGPT, Gemini, DeepSeek). It injects a live token bar into those platforms and displays usage statistics in a popup. All data processing happens locally in your browser. TokenPulse does not store, transmit, or share your conversation content or personal data with any server.`,
  },
  {
    title: 'What TokenPulse Does Not Do',
    body: `TokenPulse does not read, store, or transmit your conversation content. It does not collect personally identifiable information. It does not sell data to third parties. It does not require an account or API key. It does not modify your conversations or interact with AI platforms on your behalf.`,
  },
  {
    title: 'Free Tier',
    body: `The free tier of TokenPulse is provided as-is, at no cost, with no guarantee of uptime, accuracy, or continued availability. We reserve the right to modify, limit, or discontinue the free tier at any time without notice.`,
  },
  {
    title: 'Pro and Team Tiers (Coming Soon)',
    body: `When Pro and Team tiers launch, additional terms will apply to paid subscriptions including billing, cancellation, and refund policies. Waitlist participation does not constitute a binding purchase agreement. Pricing locked via the waitlist is subject to reasonable adjustment before launch.`,
  },
  {
    title: 'Accuracy of Data',
    body: `Token counts and cost estimates provided by TokenPulse are approximations based on character-to-token estimation (approximately 4 characters per token) and publicly available model pricing. Actual token usage and costs may differ. TokenPulse makes no warranty as to the accuracy of these estimates. Do not rely on TokenPulse for billing or financial decisions.`,
  },
  {
    title: 'Third-Party Platforms',
    body: `TokenPulse operates on third-party platforms including Claude (Anthropic), ChatGPT (OpenAI), Gemini (Google), and DeepSeek. TokenPulse is not affiliated with, endorsed by, or officially supported by any of these platforms. Changes to those platforms may affect TokenPulse functionality. We are not responsible for any disruptions caused by third-party platform changes.`,
  },
  {
    title: 'Intellectual Property',
    body: `TokenPulse is open source software. The source code is available at github.com/anu-ship-it/TokenPulse under its stated license. The TokenPulse name, logo, and brand identity are owned by Alpha and may not be used without permission.`,
  },
  {
    title: 'Limitation of Liability',
    body: `TokenPulse is provided "as is" without warranties of any kind. To the maximum extent permitted by law, Alpha and its creators shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of TokenPulse, including but not limited to data loss, service interruption, or inaccurate usage estimates.`,
  },
  {
    title: 'Changes to These Terms',
    body: `We may update these Terms of Service from time to time. Continued use of TokenPulse after changes constitutes acceptance of the updated terms. We will note the effective date of the most recent update below.`,
  },
  {
    title: 'Contact',
    body: `Questions about these terms? Email support@token-pulse.in or visit token-pulse.in/contact.`,
  },
]

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-[14px] text-[#72728A] leading-relaxed">
              Last updated: July 2026
            </p>
          </div>

          {/* Intro */}
          <div className="bg-[rgba(108,95,255,0.06)] border border-[rgba(108,95,255,0.18)] rounded-xl p-5 mb-10">
            <p className="text-[14px] text-[#72728A] leading-relaxed">
              <strong className="text-[#EDEEF2] font-semibold">Short version:</strong>{' '}
              TokenPulse reads token usage data locally in your browser. We do not collect your data,
              read your conversations, or share anything with third parties. The extension is free to use.
              Pro features are coming and will have additional terms at launch.
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <div key={i} className="pb-10 border-b border-white/5 last:border-0">
                <h2 className="text-[18px] font-bold text-[#EDEEF2] tracking-tight mb-3">
                  {i + 1}. {section.title}
                </h2>
                <p className="text-[14px] text-[#72728A] leading-[1.85]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
