const STORE_URL =
  "https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic";

const freeFeatures = [
  "Live token bar — Claude & ChatGPT",
  "Context window tracking",
  "Claude rate limits (5hr + 7day)",
  "Cost estimator",
  "Daily usage history (60 days)",
  "Smart threshold notifications",
  "Token saving tips",
];

const proFeatures = [
  "Everything in Free",
  "Cross-device usage sync",
  "Usage history export (CSV)",
  "Weekly email summary",
  "Gemini support",
  "Response-ready notifications",
  "Team usage dashboard",
];

export default function PricingPage() {
  return (
    <section className="px-6 md:px-10 pt-36 pb-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-3">
            Pricing
          </div>
          <h1 className="text-[32px] md:text-[44px] font-extrabold leading-tight tracking-tight mb-4">
            Free today.
            <br />
            <span className="text-teal">Honest about tomorrow.</span>
          </h1>
          <p className="text-[15px] text-[#8aa8ac] max-w-[480px] mx-auto leading-relaxed">
            TokenPulse is free right now. A Pro tier is on the roadmap — not
            live yet, and we won&apos;t pretend it is.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-[760px] mx-auto mb-16">
          {/* Free */}
          <div className="bg-bg2 border border-teal/30 rounded-2xl p-8 relative shadow-[0_8px_32px_rgba(6,182,212,0.08)]">
            <div className="absolute -top-3.5 left-8">
              <span className="text-[10px] font-bold tracking-wide px-3 py-1.5 rounded-full bg-teal text-bg shadow-[0_4px_12px_rgba(6,182,212,0.3)]">
                AVAILABLE NOW
              </span>
            </div>
            <div className="text-sm font-bold text-teal mb-2 mt-2">Free</div>
            <div className="flex items-baseline gap-1.5 mb-8">
              <span className="text-5xl font-extrabold">$0</span>
              <span className="text-sm text-text-muted">/ forever</span>
            </div>
            <div className="flex flex-col gap-3.5 mb-8">
              {freeFeatures.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <span className="text-teal font-bold flex-shrink-0">✓</span>
                  <span className="text-[13px] text-[#8aa8ac]">{f}</span>
                </div>
              ))}
            </div>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-6 py-3.5 rounded-xl bg-teal text-bg text-sm font-bold hover:opacity-90 transition-opacity shadow-[0_8px_24px_rgba(6,182,212,0.2)]"
            >
              Add to Chrome — Free
            </a>
          </div>

          {/* Pro */}
          <div className="bg-bg2 border border-border rounded-2xl p-8 relative shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <div className="absolute -top-3.5 left-8">
              <span className="text-[10px] font-bold tracking-wide px-3 py-1.5 rounded-full bg-bg3 border border-border text-text-muted">
                ROADMAP — NOT LIVE
              </span>
            </div>
            <div className="text-sm font-bold text-text-muted mb-2 mt-2">
              Pro
            </div>
            <div className="flex items-baseline gap-1.5 mb-8">
              <span className="text-5xl font-extrabold text-text-muted">
                TBD
              </span>
            </div>
            <div className="flex flex-col gap-3.5 mb-8">
              {proFeatures.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <span className="text-text-muted font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-[13px] text-text-muted">{f}</span>
                </div>
              ))}
            </div>
            <div className="block text-center px-6 py-3.5 rounded-xl bg-bg3 border border-border text-text-muted text-sm font-bold cursor-not-allowed select-none">
              Not available yet
            </div>
          </div>
        </div>

        <div className="max-w-[600px] mx-auto bg-bg2 border border-border rounded-2xl p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <h2 className="text-base font-bold mb-3">
            Why we&apos;re not charging yet
          </h2>
          <p className="text-[13px] text-[#8aa8ac] leading-relaxed">
            We&apos;d rather build the Pro tier around what real users actually
            ask for than guess and gate features nobody wants. If you want to be
            notified when Pro launches, install the free extension first —
            we&apos;ll let everyone know inside the popup when it&apos;s ready.
          </p>
        </div>
      </div>
    </section>
  );
}
