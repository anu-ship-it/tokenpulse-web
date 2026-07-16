'use client'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#080809]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.03)_0%,transparent_60%)]"/>
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(239,68,68,0.06)]"/>
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Error icon */}
        <div className="w-14 h-14 rounded-2xl bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] flex items-center justify-center mx-auto mb-6">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Brand */}
        <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#32324A] mb-4">
          TokenPulse
        </div>

        <h1 className="text-[30px] font-bold tracking-[-0.04em] text-[#EDEEF2] mb-3">
          Something went wrong.
        </h1>
        <p className="text-[14px] text-[#72728A] leading-relaxed mb-8 max-w-[360px] mx-auto">
          An unexpected error occurred. This has been noted. Try refreshing — it usually fixes itself.
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="bg-[#6C5FFF] text-white px-6 py-3 rounded-xl text-[14px] font-bold hover:bg-[#7D71FF] transition-all hover:-translate-y-0.5"
          >
            Try again
          </button>
          <a
            href="/"
            className="bg-[#0E0E11] text-[#EDEEF2] px-6 py-3 rounded-xl text-[14px] font-semibold border border-white/8 hover:border-[rgba(108,95,255,0.3)] transition-all"
          >
            Go home
          </a>
        </div>

        {error.digest && (
          <p className="font-mono text-[10px] text-[#32324A] mt-8">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </main>
  )
}
