import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Blog — TokenPulse",
  description:
    "Tips, guides, and deep dives on AI token limits, rate limits, and getting more from Claude, ChatGPT, Gemini and DeepSeek.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(108,95,255,0.04)_0%,transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
          <div className="max-w-[680px] mb-16">
            <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-4">
              Blog
            </div>
            <h1 className="text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.05em] leading-[1.07] mb-5">
              Learn to get more from
              <br />
              <em className="not-italic text-[#00E5A0]">every AI session.</em>
            </h1>
            <p className="text-[16px] text-[#72728A] leading-relaxed">
              Guides on Claude rate limits, token optimization, cost tracking,
              and making the most of AI tools as a developer.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-[#32324A] font-mono text-sm">
                Posts coming soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
