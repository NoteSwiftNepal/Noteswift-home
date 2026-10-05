"use client";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SlidersHorizontal, Sun, Moon, Desktop } from "@phosphor-icons/react";
import type { CommonCopy } from "@/content/common";
import { applyPrefs, defaultPrefs, readPrefs, type Prefs as P } from "@/lib/prefs";

export default function Prefs({ t }: { t: CommonCopy["prefs"] }) {
  const [open, setOpen] = useState(false);
  const [p, setP] = useState<P>(defaultPrefs);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const pathname = usePathname();

  // Re-apply on every navigation: switching language swaps the root layout, which re-renders <html> without our attributes.
  useEffect(() => applyPrefs(readPrefs()), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const set = (patch: Partial<P>) => {
    const next = { ...p, ...patch };
    setP(next);
    applyPrefs(next);
  };

  const themes = [
    { v: "system", label: t.themes.system, Icon: Desktop },
    { v: "light", label: t.themes.light, Icon: Sun },
    { v: "dark", label: t.themes.dark, Icon: Moon },
  ] as const;

  const toggles = [
    { k: "contrast", label: t.contrast },
    { k: "motion", label: t.motion },
    { k: "links", label: t.links },
  ] as const;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={t.open}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => {
          if (!open) setP(readPrefs());
          setOpen(!open);
        }}
        className={`press inline-flex size-10 items-center justify-center rounded-full text-muted hover:bg-surface-2 hover:text-ink ${open ? "bg-surface-2 text-ink" : ""}`}
      >
        <SlidersHorizontal size={18} />
      </button>
      <div
        id={id}
        role="dialog"
        aria-label={t.open}
        className={`glass glass-nav absolute right-0 top-full mt-3 w-[min(19rem,calc(100vw-1.5rem))] rounded-[1.25rem] p-4 transition-all duration-300 ease-[var(--ease-out-soft)] ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <fieldset>
          <legend className="mb-2 text-[13px] font-medium text-muted">{t.theme}</legend>
          <div className="grid grid-cols-3 gap-1 rounded-full bg-surface-2 p-1">
            {themes.map(({ v, label, Icon }) => (
              <label key={v} className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-full py-1.5 text-[13px] font-medium transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand ${p.theme === v ? "bg-surface text-ink shadow-soft" : "text-muted hover:text-ink"}`}>
                <input type="radio" name={`${id}-theme`} value={v} checked={p.theme === v} onChange={() => set({ theme: v })} className="sr-only" />
                <Icon aria-hidden size={14} />
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-4">
          <legend className="mb-2 text-[13px] font-medium text-muted">{t.text}</legend>
          <div className="grid grid-cols-3 gap-1 rounded-full bg-surface-2 p-1">
            {t.texts.map((label, i) => (
              <label key={label} className={`flex cursor-pointer items-center justify-center rounded-full py-1.5 font-medium transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand ${p.text === i ? "bg-surface text-ink shadow-soft" : "text-muted hover:text-ink"}`} style={{ fontSize: 12 + i * 1.5 }}>
                <input type="radio" name={`${id}-text`} checked={p.text === i} onChange={() => set({ text: i as P["text"] })} className="sr-only" />
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        <ul className="mt-4 space-y-1">
          {toggles.map(({ k, label }) => (
            <li key={k}>
              <label className="flex cursor-pointer items-center justify-between rounded-xl px-1 py-2 text-[14px] text-ink">
                {label}
                <input type="checkbox" role="switch" checked={p[k]} onChange={(e) => set({ [k]: e.target.checked })} className="peer sr-only" />
                <span aria-hidden className="relative h-6 w-10 rounded-full bg-line transition-colors peer-checked:bg-brand peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand after:absolute after:left-0.5 after:top-0.5 after:size-5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:after:translate-x-4" />
              </label>
            </li>
          ))}
        </ul>

        <button type="button" onClick={() => set(defaultPrefs)} className="press mt-3 w-full rounded-full border border-line py-2 text-[13px] font-medium text-muted hover:text-ink">
          {t.reset}
        </button>
      </div>
    </div>
  );
}
