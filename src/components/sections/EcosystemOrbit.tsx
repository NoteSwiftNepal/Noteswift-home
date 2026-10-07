"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

type Node = { key: string; label: string; body: string; link: string };

// Hexagon corners at radius 40 on a 100x100 canvas, clockwise from the top.
const POS = [[50, 10], [84.64, 30], [84.64, 70], [50, 90], [15.36, 70], [15.36, 30]] as const;
const CYCLE_MS = 4200;

/** Six parts of the platform orbiting the core. Auto-advances while in view; hover or focus pauses it. */
export default function EcosystemOrbit({ nodes, hrefs, center, select }: { nodes: Node[]; hrefs: string[]; center: string; select: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    if (root.current) io.observe(root.current);
    return () => io.disconnect();
  }, []);

  const playing = inView && !paused;
  useEffect(() => {
    if (!playing || matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.dataset.motion === "reduce") return;
    const id = setTimeout(() => setActive((a) => (a + 1) % nodes.length), CYCLE_MS);
    return () => clearTimeout(id);
  }, [playing, active, nodes.length]);

  const n = nodes[active];
  const external = hrefs[active].startsWith("http");
  const hold = { onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false), onFocus: () => setPaused(true), onBlur: () => setPaused(false) };

  return (
    <div ref={root} className={`orbit grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 ${inView ? "is-in" : ""}`}>
      <div {...hold} className="relative mx-auto aspect-square w-full max-w-[30rem]">
        <div aria-hidden className="absolute inset-[18%] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand)_22%,transparent),transparent)] blur-xl" />
        <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 size-full overflow-visible text-line">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeDasharray="0.6 1.4" vectorEffect="non-scaling-stroke" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" opacity="0.6" vectorEffect="non-scaling-stroke" />
          <polygon className="orbit-hex" pathLength={1} points={POS.map((p) => p.join(",")).join(" ")} fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
          {POS.map(([x, y], i) => (
            <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="currentColor" opacity={i === active ? 0 : 0.7} vectorEffect="non-scaling-stroke" />
          ))}
          <line key={active} className="orbit-spoke" x1="50" y1="50" x2={POS[active][0]} y2={POS[active][1]} stroke="var(--brand)" strokeWidth="1.5" strokeDasharray="2 3" vectorEffect="non-scaling-stroke" />
        </svg>

        <div className="orbit-core absolute left-1/2 top-1/2 flex size-[27%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-center text-bg shadow-[0_20px_50px_-12px_hsl(var(--shadow-tint)/0.45)]">
          <span className="max-w-[6ch] text-[11px] font-semibold uppercase leading-tight tracking-[0.12em] sm:text-[13px]">{center}</span>
        </div>

        {nodes.map((node, i) => (
          <div key={node.key} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${POS[i][0]}%`, top: `${POS[i][1]}%` }}>
            <div className="orbit-node" style={{ "--i": i } as React.CSSProperties}>
              <button
                type="button"
                aria-pressed={i === active}
                aria-label={`${select}: ${node.label}`}
                onClick={() => setActive(i)}
                className={`press relative flex size-16 items-center justify-center rounded-full px-1 text-center text-[10px] font-semibold leading-tight sm:size-[4.5rem] sm:text-[11.5px] ${
                  i === active
                    ? "orbit-active scale-110 bg-brand text-on-brand shadow-[0_10px_30px_-8px_color-mix(in_oklab,var(--brand)_70%,transparent)]"
                    : "border border-line bg-surface text-ink shadow-soft hover:-translate-y-0.5 hover:border-brand/40"
                }`}
              >
                {node.label}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div {...hold}>
        <div className="flex items-center gap-4">
          <p className="font-mono text-[12px] font-medium tracking-[0.12em] text-brand tabular-nums">
            {String(active + 1).padStart(2, "0")} / {String(nodes.length).padStart(2, "0")}
          </p>
          <span aria-hidden className="orbit-track h-px w-16 overflow-hidden bg-line">
            <span key={active} className="orbit-timer block h-full origin-left bg-brand" style={{ animationDuration: `${CYCLE_MS}ms`, animationPlayState: playing ? "running" : "paused" }} />
          </span>
        </div>
        <div key={active} className="orbit-swap mt-4 min-h-[9.5rem]">
          <h3 className="text-[clamp(1.75rem,2.6vw,2.25rem)] font-semibold tracking-[-0.03em] text-ink">{n.label}</h3>
          <p className="t-lead mt-3 max-w-[36ch]">{n.body}</p>
          <a
            href={hrefs[active]}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-brand"
          >
            {n.link}
            <ArrowUpRight aria-hidden size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {nodes.map((node, i) => (
            <button
              key={node.key}
              type="button"
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              className={`press h-9 rounded-full px-4 text-[13px] font-medium ${i === active ? "bg-ink text-bg" : "text-muted hover:bg-surface-2 hover:text-ink"}`}
            >
              {node.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
