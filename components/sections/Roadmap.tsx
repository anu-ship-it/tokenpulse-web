const phases = [
  {
    ver: "Live now",
    live: true,
    title: "Chrome Extension",
    items: [
      { label: "Claude · ChatGPT · Gemini · DeepSeek", done: true },
      { label: "Live in-page token bar", done: true },
      { label: "Claude rate limits + countdowns", done: true },
      { label: "Cost tracking", done: true },
      { label: "Smart notifications", done: true },
      { label: "Daily usage history", done: true },
    ],
  },
  {
    ver: "Pro v1",
    live: false,
    title: "Cross-device sync + history",
    items: [
      { label: "Sync across Chrome, Edge, Brave, Arc", done: false },
      { label: "90-day history with graphs", done: false },
      { label: "Rate limit predictions", done: false },
      { label: "Weekly email reports", done: false },
      { label: "Export CSV / JSON / PDF", done: false },
      { label: "Firefox extension", done: false },
    ],
  },
  {
    ver: "Pro v2",
    live: false,
    title: "VSCode + AI timeline",
    items: [
      { label: "VSCode extension", done: false },
      { label: "AI usage timeline across all tools", done: false },
      { label: "Grok, Perplexity, Cursor, Mistral", done: false },
      { label: "OpenRouter + Azure API monitoring", done: false },
      { label: "Mobile push notifications", done: false },
    ],
  },
  {
    ver: "Team",
    live: false,
    title: "Shared dashboards",
    items: [
      { label: "Team dashboard", done: false },
      { label: "Budget controls", done: false },
      { label: "Slack / Discord webhooks", done: false },
      { label: "Usage by member", done: false },
      { label: "Admin controls + SSO", done: false },
    ],
  },
];

export default function Roadmap() {
  return (
    <section
      className="relative z-10 py-24 border-t border-white/5"
      id="roadmap"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-4">
          Roadmap
        </div>
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] mb-4">
          Where TokenPulse
          <br />
          <em className="not-italic text-[#00E5A0]">is going.</em>
        </h2>
        <p className="text-[15px] text-[#72728A] leading-relaxed max-w-[480px] mb-14">
          The Chrome extension is live. Everything else ships with Pro. Here&apos;s
          the exact sequence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {phases.map((phase) => (
            <div
              key={phase.ver}
              className="bg-[#0E0E11] border border-white/8 rounded-2xl p-6"
            >
              <span
                className={`font-mono text-[10px] font-semibold inline-block px-2 py-0.5 rounded border mb-3 ${
                  phase.live
                    ? "text-[#00E5A0] bg-[rgba(0,229,160,0.08)] border-[rgba(0,229,160,0.18)]"
                    : "text-[#6C5FFF] bg-[rgba(108,95,255,0.10)] border-[rgba(108,95,255,0.22)]"
                }`}
              >
                {phase.ver}
              </span>
              <h3 className="text-[13px] font-bold text-[#EDEEF2] tracking-tight mb-4">
                {phase.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {phase.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-2 text-[12px]"
                  >
                    <span
                      className={`flex-shrink-0 mt-[4px] w-1.5 h-1.5 rounded-${item.done ? "full" : "sm"} ${
                        item.done
                          ? "bg-[#00E5A0]"
                          : phase.live
                            ? "bg-[#32324A]"
                            : "bg-[#6C5FFF]"
                      }`}
                    />
                    <span
                      className={
                        item.done ? "text-[#72728A]" : "text-[#32324A]"
                      }
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
