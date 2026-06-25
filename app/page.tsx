import Link from "next/link";

const STORE_URL =
  "https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-28">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-teal/[0.07] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-[1100px] mx-auto w-full grid md:grid-cols-2 gap-16 items-center px-6 md:px-10">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-teal uppercase bg-teal/[0.1] border border-teal/25 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              No waitlist · Free now
            </div>

            <h1 className="text-[36px] md:text-[54px] font-extrabold leading-[1.08] tracking-tight mb-6">
              Never get cut off
              <br />
              <span className="text-teal">mid-conversation</span>
              <br />
              again.
            </h1>

            <p className="text-[17px] text-[#8aa8ac] leading-relaxed mb-10 max-w-[440px]">
              TokenPulse tracks your{" "}
              <strong className="text-teal-light font-semibold">
                context window
              </strong>{" "}
              and{" "}
              <strong className="text-teal-light font-semibold">
                rate limits
              </strong>{" "}
              in real time — directly inside Claude and ChatGPT. Live bar, smart
              alerts, daily history.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 w-fit px-8 py-4 rounded-xl bg-teal text-bg text-sm font-bold hover:opacity-90 active:scale-[0.97] transition-all shadow-[0_8px_24px_rgba(6,182,212,0.25)]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M12 16l-4-4h3V4h2v8h3l-4 4z" />
                  <path d="M20 18H4" strokeLinecap="round" />
                </svg>
                Add to Chrome — it&apos;s free
              </a>
              <span className="text-[11px] text-text-muted flex items-center gap-1.5">
                <span className="text-teal/40">✓</span> No account needed. Works
                immediately. No waitlist.
              </span>
            </div>
          </div>

          {/* Right column — Popup mockup */}
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute inset-[-60px] bg-teal/[0.1] rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 w-[290px] bg-bg2 border border-border rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_0_1px_rgba(6,182,212,0.08)]">
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-border2 bg-bg3/50">
                <div className="flex items-center gap-2">
                  <div className="w-[24px] h-[24px] rounded-md bg-bg border border-border flex items-center justify-center text-teal text-[10px] font-bold">
                    T
                  </div>
                  <span className="text-xs font-bold text-teal-light">
                    TokenPulse
                  </span>
                </div>
                <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-teal/[0.15] text-teal">
                  Claude
                </span>
              </div>

              <div className="px-4 py-4 border-b border-border2">
                <div className="text-[9px] font-bold tracking-widest text-[#3a3a3a] uppercase mb-3">
                  Context Window
                </div>
                <div className="text-[30px] font-extrabold text-teal tracking-tight leading-none">
                  ~41k
                </div>
                <div className="text-[11px] text-[#5fa8b0] mt-1.5 mb-3">
                  ~159k remaining · 20% used
                </div>
                <div className="w-full h-[4px] bg-bg3 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal rounded-full"
                    style={{ width: "20%" }}
                  />
                </div>
              </div>

              <div className="px-4 py-4 border-b border-border2 space-y-3">
                <div className="text-[9px] font-bold tracking-widest text-[#3a3a3a] uppercase mb-1">
                  Rate Limits
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[12px] font-semibold text-[#7fb8bf]">
                      5-Hour Session
                    </div>
                    <div className="text-[10px] text-[#3a3a3a]">
                      Resets in 3h 14m
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[14px] font-extrabold text-amber-400">
                      79%
                    </div>
                    <div className="w-[64px] h-[3px] bg-bg3 rounded-full overflow-hidden mt-1.5">
                      <div
                        className="h-full bg-amber-400 rounded-full"
                        style={{ width: "79%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[12px] font-semibold text-[#7fb8bf]">
                      7-Day Weekly
                    </div>
                    <div className="text-[10px] text-[#3a3a3a]">
                      Resets in 63h 54m
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[14px] font-extrabold text-teal">
                      26%
                    </div>
                    <div className="w-[64px] h-[3px] bg-bg3 rounded-full overflow-hidden mt-1.5">
                      <div
                        className="h-full bg-teal rounded-full"
                        style={{ width: "26%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-3 bg-bg3/30">
                <span className="text-[9px] text-text-muted">
                  chars ÷ 4 · ±8%
                </span>
                <span className="text-[10px] font-bold px-3 py-1.5 rounded-md bg-teal/[0.1] text-teal border border-teal/25">
                  + New chat
                </span>
              </div>
            </div>

            {/* Bar mockup */}
            <div className="hidden md:flex absolute -bottom-7 -left-6 w-64 items-center gap-2.5 bg-bg2 border border-border rounded-xl px-3 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
              <span className="text-[9px] font-bold tracking-widest text-[#3a3a3a]">
                TOKENS
              </span>
              <div className="flex-1 h-[4px] bg-bg3 rounded-full overflow-hidden">
                <div className="h-full w-[17%] bg-teal rounded-full" />
              </div>
              <span className="text-[11px] font-semibold text-teal whitespace-nowrap">
                199.3k left
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platforms ──────────────────────────── */}
      <div className="flex justify-center px-6 pb-24">
        <div className="flex items-center gap-3 flex-wrap justify-center max-w-[600px]">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg2 border border-border text-sm font-semibold text-teal shadow-sm">
            <span className="w-[7px] h-[7px] rounded-full bg-teal shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
            Works on Claude
          </div>
          <span className="text-xs text-text-muted">+</span>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg2 border border-border text-sm font-semibold text-teal shadow-sm">
            <span className="w-[7px] h-[7px] rounded-full bg-teal shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
            Works on ChatGPT
          </div>
          <span className="text-xs text-text-muted">·</span>
          <span className="text-xs text-text-muted">Gemini on the roadmap</span>
        </div>
      </div>

      {/* ── Features ───────────────────────────── */}
      <section id="features" className="border-t border-border2 py-24">
        <div className="max-w-[1100px] mx-auto w-full px-6 md:px-10">
          <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-3">
            Features
          </div>
          <h2 className="text-[28px] md:text-[42px] font-extrabold leading-tight tracking-tight mb-4">
            Everything you need to
            <br />
            <span className="text-teal">stay ahead of the limit.</span>
          </h2>
          <p className="text-[15px] text-[#8aa8ac] max-w-[520px] leading-relaxed mb-14">
            Built for power users who write long documents, run deep research
            sessions, or just have long conversations.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: "📊",
                title: "Live Token Bar",
                desc: "A slim bar sits above the input box showing exactly how much context window you have left — updates with every message.",
                tag: "Claude + ChatGPT",
              },
              {
                icon: "⚡",
                title: "Real Rate Limit Data",
                desc: "Pulls your actual 5-hour session and 7-day weekly usage directly from Claude's API. Exact percentages, exact reset countdowns.",
                tag: "Claude only",
              },
              {
                icon: "💰",
                title: "Cost Estimator",
                desc: "See the estimated dollar cost of every conversation, today, and this week — based on real model pricing.",
                tag: "Claude + ChatGPT",
              },
              {
                icon: "🔔",
                title: "Smart Notifications",
                desc: "Get alerted at 75%, 90%, and 100% — before the wall hits. Threshold-based, not timer-based. Zero noise.",
                tag: "Claude + ChatGPT",
              },
              {
                icon: "📅",
                title: "Daily Usage History",
                desc: "Automatically records your peak token usage per day. No setup — it just works silently in the background.",
                tag: "Claude + ChatGPT",
              },
              {
                icon: "🔒",
                title: "100% Private",
                desc: "All data stays on your device. No accounts, no tracking, no analytics. Claude data uses your existing session only.",
                tag: "Claude + ChatGPT",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-bg2 border border-border rounded-2xl p-7 hover:border-teal/40 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-teal/[0.1] border border-teal/20 flex items-center justify-center text-xl mb-4">
                  {f.icon}
                </div>
                <div className="text-[15px] font-bold mb-2">{f.title}</div>
                <div className="text-[13px] text-[#8aa8ac] leading-relaxed mb-3">
                  {f.desc}
                </div>
                <span className="inline-block text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-md bg-teal/[0.1] text-teal border border-teal/15">
                  {f.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compare ────────────────────────────── */}
      <section
        id="compare"
        className="bg-bg2/40 border-t border-b border-border2 py-24"
      >
        <div className="max-w-[1100px] mx-auto w-full px-6 md:px-10">
          <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-3">
            Compare
          </div>
          <h2 className="text-[28px] md:text-[42px] font-extrabold leading-tight tracking-tight mb-4">
            Why TokenPulse
            <br />
            <span className="text-teal">covers more ground.</span>
          </h2>
          <p className="text-[15px] text-[#8aa8ac] max-w-[520px] leading-relaxed mb-14">
            Most token trackers only work on one platform and require a
            waitlist. TokenPulse works on both — free, today.
          </p>

          <div className="bg-bg2 border border-border rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="grid grid-cols-[2fr_1fr_1fr] bg-bg3 border-b border-border">
              <div className="px-6 py-4 text-[11px] font-bold tracking-wide text-[#8aa8ac] uppercase">
                Feature
              </div>
              <div className="px-6 py-4 text-[11px] font-bold tracking-wide text-teal uppercase text-center border-l border-border2">
                TokenPulse
              </div>
              <div className="px-6 py-4 text-[11px] font-bold tracking-wide text-text-muted uppercase text-center border-l border-border2">
                Others
              </div>
            </div>
            {[
              ["Works on Claude", true, true],
              ["Works on ChatGPT", true, false],
              ["Live in-page token bar", true, false],
              ["Real Claude rate limits (API)", true, true],
              ["Cost estimator", true, false],
              ["Daily usage history", true, false],
              ["Smart notifications", true, "roadmap"],
              ["Works on Windows / Linux", true, false],
              ["No waitlist required", true, false],
              ["Free", true, false],
            ].map(([feature, ours, theirs], i) => (
              <div
                key={feature as string}
                className={`grid grid-cols-[2fr_1fr_1fr] ${i % 2 === 1 ? "bg-bg3/30" : ""}`}
              >
                <div className="px-6 py-3.5 text-[13px] text-[#9bb5b9] border-b border-border2 flex items-center">
                  {feature as string}
                </div>
                <div className="px-6 py-3.5 border-b border-l border-border2 bg-teal/[0.05] flex items-center justify-center">
                  {ours ? (
                    <span className="text-teal text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-text-muted text-sm">—</span>
                  )}
                </div>
                <div className="px-6 py-3.5 border-b border-l border-border2 flex items-center justify-center">
                  {theirs === true ? (
                    <span className="text-teal text-lg font-bold">✓</span>
                  ) : theirs === "roadmap" ? (
                    <span className="text-text-muted text-xs">roadmap</span>
                  ) : (
                    <span className="text-text-muted text-sm">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tips Preview ───────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1100px] mx-auto w-full px-6 md:px-10">
          <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-3">
            Token Tips
          </div>
          <h2 className="text-[28px] md:text-[42px] font-extrabold leading-tight tracking-tight mb-4">
            Use less. <span className="text-teal">Get more</span>
            <br />
            from every session.
          </h2>
          <p className="text-[15px] text-[#8aa8ac] max-w-[520px] leading-relaxed mb-12">
            Practical tips to stretch your context window — same tips built
            right into the extension.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              {
                n: "01",
                t: "Start a new chat when topic changes",
                b: "Every message adds to the context. When you shift topics, start fresh.",
              },
              {
                n: "02",
                t: "Use Projects for recurring context",
                b: "Put stable instructions in a Project instead of repeating them every session.",
              },
              {
                n: "03",
                t: "Summarize before a long session",
                b: "Ask for a summary of key decisions, then start fresh with just that.",
              },
            ].map((tip) => (
              <div
                key={tip.n}
                className="bg-bg2 border border-border rounded-xl p-5 hover:border-teal/30 transition-colors"
              >
                <div className="text-[10px] font-extrabold tracking-widest text-[#3a3a3a] mb-2.5">
                  {tip.n}
                </div>
                <div className="text-[14px] font-bold text-teal-light mb-2">
                  {tip.t}
                </div>
                <div className="text-[13px] text-[#8aa8ac] leading-relaxed">
                  {tip.b}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/tips"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-light transition-colors"
          >
            See all tips for Claude & ChatGPT →
          </Link>
        </div>
      </section>

      {/* ── About ───────────────────────────────── */}
      <section className="border-t border-border2 py-24">
        <div className="max-w-[1100px] mx-auto w-full px-6 md:px-10">
          <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-3">
            About
          </div>
          <div className="bg-bg2 border border-border rounded-2xl p-10 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="w-20 h-20 rounded-full bg-bg3 border-2 border-teal/30 flex items-center justify-center text-3xl font-extrabold text-teal flex-shrink-0">
              A
            </div>
            <div>
              <div className="text-xl font-bold mb-1.5">
                Anoop Kumar &amp; Mansi Rathore
              </div>
              <div className="text-[13px] text-teal mb-3 font-medium">
                Builders · Alpha
              </div>
              <p className="text-[14px] text-[#8aa8ac] leading-relaxed max-w-[520px]">
                TokenPulse started because we kept getting cut off
                mid-conversation with no idea how close we were to the limit. We
                built the tracker we wished existed — for both Claude and
                ChatGPT, with real data, not guesses. Alpha is our independent
                product studio. TokenPulse is the first release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <div className="px-6 md:px-10 mb-24">
        <div className="relative overflow-hidden bg-gradient-to-br from-teal/[0.1] to-teal-light/[0.05] border border-teal/25 rounded-[24px] px-6 md:px-12 py-16 text-center shadow-[0_24px_60px_rgba(6,182,212,0.08)]">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal/[0.1] rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-4">
              Get started
            </div>
            <h2 className="text-[28px] md:text-[42px] font-extrabold leading-tight tracking-tight mb-4">
              Stop hitting walls.
              <br />
              <span className="text-teal">Start tracking.</span>
            </h2>
            <p className="text-[15px] text-[#8aa8ac] mb-8">
              Free. No account. No waitlist. Works in 30 seconds.
            </p>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-teal text-bg text-sm font-bold hover:opacity-90 transition-opacity shadow-[0_8px_24px_rgba(6,182,212,0.25)]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M12 16l-4-4h3V4h2v8h3l-4 4z" />
                <path d="M20 18H4" strokeLinecap="round" />
              </svg>
              Add to Chrome — it&apos;s free
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
