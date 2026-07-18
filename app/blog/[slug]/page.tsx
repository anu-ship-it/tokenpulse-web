import { notFound } from "next/navigation";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import MDXContent from "@/components/blog/MDXContent";
import { getPost, getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(108,95,255,0.04)_0%,transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-6 pt-32 pb-24">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] text-[#32324A] hover:text-[#72728A] transition-colors mb-10"
          >
            ← Back to blog
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] font-semibold text-[#6C5FFF] bg-[rgba(108,95,255,0.10)] border border-[rgba(108,95,255,0.22)] px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.05em] leading-[1.07] text-[#EDEEF2] mb-5">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-12 pb-8 border-b border-white/5">
            <span className="font-mono text-[11px] text-[#32324A]">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="text-[#32324A]">·</span>
            <span className="font-mono text-[11px] text-[#32324A]">
              {post.readingTime}
            </span>
          </div>

          {/* Content */}
          <article>
            <MDXContent source={post.content} />
          </article>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-white/5">
            <div className="bg-[#0E0E11] border border-white/8 rounded-2xl p-8">
              <h3 className="text-[18px] font-bold text-[#EDEEF2] mb-3">
                Try TokenPulse — it is free
              </h3>
              <p className="text-[13px] text-[#72728A] leading-relaxed mb-5">
                See your token usage in real time across Claude, ChatGPT, Gemini
                and DeepSeek. No API key, no account.
              </p>
              <a
                href="https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#6C5FFF] text-white px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-[#7D71FF] transition-all hover:-translate-y-0.5"
              >
                Install for Chrome — Free
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
