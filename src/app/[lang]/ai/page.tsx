import Image from "next/image";
import { Check, X, Sparkle, BookOpen, BookmarkSimple } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { site } from "@/lib/site";
import { JsonLd, faqLd, pageMetadata } from "@/lib/seo";
import { ai } from "@/content/ai";
import { common } from "@/content/common";
import PageHero from "@/components/ui/PageHero";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import Phone from "@/components/phone/Phone";
import { SikaiChatScreen, SikaiWelcomeScreen } from "@/components/phone/screens";
import Faq from "@/components/sections/product/Faq";

export async function generateMetadata({ params }: PageProps<"/[lang]/ai">) {
  const lang = (await params).lang as Locale;
  return pageMetadata({ locale: lang, path: "/ai", ...ai[lang].meta });
}

export default async function AiPage({ params }: PageProps<"/[lang]/ai">) {
  const lang = (await params).lang as Locale;
  const t = ai[lang];
  const c = common[lang];
  const d = t.demo;

  return (
    <>
      <JsonLd data={faqLd(t.faq.items)} />
      <PageHero
        lang={lang}
        crumbs={[{ name: t.crumb, path: "/ai" }]}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={
          <>
            <Button href={site.appUrl}>{c.cta.start}</Button>
            <Button href={localePath(lang, "/features")} variant="secondary" arrow={false}>
              {common[lang].nav[0].items[1].label}
            </Button>
          </>
        }
        visual={
          <div className="relative mx-auto w-fit">
            <div aria-hidden className="brand-aura absolute -inset-16 -z-10 blur-2xl" />
            <span className="absolute -left-4 top-10 z-10 flex size-16 items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface shadow-soft sm:-left-12">
              <Image src="/brand/sikai.png" alt={t.hero.logo} width={52} height={52} />
            </span>
            <Phone label={t.hero.phone} scale={0.62}>
              <SikaiChatScreen />
            </Phone>
          </div>
        }
      />

      {/* How: numbered timeline */}
      <section className="container-site mt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_auto] lg:gap-24">
          <div>
            <Heading title={t.how.title} lead={t.how.lead} />
            <ol className="relative mt-12 space-y-8 border-l border-line pl-8">
              {t.how.steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 80} className="relative">
                  <span className="absolute -left-[3.15rem] top-0 flex size-9 items-center justify-center rounded-full bg-brand text-[15px] font-semibold text-on-brand ring-8 ring-[var(--bg)]">
                    {i + 1}
                  </span>
                  <h3 className="t-h3">{s.title}</h3>
                  <p className="mt-1.5 max-w-[48ch] text-muted">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal className="relative mx-auto">
            <div aria-hidden className="brand-aura absolute -inset-12 -z-10 blur-2xl" />
            <Phone label={t.how.phone} scale={0.58}>
              <SikaiWelcomeScreen />
            </Phone>
          </Reveal>
        </div>
      </section>

      {/* Demo: themed chat transcript */}
      <section className="mt-32 bg-surface-2/60 py-24">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Heading title={d.title} lead={d.lead} />
          <Reveal className="rounded-[2rem] border border-line bg-surface p-5 shadow-soft sm:p-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-line pb-4">
              <span className="flex items-center gap-2 font-semibold">
                <span className="flex size-8 items-center justify-center overflow-hidden rounded-full bg-brand-soft">
                  <Image src="/brand/sikai.png" alt="" width={28} height={28} />
                </span>
                SikAI
              </span>
              <span className="ml-auto flex flex-wrap gap-2 text-[12px] font-medium text-brand">
                <span className="flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1"><BookOpen aria-hidden size={13} />{d.subject}</span>
                <span className="flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1"><BookmarkSimple aria-hidden size={13} />{d.module}</span>
              </span>
            </div>
            <div className="mt-6 space-y-5">
              <div className="flex justify-end">
                <p className="max-w-[85%] rounded-[1.25rem] rounded-tr-md bg-brand px-4 py-3 text-on-brand">{d.question}</p>
              </div>
              <div className="max-w-[92%] rounded-[1.25rem] rounded-tl-md border border-line bg-bg px-4 py-3.5">
                <p className="mb-2 text-[12px] font-semibold text-muted">{d.ai}</p>
                <div className="space-y-2 text-[15px] leading-relaxed text-ink-soft">
                  {d.answer.map((a) => <p key={a}>{a}</p>)}
                </div>
              </div>
              <div className="flex justify-end">
                <p className="max-w-[85%] rounded-[1.25rem] rounded-tr-md bg-brand px-4 py-3 text-on-brand">{d.followUp}</p>
              </div>
              <div className="max-w-[92%] rounded-[1.25rem] rounded-tl-md border border-line bg-bg px-4 py-3.5">
                <p className="mb-2 text-[12px] font-semibold text-muted">{d.ai}</p>
                <p className="text-[15px] leading-relaxed text-ink-soft">{d.followAnswer}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities: bento */}
      <section className="container-site mt-32">
        <Heading title={t.principles.title} />
        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {t.principles.items.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 70}
              className={`rounded-[1.25rem] border border-line p-8 ${
                i === 0 ? "bg-brand-soft md:col-span-4" : i === 1 ? "bg-surface md:col-span-2" : i === 2 ? "bg-surface md:col-span-2" : "bg-surface-2 md:col-span-4"
              }`}
            >
              <h3 className="t-h3">{p.title}</h3>
              <p className="mt-2 max-w-[46ch] text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Honest use: two columns */}
      <section className="container-site mt-32">
        <Heading title={t.honest.title} lead={t.honest.lead} />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Reveal className="rounded-[1.25rem] border border-line bg-surface p-8">
            <h3 className="t-h3 flex items-center gap-2"><Check aria-hidden size={22} weight="bold" className="text-brand" />{t.honest.goodTitle}</h3>
            <ul className="mt-5 space-y-3">
              {t.honest.good.map((g) => (
                <li key={g} className="flex gap-3 text-[15px] text-ink-soft"><Check aria-hidden size={16} weight="bold" className="mt-1 shrink-0 text-brand" />{g}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80} className="rounded-[1.25rem] border border-line bg-surface p-8">
            <h3 className="t-h3 flex items-center gap-2"><X aria-hidden size={22} weight="bold" className="text-muted" />{t.honest.badTitle}</h3>
            <ul className="mt-5 space-y-3">
              {t.honest.bad.map((g) => (
                <li key={g} className="flex gap-3 text-[15px] text-ink-soft"><X aria-hidden size={16} weight="bold" className="mt-1 shrink-0 text-muted" />{g}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        <p className="mt-6 max-w-[70ch] text-[15px] text-muted">{t.honest.note}</p>
      </section>

      {/* Coming soon */}
      <section className="container-site mt-32">
        <Reveal className="flex flex-col gap-5 rounded-[2rem] border border-dashed border-line bg-surface-2/60 p-8 md:flex-row md:items-center md:gap-10 md:p-12">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
            <Sparkle aria-hidden size={26} />
          </span>
          <div>
            <span className="rounded-full bg-brand-soft px-3 py-1 text-[12px] font-semibold text-brand">{t.soon.tag}</span>
            <h2 className="t-h3 mt-3">{t.soon.title}</h2>
            <p className="mt-2 max-w-[56ch] text-muted">{t.soon.body}</p>
          </div>
        </Reveal>
      </section>

      <Faq title={t.faq.title} items={t.faq.items} />

      <CtaBand title={t.cta.title} lead={t.cta.lead}>
        <Button href={site.appUrl}>{c.cta.start}</Button>
        <Button href={site.playStore} variant="secondary">{c.cta.app}</Button>
      </CtaBand>
    </>
  );
}
