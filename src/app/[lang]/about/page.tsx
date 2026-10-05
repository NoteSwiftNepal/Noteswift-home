import Link from "next/link";
import { ArrowUpRight, GraduationCap, UsersThree, ChalkboardTeacher, Buildings, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { about } from "@/content/about";
import { common } from "@/content/common";
import PageHero from "@/components/ui/PageHero";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">) {
  const lang = (await params).lang as Locale;
  const { title, description } = about[lang].meta;
  return pageMetadata({ locale: lang, path: "/about", title, description });
}

const appIcons = { student: GraduationCap, parent: UsersThree, teacher: ChalkboardTeacher, school: Buildings };

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const lang = (await params).lang as Locale;
  const t = about[lang];
  const c = common[lang];
  const L = (p: string) => localePath(lang, p);

  return (
    <>
      <PageHero lang={lang} crumbs={[{ name: t.crumb, path: "/about" }]} eyebrow={t.hero.eyebrow} title={t.hero.title} lead={t.hero.lead} />

      {/* Story: split */}
      <section className="container-site grid gap-10 py-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Heading title={t.why.title} />
        <Reveal className="space-y-5 text-[17px] leading-[1.75] text-ink-soft">
          {t.why.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </Reveal>
      </section>

      {/* Mission and vision: two large panels */}
      <section aria-labelledby="mission" className="container-site py-10">
        <h2 id="mission" className="sr-only">{t.mission.title}</h2>
        <div className="grid gap-5 md:grid-cols-[1.25fr_1fr]">
          {t.mission.items.map((m, i) => (
            <Reveal key={m.label} delay={i * 80} className={`rounded-[2rem] border border-line p-8 md:p-12 ${i === 0 ? "bg-brand-soft" : "bg-surface"}`}>
              <p className="text-sm font-medium text-brand">{m.label}</p>
              <p className="t-h2 mt-5 text-balance text-ink">{m.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values: numbered list rows */}
      <section className="container-site mt-24">
        <Heading title={t.values.title} lead={t.values.lead} />
        <ol className="mt-10 border-t border-line">
          {t.values.items.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 60} className="grid gap-2 border-b border-line py-7 md:grid-cols-[4rem_1fr_1.4fr] md:items-baseline md:gap-6">
              <span className="text-sm font-medium tabular-nums text-brand">0{i + 1}</span>
              <h3 className="t-h3 text-ink">{v.title}</h3>
              <p className="text-[16px] leading-relaxed text-ink-soft">{v.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Ecosystem: bento */}
      <section className="container-site mt-24">
        <Heading title={t.apps.title} lead={t.apps.lead} />
        <div className="mt-10 grid gap-5 md:grid-cols-3 md:grid-rows-3">
          {t.apps.items.map((a, i) => {
            const Icon = appIcons[a.key as keyof typeof appIcons];
            const href = site.portals[a.key as keyof typeof site.portals];
            const big = i === 0;
            return (
              <Reveal key={a.key} delay={i * 80} className={big ? "md:col-span-2 md:row-span-3" : ""}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={`group flex h-full flex-col justify-between gap-10 rounded-[1.25rem] border border-line p-6 transition-colors hover:border-ink/30 md:p-7 ${big ? "bg-brand-soft md:p-12" : "bg-surface"}`}>
                  <span className={`flex items-center justify-center rounded-xl bg-bg text-brand ${big ? "size-14" : "size-11"}`}><Icon aria-hidden size={big ? 30 : 24} weight="duotone" /></span>
                  <span>
                    <span className={`block font-semibold text-ink ${big ? "t-h2" : "t-h3"}`}>{a.title}</span>
                    <span className="mt-2 block max-w-[44ch] text-[15px] leading-relaxed text-ink-soft">{a.body}</span>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                      {t.apps.open} <ArrowUpRight aria-hidden size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Related links: simple rows */}
      <section className="container-site mt-24">
        <Heading title={t.links.title} />
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {t.links.items.map((l) => (
            <li key={l.href}>
              <Link href={L(l.href)} className="group flex items-center justify-between gap-4 py-6">
                <span>
                  <span className="t-h3 block text-ink">{l.label}</span>
                  <span className="mt-1 block text-[15px] text-muted">{l.body}</span>
                </span>
                <ArrowRight aria-hidden size={20} className="shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-brand" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title={t.cta.title} lead={t.cta.lead}>
        <Button href={L("/contact")}>{c.cta.contact}</Button>
      </CtaBand>
    </>
  );
}
