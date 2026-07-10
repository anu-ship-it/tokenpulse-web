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
    cta
  }
]