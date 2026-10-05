import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen } from "@phosphor-icons/react/dist/ssr";
import { localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { JsonLd, faqLd, pageMetadata } from "@/lib/seo";
import { courses, courseSlugs } from "@/content/courses";
import { coursesPage } from "@/content/coursesPage";
import { common } from "@/content/common";
import PageHero from "@/components/ui/PageHero";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import Faq from "@/components/sections/product/Faq";
import Includes from "@/components/sections/product/Includes";
import Phone from "@/components/phone/Phone";
import { LearnScreen } from "@/components/phone/screens";

export function generateStaticParams() {
  return courseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/courses/[slug]">) {
  const { lang: l, slug } = await params;
  const lang = l as Locale;
  const course = courses[lang].find((c) => c.slug === slug);
  if (!course) return {};
  return pageMetadata({
    locale: lang,
    path: `/courses/${slug}`,
    title: `${course.label} ${lang === "ne" ? "कोर्स" : "course"}: ${course.syllabus}`,
    description: course.summary,
  });
}

const fill = (s: string, vars: Record<string, string>) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");

export default async function CoursePage({ params }: PageProps<"/[lang]/courses/[slug]">) {
  const { lang: l, slug } = await params;
  const lang = l as Locale;
  const course = courses[lang].find((c) => c.slug === slug);
  if (!course) notFound();

  const t = coursesPage[lang];
  const d = t.detail;
  const c = common[lang];
  const vars = { label: course.label, syllabus: course.syllabus, tracks: course.tracks.map((x) => x.name).join(lang === "ne" ? " र " : " and ") };
  const faqItems = Object.values(d.faq).map((f) => ({ q: fill(f.q, vars), a: fill(f.a, vars) }));
  const others = courses[lang].filter((x) => x.slug !== slug);

  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${course.label} ${course.title}`,
    description: course.summary,
    inLanguage: lang,
    provider: { "@id": `${site.url}/#organization` },
    educationalLevel: course.exam === "SEE" ? d.levelSee : d.levelNeb,
    url: new URL(localePath(lang, `/courses/${slug}`), site.url).toString(),
  };

  return (
    <>
      <JsonLd data={[courseLd, faqLd(faqItems)]} />
      <PageHero
        lang={lang}
        crumbs={[
          { name: t.crumb, path: "/courses" },
          { name: course.label, path: `/courses/${slug}` },
        ]}
        eyebrow={`${course.label}, ${course.syllabus}`}
        title={course.title}
        lead={course.summary}
        actions={
          <>
            <Button href={site.appUrl}>{c.cta.start}</Button>
            <Button href={localePath(lang, "/courses")} variant="secondary" arrow={false}>{d.openCatalogue}</Button>
          </>
        }
        visual={
          <div className="hidden justify-center lg:flex">
            <Phone label={course.title} scale={0.6}>
              <LearnScreen />
            </Phone>
          </div>
        }
      />
      {/* Tracks */}
      <section className="container-site mt-28">
        <Heading title={d.tracksTitle} lead={d.tracksLead} />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {course.tracks.map((tr, i) => (
            <Reveal key={tr.key} delay={i * 80} className={`rounded-[2rem] border border-line p-7 md:p-10 ${i === 0 ? "bg-brand-soft" : "bg-surface"}`}>
              <h3 className="t-h2 text-balance">{tr.name}</h3>
              <p className="mt-3 max-w-[44ch] text-muted">{tr.desc}</p>
              <p className="mt-8 flex items-center gap-2 text-[13px] font-medium text-muted">
                <BookOpen aria-hidden size={15} /> {tr.subjects.length} {d.subjectCount}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {tr.subjects.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-[14px] text-ink-soft">{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <Includes variant="rows" title={d.includesTitle} lead={d.includesLead} items={t.includes.items} />

      {/* Enrol note */}
      <section className="container-site mt-32">
        <Reveal className="flex flex-col gap-6 rounded-[2rem] border border-line bg-surface p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="t-h3">{d.enrolTitle}</h2>
            <p className="mt-2 max-w-[52ch] text-muted">{d.enrolBody}</p>
          </div>
          <Button href={site.appUrl}>{c.cta.start}</Button>
        </Reveal>
      </section>

      <Faq title={d.faqTitle} items={faqItems} />

      {/* Other classes */}
      <section className="container-site mt-32">
        <h2 className="t-h3">{d.otherTitle}</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={localePath(lang, `/courses/${o.slug}`)} className="press group flex items-center justify-between gap-4 rounded-[1.25rem] border border-line bg-surface p-5 hover:border-ink/30">
                <span>
                  <span className="block font-semibold">{o.label}</span>
                  <span className="text-[14px] text-muted">{o.syllabus}</span>
                </span>
                <ArrowRight aria-hidden size={18} className="text-brand transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title={fill(d.cta.title, vars)} lead={d.cta.lead}>
        <Button href={site.appUrl}>{c.cta.start}</Button>
        <Button href={site.playStore} variant="secondary">{c.cta.app}</Button>
      </CtaBand>
    </>
  );
}
