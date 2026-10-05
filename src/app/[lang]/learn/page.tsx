import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { learn } from "@/content/learn";
import { common } from "@/content/common";
import PageHero from "@/components/ui/PageHero";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import Phone from "@/components/phone/Phone";
import { LessonScreen, ProgressScreen, TestScreen } from "@/components/phone/screens";

export async function generateMetadata({ params }: PageProps<"/[lang]/learn">) {
  const lang = (await params).lang as Locale;
  return pageMetadata({ locale: lang, path: "/learn", ...learn[lang].meta });
}

export default async function LearnPage({ params }: PageProps<"/[lang]/learn">) {
  const lang = (await params).lang as Locale;
  const t = learn[lang];
  const c = common[lang];
  const [understand, practice, help] = t.pillars;

  return (
    <>
      <PageHero
        lang={lang}
        crumbs={[{ name: t.crumb, path: "/learn" }]}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={
          <>
            <Button href={site.appUrl}>{c.cta.start}</Button>
            <Button href={localePath(lang, "/features")} variant="secondary" arrow={false}>
              {t.cta.features}
            </Button>
          </>
        }
      />

      {/* Problem statement: editorial, no visual */}
      <section className="container-site mt-12">
        <Reveal className="grid gap-10 border-t border-line pt-14 lg:grid-cols-[1fr_1.4fr]">
          <h2 className="t-h2 text-balance">{t.problem.title}</h2>
          <div className="space-y-6">
            {t.problem.body.map((p) => (
              <p key={p} className="text-[1.25rem] leading-relaxed text-ink-soft text-pretty">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Pillar 1: text left, lesson screen right */}
      <section className="container-site mt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_auto] lg:gap-20">
          <div>
            <Heading title={understand.title} lead={understand.lead} />
            <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {understand.items.map((it, i) => (
                <Reveal key={it.title} delay={i * 60}>
                  <dt className="flex items-center gap-2 font-semibold">
                    <CheckCircle aria-hidden size={18} weight="fill" className="text-brand" />
                    {it.title}
                  </dt>
                  <dd className="mt-1.5 pl-[26px] text-[15px] leading-relaxed text-muted">{it.body}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
          <Reveal className="relative mx-auto">
            <div aria-hidden className="brand-aura absolute -inset-12 -z-10 blur-2xl" />
            <Phone label={t.phones.understand} scale={0.64}>
              <LessonScreen />
            </Phone>
          </Reveal>
        </div>
      </section>

      {/* Pillar 2: full-width tinted band with test screen centred over the list */}
      <section className="mt-32 bg-surface-2/60 py-24">
        <div className="container-site">
          <Heading title={practice.title} lead={practice.lead} center />
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">
            <ul className="order-2 space-y-8 lg:order-1 lg:text-right">
              {practice.items.slice(0, 3).map((it, i) => (
                <Reveal as="li" key={it.title} delay={i * 70}>
                  <p className="font-semibold">{it.title}</p>
                  <p className="mt-1 text-[15px] text-muted">{it.body}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal className="order-1 mx-auto lg:order-2">
              <Phone label={t.phones.practice} scale={0.6}>
                <TestScreen />
              </Phone>
            </Reveal>
            <ul className="order-3 space-y-8">
              {practice.items.slice(3).map((it, i) => (
                <Reveal as="li" key={it.title} delay={i * 70}>
                  <p className="font-semibold">{it.title}</p>
                  <p className="mt-1 text-[15px] text-muted">{it.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pillar 3: progress screen left, text right */}
      <section className="container-site mt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[auto_1.2fr] lg:gap-20">
          <Reveal className="relative order-2 mx-auto lg:order-1">
            <div aria-hidden className="brand-aura absolute -inset-12 -z-10 blur-2xl" />
            <Phone label={t.phones.help} scale={0.64}>
              <ProgressScreen />
            </Phone>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Heading title={help.title} lead={help.lead} />
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {help.items.map((it, i) => (
                <Reveal as="li" key={it.title} delay={i * 70} className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <span className="font-semibold">{it.title}</span>
                  <span className="text-[15px] text-muted">{it.body}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Principles: 2x2 */}
      <section className="container-site mt-32">
        <Heading title={t.principles.title} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {t.principles.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className={`rounded-[1.25rem] border border-line p-8 ${i === 0 ? "bg-brand-soft" : "bg-surface"}`}>
              <h3 className="t-h3">{p.title}</h3>
              <p className="mt-2 text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title={t.cta.title} lead={t.cta.lead}>
        <Button href={site.appUrl}>{c.cta.start}</Button>
        <Button href={site.playStore} variant="secondary">{c.cta.app}</Button>
      </CtaBand>
    </>
  );
}
