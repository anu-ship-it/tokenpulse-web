import Link from "next/link";

const STORE_URL =
  "https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic";

export default function Home() {
  return (
    <>
     {/* Hero */}
     <section className="relative overflow-hidden pt-36 pb-28 px-6 md:px-10">
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-teal/[0.07] rounded-full blur-3x1 pointer-events-none" />
      <div className="relative max-w-[1100px] mx-auto grid md:grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-teal uppercase bg-teal/10 border border-teal/25 px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          No waitlist . Free now 
          </div>
          <h1 className="text-[40px] md:text-[52px] font-extrabold leading-[1.08] tracking-tight mb-5">
            Never get cut off<br />
            <span className="text-teal">mid-conversation</span><br />again.
          </h1>
          <p className="text-[16px] text-[#8aa8ac] leading-relaxed mb-9 max-w-[420px]">
            TokenPulse tracks your{" "}
            <strong className="text-teal-light font-semibold">context window</strong>{" "}
            and{" "}
            <strong className="text-teal-light font-semibold">rate limits</strong>
            {" "}
            in real time - directly inside Claude and ChatGPT.
          </p>
        </div>
      </div>
     </section>
    </>
  )
}