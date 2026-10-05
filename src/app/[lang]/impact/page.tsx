import { Robot, Exam, Chats, Handshake, MapPin } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { impact } from "@/content/impact";
import { common } from "@/content/common";
import PageHero from "@/components/ui/PageHero";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";

export async function generateMetadata({ params }: PageProps<"/[lang]/impact">) {
  const lang = (await params).lang as Locale;
  const { title, description } = impact[lang].meta;
  return pageMetadata({ locale: lang, path: "/impact", title, description });
}

const icons = { robotics: Robot, exam: Exam, roundtable: Chats, schools: Handshake, community: MapPin };

export default async function ImpactPage({ params }: PageProps<"/[lang]/impact">) {
  const lang = (await params).lang as Locale;
  const t = impact[lang];
  const c = common[lang];
  const L = (p: string) => localePath(lang, p);

  return (
    <>
      <PageHero lang={lang} crumbs={[{ name: t.crumb, path: "/impact" }]} title={t.hero.title} lead={t.hero.lead} />

      {/* Programs: bento */}
      <section className="container-site py-10">
        <Heading title={t.programs.title} />
        <div className="mt-10 grid gap-5 md:grid-cols-6">
          {t.programs.items.map((p, i) => {
            const Icon = icons[p.key as keyof typeof icons];
            const span = i === 0 ? "md:col-span-4" : "md:col-span-2";
            return (
              <Reveal key={p.key} delay={i * 60} className={`${span} flex flex-col rounded-[1.25rem] border border-line p-6 md:p-8 ${i === 0 ? "bg-brand-soft" : "bg-surface"}`}>
                <span className="flex size-11 items-center justify-center rounded-xl bg-bg text-brand"><Icon aria-hidden size={24} weight="duotone" /></span>
                <h3 className={`mt-6 text-ink ${i === 0 ? "t-h2" : "t-h3"}`}>{p.title}</h3>
                <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((g) => <li key={g} className="rounded-full border border-line bg-bg px-3 py-1 text-[13px] text-muted">{g}</li>)}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* What we pay attention to: split with stacked rows */}
      <section className="container-site mt-24 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <Heading title={t.measure.title} lead={t.measure.lead} />
        <ul className="divide-y divide-line border-y border-line">
          {t.measure.items.map((m, i) => (
            <Reveal as="li" key={m.title} delay={i * 60} className="grid gap-1 py-6 sm:grid-cols-[8rem_1fr] sm:gap-6">
              <h3 className="t-h3 text-ink">{m.title}</h3>
              <p className="text-[16px] leading-relaxed text-ink-soft">{m.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand title={t.cta.title} lead={t.cta.lead}>
        <Button href={L("/school-partnership")}>{c.cta.schools}</Button>
        <Button href={L("/events")} variant="secondary">{t.cta.events}</Button>
      </CtaBand>
    </>
  );
}
