import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpenText, ClockCounterClockwise, Function, Notebook, Question, Table } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { resources, type ResourceKey } from "@/content/resources";
import { posts, sortedPosts, toCard } from "@/content/blog";
import { common } from "@/content/common";
import PageHero from "@/components/ui/PageHero";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import PostCard from "@/components/sections/resources/PostCard";

const icons: Record<ResourceKey, Icon> = {
  notes: Notebook,
  important: Question,
  pyq: ClockCounterClockwise,
  grid: Table,
  formula: Function,
  guide: BookOpenText,
};

// Bento spans on md+ (3 columns): wide tiles first and last in each pair.
const spans = ["md:col-span-2", "", "", "md:col-span-2", "md:col-span-2", ""];

export async function generateMetadata({ params }: PageProps<"/[lang]/resources">) {
  const lang = (await params).lang as Locale;
  return pageMetadata({ locale: lang, path: "/resources", ...resources[lang].meta });
}

export default async function ResourcesPage({ params }: PageProps<"/[lang]/resources">) {
  const lang = (await params).lang as Locale;
  const t = resources[lang];
  const latest = sortedPosts(lang).slice(0, 3);
  const [first, ...others] = latest.map((p) => toCard(p, lang));

  return (
    <>
      <PageHero
        lang={lang}
        crumbs={[{ name: t.crumb, path: "/resources" }]}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={<Button href={site.appUrl}>{common[lang].cta.start}</Button>}
      />

      <section className="container-site">
        <Heading title={t.materials.title} lead={t.materials.lead} />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {t.materials.items.map((m, i) => {
            const Ico = icons[m.key];
            return (
              <Reveal as="li" key={m.key} delay={(i % 3) * 70} className={spans[i]}>
                <a
                  href={site.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-[1.25rem] border border-line bg-surface p-7 transition-colors hover:border-brand/40"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                    <Ico aria-hidden size={26} />
                  </span>
                  <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.015em] text-ink">{m.title}</h3>
                  <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-muted text-pretty">{m.body}</p>
                  <span className="mt-auto flex items-center gap-1.5 pt-6 text-[14px] font-medium text-brand">
                    {t.materials.open}
                    <ArrowUpRight aria-hidden size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section className="container-site mt-28 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Heading title={t.guides.title} lead={t.guides.lead} />
        <ul className="divide-y divide-line border-y border-line">
          {t.guides.topics.map((g) => {
            const target = posts[lang].filter((p) => p.category === g.category).sort((a, b) => b.date.localeCompare(a.date))[0];
            return (
              <li key={g.category}>
                <Link
                  href={target ? localePath(lang, `/blog/${target.slug}`) : localePath(lang, "/blog")}
                  className="group flex items-center justify-between gap-6 py-6"
                >
                  <span>
                    <span className="block text-[19px] font-semibold tracking-[-0.015em] text-ink">{g.title}</span>
                    <span className="mt-1.5 block max-w-[52ch] text-[15px] leading-relaxed text-muted text-pretty">{g.body}</span>
                  </span>
                  <ArrowRight aria-hidden size={18} className="shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="container-site mt-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Heading title={t.latest.title} />
          <Button href={localePath(lang, "/blog")} variant="secondary" size="sm">{t.latest.all}</Button>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="h-full">
            <PostCard post={first} />
          </Reveal>
          <ul className="grid gap-4 lg:grid-rows-2">
            {others.map((p, i) => (
              <Reveal as="li" key={p.href} delay={(i + 1) * 80} className="h-full">
                <PostCard post={p} compact />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={t.cta.title} lead={t.cta.lead}>
        <Button href={site.appUrl}>{common[lang].cta.start}</Button>
      </CtaBand>
    </>
  );
}
