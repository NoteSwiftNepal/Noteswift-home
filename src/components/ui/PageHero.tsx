import type { ReactNode } from "react";
import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { JsonLd, breadcrumbLd } from "@/lib/seo";
import { localePath, type Locale } from "@/lib/i18n";
import { common } from "@/content/common";

/**
 * Standard inner-page hero: breadcrumb (with JSON-LD), H1, lead, optional actions and visual.
 * `crumbs` excludes Home; the last crumb is the current page.
 */
export default function PageHero({
  lang,
  crumbs,
  eyebrow,
  title,
  lead,
  actions,
  visual,
}: {
  lang: Locale;
  crumbs: { name: string; path: string }[];
  eyebrow?: string;
  title: string;
  lead?: string;
  actions?: ReactNode;
  visual?: ReactNode;
}) {
  const all = [{ name: common[lang].breadcrumbHome, path: "/" }, ...crumbs];
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="brand-aura pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[60%] opacity-70 blur-3xl" />
      <JsonLd data={breadcrumbLd(lang, all)} />
      <div className={`container-site relative grid gap-12 pb-16 pt-14 md:pt-20 ${visual ? "lg:grid-cols-[1.1fr_1fr] lg:items-center" : ""}`}>
        <div>
          <nav aria-label="Breadcrumb" className="anim-rise mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted">
              {all.map((c, i) => (
                <li key={c.path} className="flex items-center gap-1.5">
                  {i > 0 && <CaretRight aria-hidden size={11} />}
                  {i === all.length - 1 ? (
                    <span aria-current="page" className="text-ink">{c.name}</span>
                  ) : (
                    <Link href={localePath(lang, c.path)} className="hover:text-ink">{c.name}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          {eyebrow && <p className="anim-rise mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-brand">{eyebrow}</p>}
          <h1 className="anim-rise t-display max-w-4xl text-balance" style={{ "--d": "60ms" } as React.CSSProperties}>{title}</h1>
          {lead && <p className="anim-rise t-lead mt-6 max-w-[58ch] text-pretty" style={{ "--d": "120ms" } as React.CSSProperties}>{lead}</p>}
          {actions && <div className="anim-rise mt-9 flex flex-wrap gap-3" style={{ "--d": "180ms" } as React.CSSProperties}>{actions}</div>}
        </div>
        {visual && <div className="anim-rise relative" style={{ "--d": "200ms" } as React.CSSProperties}>{visual}</div>}
      </div>
    </section>
  );
}
