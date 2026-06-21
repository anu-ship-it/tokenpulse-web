type Entry = {
  version: string;
  date: string;
  tag: "added" | "fixed" | "changed";
  items: string[];
};

const entries: Entry[][] = [
  [
    {
      version: "2.1.0",
      date: "June 2026",
      tag: "added",
      items: [
        "Cost estimator — see estimated dollar cost per conversation, day, and week",
        "Model detection for accurate cost and limit calculation",
      ],
    },
  ],
  [
    {
      version: "2.0.3",
      date: "June 2026",
      tag: "fixed",
      items: [
        "Fixed Tips and Settings panel navigation — buttons now work correctly when switching between views",
        "Fixed 'Refresh tips' button not responding",
      ],
    },
  ],
  [
    {
      version: "2.0.2",
      date: "June 2026",
      tag: "fixed",
      items: [
        "Fixed welcome page 'Get Started' button not closing the tab on install",
        "Added uninstall feedback page",
      ],
    },
  ],
  [
    {
      version: "2.0.1",
      date: "June 2026",
      tag: "fixed",
      items: ["Corrected attribution on welcome page"],
    },
  ],
  [
    {
      version: "2.0.0",
      date: "June 2026",
      tag: "added",
      items: [
        "TokenPulse rebrand — dual-ring icon, dark theme with teal accent",
        "Real Claude API rate limits — 5-hour session and 7-day weekly with reset countdowns",
        "Auto-saving daily usage history — records silently with no setup",
        "Smart threshold notifications at 50%, 75%, 90%, 100%",
        "Settings moved inside popup — no separate tabs",
        "Token saving tips panel for Claude and ChatGPT",
      ],
    },
  ],
  [
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
  ],
];

const tagStyles: Record<Entry["tag"], string> = {
  added: "bg-teal/10 text-teal border-teal/20",
  fixed: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  changed: "bg-teal-light/10 text-teal-light border-teal-light/20",
};

export default function ChangelogPage() {
  return (
    <section className="px-6 md:px-10 pt-32 pb-24">
      <div className="max-w-[760px] mx-auto">
        <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-3">
          Changelog
        </div>
        <h1 className="text-[32px] md:text-[44px] font-extrabold leading-tight tracking-tight mb-3">
          What&apos;s <span className="text-teal">shipped.</span>
        </h1>
        <p className="text-[15px] text-teal-dim leading-relaxed mb-14">
          Every update, in order. We ship fixes fast — most issues go from
          report to live update within a day.
        </p>

        <div className="flex flex-col gap-10">
          {entries.map((group) =>
            group.map((entry) => (
              <div key={entry.version} className="relative pl-6 border-l border-border2">
                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-teal" />
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="text-base font-bold text-teal-light">
                    v{entry.version}
                  </span>
                  <span className="text-xs text-text-muted">{entry.date}</span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded border ${tagStyles[entry.tag]}`}
                  >
                    {entry.tag}
                  </span>
                </div>
                <ul className="flex flex-col gap-2">
                  {entry.items.map((item) => (
                    <li
                      key={item}
                      className="text-[13px] text-[#4a9ba5] leading-relaxed flex gap-2"
                    >
                      <span className="text-teal-dim flex-shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
