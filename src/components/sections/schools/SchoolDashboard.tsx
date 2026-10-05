/**
 * Preview of the Note Swift school portal. Sidebar entries match real portal modules.
 * All figures are sample data and are labelled as such. Built from theme tokens so it follows light and dark mode.
 */
import {
  SquaresFour, CalendarCheck, ClipboardText, Question, ChartPie, Clock, UsersThree, IdentificationCard, Certificate, Envelope,
  Warning, FileArrowDown, DownloadSimple,
} from "@phosphor-icons/react/dist/ssr";
import type { SchoolsCopy } from "@/content/schools";

const icons = [SquaresFour, CalendarCheck, ClipboardText, Question, ChartPie, Clock, UsersThree, IdentificationCard, Certificate, Envelope];
const classes: [string, number][] = [["6", 94], ["7", 92], ["8", 95], ["9", 82], ["10", 93], ["11", 91], ["12", 94]];
const tones = ["bg-amber-500/15", "bg-brand-soft", "bg-surface-2"];

export default function SchoolDashboard({ d }: { d: SchoolsCopy["dash"] }) {
  return (
    <figure role="img" aria-label={d.label} className="relative">
      <div aria-hidden className="brand-aura absolute -inset-10 -z-10 blur-2xl" />
      <div className="overflow-hidden rounded-[1.25rem] border border-line bg-surface text-ink shadow-soft">
        <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="mx-auto rounded-full bg-surface px-4 py-1 text-[11px] text-muted ring-1 ring-line">{d.host}</span>
        </div>
        <div className="flex">
          <aside aria-hidden className="hidden w-44 shrink-0 border-r border-line p-3 sm:block">
            <p className="px-2 pb-3 text-[13px] font-semibold">Note Swift <span className="font-normal text-muted">{d.brand}</span></p>
            <ul className="space-y-0.5">
              {d.nav.map((l, i) => {
                const Icon = icons[i];
                return (
                  <li key={l} className={`flex items-center gap-2 rounded-[10px] px-2 py-1.5 text-[11px] font-medium ${i === 0 ? "bg-brand-soft text-brand" : "text-muted"}`}>
                    <Icon size={14} weight={i === 0 ? "fill" : "regular"} />
                    {l}
                  </li>
                );
              })}
            </ul>
          </aside>
          <div aria-hidden className="min-w-0 flex-1 bg-surface-2/50 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[15px] font-semibold">{d.title}</p>
                <p className="text-[11px] text-muted">{d.sub}</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 text-[11px] font-medium text-on-brand">
                <DownloadSimple size={12} /> {d.report}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5 xl:grid-cols-4">
              {d.kpis.map((k) => (
                <div key={k.label} className="rounded-[14px] bg-surface p-3 ring-1 ring-line">
                  <p className="text-[10px] text-muted">{k.label}</p>
                  <p className="mt-1 text-[18px] font-semibold tracking-tight">{k.value}</p>
                  <p className="text-[10px] text-muted">{k.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-2.5 grid gap-2.5 md:grid-cols-[1.4fr_1fr]">
              <div className="rounded-[14px] bg-surface p-3 ring-1 ring-line">
                <p className="text-[11px] font-semibold">{d.chart}</p>
                <div className="mt-3 flex h-28 items-end gap-2">
                  {classes.map(([c, v]) => (
                    <div key={c} className="flex flex-1 flex-col items-center gap-1">
                      <span className="text-[9px] text-muted">{v}</span>
                      <span className={`w-full rounded-t-[6px] ${c === "9" ? "bg-amber-500" : "bg-brand opacity-85"}`} style={{ height: `${(v - 60) * 2.6}px` }} />
                      <span className="text-[9px] text-muted">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[14px] bg-surface p-3 ring-1 ring-line">
                <ul className="space-y-1.5">
                  {d.alerts.map((a, i) => (
                    <li key={a} className={`flex items-start gap-2 rounded-[10px] p-2 text-[10.5px] leading-snug ${tones[i]}`}>
                      {i === 0 ? <Warning size={12} className="mt-px shrink-0 text-amber-500" /> : <FileArrowDown size={12} className="mt-px shrink-0 text-brand" />}
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-right text-[12px] text-muted">{d.sample}</figcaption>
    </figure>
  );
}
