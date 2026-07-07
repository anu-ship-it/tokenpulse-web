import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  tags: string[]
}

export interface Post extends PostMeta {
  content: string
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'))

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')
      const { data } = matter(raw)
      return {
        slug: file.replace('.mdx', ''),
        title: data.title,
        description: data.description,
        date: data.date,
        readingTime: data.readingTime ?? '5 min read',
        tags: data.tags ?? [],
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    readingTime: data.readingTime ?? '5 min read',
    tags: data.tags ?? [],
    content,
  }
}
