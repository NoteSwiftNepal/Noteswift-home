import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CaretDown, CheckCircle, FileText, PlayCircle } from "@phosphor-icons/react/dist/ssr";
import { localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { JsonLd, faqLd, pageMetadata } from "@/lib/seo";
import { courses, prices, trackParams } from "@/content/courses";
import { coursesPage } from "@/content/coursesPage";
import { home } from "@/content/home";
import catalog from "@/content/catalog.json";
import PageHero from "@/components/ui/PageHero";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import Faq from "@/components/sections/product/Faq";
import Includes from "@/components/sections/product/Includes";

type Subject = { name: string; videos: number; notes: number; chapters: string[] };

export function generateStaticParams() {
  return trackParams;
}

function find(lang: Locale, slug: string, track: string) {
  const course = courses[lang].find((c) => c.slug === slug);
  const tr = course?.tracks.find((t) => t.key === track);
  return course && tr ? { course, tr, name: `${course.label} ${tr.name}` } : null;
}

export async function generateMetadata({ params }: PageProps<"/[lang]/courses/[slug]/[track]">) {
  const { lang: l, slug, track } = await params;
  const lang = l as Locale;
  const f = find(lang, slug, track);
  if (!f) return {};
  return pageMetadata({ locale: lang, path: `/courses/${slug}/${track}`, title: `${f.name}: ${f.course.syllabus}`, description: `${f.tr.desc} ${f.course.summary}` });
}

const fill = (s: string, vars: Record<string, string>) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");

export default async function TrackPage({ params }: PageProps<"/[lang]/courses/[slug]/[track]">) {
  const { lang: l, slug, track } = await params;
  const lang = l as Locale;
  const f = find(lang, slug, track);
  if (!f) notFound();
  const { course, tr, name } = f;

  const p = coursesPage[lang];
  const t = p.track;
  const fmt = new Intl.NumberFormat(lang === "ne" ? "ne-NP" : "en-US").format;
  const price = prices[`${slug}/${track}`];
  const subjects = ((catalog as Record<string, Subject[]>)[`${slug}/${track}`] ?? []) as Subject[];
  const totals = [
    [t.totals.subjects, subjects.length],
    [t.totals.chapters, subjects.reduce((a, s) => a + s.chapters.length, 0)],
    [t.totals.videos, subjects.reduce((a, s) => a + s.videos, 0)],
    [t.totals.notes, subjects.reduce((a, s) => a + s.notes, 0)],
  ] as const;

  const vars = { label: course.label, syllabus: course.syllabus, tracks: course.tracks.map((x) => x.name).join(lang === "ne" ? " र " : " and ") };
  const { enrol: _, tracks: __, ...faq } = p.detail.faq;
  const faqItems = [t.faqEnroll, ...Object.values(faq).map((x) => ({ q: fill(x.q, vars), a: fill(x.a, vars) }))];
  const others = courses[lang].flatMap((c) => c.tracks.map((x) => ({ c, x }))).filter(({ c, x }) => !(c.slug === slug && x.key === track));

  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description: tr.desc,
    inLanguage: lang,
    provider: { "@id": `${site.url}/#organization` },
    offers: { "@type": "Offer", price, priceCurrency: "NPR", category: "Paid", url: site.enrollUrl },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "Online" },
  };

  return (
    <>
      <JsonLd data={[courseLd, faqLd(faqItems)]} />
      <PageHero
        lang={lang}
        crumbs={[
          { name: p.crumb, path: "/courses" },
          { name: course.label, path: `/courses/${slug}` },
          { name: tr.name, path: `/courses/${slug}/${track}` },
        ]}
        eyebrow={course.syllabus}
        title={name}
        lead={tr.desc}
        visual={
          <div className="anim-rise rounded-[2rem] border border-line bg-surface p-7 shadow-soft md:p-9" style={{ "--d": "120ms" } as React.CSSProperties}>
            <p className="text-[14px] font-medium text-muted">{t.fee}</p>
            <p className="mt-2 flex items-baseline gap-2">
              <span className="text-[18px] font-semibold text-ink">Rs</span>
              <span className="text-[3.25rem] font-semibold leading-none tracking-[-0.04em] tabular-nums text-ink">{fmt(price)}</span>
            </p>
            <p className="mt-3 text-[15px] text-muted">{t.feeNote}</p>
            <Button href={site.enrollUrl} className="mt-7 w-full">{t.enroll}</Button>
            <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
              {totals.map(([label, n]) => (
                <div key={label} className="bg-surface px-4 py-3">
                  <dt className="text-[12px] text-muted">{label}</dt>
                  <dd className="mt-0.5 text-[20px] font-semibold tracking-[-0.02em] tabular-nums">{fmt(n)}</dd>
                </div>
              ))}
            </dl>
          </div>
        }
      />

      {/* Curriculum: one native disclosure per subject */}
      <section className="container-site mt-20">
        <Heading title={t.curriculumTitle} lead={t.curriculumLead} />
        <ul className="mt-12 grid gap-3 md:grid-cols-2">
          {subjects.map((s, i) => (
            <Reveal as="li" key={s.name} delay={(i % 4) * 50}>
              <details className="group rounded-[1.25rem] border border-line bg-surface open:border-ink/20">
                <summary className="flex cursor-pointer list-none items-center gap-4 p-5 [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-ink">{s.name}</span>
                    <span className="mt-0.5 flex flex-wrap gap-x-4 text-[13px] text-muted tabular-nums">
                      <span>{fmt(s.chapters.length)} {t.chapters}</span>
                      {s.videos > 0 && <span className="inline-flex items-center gap-1"><PlayCircle aria-hidden size={15} />{fmt(s.videos)}</span>}
                      {s.notes > 0 && <span className="inline-flex items-center gap-1"><FileText aria-hidden size={15} />{fmt(s.notes)}</span>}
                    </span>
                  </span>
                  <CaretDown aria-hidden size={16} className="shrink-0 text-muted transition-transform duration-300 group-open:rotate-180 group-open:text-brand" />
                </summary>
                <ol className="grid gap-2 px-5 pb-5 text-[14px] text-muted">
                  {s.chapters.map((ch, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="w-5 shrink-0 text-right font-mono text-[12px] leading-[1.6rem] text-brand/70 tabular-nums">{fmt(j + 1)}</span>
                      <span className="leading-relaxed">{ch}</span>
                    </li>
                  ))}
                </ol>
              </details>
            </Reveal>
          ))}
        </ul>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {home[lang].courses.features.map((x) => (
            <li key={x} className="flex items-center gap-2 text-[14px] text-ink-soft">
              <CheckCircle aria-hidden size={18} weight="fill" className="text-brand" /> {x}
            </li>
          ))}
        </ul>
      </section>

      <Includes variant="rows" title={p.detail.includesTitle} lead={p.detail.includesLead} items={p.includes.items} />

      <Faq title={p.detail.faqTitle} items={faqItems} />

      {/* Other courses */}
      <section className="container-site mt-32">
        <h2 className="t-h3">{t.otherTitle}</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map(({ c, x }) => (
            <li key={`${c.slug}/${x.key}`}>
              <Link href={localePath(lang, `/courses/${c.slug}/${x.key}`)} className="press group flex items-center justify-between gap-4 rounded-[1.25rem] border border-line bg-surface p-5 hover:border-ink/30">
                <span>
                  <span className="block font-semibold">{c.label} {x.name}</span>
                  <span className="text-[14px] text-muted tabular-nums">Rs {fmt(prices[`${c.slug}/${x.key}`])}</span>
                </span>
                <ArrowRight aria-hidden size={18} className="text-brand transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title={fill(t.cta.title, { course: name })} lead={t.cta.lead}>
        <Button href={site.enrollUrl}>{t.enroll}</Button>
      </CtaBand>
    </>
  );
}
