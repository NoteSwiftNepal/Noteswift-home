"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CaretDown, List, X, ArrowRight, Translate } from "@phosphor-icons/react";
import type { CommonCopy } from "@/content/common";
import { localePath, stripLocale, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import Logo from "./Logo";
import Prefs from "./Prefs";

export default function Header({ lang, t }: { lang: Locale; t: CommonCopy }) {
  const pathname = usePathname();
  const path = stripLocale(pathname);
  const [open, setOpen] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const other: Locale = lang === "en" ? "ne" : "en";
  const L = (p: string) => localePath(lang, p);

  // Close menus on navigation (state reset during render), outside click and Escape.
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setOpen(null);
    setMobile(false);
  }
  useEffect(() => {
    const onDown = (e: PointerEvent) => !navRef.current?.contains(e.target as Node) && setOpen(null);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (setOpen(null), setMobile(false));
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const isActive = (items: { href: string }[]) => items.some((i) => path === i.href || path.startsWith(i.href + "/"));

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <div className="glass glass-nav mx-auto flex h-14 max-w-[78rem] items-center justify-between gap-4 rounded-xl pl-5 pr-2">
        <Link href={L("/")} aria-label={t.homeLabel} className="shrink-0 rounded-full">
          <Logo />
        </Link>

        <nav ref={navRef} aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {t.nav.map((group, i) => (
              <li key={group.label} className="relative" onMouseEnter={() => setOpen(i)} onMouseLeave={() => setOpen(null)}>
                <button
                  type="button"
                  aria-expanded={open === i}
                  aria-controls={`nav-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`press inline-flex h-9 items-center gap-1 rounded-full px-3.5 text-[14px] font-medium transition-colors ${
                    isActive(group.items) ? "text-ink" : "text-muted hover:text-ink"
                  } ${open === i ? "bg-surface-2 text-ink" : ""}`}
                >
                  {group.label}
                  <CaretDown aria-hidden size={12} weight="bold" className={`transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div
                  id={`nav-${i}`}
                  className={`absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3 transition-all duration-300 ease-[var(--ease-out-soft)] ${
                    open === i ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <ul className="glass glass-nav rounded-xl p-2">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={L(item.href)}
                          aria-current={path === item.href ? "page" : undefined}
                          className="group flex items-start justify-between gap-3 rounded-xl px-3.5 py-3 transition-colors hover:bg-surface-2/80"
                        >
                          <span>
                            <span className="block text-[14px] font-medium text-ink">{item.label}</span>
                            <span className="mt-0.5 block text-[13px] text-muted">{item.desc}</span>
                          </span>
                          <ArrowRight aria-hidden size={14} className="mt-1 shrink-0 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href={localePath(other, path)}
            prefetch={false}
            hrefLang={other}
            lang={other}
            aria-label={t.lang.switchToLabel}
            className="press hidden h-9 items-center gap-1.5 rounded-full px-3 text-[14px] font-medium text-muted hover:bg-surface-2 hover:text-ink sm:inline-flex"
          >
            <Translate aria-hidden size={16} />
            {t.lang.switchTo}
          </Link>
          <Prefs t={t.prefs} />
          <a
            href={site.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="press ml-1 hidden h-10 items-center rounded-full bg-brand px-5 text-[14px] font-medium text-on-brand hover:bg-brand-strong sm:inline-flex"
          >
            {t.cta.start}
          </a>
          <button
            type="button"
            onClick={() => setMobile(!mobile)}
            aria-expanded={mobile}
            aria-controls="mobile-menu"
            aria-label={mobile ? t.menu.close : t.menu.open}
            className="press inline-flex size-10 items-center justify-center rounded-full text-ink hover:bg-surface-2 lg:hidden"
          >
            {mobile ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-3 bottom-3 top-[4.75rem] z-40 overflow-y-auto rounded-xl transition-all duration-300 ease-[var(--ease-out-soft)] lg:hidden glass glass-nav ${
          mobile ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex min-h-full flex-col p-5">
          {t.nav.map((group) => (
            <div key={group.label} className="border-b border-line py-4 last:border-0">
              <p className="mb-2 text-[13px] font-medium text-muted">{group.label}</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={L(item.href)} className="block rounded-lg py-1.5 text-[15px] font-medium text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-auto flex flex-col gap-3 pt-6">
            <a href={site.appUrl} target="_blank" rel="noopener noreferrer" className="press inline-flex h-12 items-center justify-center rounded-full bg-brand font-medium text-on-brand">
              {t.cta.start}
            </a>
            <Link href={localePath(other, path)}
            prefetch={false} hrefLang={other} lang={other} className="press inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line font-medium text-ink">
              <Translate aria-hidden size={16} />
              {t.lang.switchTo}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
