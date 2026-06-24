type Entry = {
  version: string;
  date: string;
  tag: "added" | "fixed" | "changed";
  items: string[];
};

const entries: Entry[] = [
  {
    version: "2.1.0",
    date: "June 2026",
    tag: "added",
    items: [
      "Cost estimator — see estimated dollar cost per conversation, today, and this week",
      "Model detection for accurate cost and limit calculation (Sonnet, Opus, Haiku, GPT-4o, o1, o3)",
    ],
  },
  {
    version: "2.0.3",
    date: "June 2026",
    tag: "fixed",
    items: [
      "Fixed Tips and Settings panel navigation — buttons now work correctly when switching between views",
      "Fixed Refresh tips button not responding",
    ],
  },
  {
    version: "2.0.2",
    date: "June 2026",
    tag: "fixed",
    items: [
      "Fixed welcome page Get Started button not closing the tab on install",
      "Added uninstall feedback page — captures why users leave so we can improve",
    ],
  },
  {
    version: "2.0.1",
    date: "June 2026",
    tag: "fixed",
    items: ["Corrected author attribution on welcome page"],
  },
  {
    version: "2.0.0",
    date: "June 2026",
    tag: "added",
    items: [
      "TokenPulse rebrand — dual-ring icon, dark theme with teal accent",
      "Real Claude API rate limits — 5-hour session and 7-day weekly with reset countdowns",
      "Auto-saving daily usage history — records silently with no setup needed",
      "Smart threshold notifications at 50%, 75%, 90%, 100%",
      "Settings moved inside popup — no separate browser tabs",
      "Token saving tips panel with copy-to-clipboard prompts",
    ],
  },
  {
    version: "1.0.0",
    date: "May 2026",
    tag: "added",
    items: [
      "Initial release — live token bar for Claude and ChatGPT",
      "Context window tracking with visual progress bar",
      "Basic notification support",
    ],
  },
];

const tagStyles: Record<Entry["tag"], string> = {
  added: "bg-teal/10 text-teal border-teal/20",
  fixed: "bg-amber-400/10 text-amber-400 border-amber-400/20",
  changed: "bg-teal-light/10 text-teal-light border-teal-light/20",
};

const tagLabels: Record<Entry["tag"], string> = {
  added: "Added",
  fixed: "Fixed",
  changed: "Changed",
};

export default function ChangelogPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="max-w-[760px] mx-auto">
        <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-3">
          Changelog
        </div>
        <h1 className="text-[32px] md:text-[44px] font-extrabold leading-tight tracking-tight mb-4">
          What&apos;s <span className="text-teal">shipped.</span>
        </h1>
        <p className="text-[15px] text-[#8aa8ac] leading-relaxed mb-16">
          Every update in order. Most fixes go from report to live update within
          a day.
        </p>

        <div className="flex flex-col gap-12">
          {entries.map((entry) => (
            <div
              key={entry.version}
              className="relative pl-8 border-l-2 border-border"
            >
              <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-teal shadow-[0_0_12px_rgba(6,182,212,0.5)]" />

              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-lg font-bold text-teal-light">
                  v{entry.version}
                </span>
                <span className="text-sm text-text-muted">{entry.date}</span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md border ${tagStyles[entry.tag]}`}
                >
                  {tagLabels[entry.tag]}
                </span>
              </div>

              <div className="bg-bg2 border border-border rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                {entry.items.map((item, i) => (
                  <div
                    key={item}
                    className={`flex gap-3 px-5 py-3.5 text-[13px] text-[#8aa8ac] leading-relaxed ${
                      i > 0 ? "border-t border-border2" : ""
                    }`}
                  >
                    <span className="text-teal flex-shrink-0 mt-0.5">·</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
