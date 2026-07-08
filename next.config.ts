import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/uninstall.html',
        destination: '/uninstall',
        permanent: true,
      },
      {
        source: '/support.html',
        destination: '/support',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
