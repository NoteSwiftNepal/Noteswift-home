import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { careers } from "@/content/careers";
import PageHero from "@/components/ui/PageHero";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export async function generateMetadata({ params }: PageProps<"/[lang]/careers">) {
  const lang = (await params).lang as Locale;
  const { title, description } = careers[lang].meta;
  return pageMetadata({ locale: lang, path: "/careers", title, description });
}

export default async function CareersPage({ params }: PageProps<"/[lang]/careers">) {
  const lang = (await params).lang as Locale;
  const t = careers[lang];
  const mailto = `mailto:${site.email.contact}?subject=${encodeURIComponent(t.open.subject)}`;

  return (
    <>
      <PageHero
        lang={lang}
        crumbs={[{ name: t.crumb, path: "/careers" }]}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={<Button href={mailto}>{t.open.button}</Button>}
      />

      {/* Areas: two-column list rows */}
      <section className="container-site py-10">
        <Heading title={t.areas.title} />
        <ul className="mt-10 grid border-t border-line md:grid-cols-2 md:gap-x-16">
          {t.areas.items.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 60} className="border-b border-line py-6">
              <h3 className="t-h3 text-ink">{a.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{a.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Values: split, definition list */}
      <section className="container-site mt-20 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Heading title={t.values.title} />
        <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {t.values.items.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <dt className="t-h3 text-ink">{v.title}</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{v.body}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Open roles */}
      <section className="container-site mt-24">
        <Reveal className="rounded-[2rem] border border-line bg-surface p-8 md:p-14">
          <span className="flex size-12 items-center justify-center rounded-xl bg-brand-soft text-brand"><EnvelopeSimple aria-hidden size={26} weight="duotone" /></span>
          <h2 className="t-h2 mt-6 max-w-2xl text-balance text-ink">{t.open.title}</h2>
          <p className="t-lead mt-4 max-w-[56ch]">{t.open.body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button href={mailto}>{t.open.button}</Button>
            <a href={`mailto:${site.email.contact}`} className="text-[15px] text-muted underline underline-offset-4 hover:text-ink">{site.email.contact}</a>
          </div>
          <p className="mt-6 text-sm text-muted">{t.open.note}</p>
        </Reveal>
      </section>
    </>
  );
}
