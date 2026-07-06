import type { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://token-pulse.in'
const SITE_NAME = 'TokenPulse'
const DEFAULT_DESCRIPTION =
  'Live token tracking across Claude, ChatGPT, Gemini and DeepSeek. Real rate limits, smart notifications, cost tracking. Free Chrome extension for developers.'

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = '/og-image.png',
}: {
  title: string
  description?: string
  path?: string
  image?: string
}): Metadata {
  const url = `${SITE_URL}${path}`
  const fullTitle = `${title} | ${SITE_NAME}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  }
}
