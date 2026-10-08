"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import Phone from "@/components/phone/Phone";

type Item = { key: string; title: string; body: string };

const AUTO_MS = 4000;

/**
 * Horizontal feature cards: number, title, body, and the real app screen peeking up from the bottom.
 * Native scroll-snap; autoplays one card at a time while in view, pauses on any interaction, loops at the end.
 */
export default function FeatureRail({ items, screens, prev, next }: { items: Item[]; screens: ReactNode[]; prev: string; next: string }) {
  const rail = useRef<HTMLOListElement>(null);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const step = (dir: 1 | -1) => {
    const el = rail.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 16), behavior: "smooth" });
  };

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
    if (rail.current) io.observe(rail.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.dataset.motion === "reduce";
    if (reduce || paused || !inView) return;
    const id = setInterval(() => step(1), AUTO_MS);
    return () => clearInterval(id);
  }, [paused, inView]);
  const arrow = "press flex size-11 items-center justify-center rounded-full border border-line bg-surface text-ink hover:border-ink/30";

  return (
    <div>
      <ol
        ref={rail}
        aria-label="Features"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setTimeout(() => setPaused(false), AUTO_MS)}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:-mx-8 lg:scroll-px-8 lg:px-8">
        {items.map((it, i) => (
          <li key={it.key} className="flex h-[620px] w-[86%] max-w-[440px] shrink-0 snap-start flex-col overflow-hidden rounded-[2rem] border border-line bg-surface-2 sm:h-[660px] sm:w-[420px]">
            <div className="p-7 pb-0 md:p-9 md:pb-0">
              <span className="font-mono text-[15px] text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-balance text-[clamp(1.5rem,2.2vw,1.85rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">{it.title}</h3>
              <p className="mt-3 text-pretty text-[16px] leading-relaxed text-muted">{it.body}</p>
            </div>
            {/* Phone sits low so only its top half shows, like a device rising out of the card. */}
            <div className="relative mt-auto flex h-[330px] justify-center overflow-hidden sm:h-[350px]">
              <div className="absolute top-8">
                <Phone label={it.title} scale={0.68}>{screens[i]}</Phone>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-6 hidden justify-end gap-2 md:flex">
        <button type="button" aria-label={prev} onClick={() => step(-1)} className={arrow}><ArrowLeft size={18} /></button>
        <button type="button" aria-label={next} onClick={() => step(1)} className={arrow}><ArrowRight size={18} /></button>
      </div>
    </div>
  );
}
