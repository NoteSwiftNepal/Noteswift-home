"use client";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight, CheckCircle } from "@phosphor-icons/react";

type Role = {
  key: string;
  tab: string;
  title: string;
  body: string;
  link: string;
  href: string;
  features: { title: string; body: string }[];
};

/** Accessible tabs (arrow keys, Home/End) switching between portal audiences. */
export default function RoleTabs({ roles, label }: { roles: Role[]; label: string }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent) => {
    const last = roles.length - 1;
    const next = { ArrowRight: active === last ? 0 : active + 1, ArrowLeft: active === 0 ? last : active - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label={label} onKeyDown={onKey} className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto px-4 md:mx-0 md:inline-flex md:rounded-full md:border md:border-line md:bg-surface md:p-1 md:px-1">
        {roles.map((r, i) => (
          <button
            key={r.key}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`press shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-[14px] font-medium transition-colors ${
              i === active ? "bg-brand text-on-brand" : "border border-line bg-surface text-muted hover:text-ink md:border-0 md:bg-transparent"
            }`}
          >
            {r.tab}
          </button>
        ))}
      </div>

      {roles.map((r, i) => (
        <div
          key={r.key}
          role="tabpanel"
          id={`${id}-panel-${i}`}
          aria-labelledby={`${id}-tab-${i}`}
          hidden={i !== active}
          className="screen-fade mt-10 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16"
        >
          <div>
            <h3 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.025em] text-balance">{r.title}</h3>
            <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-muted">{r.body}</p>
            <a href={r.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-brand hover:underline">
              {r.link} <ArrowUpRight aria-hidden size={14} />
            </a>
          </div>
          <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {r.features.map((f) => (
              <li key={f.title} className="flex gap-3">
                <CheckCircle aria-hidden size={20} weight="fill" className="mt-0.5 shrink-0 text-brand" />
                <span>
                  <span className="block font-semibold text-ink">{f.title}</span>
                  <span className="mt-1 block text-[15px] leading-relaxed text-muted">{f.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
