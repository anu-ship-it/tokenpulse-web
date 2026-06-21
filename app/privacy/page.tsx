export default function PrivacyPage() {
  return (
    <section className="px-6 md:px-10 pt-32 pb-24">
      <div className="max-w-[700px] mx-auto">
        <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-3">
          Privacy
        </div>
        <h1 className="text-[32px] md:text-[44px] font-extrabold leading-tight tracking-tight mb-3">
          Privacy <span className="text-teal">Policy</span>
        </h1>
        <p className="text-sm text-text-muted mb-12">Last updated June 2026</p>

        <div className="flex flex-col gap-8 text-[14px] text-[#4a9ba5] leading-relaxed">
          <div>
            <h2 className="text-base font-bold text-teal-light mb-2">
              Data collection
            </h2>
            <p>
              TokenPulse does not collect, transmit, or store any personal
              data on external servers. All usage data — token counts, daily
              history, cost estimates, and settings — is stored locally in
              your browser using Chrome&apos;s built-in storage API and never
              leaves your device.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-teal-light mb-2">
              API access
            </h2>
            <p>
              On claude.ai, TokenPulse fetches rate limit data from
              Claude&apos;s own API
              (claude.ai/api/organizations) using your existing browser
              session. No credentials are stored or transmitted to any third
              party. On ChatGPT, TokenPulse reads page content directly to
              estimate token usage — no API calls are made since OpenAI does
              not expose a usage API.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-teal-light mb-2">
              No analytics
            </h2>
            <p>
              TokenPulse contains no analytics, tracking pixels, or
              third-party scripts of any kind, in the extension or on this
              website.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-teal-light mb-2">
              Open source
            </h2>
            <p>
              TokenPulse&apos;s full source code is publicly available on
              GitHub for review. We do not ask you to trust our word — you
              can verify exactly what the extension does.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-teal-light mb-2">
              Contact
            </h2>
            <p>
              For questions or concerns, open an issue on the{" "}
              <a
                href="https://github.com/anu-ship-it/TokenPulse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal-light underline"
              >
                GitHub repository
              </a>{" "}
              or email{" "}
              <a
                href="mailto:anup17508@gmail.com"
                className="text-teal hover:text-teal-light underline"
              >
                anup17508@gmail.com
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border2 text-xs text-text-muted">
          Built by Anoop Kumar and Mansi Rathore · Alpha
        </div>
      </div>
    </section>
  );
}
