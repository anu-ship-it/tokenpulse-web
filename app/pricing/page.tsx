const STORE_URL =
  "https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic";

function Check() {
  return <span className="text-teal text-sm font-bold">✓</span>;
}
function Dash() {
  return <span className="text-text-muted text-sm">—</span>;
}

const freeFeatures = [
  "Live token bar — Claude & ChatGPT",
  "Context window tracking",
  "Claude rate limits (5hr + 7day)",
  "Cost estimator",
  "Daily usage history",
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
];

export default function PricingPage() {
  return (
    <section className="px-6 md:px-10 pt-32 pb-24">
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
          <p className="text-[15px] text-teal-dim max-w-[480px] mx-auto leading-relaxed">
            TokenPulse is free right now. A Pro tier is on the roadmap — not
            live yet, and we won&apos;t pretend it is.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-[760px] mx-auto mb-16">
          {/* Free tier */}
          <div className="bg-bg2 border border-teal/30 rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-8 text-[10px] font-bold tracking-wide px-3 py-1 rounded-full bg-teal text-bg">
              AVAILABLE NOW
            </div>
            <div className="text-sm font-bold text-teal-light mb-1">Free</div>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold">$0</span>
              <span className="text-sm text-text-muted">/ forever</span>
            </div>
            <div className="flex flex-col gap-3 mb-8">
              {freeFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <Check />
                  <span className="text-[13px] text-[#4a9ba5]">{f}</span>
                </div>
              ))}
            </div>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-6 py-3 rounded-xl bg-teal text-bg text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Add to Chrome — Free
            </a>
          </div>

          {/* Pro tier */}
          <div className="bg-bg2 border border-border rounded-2xl p-8 relative opacity-90">
            <div className="absolute -top-3 left-8 text-[10px] font-bold tracking-wide px-3 py-1 rounded-full bg-bg3 border border-border text-text-muted">
              ROADMAP — NOT LIVE
            </div>
            <div className="text-sm font-bold text-text-muted mb-1">Pro</div>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-text-muted">
                TBD
              </span>
            </div>
            <div className="flex flex-col gap-3 mb-8">
              {proFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <Check />
                  <span className="text-[13px] text-text-muted">{f}</span>
                </div>
              ))}
            </div>
            <div className="block text-center px-6 py-3 rounded-xl bg-bg3 border border-border text-text-muted text-sm font-bold cursor-not-allowed">
              Not available yet
            </div>
          </div>
        </div>

        <div className="max-w-[600px] mx-auto bg-bg2 border border-border rounded-2xl p-8 text-center">
          <h2 className="text-base font-bold mb-2">Why we&apos;re not charging yet</h2>
          <p className="text-[13px] text-teal-dim leading-relaxed">
            We&apos;d rather build the Pro tier around what real users
            actually ask for than guess and gate features nobody wants. If
            you want to be notified when Pro launches, install the free
            extension first — we&apos;ll let everyone know inside the popup
            when it&apos;s ready.
          </p>
        </div>
      </div>
    </section>
  );
}
