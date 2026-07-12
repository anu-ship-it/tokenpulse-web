const platforms = [
  {
    name: "Claude",
    features: [
      { label: "Live token bar", live: true },
      { label: "Context window %", live: true },
      { label: "5-hr + 7-day limits", live: true },
      { label: "Reset countdowns", live: true },
      { label: "Smart notifications", live: true },
      { label: "Cost tracking", live: true },
      { label: "Daily history", live: true },
    ],
    fill: 100,
    note: null,
  },
  {
    name: "ChatGPT",
    features: [
      { label: "Live token bar", live: true },
      { label: "Context window %", live: true },
      { label: "Rate limits", live: false },
      { label: "Reset countdowns", live: false },
      { label: "Smart notifications", live: true },
      { label: "Cost tracking", live: true },
      { label: "Daily history", live: true },
    ],
    fill: 72,
    note: null,
  },
  {
    name: "Gemini",
    features: [
      { label: "Live token bar", live: true },
      { label: "Context window %", live: true },
      { label: "Rate limits", live: false },
      { label: "Reset countdowns", live: false },
      { label: "Smart notifications", live: true },
      { label: "Cost tracking", live: true },
      { label: "Daily history", live: true },
    ],
    fill: 72,
    note: null,
  },
  {
    name: "DeepSeek",
    features: [
      { label: "Live token bar", live: true },
      { label: "Context window %", live: true },
      { label: "Rate limits", live: false },
      { label: "Reset countdowns", live: false },
      { label: "Smart notifications", live: true },
      { label: "Cost tracking", live: true },
      { label: "Daily history", live: true },
    ],
    fill: 72,
    note: "+ Grok, Perplexity, Cursor coming with Pro",
  },
];

export default function Platforms() {
  return (
    <section
      className="relative z-10 py-24 border-t border-white/5"
      id="platforms"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-4">
          Platform support
        </div>
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] mb-4">
          Four platforms today.
          <br />
          <em className="not-italic text-[#00E5A0]">More on the way.</em>
        </h2>
        <p className="text-[15px] text-[#72728A] leading-relaxed max-w-[480px] mb-14">
          Claude gets the deepest integration because it exposes rate limit
          data. Every other platform gets the full baseline.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="bg-[#0E0E11] border border-white/8 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#00E5A0] shadow-[0_0_5px_rgba(0,229,160,0.4)]" />
                <span className="text-[14px] font-bold text-[#EDEEF2] tracking-tight">
                  {p.name}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                {p.features.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-2 text-[12px]"
                  >
                    <span
                      className={f.live ? "text-[#00E5A0]" : "text-[#32324A]"}
                    >
                      {f.live ? "✓" : "—"}
                    </span>
                    <span
                      className={f.live ? "text-[#72728A]" : "text-[#32324A]"}
                    >
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <div className="h-0.5 bg-[#1C1C22] rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-gradient-to-r from-[#00b87a] to-[#00E5A0] rounded-full"
                    style={{ width: `${p.fill}%` }}
                  />
                </div>
                {p.note && (
                  <p className="font-mono text-[10px] text-[#6C5FFF] mt-2">
                    {p.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
