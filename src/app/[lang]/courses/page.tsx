import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { courses } from "@/content/courses";
import { coursesPage } from "@/content/coursesPage";
import { common } from "@/content/common";
import PageHero from "@/components/ui/PageHero";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import Includes from "@/components/sections/product/Includes";

export async function generateMetadata({ params }: PageProps<"/[lang]/courses">) {
  const lang = (await params).lang as Locale;
  return pageMetadata({ locale: lang, path: "/courses", ...coursesPage[lang].meta });
}

export default async function CoursesPage({ params }: PageProps<"/[lang]/courses">) {
  const lang = (await params).lang as Locale;
  const t = coursesPage[lang];
  const c = common[lang];
  const list = courses[lang];

  return (
    <>
      <PageHero
        lang={lang}
        crumbs={[{ name: t.crumb, path: "/courses" }]}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={<Button href={site.appUrl}>{c.cta.start}</Button>}
      />

      {/* Anchor nav */}
      <nav aria-label={t.jumpLabel} className="container-site">
        <ul className="flex flex-wrap gap-2">
          {list.map((course) => (
            <li key={course.slug}>
              <a href={`#${course.slug}`} className="press flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-[15px] font-medium hover:border-ink/30">
                {course.label}
                <span className="text-[12px] text-muted">{course.syllabus}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* One panel per class */}
      <div className="container-site mt-16 space-y-6">
        {list.map((course) => (
          <Reveal as="section" key={course.slug} id={course.slug} className="scroll-mt-28 rounded-[2rem] border border-line bg-surface p-6 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
              <div>
                <p className="flex flex-wrap items-center gap-2 text-[13px] font-medium">
                  <span className="rounded-full bg-brand px-3 py-1 text-on-brand">{course.label}</span>
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-brand">{course.syllabus}</span>
                </p>
                <h2 className="t-h2 mt-5 text-balance">{course.title}</h2>
                <p className="mt-4 max-w-[48ch] text-muted">{course.summary}</p>
                <Link
                  href={localePath(lang, `/courses/${course.slug}`)}
                  className="group mt-7 inline-flex items-center gap-1.5 font-medium text-brand underline-offset-4 hover:underline"
                >
                  {t.viewCourse} <ArrowRight aria-hidden size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
              <div className="space-y-4">
                <p className="text-[13px] font-medium text-muted">{t.tracksLabel}</p>
                {course.tracks.map((tr) => (
                  <div key={tr.key} className="rounded-[1.25rem] border border-line bg-bg p-5 md:p-6">
                    <h3 className="t-h3">{tr.name}</h3>
                    <p className="mt-1.5 text-[15px] text-muted">{tr.desc}</p>
                    <ul aria-label={t.subjectsLabel} className="mt-4 flex flex-wrap gap-2">
                      {tr.subjects.map((s) => (
                        <li key={s} className="rounded-full border border-line bg-surface px-3 py-1 text-[13px] text-ink-soft">{s}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Includes variant="tiles" title={t.includes.title} lead={t.includes.lead} items={t.includes.items} />

      {/* Enrolment: big-numeral rows */}
      <section className="container-site mt-32">
        <Heading title={t.enrol.title} lead={t.enrol.lead} />
        <ol className="mt-12 divide-y divide-line border-y border-line">
          {t.enrol.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 70} className="grid items-baseline gap-2 py-7 sm:grid-cols-[6rem_1fr_1.4fr] sm:gap-6">
              <span className="text-[2.5rem] font-semibold leading-none text-brand">{i + 1}</span>
              <h3 className="t-h3">{s.title}</h3>
              <p className="text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={site.appUrl}>{c.cta.start}</Button>
          <Button href={site.playStore} variant="secondary">{c.cta.app}</Button>
        </div>
      </section>

      <CtaBand title={t.cta.title} lead={t.cta.lead}>
        <Button href={localePath(lang, "/contact")}>{c.cta.contact}</Button>
      </CtaBand>
    </>
  );
}
