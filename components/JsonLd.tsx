export default function JsonLd() {
  const siteUrl = 'https://token-pulse.in'

  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TokenPulse',
    applicationCategory: 'DeveloperApplication',
    applicationSubCategory: 'BrowserExtension',
    operatingSystem: 'Chrome, Edge, Brave, Arc',
    url: siteUrl,
    downloadUrl: 'https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic',
    description: 'TokenPulse tracks token usage and rate limits across Claude, ChatGPT, Gemini and DeepSeek in real time. Live token bar, smart alerts, cost tracking. Free Chrome extension for developers.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
    featureList: [
      'Live token bar injection',
      'Claude rate limit tracking',
      'ChatGPT context window tracking',
      'Gemini token tracking',
      'DeepSeek token tracking',
      'Smart threshold notifications',
      'Cost estimation',
      'Daily usage history',
      'No API key required',
    ],
    screenshot: `${siteUrl}/og-image.png`,
    author: {
      '@type': 'Organization',
      name: 'Alpha',
      url: siteUrl,
    },
  }

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TokenPulse',
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    description: 'TokenPulse builds developer tools for AI usage tracking.',
    email: 'tokenpulse10@gmail.com',
    sameAs: [
      'https://github.com/anu-ship-it/TokenPulse',
    ],
    founder: [
      { '@type': 'Person', name: 'Anoop Kumar' },
      { '@type': 'Person', name: 'Mansi Rathore' },
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TokenPulse',
    url: siteUrl,
    description: 'Live token tracking for developers who use AI tools daily.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
