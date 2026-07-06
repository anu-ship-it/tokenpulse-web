import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const BASE = 'https://token-pulse.in'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()

  const blogUrls = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/support`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    ...blogUrls,
  ]
}
