"use client";
import { useId, useMemo, useState } from "react";
import { CaretDown, MagnifyingGlass, X } from "@phosphor-icons/react";

type Item = { cat: string; q: string; a: string };
type Labels = { search: string; placeholder: string; clear: string; filterLabel: string; all: string; emptyTitle: string; emptyBody: string; reset: string; resultsTemplate: string };

/** Searchable, filterable FAQ. `resultsTemplate` contains "{n}". */
export default function HelpSearch({ items, categories, labels }: { items: Item[]; categories: string[]; labels: Labels }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const id = useId();

  const shown = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    return items.filter((it) => (!cat || it.cat === cat) && words.every((w) => `${it.q} ${it.a} ${it.cat}`.toLowerCase().includes(w)));
  }, [items, query, cat]);

  const pill = (active: boolean) =>
    `press h-10 shrink-0 rounded-full px-4 text-[14px] font-medium transition-colors ${active ? "bg-ink text-bg" : "border border-line bg-surface text-muted hover:text-ink"}`;

  return (
    <div>
      <div className="relative">
        <label htmlFor={id} className="sr-only">{labels.search}</label>
        <MagnifyingGlass aria-hidden size={20} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted" />
        <input
          id={id}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={labels.placeholder}
          className="h-14 w-full rounded-full border border-line bg-surface pl-[3.25rem] pr-12 text-[16px] text-ink outline-none placeholder:text-muted focus:border-brand"
        />
        {query && (
          <button type="button" aria-label={labels.clear} onClick={() => setQuery("")} className="press absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-muted hover:bg-surface-2 hover:text-ink">
            <X aria-hidden size={16} />
          </button>
        )}
      </div>

      <div role="group" aria-label={labels.filterLabel} className="no-scrollbar -mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0">
        <button type="button" aria-pressed={cat === null} onClick={() => setCat(null)} className={pill(cat === null)}>{labels.all}</button>
        {categories.map((c) => (
          <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={pill(cat === c)}>{c}</button>
        ))}
      </div>

      <p className="mt-6 text-[14px] text-muted" aria-live="polite">{labels.resultsTemplate.replace("{n}", String(shown.length))}</p>

      {shown.length ? (
        <ul className="mt-3 divide-y divide-line overflow-hidden rounded-[1.25rem] border border-line bg-surface">
          {shown.map((it) => (
            <li key={it.q}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 md:px-7 [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="block text-[13px] font-medium text-brand">{it.cat}</span>
                    <span className="mt-1 block text-[17px] font-semibold tracking-[-0.01em] text-ink">{it.q}</span>
                  </span>
                  <CaretDown aria-hidden size={18} className="mt-2 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-6 text-[16px] leading-relaxed text-ink-soft md:px-7 md:pr-16">{it.a}</p>
              </details>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-3 rounded-[1.25rem] border border-dashed border-line p-10 text-center">
          <p className="text-[17px] font-semibold text-ink">{labels.emptyTitle}</p>
          <p className="mx-auto mt-2 max-w-md text-[15px] text-muted">{labels.emptyBody}</p>
          <button type="button" onClick={() => { setQuery(""); setCat(null); }} className="press mt-6 h-10 rounded-full border border-line bg-bg px-5 text-[14px] font-medium text-ink hover:border-ink/30">{labels.reset}</button>
        </div>
      )}
    </div>
  );
}
