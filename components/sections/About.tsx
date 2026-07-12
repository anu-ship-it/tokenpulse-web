export default function About() {
  return (
    <section className="relative z-10 py-24 border-t border-white/5" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-4">
          About
        </div>
        <div className="max-w-[600px] bg-[#0E0E11] border border-white/8 rounded-2xl p-10">
          <div className="w-11 h-11 rounded-xl bg-[rgba(108,95,255,0.10)] border border-[rgba(108,95,255,0.22)] flex items-center justify-center text-[18px] font-black text-[#6C5FFF] mb-5">
            A
          </div>
          <div className="text-[15px] font-bold text-[#EDEEF2] mb-1">
            Anoop Kumar & Mansi Rathore
          </div>
          <div className="font-mono text-[10px] text-[#32324A] mb-6">
            Builder · Alpha · Independent
          </div>
          <div className="text-[14px] text-[#72728A] leading-[1.85] space-y-4">
            <p>
              TokenPulse started because{" "}
              <strong className="text-[#EDEEF2] font-semibold">
                I kept getting cut off mid-coding session
              </strong>{" "}
              with no idea how close I was to Claude's limit. I'd lose 2 hours
              of context and have to start over.
            </p>
            <p>
              I built the tracker I wished existed — works across Claude,
              ChatGPT, Gemini and DeepSeek, pulls real rate limit data from
              Claude's API, and requires nothing but an install. No API key. No
              account. No data leaving your machine.
            </p>
            <p>
              <strong className="text-[#EDEEF2] font-semibold">
                Alpha is my independent product studio.
              </strong>{" "}
              TokenPulse is the first release. Pro is coming — and the roadmap
              goes much further than a Chrome extension.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
