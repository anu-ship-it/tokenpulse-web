import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-[#0E0E11] border border-white/8 rounded-2xl p-7 hover:border-[rgba(108,95,255,0.3)] transition-all hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] font-semibold text-[#6C5FFF] bg-[rgba(108,95,255,0.10)] border border-[rgba(108,95,255,0.22)] px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="text-[18px] font-bold text-[#EDEEF2] leading-snug tracking-tight mb-3 group-hover:text-white transition-colors">
        {post.title}
      </h2>
      <p className="text-[13px] text-[#72728A] leading-relaxed mb-5 line-clamp-2">
        {post.description}
      </p>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] text-[#32324A]">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span className="text-[#32324A]">·</span>
        <span className="font-mono text-[10px] text-[#32324A]">
          {post.readingTime}
        </span>
      </div>
    </Link>
  );
}
