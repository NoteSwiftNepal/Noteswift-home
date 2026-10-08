"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Phone from "@/components/phone/Phone";

const AUTO_MS = 3500;

/**
 * Fanned stack of app screens. The active tab's phone sits front and centre, the rest shrink and dim behind it.
 * Cycles on its own until the visitor hovers or picks a tab; static under reduced motion.
 */
export default function PhoneFan({ tabs, screens }: { tabs: string[]; screens: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = tabs.length;
  const bar = useRef<HTMLDivElement>(null);

  // Keep the active tab visible when the bar overflows on small screens (horizontal only, never scrolls the page).
  useEffect(() => {
    const el = bar.current;
    const btn = el?.children[active] as HTMLElement | undefined;
    if (el && btn) el.scrollTo({ left: btn.offsetLeft - (el.clientWidth - btn.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.dataset.motion === "reduce";
    if (reduce || paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), AUTO_MS);
    return () => clearInterval(id);
  }, [paused, n]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div ref={bar} role="tablist" aria-label="App screens" className="relative no-scrollbar mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-surface/60 p-1.5 backdrop-blur">
        {tabs.map((t, i) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => { setActive(i); setPaused(true); }}
            className={`press h-9 shrink-0 rounded-full px-4 text-[14px] font-medium ${i === active ? "bg-ink text-bg" : "text-muted hover:text-ink"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="relative mx-auto mt-14 [--dx:42%] [--ps:0.44] sm:[--dx:52%] sm:[--ps:0.56] lg:[--dx:58%] lg:[--ps:0.62]" style={{ height: "calc(868px * var(--ps))" }}>
        {screens.map((s, i) => {
          const o = ((i - active + n + Math.floor(n / 2)) % n) - Math.floor(n / 2); // -2..2, wraps around
          const d = Math.abs(o);
          return (
            <div
              key={i}
              aria-hidden={o !== 0}
              className="absolute left-1/2 top-0 transition-transform duration-700 ease-[var(--ease-out-soft)]"
              style={{ transform: `translateX(calc(-50% + ${o} * var(--dx))) scale(${1 - d * 0.1})`, zIndex: 10 - d }}
            >
              <Phone label={tabs[i]} scale="var(--ps)">{s}</Phone>
              <div aria-hidden className={`pointer-events-none absolute inset-0 rounded-[calc(60px*var(--ps))] bg-bg transition-opacity duration-700 ${d === 0 ? "opacity-0" : d === 1 ? "opacity-45" : "opacity-65"}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
