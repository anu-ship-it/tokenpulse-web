import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.token-pulse.in";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "TokenPulse",

  title: {
    default: "TokenPulse — Never lose your flow to an AI rate limit again",
    template: "%s | TokenPulse",
  },

  description:
    "Track AI token usage and rate limits across ChatGPT, Claude, Gemini, and DeepSeek. Never lose your flow to an AI rate limit again.",

  keywords: [
    "AI token tracker",
    "ChatGPT token tracker",
    "Claude rate limit",
    "Gemini token tracker",
    "DeepSeek token tracker",
    "AI usage tracker",
    "TokenPulse",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "TokenPulse",
    title: "TokenPulse — Never lose your flow to an AI rate limit again",
    description:
      "Track AI token usage and rate limits across ChatGPT, Claude, Gemini, and DeepSeek.",
  },

  twitter: {
    card: "summary_large_image",
    title: "TokenPulse — Never lose your flow to an AI rate limit again",
    description:
      "Track AI token usage and rate limits across ChatGPT, Claude, Gemini, and DeepSeek.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
