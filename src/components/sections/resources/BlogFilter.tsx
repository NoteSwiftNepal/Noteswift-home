"use client";
import { useState } from "react";
import PostCard, { type PostCardData } from "./PostCard";

/** Category pills + filtered post grid. */
export default function BlogFilter({ posts, allLabel, filterLabel, empty }: { posts: PostCardData[]; allLabel: string; filterLabel: string; empty: string }) {
  const categories = [allLabel, ...Array.from(new Set(posts.map((p) => p.category)))];
  const [active, setActive] = useState(allLabel);
  const shown = active === allLabel ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div role="group" aria-label={filterLabel} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={`press h-10 shrink-0 rounded-full px-4 text-[14px] font-medium transition-colors ${active === c ? "bg-ink text-bg" : "border border-line bg-surface text-muted hover:text-ink"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{shown.length}</p>
      {shown.length ? (
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {shown.map((p) => (
            <li key={p.href} className="screen-fade">
              <PostCard post={p} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 rounded-[1.25rem] border border-dashed border-line p-10 text-center text-muted">{empty}</p>
      )}
    </div>
  );
}
