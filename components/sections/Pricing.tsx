"use client";
import Button from "@/components/ui/Button";

const STORE_URL =
  "https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    hook: "Everything you need today.",
    desc: "Live tracking across all 4 platforms. No account, no API key. Installs in 30 seconds.",
    features: [
      { text: "Live token bar on Claude, ChatGPT, Gemini, DeepSeek", limit: false, bold: false },
      { text: "Claude rate limits + exact reset countdowns", limit: false, bold: false },
      { text: "Cost tracking — this conversation + today", limit: false, bold: false },
      { text: "Smart notifications at 75%, 90%, 100%", limit: false, bold: false },
      { text: "Today's usage only", limit: true, bold: false },
      { text: "1 device", limit: true, bold: false },
      { text: "4 platforms", limit: true, bold: false },
    ],
    cta: "Install Free",
    ctaHref: STORE_URL,
    ctaExternal: true,
    featured: false,
    badge: "",
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "per month · early access pricing",
    hook: "Never lose your usage history again.",
    desc: "The moment you want to look back further than today, this is the upgrade that pays for itself.",
    features: [
      { text: "Everything in Free", limit: false, bold: false },
      { text: "90-day usage history with graphs", limit: false, bold: true },
      { text: "Rate limit predictions — \"~45 min left at this pace\"", limit: false, bold: true },
      { text: "Sync across Chrome, Edge, Brave, Arc, VSCode", limit: false, bold: true },
      { text: "Unlimited platforms — Grok, Perplexity, Cursor, Mistral + more", limit: false, bold: true },
      { text: "Weekly AI usage email report", limit: false, bold: false },
      { text: "Export history as CSV / JSON / PDF", limit: false, bold: false },
      { text: "AI usage timeline across all tools", limit: false, bold: false },
    ],
    cta: "Join Waitlist → Lock $4.99",
    ctaHref: "#waitlist",
    ctaExternal: false,
    featured: true,
    badge: "⭐ Most Popular — Waitlist Open",
  },
  {
    name: "Team",
    price: "$29",
    period: "per month · 5 seats · +$6/user",
    hook: "When AI is a team cost, not a personal one.",
    desc: "Shared visibility into how your team uses AI. Budget controls before the bill arrives.",
    features: [
      { text: "Everything in Pro — for every seat", limit: false, bold: false },
      { text: "Shared team dashboard", limit: false, bold: false },
      { text: "Usage by member — see who burns the most", limit: false, bold: false },
      { text: "Budget controls + alerts before overage", limit: false, bold: true },
      { text: "Slack / Discord / webhook alerts", limit: false, bold: false },
      { text: "Admin dashboard + member management", limit: false, bold: false },
      { text: "Priority support", limit: false, bold: false },
    ],
    cta: "Join Team Waitlist",
    ctaHref: "#waitlist",
    ctaExternal: false,
    featured: false,
    badge: "",
  },
];

const comparison = [
  { tier: "Free", color: "#72728A", value: "Today only", sub: "Resets every day", bg: "bg-[#0E0E11] border-white/5" },
  { tier: "Pro", color: "#6C5FFF", value: "90 days", sub: "With graphs + trends", bg: "bg-[rgba(108,95,255,0.06)] border-[rgba(108,95,255,0.2)]" },
  { tier: "Team", color: "#72728A", value: "90 days", sub: "Per member + org view", bg: "bg-[#0E0E11] border-white/5" },
];

export default function Pricing() {
  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(
      () => (document.getElementById("waitlist-email") as HTMLInputElement)?.focus(),
      600,
    );
  };

  return (
    <section className="relative z-10 py-24 border-t border-white/5 bg-[#0E0E11]" id="pricing">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-4">
          Pricing
        </div>
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] mb-4">
          Free until you want<br/>
          <em className="not-italic text-[#00E5A0]">to look back.</em>
        </h2>
        <p className="text-[15px] text-[#72728A] leading-relaxed max-w-[500px] mb-14">
          The free tier tracks everything happening right now. The moment you want
          history, graphs, or predictions — that is what Pro is for.
        </p>

        {/* Plan grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 items-start mb-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.featured
                  ? "bg-[#080809] border border-[#6C5FFF] shadow-[0_0_0_1px_#6C5FFF,0_0_40px_rgba(108,95,255,0.12)]"
                  : "bg-[#080809] border border-white/8"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] font-semibold text-white bg-[#6C5FFF] px-3 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#72728A] mb-3">
                {plan.name}
              </div>
              <div className="text-[40px] font-black text-[#EDEEF2] tracking-[-0.06em] leading-none mb-1">
                {plan.price}
              </div>
              <div className="font-mono text-[10px] text-[#32324A] mb-5">{plan.period}</div>

              {/* Hook line — new */}
              <div className="text-[14px] font-bold text-[#EDEEF2] mb-2 tracking-tight">
                {plan.hook}
              </div>
              <p className="text-[13px] text-[#72728A] leading-relaxed mb-6 pb-6 border-b border-white/5">
                {plan.desc}
              </p>

              <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px]">
                    <span className={`flex-shrink-0 mt-0.5 ${f.limit ? "text-[#72728A]" : "text-[#00E5A0]"}`}>
                      {f.limit ? "○" : "✓"}
                    </span>
                    <span className={
                      f.limit ? "text-[#32324A]"
                      : f.bold ? "text-[#EDEEF2] font-semibold"
                      : "text-[#72728A]"
                    }>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.ctaExternal ? (
                <Button
                  href={plan.ctaHref}
                  external
                  variant={plan.featured ? "primary" : "secondary"}
                  size="lg"
                  className="w-full justify-center"
                >
                  {plan.cta}
                </Button>
              ) : (
                <button
                  onClick={scrollToWaitlist}
                  className={`w-full py-3.5 rounded-xl text-[15px] font-bold transition-all ${
                    plan.featured
                      ? "bg-[#6C5FFF] text-white hover:bg-[#7D71FF] hover:-translate-y-0.5"
                      : "bg-[#141418] text-[#EDEEF2] border border-white/8 hover:border-[rgba(108,95,255,0.22)]"
                  }`}
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* History wall — visual comparison */}
        <div className="bg-[#080809] border border-white/8 rounded-2xl p-7 mb-5">
          <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#32324A] mb-5">
            The key difference
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparison.map((item) => (
              <div key={item.tier} className="flex flex-col gap-3">
                <div
                  className="font-mono text-[11px] font-semibold uppercase tracking-wide"
                  style={{ color: item.color }}
                >
                  {item.tier}
                </div>
                <div className={`border rounded-xl p-4 ${item.bg}`}>
                  <div className="text-[13px] text-[#72728A] mb-1">Usage history</div>
                  <div className="text-[22px] font-black text-[#EDEEF2] tracking-tight">{item.value}</div>
                  <div className="font-mono text-[10px] mt-1" style={{ color: item.color }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lifetime card */}
        <div className="bg-[#080809] border border-[rgba(245,158,11,0.3)] rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_0_40px_rgba(245,158,11,0.05)]">
          <div className="flex-1">
            <span className="font-mono text-[10px] font-semibold text-[#F59E0B] bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.2)] px-2 py-0.5 rounded inline-block mb-3">
              ⚡ Early Adopter — Limited to 100 users
            </span>
            <h3 className="text-[18px] font-bold text-[#EDEEF2] tracking-tight mb-2">
              Lifetime Pro. Pay once, own it forever.
            </h3>
            <p className="text-[13px] text-[#72728A] leading-relaxed max-w-[500px]">
              First 100 users only. Includes 90-day history, predictions, sync, all future Pro features.
              After 100 spots this offer is gone permanently.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
            <div className="text-[36px] font-black text-[#F59E0B] tracking-[-0.05em] leading-none">$69</div>
            <div className="font-mono text-[10px] text-[#32324A]">one-time · 100 spots total</div>
            <button
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[13px] font-bold text-[#F59E0B] bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.3)] px-5 py-2.5 rounded-lg hover:bg-[rgba(245,158,11,0.2)] transition-all"
            >
              Claim Lifetime Access
            </button>
          </div>
        </div>

        <p className="text-center font-mono text-[11px] text-[#32324A] mt-6 leading-loose">
          Pro and Team are in development. Joining the waitlist locks your early pricing.{" "}
          <a href="mailto:tokenpulse10@gmail.comulse.in" className="text-[#6C5FFF] hover:underline">
            Questions?
          </a>
        </p>
      </div>
    </section>
  );
}
