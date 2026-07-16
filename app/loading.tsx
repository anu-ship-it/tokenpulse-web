export default function Loading() {
  return (
    <div className="min-h-screen bg-[#080809] flex flex-col items-center justify-center gap-5">
      {/* Animated ring — matches brand mark */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-[#1C1C22]"/>
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#6C5FFF] animate-spin"/>
        <div className="absolute inset-[5px] rounded-full border border-transparent border-t-[rgba(108,95,255,0.4)] animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}/>
      </div>
      <div className="font-mono text-[11px] font-semibold text-[#32324A] tracking-widest uppercase animate-pulse">
        Loading...
      </div>
    </div>
  )
}
