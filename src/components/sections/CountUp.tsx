"use client";
import { useEffect, useRef } from "react";

const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.dataset.motion === "reduce";

/** Counts from zero to `value` the first time it scrolls into view. Server-rendered with the final number. */
export default function CountUp({ value, locale, suffix = "" }: { value: number; locale: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const fmt = new Intl.NumberFormat(locale);
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1800, 1);
        el.textContent = fmt.format(Math.round(value * (1 - (1 - t) ** 4))) + suffix;
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    // Offscreen on mount: reset to zero so the count starts from nothing when revealed.
    if (el.getBoundingClientRect().top > innerHeight) el.textContent = fmt.format(0) + suffix;
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, locale, suffix]);

  return <span ref={ref}>{new Intl.NumberFormat(locale).format(value) + suffix}</span>;
}
