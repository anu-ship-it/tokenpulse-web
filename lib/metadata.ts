import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://token-pulse.in'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TokenPulse - Never lose your flow to an AI rate limit again',
    template: '% | TokenPulse'
  },
  description:
    'TokenPulse tracks token usage and rate limits across Claude, ChatGPT, Gemini and DeepSeek in real time. Live token bar, smart alerts, cost tracking. Free Chrome extension for developers.',
  keywords: [
    'claude rate limit tracker',
    'chatgpt token counter',
    'AI usage tracker',
    'claude token limit',
    'developer AI tools',
    'token usage chrome extension',
    'gemini token tracker',
    'deepseek usage',
  ],
  authors: [{ name: 'Anoop Kumar' }],
  creator: 'Anoop Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'TokenPulse',
    title: 'TokenPulse - Never lose your flow to an AI rate limit again',
    description:
      'Live token tracking across Claude, ChatGPT, Gemini and DeepSeek. No API Key. Free Chrome extension for developers.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TokenPulse' }],  
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TokenPulse - Never lose your flow to an AI rate limit again',
    description: 'Live token tracking across Claude, ChatGPT, Gemini and DeepSeek. Free Chrome extension.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
}

export function pageMetadata(title: string, description: string, path = ''): Metadata
{
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: { title, description, url: `${siteUrl}${path}` },
    twitter: { title, description }, 
  }
}
