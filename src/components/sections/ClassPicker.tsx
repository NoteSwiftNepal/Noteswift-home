"use client";
import { useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight, CaretDown, CheckCircle, FileText, PlayCircle } from "@phosphor-icons/react";
import type { Course } from "@/content/courses";
import catalog from "@/content/catalog.json";

type Subject = { name: string; videos: number; notes: number; chapters: string[] };
type Copy = {
  view: string;
  tabs: { overview: string; curriculum: string };
  included: string;
  features: string[];
  totals: { subjects: string; chapters: string; videos: string; notes: string };
};

const sum = (s: Subject[], k: "videos" | "notes") => s.reduce((a, x) => a + x[k], 0);

/** Pick a class by its number, then a track; the panel shows what the course includes and its full curriculum. */
export default function ClassPicker({ courses, hrefs, t, locale }: { courses: Course[]; hrefs: string[]; t: Copy; locale: string }) {
  const [active, setActive] = useState(0);
  const [track, setTrack] = useState(0);
  const [tab, setTab] = useState<"overview" | "curriculum">("overview");
  const [open, setOpen] = useState<number | null>(null);
  const c = courses[active];
  const tr = c.tracks[track];
  const subjects = ((catalog as Record<string, Subject[]>)[`${c.slug}/${tr.key}`] ?? []) as Subject[];
  const fmt = new Intl.NumberFormat(locale).format;

  const pick = (i: number) => { setActive(i); setTrack(0); setOpen(null); };
  const onKey = (e: KeyboardEvent) => {
    const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!d) return;
    e.preventDefault();
    const next = (active + d + courses.length) % courses.length;
    pick(next);
    document.getElementById(`class-tab-${next}`)?.focus();
  };

  const totals = [
    [t.totals.subjects, subjects.length],
    [t.totals.chapters, subjects.reduce((a, s) => a + s.chapters.length, 0)],
    [t.totals.videos, sum(subjects, "videos")],
    [t.totals.notes, sum(subjects, "notes")],
  ] as const;

  const seg = (on: boolean) => `press relative h-9 rounded-full px-4 text-[13px] font-medium ${on ? "bg-ink text-bg" : "text-muted hover:text-ink"}`;

  return (
    <div className="grid gap-8 lg:grid-cols-[15rem_1fr] lg:gap-12">
      <div role="tablist" aria-orientation="vertical" onKeyDown={onKey} className="relative grid grid-cols-3 self-start lg:sticky lg:top-28 lg:grid-cols-1">
        {/* Sliding indicator: underline on mobile, side bar on desktop. */}
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-line lg:inset-y-0 lg:left-0 lg:right-auto lg:h-auto lg:w-px" />
        <span aria-hidden className="class-ind absolute bottom-0 left-0 h-[3px] w-1/3 rounded-full bg-brand lg:top-0 lg:h-1/3 lg:w-[3px]" style={{ "--a": active } as React.CSSProperties} />
        {courses.map((k, i) => {
          const words = k.label.split(" ");
          const num = words.pop();
          const on = i === active;
          return (
            <button
              key={k.slug}
              id={`class-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={on}
              aria-controls="class-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => pick(i)}
              className="group flex flex-col items-start pb-5 text-left lg:py-5 lg:pl-8"
            >
              <span className={`text-[13px] font-medium transition-colors ${on ? "text-brand" : "text-muted"}`}>
                {words.join(" ")} <span className="text-muted">/ {k.short}</span>
              </span>
              <span className={`class-num text-[clamp(3.5rem,9vw,6rem)] font-semibold leading-[0.95] tracking-[-0.06em] tabular-nums ${on ? "is-on" : ""}`}>{num}</span>
            </button>
          );
        })}
      </div>

      <div id="class-panel" role="tabpanel" aria-labelledby={`class-tab-${active}`} className="relative overflow-hidden rounded-[1.25rem] border border-line bg-surface">
        <div aria-hidden className="brand-aura pointer-events-none absolute -right-24 -top-24 size-96 blur-2xl" />

        {/* Header */}
        <div key={active} className="orbit-swap relative p-6 md:p-10 md:pb-8">
          <p className="text-[13px] font-medium text-brand">{c.exam} / {c.syllabus}</p>
          <h3 className="mt-3 max-w-[24ch] text-balance text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-tight tracking-[-0.03em]">{c.title}</h3>
          <p className="mt-3 max-w-[60ch] text-[16px] leading-relaxed text-muted">{c.summary}</p>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex rounded-full border border-line bg-bg p-1" role="group">
              {c.tracks.map((x, i) => (
                <button key={x.key} type="button" aria-pressed={i === track} onClick={() => { setTrack(i); setOpen(null); }} className={seg(i === track)}>{x.name}</button>
              ))}
            </div>
            <div className="inline-flex gap-1" role="tablist" aria-label={c.label}>
              {(["overview", "curriculum"] as const).map((k) => (
                <button key={k} type="button" role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={`class-tab press h-9 px-3 text-[14px] font-medium ${tab === k ? "is-on text-ink" : "text-muted hover:text-ink"}`}>
                  {t.tabs[k]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Totals strip */}
        <dl className="relative grid grid-cols-2 border-y border-line bg-bg/50 sm:grid-cols-4">
          {totals.map(([label, n], i) => (
            <div key={label} className={`px-6 py-4 md:px-10 ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line sm:border-t-0" : ""} ${i === 2 ? "sm:border-l" : ""}`}>
              <dt className="text-[12px] text-muted">{label}</dt>
              <dd key={`${active}-${track}`} className="orbit-swap mt-0.5 text-[22px] font-semibold tracking-[-0.03em] tabular-nums">{fmt(n)}</dd>
            </div>
          ))}
        </dl>

        {/* Tab body */}
        <div key={`${active}-${track}-${tab}`} className="orbit-swap relative p-6 md:p-10">
          {tab === "overview" ? (
            <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="font-semibold text-ink">{tr.name}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{tr.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {subjects.map((s) => (
                    <li key={s.name} className="rounded-full bg-brand-soft px-2.5 py-1 text-[12px] font-medium text-brand">{s.name}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-line bg-bg/60 p-5">
                <p className="font-semibold text-ink">{t.included}</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                  {t.features.map((f, i) => (
                    <li key={f} className="class-track flex items-center gap-2.5 text-[14px] text-ink-soft" style={{ "--i": i } as React.CSSProperties}>
                      <CheckCircle aria-hidden size={18} weight="fill" className="shrink-0 text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-line overflow-hidden rounded-xl border border-line">
              {subjects.map((s, i) => {
                const on = open === i;
                return (
                  <li key={s.name} className={`transition-colors ${on ? "bg-bg/70" : ""}`}>
                    <button
                      type="button"
                      aria-expanded={on}
                      onClick={() => setOpen(on ? null : i)}
                      className="group flex w-full items-center gap-4 px-4 py-4 text-left md:px-5"
                    >
                      <span className={`hidden size-9 shrink-0 items-center justify-center rounded-lg sm:flex text-[13px] font-semibold tabular-nums transition-colors ${on ? "bg-brand text-on-brand" : "bg-surface-2 text-muted group-hover:text-ink"}`}>
                        {fmt(i + 1)}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium text-ink">{s.name}</span>
                        <span className="block text-[12px] text-muted">{fmt(s.chapters.length)} {t.totals.chapters}</span>
                      </span>
                      <span className="flex items-center gap-3 text-[13px] text-muted tabular-nums sm:gap-4">
                        {s.videos > 0 && <span className="inline-flex items-center gap-1.5" title={t.totals.videos}><PlayCircle aria-hidden size={17} />{fmt(s.videos)}</span>}
                        {s.notes > 0 && <span className="inline-flex items-center gap-1.5" title={t.totals.notes}><FileText aria-hidden size={17} />{fmt(s.notes)}</span>}
                      </span>
                      <CaretDown aria-hidden size={16} className={`shrink-0 text-muted transition-transform duration-300 ${on ? "rotate-180 text-brand" : ""}`} />
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-soft)] ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <ol className="grid gap-x-8 gap-y-2 px-4 pb-5 pl-4 text-[14px] sm:pl-[4.25rem] text-muted sm:grid-cols-2 md:px-5 md:pl-[4.5rem]">
                          {s.chapters.map((ch, j) => (
                            <li key={j} className="flex gap-3">
                              <span className="w-5 shrink-0 text-right font-mono text-[12px] leading-[1.6rem] text-brand/70 tabular-nums">{fmt(j + 1)}</span>
                              <span className="leading-relaxed">{ch}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          <Link href={hrefs[active]} className="press group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[15px] font-medium text-bg hover:bg-brand hover:text-on-brand">
            {t.view.replace("{class}", c.label)}
            <ArrowRight aria-hidden size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
