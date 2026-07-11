import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Platform";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Platforms from "@/components/sections/Platform";
import Pricing from "@/components/sections/Pricing";
import Roadmap from "@/components/sections/Roadmap";
import Waitlist from "@/components/sections/Waitlist";
import About from "@/components/sections/About";
import Button from "@/components/ui/Button";

const STORE_URL =
  "https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkchfcehhic";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Platforms />
        <Pricing />
        <Roadmap />
        <Waitlist />
        <About />

        {/* Final CTA */}
        <section className="relative z-10 py-32 border-t border-white/5 bg-[#0E0E11] text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(108,95,255,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative max-w-3x1 mx-auto px-6">
            <h2 className="text-[clamp(34px,4.5vw,58px)] font-bold leading-[1.07] tracking-[-0.05em] mb-5">
              Stop hitting wall
              <br />
              <em className="not-italic text-[#00E5A0]">mid-prompt.</em>
            </h2>
            <p className="text-[17px] text-[#72728A] mb-11 max-w-[440px] mx-auto leading-relaxed">
              Install the free extension in 30 seconds. Join the Pro waitlist to
              lock early pricing before launch.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Button href={STORE_URL} external size="lg">
                Install Free - Chrome
              </Button>
              <Button href="#waitlist" variant="secondary" size="lg">
                Join Pro Waitlist
              </Button>
            </div>
            <p>
              Chrome · Edge · Brave · Arc · No account · All data stays local
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
