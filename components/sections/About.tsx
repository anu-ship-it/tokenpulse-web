export default function About() {
  return (
    <section className="relative z-10 py-24 border-t border-white/5" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-14">
          About
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — story */}
          <div>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] mb-6">
              Built by developers,
              <br />
              <em className="not-italic text-[#00E5A0]">for developers.</em>
            </h2>
            <div className="space-y-4 text-[15px] text-[#72728A] leading-[1.85]">
              <p>
                TokenPulse started from a real problem:{" "}
                <strong className="text-[#EDEEF2] font-semibold">
                  getting cut off mid-coding session with no warning.
                </strong>{" "}
                Two hours of debugging context, gone. No indicator, no
                countdown, no way to know it was coming.
              </p>
              <p>
                We built the tracker we wished existed — one that reads real
                rate limit data directly from Claude's API, works across every
                AI tool without requiring a single API key, and stays completely
                out of the way until you need it.
              </p>
              <p>
                TokenPulse is the first product from{" "}
                <strong className="text-[#EDEEF2] font-semibold">Alpha</strong>,
                an independent product studio. Pro is in development. The
                roadmap goes much further than a Chrome extension.
              </p>
            </div>
          </div>

          {/* Right — team + stats */}
          <div className="flex flex-col gap-4">
            {/* Team card */}
            <div className="bg-[#0E0E11] border border-white/8 rounded-2xl p-6">
              <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#32324A] mb-5">
                Team
              </div>
              <div className="flex flex-col gap-4">
                {[
                  {
                    initials: "AK",
                    name: "Anoop Kumar",
                    role: "Product & Engineering",
                  },
                  {
                    initials: "MR",
                    name: "Mansi Rathore",
                    role: "Design & Product",
                  },
                ].map((person) => (
                  <div key={person.name} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(108,95,255,0.12)] border border-[rgba(108,95,255,0.22)] flex items-center justify-center font-mono text-[11px] font-bold text-[#6C5FFF] flex-shrink-0">
                      {person.initials}
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-[#EDEEF2] leading-none mb-1">
                        {person.name}
                      </div>
                      <div className="font-mono text-[10px] text-[#32324A]">
                        {person.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "4", label: "AI platforms supported" },
                { value: "Free", label: "forever base plan" },
                { value: "30s", label: "to install and run" },
                { value: "0", label: "API keys required" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0E0E11] border border-white/8 rounded-xl p-5"
                >
                  <div className="text-[28px] font-black text-[#EDEEF2] tracking-[-0.04em] leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] text-[#32324A] leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Open source callout */}
            <div className="bg-[rgba(108,95,255,0.06)] border border-[rgba(108,95,255,0.18)] rounded-xl p-5 flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-[rgba(108,95,255,0.12)] border border-[rgba(108,95,255,0.22)] flex items-center justify-center flex-shrink-0 text-[14px]">
                ⚡
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[#EDEEF2] mb-0.5">
                  Open source Chrome extension
                </div>
                <a
                  href="https://github.com/anu-ship-it/TokenPulse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-[#6C5FFF] hover:text-[#9B8FFF] transition-colors"
                >
                  github.com/anu-ship-it/TokenPulse →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
