import { CaretDown, Users, DeviceMobile, BookOpen, ChartLineUp, FileText, Headset } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pageMetadata, JsonLd, faqLd } from "@/lib/seo";
import { partnership } from "@/content/partnership";
import { common } from "@/content/common";
import PageHero from "@/components/ui/PageHero";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";

const includedIcons = { portals: Users, dashboard: DeviceMobile, resources: BookOpen, insights: ChartLineUp, reports: FileText, support: Headset } as const;

export async function generateMetadata({ params }: PageProps<"/[lang]/school-partnership">) {
  const lang = (await params).lang as Locale;
  return pageMetadata({ locale: lang, path: "/school-partnership", ...partnership[lang].meta });
}

export default async function SchoolPartnershipPage({ params }: PageProps<"/[lang]/school-partnership">) {
  const lang = (await params).lang as Locale;
  const t = partnership[lang];
  const c = common[lang];
  const mail = `mailto:${site.email.contact}?subject=${encodeURIComponent(t.mailSubject)}`;

  return (
    <>
      <PageHero
        lang={lang}
        crumbs={[{ name: t.hero.eyebrow, path: "/school-partnership" }]}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={
          <>
            <Button href={mail}>{t.cta.email}</Button>
            <Button href={localePath(lang, "/contact")} variant="secondary" arrow={false}>{c.cta.contact}</Button>
          </>
        }
      />

      {/* Steps: timeline */}
      <section className="container-site">
        <Heading title={t.steps.title} lead={t.steps.lead} />
        <ol className="relative mt-12 space-y-8 border-l border-line pl-8 md:ml-4 md:pl-12">
          {t.steps.items.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 60} className="relative">
              <span className="absolute -left-[3.05rem] top-0 flex size-9 items-center justify-center rounded-full bg-brand text-[14px] font-semibold text-on-brand ring-4 ring-[var(--bg)] md:-left-[4.05rem]">{i + 1}</span>
              <h3 className="t-h3">{s.title}</h3>
              <p className="mt-2 max-w-[60ch] text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Included: sticky heading + rows */}
      <section className="mt-28 bg-surface-2/60 py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Heading title={t.included.title} />
          </div>
          <ul className="border-t border-line">
            {t.included.items.map((it, i) => {
              const Icon = includedIcons[it.key as keyof typeof includedIcons];
              return (
                <Reveal as="li" key={it.key} delay={i * 40} className="flex gap-4 border-b border-line py-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon aria-hidden size={22} />
                  </span>
                  <span>
                    <span className="block text-[17px] font-semibold">{it.title}</span>
                    <span className="mt-1 block text-[15px] leading-relaxed text-muted">{it.body}</span>
                  </span>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* FAQ: accordion */}
      <section className="container-site mt-28">
        <JsonLd data={faqLd(t.faq.items)} />
        <Heading title={t.faq.title} />
        <Reveal className="mt-10 max-w-3xl divide-y divide-line border-y border-line">
          {t.faq.items.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <CaretDown aria-hidden size={18} className="shrink-0 text-muted transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-3 max-w-[62ch] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </section>

      <CtaBand title={t.cta.title} lead={t.cta.lead}>
        <Button href={mail}>{t.cta.email}</Button>
        <Button href={localePath(lang, "/contact")} variant="secondary" arrow={false}>{c.cta.contact}</Button>
        <Button href={site.portals.school} variant="ghost">{t.cta.portal}</Button>
      </CtaBand>
    </>
  );
}
