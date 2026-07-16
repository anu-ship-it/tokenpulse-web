import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(108,95,255,0.04)_0%,transparent_60%)]"/>
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(108,95,255,0.06)]"/>
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full border border-[rgba(108,95,255,0.03)]"/>
        </div>

        <div className="relative z-10 text-center px-6 py-32">
          {/* 404 number */}
          <div className="font-mono text-[120px] font-black leading-none tracking-[-6px] text-transparent bg-clip-text bg-gradient-to-b from-[#1C1C22] to-[#0E0E11] mb-6 select-none">
            404
          </div>

          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-[#0E0E11] border border-white/8 flex items-center justify-center mx-auto mb-6">
            <div className="w-6 h-6 rounded-full border-2 border-[#6C5FFF] relative">
              <div className="absolute top-1 left-1 w-2.5 h-2.5 rounded-full bg-[#6C5FFF]"/>
            </div>
          </div>

          <h1 className="text-[32px] font-bold tracking-[-0.04em] text-[#EDEEF2] mb-3">
            Page not found
          </h1>
          <p className="text-[15px] text-[#72728A] leading-relaxed mb-10 max-w-[380px] mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/"
              className="bg-[#6C5FFF] text-white px-6 py-3 rounded-xl text-[14px] font-bold hover:bg-[#7D71FF] transition-all hover:-translate-y-0.5"
            >
              Go home
            </Link>
            <Link
              href="/blog"
              className="bg-[#0E0E11] text-[#EDEEF2] px-6 py-3 rounded-xl text-[14px] font-semibold border border-white/8 hover:border-[rgba(108,95,255,0.3)] transition-all"
            >
              Blog
            </Link>
            <Link
              href="/support"
              className="bg-[#0E0E11] text-[#EDEEF2] px-6 py-3 rounded-xl text-[14px] font-semibold border border-white/8 hover:border-[rgba(108,95,255,0.3)] transition-all"
            >
              Support
            </Link>
          </div>

          {/* Domain */}
          <p className="font-mono text-[11px] text-[#32324A] mt-10">token-pulse.in</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
