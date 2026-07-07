'use client'

const CHROME_URL =
  'https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic'

function scrollToWaitlist() {
  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  setTimeout(() => (document.querySelector('#waitlist input') as HTMLInputElement)?.focus(), 600)
}

const FREE_FEATURES = [
  'Live token bar on all 4 platforms',
  'Claude rate limits + reset countdowns',
  'Cost tracking — today and this week',
  'Smart notifications at 75%, 90%, 100%',
  'Daily usage history',
  'Zero data leaves your device',
]

const PRO_FEATURES = [
  'Everything in Free',
  'Unlimited AI providers — Grok, Perplexity, Cursor, Mistral, OpenRouter + more',
  'Rate limit predictions — estimated time before cutoff',
  '90-day history with usage graphs',
  'Smart notifications in plain language',
  'Sync across Chrome, Edge, Brave, Arc, VSCode',
  'Weekly AI usage email report',
  'Export CSV / JSON / PDF',
  'AI usage timeline across all tools',
]

const TEAM_FEATURES = [
  'Everything in Pro',
  'Shared team dashboard',
  'Budget controls and alerts',
  'Usage by member',
  'Slack / Discord / webhook alerts',
  'Admin dashboard',
  'Priority support',
]

export function Pricing() {
  return (
    <section id="pricing" className="relative z-10 border-t border-[var(--b)] bg-[var(--s1)] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="mono text-[11px] font-semibold tracking-widest uppercase text-[var(--acc)] mb-3">Pricing</p>
        <h2 className="text-4xl font-bold tracking-[-1px] text-[var(--t)] mb-3">
          Start free. Upgrade when<br />
          <em className="not-italic text-[var(--live)]">you need more.</em>
        </h2>
        <p className="text-[15px] text-[var(--t2)] leading-relaxed max-w-lg mb-14">
          The free extension tracks what matters today. Pro is in development — join the waitlist
          to lock early pricing and get first access.
        </p>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-5">
          {/* FREE */}
          <div className="bg-[var(--bg)] border border-[var(--bm)] rounded-2xl p-7 flex flex-col">
            <p className="mono text-[11px] font-semibold uppercase tracking-wider text-[var(--t2)] mb-3">Free</p>
            <div className="mb-1">
              <span className="text-4xl font-bold text-[var(--t)] tracking-tight">$0</span>
            </div>
            <p className="mono text-[10px] text-[var(--t3)] mb-4">forever</p>
            <p className="text-[13px] text-[var(--t2)] leading-snug mb-6 pb-6 border-b border-[var(--b)]">
              For developers who want visibility into their AI usage today. No account required.
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[13px] text-[var(--t2)]">
                  <span className="text-[var(--live)] flex-shrink-0 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={CHROME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-[14px] font-semibold py-3 rounded-[10px] bg-[var(--s2)] text-[var(--t2)] border border-[var(--bm)] hover:text-[var(--t)] transition-colors no-underline"
            >
              Install Free
            </a>
          </div>

          {/* PRO */}
          <div className="relative bg-[var(--bg)] border border-[var(--acc)] rounded-2xl p-7 flex flex-col shadow-[0_0_0_1px_var(--acc),0_0_40px_rgba(108,95,255,0.1)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--acc)] text-white text-[10px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">
              ⭐ Most Popular — Waitlist Open
            </div>
            <p className="mono text-[11px] font-semibold uppercase tracking-wider text-[var(--acc)] mb-3">Pro</p>
            <div className="mb-1 flex items-end gap-1">
              <span className="text-4xl font-bold text-[var(--t)] tracking-tight">$4</span>
              <span className="text-xl font-normal text-[var(--t2)] mb-1">.99</span>
            </div>
            <p className="mono text-[10px] text-[var(--t3)] mb-4">per month · early access pricing</p>
            <p className="text-[13px] text-[var(--t2)] leading-snug mb-6 pb-6 border-b border-[var(--b)]">
              For developers who use multiple AI tools daily and need full history, predictions, and sync.
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {PRO_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[13px] text-[var(--t2)]">
                  <span className="text-[var(--live)] flex-shrink-0 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToWaitlist}
              className="w-full text-[14px] font-semibold py-3 rounded-[10px] bg-[var(--acc)] text-white hover:bg-[#7D71FF] hover:-translate-y-px transition-all cursor-pointer border-0"
            >
              Join Waitlist → Lock Early Price
            </button>
          </div>

          {/* TEAM */}
          <div className="bg-[var(--bg)] border border-[var(--bm)] rounded-2xl p-7 flex flex-col">
            <p className="mono text-[11px] font-semibold uppercase tracking-wider text-[var(--t2)] mb-3">Team</p>
            <div className="mb-1">
              <span className="text-4xl font-bold text-[var(--t)] tracking-tight">$29</span>
            </div>
            <p className="mono text-[10px] text-[var(--t3)] mb-4">per month · 5 seats · +$6/user</p>
            <p className="text-[13px] text-[var(--t2)] leading-snug mb-6 pb-6 border-b border-[var(--b)]">
              For teams where AI usage is a shared cost. Shared dashboards, budget controls, admin visibility.
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {TEAM_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[13px] text-[var(--t2)]">
                  <span className="text-[var(--live)] flex-shrink-0 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToWaitlist}
              className="w-full text-[14px] font-semibold py-3 rounded-[10px] bg-[var(--s2)] text-[var(--t)] border border-[var(--bm)] hover:border-[var(--ab)] transition-all cursor-pointer"
            >
              Join Team Waitlist
            </button>
          </div>
        </div>

        {/* Lifetime */}
        <div className="bg-[var(--bg)] border border-[var(--warn)] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_0_40px_rgba(245,158,11,0.05)]">
          <div>
            <span className="mono text-[10px] font-semibold text-[var(--warn)] bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.2)] px-2.5 py-1 rounded-md inline-block mb-3">
              ⚡ Early Adopter — Limited to 100 users
            </span>
            <h3 className="text-lg font-bold text-[var(--t)] tracking-tight mb-2">
              Lifetime Pro access. Pay once, own it forever.
            </h3>
            <p className="text-[13px] text-[var(--t2)] leading-relaxed max-w-lg">
              Lock in Pro features at a single payment before we launch. First 100 users only —
              after that this offer disappears permanently. Includes all future Pro features.
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
            <span className="text-4xl font-bold text-[var(--warn)] tracking-tight">$69</span>
            <span className="mono text-[10px] text-[var(--t3)]">one-time · 100 spots total</span>
            <button
              onClick={scrollToWaitlist}
              className="mt-1 px-5 py-2.5 rounded-[9px] bg-[rgba(245,158,11,0.12)] text-[var(--warn)] border border-[rgba(245,158,11,0.3)] text-[13px] font-semibold hover:bg-[rgba(245,158,11,0.2)] transition-all cursor-pointer whitespace-nowrap"
            >
              Claim Lifetime Access
            </button>
          </div>
        </div>

        <p className="mono text-[11px] text-[var(--t3)] text-center mt-6 leading-loose">
          Pro and Team are in development. Joining the waitlist locks your early pricing.{' '}
          <a href="mailto:anup17508@gmail.com" className="text-[var(--acc)] hover:underline">
            Questions? Email us.
          </a>
        </p>
      </div>
    </section>
  )
}
