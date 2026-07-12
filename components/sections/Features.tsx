const features = [
  {
    icon: "📊",
    title: "Live token bar — in the page",
    body: "A slim bar above the input box shows your context window filling up in real time. You never have to open the popup to know where you stand.",
    tag: "All 4 platforms",
    tagVariant: "live",
  },
  {
    icon: "⚡",
    title: "Real rate limit data",
    body: "Pulls your actual 5-hour session and 7-day weekly limits from Claude's internal API. Not an estimate — the exact number Claude uses to cut you off.",
    tag: "Claude only",
    tagVariant: "acc",
  },
  {
    icon: "⏱",
    title: "Reset countdowns",
    body: "Exact time until your Claude session or weekly limit resets. Plan your heavy sessions around the reset, not around getting cut off.",
    tag: "Claude only",
    tagVariant: "acc",
  },
  {
    icon: "🔔",
    title: "Smart notifications",
    body: "Alerts at 75%, 90%, and 100%. Threshold-based — fires once per crossing, resets when usage drops. No notification spam.",
    tag: "All 4 platforms",
    tagVariant: "live",
  },
  {
    icon: "💰",
    title: "Cost tracking",
    body: "Estimated spend for this conversation, today, and this week. Model-aware pricing. Know where your AI budget goes before your credit card does.",
    tag: "All 4 platforms",
    tagVariant: "live",
  },
  {
    icon: "🔒",
    title: "Zero data leaves your device",
    body: "No account, no tracking, no analytics server. All data stored locally. Uses your existing browser session — the same cookie the AI already has.",
    tag: "All 4 platforms",
    tagVariant: "live",
  },
];

const tagStyles: Record<string, string> = {
  live: "text-[#00E5A0] bg-[rgba(0,229,160,0.08)] border-[rgba(0,229,160,0.18)]",
  acc: "text-[#6C5FFF] bg-[rgba(108,95,255,0.10)] border-[rgba(108,95,255,0.22)]",
};

export default function Features() {
  return (
    <section
      className="relative z-10 py-24 border-t border-white/5 bg-[#0E0E11]"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-4">
          Features — live today
        </div>
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] mb-4">
          Everything a developer needs
          <br />
          to <em className="not-italic text-[#00E5A0]">stop flying blind.</em>
        </h2>
        <p className="text-[15px] text-[#72728A] leading-relaxed max-w-[480px] mb-14">
          Every feature listed here works today, in the free Chrome extension.
          No waitlist, no account.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#080809] p-7 hover:bg-[#0E0E11] transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-[rgba(108,95,255,0.10)] border border-[rgba(108,95,255,0.22)] flex items-center justify-center text-[15px] mb-4">
                {f.icon}
              </div>
              <h3 className="text-[15px] font-bold text-[#EDEEF2] tracking-tight mb-2">
                {f.title}
              </h3>
              <p className="text-[13px] text-[#72728A] leading-relaxed mb-4">
                {f.body}
              </p>
              <span
                className={`font-mono text-[10px] font-semibold inline-block px-2 py-0.5 rounded border ${tagStyles[f.tagVariant]}`}
              >
                {f.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
