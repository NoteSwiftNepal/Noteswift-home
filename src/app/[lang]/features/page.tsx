import Link from "next/link";
import { ArrowRight, Broadcast, ChalkboardTeacher, PlayCircle, GooglePlayLogo, Globe, DownloadSimple, UserCircle } from "@phosphor-icons/react/dist/ssr";
import { localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { features } from "@/content/features";
import { common } from "@/content/common";
import PageHero from "@/components/ui/PageHero";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import Phone from "@/components/phone/Phone";
import { HomeScreen, LearnScreen, ProgressScreen, SikaiWelcomeScreen, TestScreen } from "@/components/phone/screens";
import FeatureSplit from "@/components/sections/product/FeatureSplit";

export async function generateMetadata({ params }: PageProps<"/[lang]/features">) {
  const lang = (await params).lang as Locale;
  return pageMetadata({ locale: lang, path: "/features", ...features[lang].meta });
}

export default async function FeaturesPage({ params }: PageProps<"/[lang]/features">) {
  const lang = (await params).lang as Locale;
  const t = features[lang];
  const c = common[lang];
  const [sikai, ...askRest] = t.ask.cells;
  const askIcons = { live: Broadcast, teachers: ChalkboardTeacher, recorded: PlayCircle } as const;
  const anywhereIcons = [GooglePlayLogo, Globe, DownloadSimple, UserCircle];

  return (
    <>
      <PageHero
        lang={lang}
        crumbs={[{ name: t.crumb, path: "/features" }]}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={<Button href={site.appUrl}>{c.cta.start}</Button>}
        visual={
          <div className="relative mx-auto w-fit">
            <div aria-hidden className="brand-aura absolute -inset-16 -z-10 blur-2xl" />
            <Phone label={t.hero.title} scale={0.62}>
              <HomeScreen />
            </Phone>
          </div>
        }
      />

      <FeatureSplit title={t.learn.title} lead={t.learn.lead} items={t.learn.items} phoneLabel={t.learn.phone} screen={<LearnScreen />} />
      <FeatureSplit title={t.practice.title} lead={t.practice.lead} items={t.practice.items} phoneLabel={t.practice.phone} screen={<TestScreen />} flip />

      {/* Ask: bento */}
      <section className="container-site mt-32">
        <Heading title={t.ask.title} lead={t.ask.lead} />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Reveal className="relative overflow-hidden rounded-[1.25rem] bg-[linear-gradient(150deg,#3462AE,#1e3f7a)] p-8 text-white md:row-span-3 md:min-h-[34rem]">
            <h3 className="t-h3">{sikai.title}</h3>
            <p className="mt-2 max-w-sm text-white/80">{sikai.body}</p>
            <Link href={localePath(lang, "/ai")} className="group mt-5 inline-flex items-center gap-1.5 font-medium text-white underline-offset-4 hover:underline">
              {sikai.link} <ArrowRight aria-hidden size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2">
              <Phone label="" scale={0.5} statusDark>
                <SikaiWelcomeScreen />
              </Phone>
            </div>
            <div className="h-64 md:hidden" />
          </Reveal>
          {askRest.map((cell, i) => {
            const Icon = askIcons[cell.key as keyof typeof askIcons];
            return (
              <Reveal key={cell.key} delay={(i + 1) * 80} className={`rounded-[1.25rem] border border-line p-7 md:col-span-2 ${i === 0 ? "bg-brand-soft" : "bg-surface"}`}>
                <div className="flex items-start gap-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface text-brand shadow-soft">
                    <Icon aria-hidden size={22} />
                  </span>
                  <div>
                    <h3 className="t-h3">{cell.title}</h3>
                    <p className="mt-1.5 text-[15px] text-muted">{cell.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <FeatureSplit title={t.progress.title} lead={t.progress.lead} items={t.progress.items} phoneLabel={t.progress.phone} screen={<ProgressScreen />} />

      {/* Anywhere: glass strip */}
      <section className="container-site mt-32">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-8 md:p-14">
          <div aria-hidden className="brand-aura pointer-events-none absolute -left-20 -top-20 h-[130%] w-2/3 blur-3xl" />
          <div className="relative">
            <h2 className="t-h2 max-w-2xl text-balance">{t.anywhere.title}</h2>
            <p className="t-lead mt-4 max-w-[54ch]">{t.anywhere.lead}</p>
            <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {t.anywhere.items.map((it, i) => {
                const Icon = anywhereIcons[i];
                return (
                  <Reveal as="li" key={it.title} delay={i * 70} className="glass rounded-2xl p-5">
                    <Icon aria-hidden size={22} className="text-brand" />
                    <p className="mt-4 font-semibold">{it.title}</p>
                    <p className="mt-1 text-[14px] text-muted">{it.body}</p>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand title={t.cta.title} lead={t.cta.lead}>
        <Button href={site.appUrl}>{c.cta.start}</Button>
        <Button href={site.playStore} variant="secondary">{c.cta.app}</Button>
      </CtaBand>
    </>
  );
}
