import Link from "next/link";
import {
  ArrowRight, Books, Certificate, Translate, GooglePlayLogo, Circle, CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { home } from "@/content/home";
import { common } from "@/content/common";
import { courses } from "@/content/courses";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import Phone from "@/components/phone/Phone";
import { HomeScreen, LearnScreen, LessonScreen, TestScreen, SikaiChatScreen, SikaiWelcomeScreen, ProgressScreen } from "@/components/phone/screens";
import ScreenCycle from "@/components/phone/ScreenCycle";
import FeatureRail from "@/components/sections/FeatureRail";
import PhoneFan from "@/components/sections/PhoneFan";
import NepalMap from "@/components/sections/NepalMap";
import EcosystemOrbit from "@/components/sections/EcosystemOrbit";
import StatsBand from "@/components/sections/StatsBand";
import Stories from "@/components/sections/Stories";
import ClassPicker from "@/components/sections/ClassPicker";

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const lang = (await params).lang as Locale;
  return { ...pageMetadata({ locale: lang, path: "/", ...home[lang].meta }), title: { absolute: home[lang].meta.title } };
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const lang = (await params).lang as Locale;
  const t = home[lang];
  const c = common[lang];
  const L = (p: string) => localePath(lang, p);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="brand-aura pointer-events-none absolute -top-24 right-[-15%] h-[48rem] w-[75%] blur-3xl" />
        <div className="container-site relative grid items-center gap-14 pb-20 pt-12 md:pt-16 lg:min-h-[calc(100dvh-5rem)] lg:grid-cols-[1.05fr_1fr] lg:pb-16 lg:pt-8">
          <div>
            <p className="anim-rise mb-5 text-[13px] font-medium uppercase tracking-[0.14em] text-brand">{t.hero.eyebrow}</p>
            <h1 className="anim-rise t-display max-w-[14ch] text-balance" style={{ "--d": "60ms" } as React.CSSProperties}>
              {t.hero.title}
            </h1>
            <p className="anim-rise t-lead mt-6 max-w-[44ch] text-pretty" style={{ "--d": "120ms" } as React.CSSProperties}>
              {t.hero.lead}
            </p>
            <div className="anim-rise mt-9 flex flex-wrap gap-3" style={{ "--d": "180ms" } as React.CSSProperties}>
              <Button href={site.appUrl}>{c.cta.start}</Button>
              <a
                href={site.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-6 text-[15px] font-medium text-ink hover:border-ink/30"
              >
                <GooglePlayLogo aria-hidden size={18} weight="fill" />
                {c.cta.app}
              </a>
            </div>
          </div>

          <div className="anim-rise relative mx-auto h-[600px] w-full max-w-[560px] sm:h-[680px]" style={{ "--d": "160ms" } as React.CSSProperties}>
            <div className="absolute right-0 top-14 hidden sm:block">
              <div className="anim-tilt [--ry:12deg]" style={{ "--d": "300ms" } as React.CSSProperties}>
                <Phone label={t.hero.phoneChat} scale={0.66}>
                  <SikaiChatScreen />
                </Phone>
              </div>
            </div>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 sm:left-4 sm:translate-x-0">
              <div className="anim-tilt">
                <Phone label={t.hero.phoneHome} scale={0.76}>
                  <ScreenCycle>
                    <HomeScreen />
                    <LearnScreen />
                    <LessonScreen />
                    <TestScreen />
                    <ProgressScreen />
                  </ScreenCycle>
                </Phone>
              </div>
            </div>
            <div className="anim-float border border-line bg-surface shadow-soft absolute -bottom-12 -left-28 z-10 hidden items-center gap-3 rounded-2xl px-4 py-3 lg:flex" style={{ "--d": "400ms" } as React.CSSProperties}>
              <span className="flex size-9 items-center justify-center rounded-full bg-[#EF4444]/12 text-[#EF4444]">
                <Circle size={12} weight="fill" />
              </span>
              <span>
                <span className="block text-[13px] font-semibold text-ink">{t.hero.chipLive}</span>
                <span className="block text-[12px] text-muted">{t.hero.chipLiveSub}</span>
              </span>
            </div>
            <div className="anim-float border border-line bg-surface shadow-soft absolute -right-6 bottom-8 z-10 hidden items-center gap-2 rounded-full px-4 py-2.5 lg:flex" style={{ "--d": "1600ms" } as React.CSSProperties}>
              <CheckCircle size={18} weight="fill" className="text-brand" />
              <span className="text-[13px] font-medium text-ink">{t.hero.chipSyllabus}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Curriculum strip ---------- */}
      <section aria-label="Curriculum" className="border-y border-line bg-surface/60">
        <ul className="container-site grid grid-cols-2 gap-y-5 py-7 md:grid-cols-4">
          {t.proof.map((p, i) => {
            const Icon = [Books, Certificate, Translate, GooglePlayLogo][i];
            return (
              <Reveal as="li" key={p} delay={i * 70} className="flex items-center gap-3 text-[14px] font-medium text-ink-soft md:justify-center">
                <Icon aria-hidden size={20} className="shrink-0 text-brand" />
                {p}
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* ---------- Find your class ---------- */}
      <section className="container-site mt-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Heading title={t.courses.title} lead={t.courses.lead} />
          <Reveal>
            <Button href={L("/courses")} variant="secondary">{t.courses.all}</Button>
          </Reveal>
        </div>
        <Reveal className="mt-12">
          <ClassPicker courses={courses[lang]} hrefs={courses[lang].map((k) => L(`/courses/${k.slug}`))} t={t.courses} locale={lang === "ne" ? "ne-NP" : "en-US"} />
        </Reveal>
      </section>

      {/* ---------- Ecosystem orbit ---------- */}
      <section className="container-site mt-28">
        <Heading eyebrow={t.ecosystem.eyebrow} title={t.ecosystem.title} lead={t.ecosystem.lead} />
        <div className="mt-14">
          <EcosystemOrbit
            nodes={t.ecosystem.nodes}
            hrefs={[site.portals.student, site.portals.parent, site.portals.school, site.portals.teacher, L("/courses"), L("/features")]}
            center={t.ecosystem.center}
            select={t.ecosystem.select}
          />
        </div>
      </section>

      {/* ---------- Live platform stats ---------- */}
      <StatsBand t={t.stats} locale={lang === "ne" ? "ne-NP" : "en-US"} />

      {/* ---------- Feature cards with real app screens ---------- */}
      <section id="features" className="container-site mt-32 scroll-mt-24">
        <Heading eyebrow={t.features.eyebrow} title={t.features.title} lead={t.features.lead} />
        <div className="mt-12">
          <FeatureRail
            items={t.features.items}
            prev={t.stories.prev}
            next={t.stories.next}
            screens={[<HomeScreen key="h" />, <LearnScreen key="l" />, <LessonScreen key="v" />, <TestScreen key="t" />, <SikaiChatScreen key="c" />, <ProgressScreen key="p" />]}
          />
        </div>
      </section>

      {/* ---------- Fanned app screens ---------- */}
      <section aria-label={t.fan.label} className="relative mt-28 overflow-hidden py-20 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_55%,color-mix(in_oklab,var(--brand)_22%,transparent),transparent_75%)]" />
        <div className="container-site relative">
          <PhoneFan
            tabs={t.fan.tabs}
            screens={[<HomeScreen key="h" />, <LessonScreen key="v" />, <SikaiChatScreen key="c" />, <TestScreen key="t" />, <ProgressScreen key="p" />]}
          />
          <div className="mt-14 flex justify-center">
            <Button href={site.appUrl}>{c.cta.start}</Button>
          </div>
        </div>
      </section>

      {/* ---------- SikAI ---------- */}
      <section className="container-site mt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[auto_1fr] lg:gap-24">
          <Reveal className="relative mx-auto">
            <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-[#3462AE]/25 blur-3xl" />
            <Phone label={t.sikai.phone} scale={0.62} statusDark>
              <SikaiWelcomeScreen />
            </Phone>
          </Reveal>
          <div>
            <Heading eyebrow={t.sikai.eyebrow} title={t.sikai.title} lead={t.sikai.lead} />
            <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {t.sikai.points.map((p, i) => (
                <Reveal key={p.title} delay={i * 70} className="border-l-2 border-brand/30 pl-5">
                  <dt className="font-semibold text-ink">{p.title}</dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">{p.body}</dd>
                </Reveal>
              ))}
            </dl>
            <Reveal className="mt-10">
              <Link href={L("/ai")} className="group inline-flex items-center gap-2 text-[15px] font-medium text-brand">
                {t.sikai.link}
                <ArrowRight aria-hidden size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Made for Nepal ---------- */}
      <section className="container-site mt-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <Heading title={t.nepal.title} lead={t.nepal.lead} />
            <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {t.nepal.points.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 70}>
                  <p className="flex items-center gap-2 font-semibold">
                    <CheckCircle aria-hidden size={18} weight="fill" className="text-brand" />
                    {p.title}
                  </p>
                  <p className="mt-1 pl-[26px] text-[15px] text-muted">{p.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={120} className="glass rounded-[1.25rem] p-6 md:p-10">
            <NepalMap label={t.nepal.map} lang={lang} />
          </Reveal>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="container-site mt-32">
        <Heading title={t.steps.title} />
        <ol className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-5 md:gap-0 md:overflow-visible md:px-0">
          {t.steps.items.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90} className="relative w-[72%] shrink-0 snap-start rounded-[1.25rem] border border-line bg-surface p-6 md:w-auto md:rounded-none md:border-0 md:border-t md:bg-transparent md:px-0 md:pr-8 md:pt-8">
              <span aria-hidden className="absolute -top-[5px] left-0 hidden size-2.5 rounded-full bg-brand md:block" />
              <span className="font-mono text-[13px] text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-[17px] font-semibold">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <Stories t={t.stories} />

      {/* ---------- Schools ---------- */}
      <section className="container-site mt-32">
        <Reveal className="relative grid items-center gap-10 overflow-hidden rounded-[2rem] border border-line bg-surface p-8 md:p-14 lg:grid-cols-[1.2fr_1fr]">
          <div aria-hidden className="brand-aura pointer-events-none absolute -right-20 top-0 h-full w-2/3 blur-2xl" />
          <div className="relative">
            <h2 className="t-h2 text-balance">{t.schools.title}</h2>
            <p className="t-lead mt-5 max-w-[48ch]">{t.schools.lead}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={L("/schools")}>{c.cta.schools}</Button>
              <Button href={L("/school-partnership")} variant="secondary" arrow={false}>{t.schools.secondary}</Button>
            </div>
          </div>
          <ul className="relative grid grid-cols-2 gap-3">
            {t.schools.features.map((x, i) => (
                <li key={x} className="glass flex items-center gap-2.5 rounded-2xl px-4 py-4 text-[14px] font-medium" style={{ transform: `translateY(${i % 2 ? 18 : 0}px)` }}>
                  <CheckCircle aria-hidden size={18} weight="fill" className="text-brand" />
                  {x}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaBand title={t.final.title} lead={t.final.lead}>
        <Button href={site.appUrl}>{c.cta.start}</Button>
        <Button href={site.playStore} variant="secondary">{c.cta.app}</Button>
      </CtaBand>
    </>
  );
}
