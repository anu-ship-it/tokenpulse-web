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

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path = "",
  image = "/og-image.png",
  noIndex = false,
  keywords,
}: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "TokenPulse",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}
