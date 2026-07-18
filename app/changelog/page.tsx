import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Changelog — TokenPulse",
  description:
    "What is new in TokenPulse. Version history, feature releases, and upcoming changes.",
  path: "/changelog",
});

const releases = [
  {
    version: "v2.2.0",
    date: "July 2026",
    tag: "Latest",
    tagColor:
      "text-[#00E5A0] bg-[rgba(0,229,160,0.08)] border-[rgba(0,229,160,0.18)]",
    summary: "Multi-platform expansion + cost tracking",
    changes: [
      {
        type: "new",
        text: "Gemini support — live token bar on gemini.google.com",
      },
      {
        type: "new",
        text: "DeepSeek support — live token bar on chat.deepseek.com",
      },
      {
        type: "new",
        text: "Estimated cost tracking — per conversation, today, and this week",
      },
      {
        type: "new",
        text: "Model-aware pricing — Sonnet 4, Opus 4, GPT-4o, and more",
      },
      { type: "new", text: "Review and help links in popup footer" },
      {
        type: "improved",
        text: "Popup UI redesigned — cleaner section layout, better data hierarchy",
      },
      {
        type: "improved",
        text: "Token tips panel with platform-specific saving strategies",
      },
      {
        type: "improved",
        text: "Notification system rewritten — threshold-based, resets on usage drop",
      },
      {
        type: "fixed",
        text: "Rate limit data occasionally showing stale values after reset",
      },
      {
        type: "fixed",
        text: "Context window bar not updating on very fast message sequences",
      },
    ],
  },
  {
    version: "v2.0.0",
    date: "June 2026",
    tag: "Major",
    tagColor:
      "text-[#6C5FFF] bg-[rgba(108,95,255,0.10)] border-[rgba(108,95,255,0.22)]",
    summary: "ChatGPT support + complete rewrite",
    changes: [
      { type: "new", text: "ChatGPT support — live token bar on chatgpt.com" },
      {
        type: "new",
        text: "In-page token bar injected above input box on all platforms",
      },
      {
        type: "new",
        text: "Daily usage history — per platform, per day, stored locally",
      },
      {
        type: "new",
        text: "Smart notifications — configurable thresholds at 50%, 75%, 90%, 100%",
      },
      {
        type: "new",
        text: "Settings panel — notification preferences, refresh interval, display options",
      },
      {
        type: "new",
        text: "Background refresh — polls Claude usage endpoint on configurable interval",
      },
      {
        type: "improved",
        text: "Popup completely rebuilt — Space Grotesk typography, dark theme",
      },
      {
        type: "improved",
        text: "Rate limit data now pulls from Claude internal API — exact percentages",
      },
      {
        type: "improved",
        text: "Reset countdowns now show exact time remaining",
      },
    ],
  },
  {
    version: "v1.0.0",
    date: "May 2026",
    tag: "Initial",
    tagColor:
      "text-[#72728A] bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]",
    summary: "First release — Claude tracking",
    changes: [
      {
        type: "new",
        text: "Claude rate limit tracking — 5-hour session and 7-day weekly",
      },
      { type: "new", text: "Context window percentage display" },
      { type: "new", text: "Reset countdown timers" },
      { type: "new", text: "Basic popup with usage overview" },
      { type: "new", text: "Chrome extension published to Web Store" },
    ],
  },
];

const upcoming = [
  {
    version: "v2.1.0",
    items: [
      "Firefox support",
      "Response-ready notification",
      "Weekly usage summary email",
      "Usage export (CSV)",
    ],
  },
  {
    version: "Pro v1",
    items: [
      "90-day history with graphs",
      "Rate limit predictions",
      "Cross-device sync",
      "Unlimited platforms (Grok, Perplexity, Cursor, Mistral)",
    ],
  },
  {
    version: "Pro v2",
    items: [
      "VSCode extension",
      "AI usage timeline across all tools",
      "OpenRouter + Azure API monitoring",
      "Mobile push notifications",
    ],
  },
];

const typeStyles: Record<string, string> = {
  new: "text-[#00E5A0] bg-[rgba(0,229,160,0.08)] border-[rgba(0,229,160,0.15)]",
  improved:
    "text-[#6C5FFF] bg-[rgba(108,95,255,0.08)] border-[rgba(108,95,255,0.18)]",
  fixed:
    "text-[#F59E0B] bg-[rgba(245,158,11,0.08)] border-[rgba(245,158,11,0.18)]",
};

const typeLabel: Record<string, string> = {
  new: "New",
  improved: "Improved",
  fixed: "Fixed",
};

export default function ChangelogPage() {
  return (
    <>
      <Nav />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(108,95,255,0.04)_0%,transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-[760px] mx-auto px-6 pt-32 pb-24">
          {/* Header */}
          <div className="mb-14">
            <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-4">
              Changelog
            </div>
            <h1 className="text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.05em] leading-[1.07] text-[#EDEEF2] mb-4">
              What is new in TokenPulse
            </h1>
            <p className="text-[15px] text-[#72728A] leading-relaxed">
              Every release, every fix, every improvement — in order.
            </p>
          </div>

          {/* Releases */}
          <div className="flex flex-col gap-12 mb-16">
            {releases.map((release) => (
              <div
                key={release.version}
                className="relative pl-6 border-l border-white/8"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#0E0E11] border-2 border-[#6C5FFF]" />

                {/* Version header */}
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-[20px] font-black text-[#EDEEF2] tracking-tight">
                    {release.version}
                  </span>
                  <span
                    className={`font-mono text-[10px] font-semibold px-2 py-0.5 rounded border ${release.tagColor}`}
                  >
                    {release.tag}
                  </span>
                  <span className="font-mono text-[11px] text-[#32324A]">
                    {release.date}
                  </span>
                </div>

                <p className="text-[14px] font-semibold text-[#72728A] mb-5">
                  {release.summary}
                </p>

                <div className="flex flex-col gap-3">
                  {release.changes.map((change, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className={`font-mono text-[9px] font-semibold px-1.5 py-0.5 rounded border flex-shrink-0 mt-0.5 ${typeStyles[change.type]}`}
                      >
                        {typeLabel[change.type]}
                      </span>
                      <span className="text-[13.5px] text-[#72728A] leading-relaxed">
                        {change.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming */}
          <div className="border-t border-white/5 pt-12">
            <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#32324A] mb-6">
              Upcoming
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcoming.map((u) => (
                <div
                  key={u.version}
                  className="bg-[#0E0E11] border border-white/8 rounded-xl p-5"
                >
                  <div className="font-mono text-[11px] font-semibold text-[#6C5FFF] mb-4">
                    {u.version}
                  </div>
                  <ul className="flex flex-col gap-2">
                    {u.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[12px] text-[#32324A]"
                      >
                        <span className="text-[#3a3a4a] flex-shrink-0 mt-0.5">
                          ○
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="font-mono text-[11px] text-[#32324A] mt-8 text-center">
              Want to influence the roadmap?{" "}
              <a href="/contact" className="text-[#6C5FFF] hover:underline">
                Send us your feedback
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/anu-ship-it/TokenPulse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6C5FFF] hover:underline"
              >
                open an issue on GitHub
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
