'use client'
import { useRef } from 'react'
import Button from '@/components/ui/Button'
import { features } from 'process'

const STORE_URL = `https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdb1klchfcehhic`

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'For developers who want visibility into their AI usage today. No account required.',
    features: [
      'Live token bar on all 4 platforms',
      'Claude rate limits + reset countdowns',
      'Cost tracking - today and this week',
      'Smart notifications at 75%, 90%, 100%',
      'Daily usage history',
      'Zero data leaves your device',
    ],
    cta: 'Install Free',
    ctaHref: STORE_URL,
    ctaExternal: true,
    variant: 'secondary' as const,
    featured: false,
  },
  {
    name: 'Pro',
    price: '$4.99',
    period: 'per month . early access pricing',
    desc: 'For developers who use multiple AI tools daily and full history, predictions, and cross-device sync.',
    features: [
      'Everything in Free',
      'Unlimited AI providers - Grok, Perplexity, Cursor, Mistral, Openrouter + more',
      'Rate limit prediction - estimated time remaining',
      '90-day history with usage graphs',
      'Smart notifications - "-45 min of message left"',
      'Sync across Chrome, Edge, Brave, Arc, VSCode',
      'Weekly AI usage email report',
      'Export CSV / JSON / PDF',
      'AI usage timeline across all tools',
    ],
    cta: 'Join Waitlist → Lock Early Price',
    ctaHref: '#waitlist',
    ctaExternal: false,
    variant: 'primary' as const,
    featured: true,
    badge: '⭐ Most Popular - Wailist Open',
  },
  {
    name: 'Team',
    price: '$29',
    period: 'per month . 5 seats . +$6/user',
    desc: 'For teams where AI usage is a shared cost. Shared dashboards, budget controls, admin visibility.',
    features: [
      'Everything in Pro',
      'Shared team dashboard',
      'Budget controls and alerts',
      'Usage by member',
      'Slack / Discord / webhook alerts',
      'Admin dashboard',
      'Priority support',
    ],
    cta: 'Join Team Waitlist',
    ctaHref: '#waitlist',
    ctaExternal: false,
    variant: 'secondary' as const,
    featured: false,
  },
]

export default function Pricing() {
  const scrollToWailist = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => (document.getElementById('waitlist-email') as HTMLInputElement)?.focus(), 600)
  }

  return (
    <section className='relative z-10 py-24 border-t border-white/5 bg-[#0E0E11]' id='pricing'>
      <div className='max-w-7x1 mx-auto px-6 lg:px-12'>
        <div className='font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-4'>Pricing</div>
        <h2 className='text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] mb-4'>
          Start free. Upgrade when<br/>
          <em className='not-italic text-[#00E5A0]'>you need more.</em>
        </h2>
        <p className='text-[15px] text-[#72728A] leading-relaxed max-w-[500px] mb-14'>
          The free extension tracks what matters today. Pro is in development - join the wailist to lock early pricing and get first access.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 items-start mb-5">
          {plans.map(plan => (
            <div key={plan.name} className={`relative rounded-2x1 p-7 flex flex-col${plan.featured ? 'bg-[#080809] border border-[#6C5FFF] shadow-[0_0_0_1px_#6C5FFF,0_0_40px_rgba(108,95,255,0.12)]':'bg-[#080809] border border-white/8'}`}>
              {plan.featured && 'badge' in plan && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] font-semibold text-white bg-[#6C5FFF] px-3 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                 </div> 
              )}
              <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#72728A] mb-3">{plan.name}</div>
              <div className="text-[40px] font-black text-[#EDEEF2] tracking-[-0.06em] leading-none mb-1">{plan.price}</div>
              <div className="font-mono text-[10px] text-[10px] text-[#32324A] mb-5">{plan.period}</div>
              <p className='text-[13px] text-[#72728A] leading-relaxed mb-6 pb-6 border-b border-white/5'>{plan.desc}</p>
              <ul className='flex flex-col gap-2.5 mb-7 flex-1'>
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-[#72728A]">
                    <span className='text-[#00E5A0] flex-shrink-0 mt-0.5'>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              {plan.ctaExternal ? (
                <Button href={plan.ctaHref} external variant={plan.variant} size="lg" className="w-full justify-center">
                  {plan.cta}
                </Button>
              ) : (
                <button
                 onClick={scrollToWailist}
                 className={`w-full py-3.5 rounded-x1 text-[15px] font-bold transition-all ${
                  plan.featured
                    ? 'bg-[#6C5FFF] text-white hover:bg-[#7D71FF] hover:-translate-y-0.5'
                    : 'bg-[#141418] text-[#EDEFF2] border border-white/8 hover:border-[rgba(108,95,255,0.22)]'
                 }`}
                 >
                  {plan.cta}
                 </button>
              )}
             </div> 
          ))}
        </div>

        {/* Lifetime card */}
        <div className="bg-[#080809] border border-[rgba(245,158,11,0.3)] rounded-2x1 p-7 flex flex-col md:flex-row items-start md:item-center justify-between gap-6 shadow-[0_0_40px_rgba(245,158,11,0.05)]">
          <div className="flex-1">
            <span className="font-mono text-[10px] font-semibold text-[#F59E0B] bg-[rgba(245,158,11,0.08)] border-[rgba(245,158,11,0.2)] px-2 py-0.5 rounded inline-block mb-3">
              ✦ Early Adopter - Limited to 100 users
            </span>
            <h3 className='text-[18px] font-bold text-[#EDEEF2] tracking-tight mb-2'>
              Lifetime Pro access. Pay once, own it forever.
            </h3>
            <p className="text-[13px] text-[#72728A] leading-relaxed max-w-[500px]">
              Lock in Pro features at a single payment before we launch, First 100 users only - after that, this offer disappears permanently. Includes all future Pro features.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
            <div className="text-[36px] font-black text-[#F59E0B] tracking-[-0.05em] leading-none">$69</div>
            <div className="font-mono text-[10px] text-[#3232AA]">one-time . 100 spots total</div>
          <button
           onClick={(e) => { e.preventDefault();
            document.getElementById('wailist')?.scrollIntoView({  behavior: 'smooth' }) }}
            className='text-[13px] font-bold text'
           }}
          </div>
        </div>
      </div>
    </section>
  )
}