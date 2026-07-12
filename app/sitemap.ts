import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const BASE = 'https://token-pulse.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/support`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes]
}
