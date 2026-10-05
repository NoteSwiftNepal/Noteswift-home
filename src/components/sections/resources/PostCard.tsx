import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export type PostCardData = { href: string; category: string; title: string; excerpt: string; date: string; read: string };

/** Text-first article card. Shared by blog index, related posts and resources. */
export default function PostCard({ post, compact = false }: { post: PostCardData; compact?: boolean }) {
  return (
    <Link href={post.href} className="group flex h-full flex-col rounded-[1.25rem] border border-line bg-surface p-6 transition-colors hover:border-brand/40 md:p-7">
      <span className="text-[13px] font-medium text-brand">{post.category}</span>
      <h3 className={`mt-3 font-semibold tracking-[-0.015em] text-ink text-balance ${compact ? "text-[17px]" : "text-[20px] leading-snug"}`}>{post.title}</h3>
      {!compact && <p className="mt-3 text-[15px] leading-relaxed text-muted text-pretty">{post.excerpt}</p>}
      <span className="mt-auto flex items-center justify-between pt-6 text-[13px] text-muted">
        <span>
          {post.date} <span aria-hidden>·</span> {post.read}
        </span>
        <ArrowRight aria-hidden size={16} className="text-ink transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
