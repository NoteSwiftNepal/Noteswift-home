import { Info } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { legalShared, legalUpdated, type LegalDoc } from "@/content/legal";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

// Day month year in both languages (ne-NP's default order is year first).
const fmt = (lang: Locale) => {
  const parts = new Intl.DateTimeFormat(lang === "ne" ? "ne-NP" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).formatToParts(new Date(legalUpdated));
  const get = (t: string) => parts.find((p) => p.type === t)?.value;
  return `${get("day")} ${get("month")} ${get("year")}`;
};

/** One shared layout for privacy, terms and refund policy. Sticky TOC on desktop. */
export default function LegalLayout({ lang, doc, path }: { lang: Locale; doc: LegalDoc; path: string }) {
  const s = legalShared[lang];
  const date = lang === "en" ? "5 October 2026" : fmt(lang);
  return (
    <>
      <PageHero lang={lang} crumbs={[{ name: doc.title, path }]} title={doc.title} lead={doc.intro} />
      <div className="container-site grid gap-10 pb-8 lg:grid-cols-[16rem_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm text-muted">{s.updated}: <time dateTime={legalUpdated}>{date}</time></p>
          <nav aria-label={s.toc} className="mt-5 hidden lg:block">
            <p className="mb-3 text-[13px] font-medium text-ink">{s.toc}</p>
            <ol className="space-y-1 border-l border-line">
              {doc.sections.map((sec, i) => (
                <li key={sec.id}>
                  <a href={`#${sec.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted hover:border-brand hover:text-ink">
                    {i + 1}. {sec.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <article className="max-w-3xl">
          {s.translationNote && (
            <div role="note" className="mb-10 flex gap-3 rounded-[1.25rem] border border-line bg-surface-2 p-5 text-[15px] text-ink-soft">
              <Info aria-hidden size={20} weight="duotone" className="mt-0.5 shrink-0 text-brand" />
              <p>{s.translationNote}</p>
            </div>
          )}
          {doc.sections.map((sec, i) => (
            <Reveal key={sec.id} as="section" className="scroll-mt-28 border-t border-line py-9 first:border-t-0 first:pt-0">
              <h2 id={sec.id} className="t-h3 scroll-mt-28 text-ink">{i + 1}. {sec.title}</h2>
              <div className="mt-4 space-y-4 text-[16px] leading-[1.75] text-ink-soft">
                {sec.body.map((b, j) =>
                  Array.isArray(b) ? (
                    <ul key={j} className="list-disc space-y-2 pl-5 marker:text-brand">
                      {b.map((li) => <li key={li}>{li}</li>)}
                    </ul>
                  ) : (
                    <p key={j}>{b}</p>
                  ),
                )}
              </div>
            </Reveal>
          ))}
        </article>
      </div>
    </>
  );
}
