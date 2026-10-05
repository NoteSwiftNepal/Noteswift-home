import { Code, Chalkboard, FilmSlate, Megaphone, Gear, Quotes } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { team } from "@/content/team";
import PageHero from "@/components/ui/PageHero";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";

export async function generateMetadata({ params }: PageProps<"/[lang]/about/team">) {
  const lang = (await params).lang as Locale;
  const { title, description } = team[lang].meta;
  return pageMetadata({ locale: lang, path: "/about/team", title, description });
}

const icons = { product: Code, academics: Chalkboard, content: FilmSlate, communications: Megaphone, operations: Gear };

export default async function TeamPage({ params }: PageProps<"/[lang]/about/team">) {
  const lang = (await params).lang as Locale;
  const t = team[lang];
  const L = (p: string) => localePath(lang, p);

  return (
    <>
      <PageHero
        lang={lang}
        crumbs={[{ name: t.crumbs.about, path: "/about" }, { name: t.crumbs.team, path: "/about/team" }]}
        title={t.hero.title}
        lead={t.hero.lead}
      />

      <section className="container-site py-10">
        <Heading title={t.how.title} lead={t.how.lead} />
        <div className="mt-10 grid gap-5 md:grid-cols-6">
          {t.teams.map((x, i) => {
            const Icon = icons[x.key as keyof typeof icons];
            const span = i < 2 ? "md:col-span-3" : "md:col-span-2";
            return (
              <Reveal key={x.key} delay={i * 60} className={`${span} rounded-[1.25rem] border border-line bg-surface p-6 md:p-7`}>
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand"><Icon aria-hidden size={24} weight="duotone" /></span>
                <h3 className="t-h3 mt-6 text-ink">{x.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{x.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {x.focus.map((f) => <li key={f} className="rounded-full border border-line bg-bg px-3 py-1 text-[13px] text-muted">{f}</li>)}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-site mt-20">
        <Reveal className="rounded-[2rem] border border-line bg-brand-soft p-8 md:p-14">
          <Quotes aria-hidden size={32} weight="fill" className="text-brand" />
          <blockquote className="t-h2 mt-5 max-w-3xl text-balance text-ink">{t.principle.quote}</blockquote>
          <p className="mt-5 text-sm text-ink-soft">{t.principle.by}</p>
        </Reveal>
      </section>

      <CtaBand title={t.cta.title} lead={t.cta.lead}>
        <Button href={L("/careers")}>{t.cta.button}</Button>
      </CtaBand>
    </>
  );
}
