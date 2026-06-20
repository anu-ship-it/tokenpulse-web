import Link from "next/link";

const STORE_URL =
  "https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 md:px-10 pt-32 pb-20 min-h-screen flex items-center">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-teal/[0.06] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-[1100px] mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-teal uppercase bg-teal/[0.08] border border-teal/20 px-3 py-1 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              No waitlist · Free now
            </div>

            <h1 className="text-[36px] md:text-[52px] font-extrabold leading-[1.1] tracking-tight mb-5">
              Never get cut off
              <br />
              <span className="text-teal">mid-conversation</span>
              <br />
              again.
            </h1>

            <p className="text-[17px] text-teal-dim leading-relaxed mb-9 max-w-[440px]">
              TokenPulse tracks your <strong className="text-teal-light font-semibold">context window</strong> and{" "}
              <strong className="text-teal-light font-semibold">rate limits</strong> in real time —
              directly inside Claude and ChatGPT. Live bar, smart alerts, daily history.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 w-fit px-7 py-3.5 rounded-xl bg-teal text-bg text-sm font-bold hover:opacity-90 active:scale-[0.97] transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 16l-4-4h3V4h2v8h3l-4 4z" />
                  <path d="M20 18H4" strokeLinecap="round" />
                </svg>
                Add to Chrome — it&apos;s free
              </a>
              <span className="text-[11px] text-text-muted flex items-center gap-1.5">
                <span className="text-[#1e1e1e]">✓</span> No account needed. Works immediately. No waitlist.
              </span>
            </div>
          </div>

          {/* Popup mockup */}
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute inset-[-40px] bg-teal/[0.08] rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 w-[280px] bg-bg2 border border-border rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between px-3.5 py-3 border-b border-border2">
                <div className="flex items-center gap-2">
                  <div className="w-[22px] h-[22px] rounded-md bg-bg border border-border flex items-center justify-center text-teal text-[10px] font-bold">
                    T
                  </div>
                  <span className="text-xs font-bold text-teal-light">TokenPulse</span>
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-teal/[0.12] text-teal">
                  Claude
                </span>
              </div>

              <div className="px-3.5 py-3 border-b border-border2">
                <div className="text-[8px] font-bold tracking-widest text-[#1e1e1e] uppercase mb-2.5">
                  Context Window
                </div>
                <div className="text-[28px] font-extrabold text-teal tracking-tight">~41k</div>
                <div className="text-[10px] text-teal-dim mt-0.5 mb-2">~159k remaining · 20% used</div>
                <div className="w-full h-[3px] bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-teal rounded-full" style={{ width: "20%" }} />
                </div>
              </div>

              <div className="px-3.5 py-3 border-b border-border2 space-y-2.5">
                <div className="text-[8px] font-bold tracking-widest text-[#1e1e1e] uppercase mb-1">
                  Rate Limits
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-[#4a9ba5]">5-Hour Session</div>
                    <div className="text-[9px] text-[#1e1e1e]">Resets in 3h 14m</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] font-extrabold text-yellow-500">79%</div>
                    <div className="w-[60px] h-[2px] bg-border rounded-full overflow-hidden mt-1">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: "79%" }} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-[#4a9ba5]">7-Day Weekly</div>
                    <div className="text-[9px] text-[#1e1e1e]">Resets in 63h 54m</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] font-extrabold text-teal">26%</div>
                    <div className="w-[60px] h-[2px] bg-border rounded-full overflow-hidden mt-1">
                      <div className="h-full bg-teal rounded-full" style={{ width: "26%" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-3.5 py-2.5">
                <span className="text-[9px] text-text-muted">chars ÷ 4 · ±8%</span>
                <span className="text-[9px] font-bold px-3 py-1.5 rounded-md bg-teal/[0.08] text-teal border border-teal/20">
                  + New chat
                </span>
              </div>
            </div>

            {/* Bar mockup */}
            <div className="hidden md:flex absolute -bottom-6 -left-5 w-60 items-center gap-2 bg-bg2 border border-border rounded-lg px-2.5 py-1.5 shadow-lg">
              <span className="text-[8px] font-bold tracking-widest text-[#1e1e1e]">TOKENS</span>
              <div className="flex-1 h-[3px] bg-border rounded-full overflow-hidden">
                <div className="h-full w-[17%] bg-teal rounded-full" />
              </div>
              <span className="text-[10px] font-semibold text-teal whitespace-nowrap">199.3k left</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platforms ──────────────────────────── */}
      <div className="flex justify-center px-6 pb-20">
        <div className="flex items-center gap-3 flex-wrap justify-center max-w-[600px]">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg2 border border-border text-sm font-semibold text-teal">
            <span className="w-[7px] h-[7px] rounded-full bg-teal" /> Works on Claude
          </div>
          <span className="text-xs text-text-muted">+</span>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg2 border border-border text-sm font-semibold text-teal">
            <span className="w-[7px] h-[7px] rounded-full bg-teal" /> Works on ChatGPT
          </div>
          <span className="text-xs text-text-muted">·</span>
          <span className="text-xs text-text-muted">Gemini coming soon</span>
        </div>
      </div>

      {/* ── Features ───────────────────────────── */}
      <section id="features" className="border-t border-border2 px-6 md:px-10 py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-3">
            Features
          </div>
          <h2 className="text-[28px] md:text-[40px] font-extrabold leading-tight tracking-tight mb-3">
            Everything you need to
            <br />
            <span className="text-teal">stay ahead of the limit.</span>
          </h2>
          <p className="text-[15px] text-teal-dim max-w-[520px] leading-relaxed mb-12">
            Built for power users who write long documents, run deep research
            sessions, or just have long conversations.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
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
                className="bg-bg2 border border-border rounded-2xl p-6 hover:border-teal/30 hover:-translate-y-0.5 transition-all"
              >
                <div className="w-10 h-10 rounded-[10px] bg-teal/[0.08] border border-teal/15 flex items-center justify-center text-lg mb-3.5">
                  {f.icon}
                </div>
                <div className="text-sm font-bold mb-1.5">{f.title}</div>
                <div className="text-xs text-teal-dim leading-relaxed">{f.desc}</div>
                <span className="inline-block mt-2.5 text-[10px] font-bold tracking-wide px-2 py-0.5 rounded bg-teal/[0.08] text-teal">
                  {f.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compare ────────────────────────────── */}
      <section id="compare" className="bg-bg2 border-t border-b border-border2 px-6 md:px-10 py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-3">
            Compare
          </div>
          <h2 className="text-[28px] md:text-[40px] font-extrabold leading-tight tracking-tight mb-3">
            Why TokenPulse
            <br />
            <span className="text-teal">covers more ground.</span>
          </h2>
          <p className="text-[15px] text-teal-dim max-w-[520px] leading-relaxed mb-12">
            Most token trackers only work on one platform and require a
            waitlist. TokenPulse works on both — free, today.
          </p>

          <div className="border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[2fr_1fr_1fr] bg-bg3 border-b border-border">
              <div className="px-5 py-3.5 text-[11px] font-bold tracking-wide text-teal-dim uppercase">
                Feature
              </div>
              <div className="px-5 py-3.5 text-[11px] font-bold tracking-wide text-teal-light uppercase text-center border-l border-border2">
                TokenPulse
              </div>
              <div className="px-5 py-3.5 text-[11px] font-bold tracking-wide text-teal-dim uppercase text-center border-l border-border2">
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
                className={`grid grid-cols-[2fr_1fr_1fr] ${
                  i % 2 === 0 ? "" : ""
                }`}
              >
                <div className="px-5 py-3.5 text-[13px] text-[#4a9ba5] border-b border-border2 flex items-center">
                  {feature as string}
                </div>
                <div className="px-5 py-3.5 border-b border-l border-border2 bg-teal/[0.03] flex items-center justify-center">
                  {ours ? (
                    <span className="text-teal text-base font-bold">✓</span>
                  ) : (
                    <span className="text-text-muted text-sm">—</span>
                  )}
                </div>
                <div className="px-5 py-3.5 border-b border-l border-border2 flex items-center justify-center">
                  {theirs === true ? (
                    <span className="text-teal text-base font-bold">✓</span>
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
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-3">
            Token Tips
          </div>
          <h2 className="text-[28px] md:text-[40px] font-extrabold leading-tight tracking-tight mb-3">
            Use less. <span className="text-teal">Get more</span>
            <br />
            from every session.
          </h2>
          <p className="text-[15px] text-teal-dim max-w-[520px] leading-relaxed mb-10">
            Practical tips to stretch your context window — same tips built
            right into the extension.
          </p>

          <div className="grid md:grid-cols-3 gap-3.5 mb-8">
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
                className="bg-bg2 border border-border rounded-xl p-[18px]"
              >
                <div className="text-[10px] font-extrabold tracking-widest text-[#1e1e1e] mb-2">
                  {tip.n}
                </div>
                <div className="text-[13px] font-bold text-teal-light mb-1.5">
                  {tip.t}
                </div>
                <div className="text-xs text-teal-dim leading-relaxed">
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
      <section className="border-t border-border2 px-6 md:px-10 py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-3">
            About
          </div>
          <div className="bg-bg2 border border-border rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-[72px] h-[72px] rounded-full bg-bg3 border-2 border-border flex items-center justify-center text-2xl font-extrabold text-teal flex-shrink-0">
              A
            </div>
            <div>
              <div className="text-lg font-bold mb-1">
                Anoop Kumar &amp; Mansi Rathore
              </div>
              <div className="text-xs text-teal mb-2.5">Builders · Alpha</div>
              <p className="text-[13px] text-teal-dim leading-relaxed max-w-[500px]">
                TokenPulse started because we kept getting cut off
                mid-conversation with no idea how close we were to the limit.
                We built the tracker we wished existed — for both Claude and
                ChatGPT, with real data, not guesses. Alpha is our
                independent product studio. TokenPulse is the first release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <div className="mx-6 md:mx-10 mb-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-teal/[0.08] to-teal-light/[0.04] border border-teal/20 rounded-[20px] px-6 md:px-12 py-14 text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal/[0.08] rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-4">
              Get started
            </div>
            <h2 className="text-[28px] md:text-[40px] font-extrabold leading-tight tracking-tight mb-3">
              Stop hitting walls.
              <br />
              <span className="text-teal">Start tracking.</span>
            </h2>
            <p className="text-[15px] text-teal-dim mb-7">
              Free. No account. No waitlist. Works in 30 seconds.
            </p>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-teal text-bg text-sm font-bold hover:opacity-90 transition-opacity"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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