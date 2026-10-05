"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Phone from "@/components/phone/Phone";

type Item = { key: string; title: string; body: string };

/** Scroll-driven feature walkthrough: the phone stays pinned and swaps to the screen of whichever step is in view. */
export default function ScreenShowcase({ items, screens, labels }: { items: Item[]; screens: ReactNode[]; labels: string[] }) {
  const [active, setActive] = useState(0);
  const steps = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Activation line: mid-viewport on desktop, below the pinned phone on mobile.
    const desktop = matchMedia("(min-width: 1024px)").matches;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.i))),
      { rootMargin: desktop ? "-50% 0px -50% 0px" : "-78% 0px -21% 0px" },
    );
    steps.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:gap-20">
      <div className="sticky top-[4.75rem] z-10 -mx-4 self-start bg-surface-2 py-4 sm:-mx-6 lg:order-2 lg:top-[max(5.5rem,calc(50dvh_-_20rem))] lg:mx-0 lg:bg-transparent lg:py-0">
        <div className="relative mx-auto w-fit [--ps:0.46] sm:[--ps:0.56] lg:[--ps:0.74]">
          <div aria-hidden className="brand-aura absolute -inset-16 -z-10 blur-2xl" />
          <Phone label={labels[active]} scale="var(--ps)">
            {screens.map((s, i) => (
              <div key={i} aria-hidden={i !== active} className={`absolute inset-0 transition-opacity duration-500 ease-[var(--ease-out-soft)] ${i === active ? "opacity-100" : "pointer-events-none opacity-0"}`}>
                {s}
              </div>
            ))}
          </Phone>
        </div>
      </div>

      <ol className="lg:order-1 lg:py-[15dvh]" aria-label="Features">
        {items.map((it, i) => (
          <li
            key={it.key}
            ref={(el) => { steps.current[i] = el; }}
            data-i={i}
            className={`flex min-h-[45dvh] flex-col justify-center transition-opacity duration-500 lg:min-h-[70dvh] ${i === active ? "opacity-100" : "opacity-35"}`}
          >
            <h3 className="t-h3 text-ink">{it.title}</h3>
            <p className="mt-3 max-w-[44ch] text-[17px] leading-relaxed text-muted">{it.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
