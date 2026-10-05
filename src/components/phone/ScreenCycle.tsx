"use client";
import { Children, useEffect, useState, type ReactNode } from "react";

/** Cycles through app screens inside a Phone, one every `every` ms. Holds on the first screen under reduced motion. */
export default function ScreenCycle({ children, every = 3500 }: { children: ReactNode; every?: number }) {
  const screens = Children.toArray(children);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.dataset.motion === "reduce";
    if (reduce) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % screens.length), every);
    return () => window.clearInterval(id);
  }, [every, screens.length]);

  return screens.map((s, i) => (
    <div
      key={i}
      aria-hidden={i !== active}
      className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-[var(--ease-out-soft)] ${i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
    >
      {s}
    </div>
  ));
}
