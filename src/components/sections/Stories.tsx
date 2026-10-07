"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quotes } from "@phosphor-icons/react";

type Story = { quote: string; name: string; role: string };
type Copy = { eyebrow: string; title: string; prev: string; next: string; items: Story[] };

const AUTO_MS = 5200;

/**
 * Swipeable testimonial rail. Native scroll-snap does the scrolling; a CSS scroll-driven
 * animation gives cards depth as they travel; autoplay advances one card and pauses on any interaction.
 */
export default function Stories({ t }: { t: Copy }) {
  const rail = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);

  const step = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector("li");
    const w = card ? card.getBoundingClientRect().width + 20 : el.clientWidth;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    if (rail.current) io.observe(rail.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.dataset.motion === "reduce";
    if (reduce || paused || !inView) return;
    const id = setInterval(() => step(1), AUTO_MS);
    return () => clearInterval(id);
  }, [paused, inView]);

  const btn = "press flex size-11 items-center justify-center rounded-full border border-line bg-surface text-ink hover:border-brand hover:bg-brand hover:text-on-brand";

  return (
    <section aria-labelledby="stories-title" className="stories mt-28 overflow-hidden bg-surface-2 py-24 md:py-28">
      <div className="container-site flex items-end justify-between gap-6">
        <div className="reveal">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-brand">{t.eyebrow}</p>
          <h2 id="stories-title" className="t-h2 text-balance">{t.title}</h2>
        </div>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button type="button" aria-label={t.prev} onClick={() => step(-1)} className={btn}><ArrowLeft aria-hidden size={18} /></button>
          <button type="button" aria-label={t.next} onClick={() => step(1)} className={btn}><ArrowRight aria-hidden size={18} /></button>
        </div>
      </div>

      <ul
        ref={rail}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onPointerDown={() => setPaused(true)}
        className="stories-rail no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto py-6"
      >
        {t.items.map((s) => (
          <li key={s.name} className="story-card group w-[78%] shrink-0 snap-start rounded-[1.25rem] border border-line bg-surface p-7 shadow-soft transition-[border-color] duration-300 hover:border-brand/40 sm:w-[25rem] md:p-8">
            <figure className="flex h-full flex-col">
            <Quotes aria-hidden size={28} weight="fill" className="text-brand/80 transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:-rotate-6 group-hover:scale-110" />
            <blockquote className="mt-5 flex-1 text-[17px] leading-relaxed text-ink-soft">
              <p>&ldquo;{s.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-5">
              <span aria-hidden className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-[14px] font-semibold text-brand">
                {s.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </span>
              <span>
                <span className="block text-[15px] font-semibold text-ink">{s.name}</span>
                <span className="block text-[13px] text-muted">{s.role}</span>
              </span>
            </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div aria-hidden className="container-site mt-6">
        <span className="block h-px w-40 overflow-hidden bg-line">
          <span className="stories-progress block h-full origin-left bg-brand" />
        </span>
      </div>
    </section>
  );
}
