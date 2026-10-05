import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pageMetadata, JsonLd, absoluteUrl } from "@/lib/seo";
import { blogCopy, sortedPosts, toCard } from "@/content/blog";
import { common } from "@/content/common";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import BlogFilter from "@/components/sections/resources/BlogFilter";

export async function generateMetadata({ params }: PageProps<"/[lang]/blog">) {
  const lang = (await params).lang as Locale;
  return pageMetadata({ locale: lang, path: "/blog", ...blogCopy[lang].meta });
}

export default async function BlogPage({ params }: PageProps<"/[lang]/blog">) {
  const lang = (await params).lang as Locale;
  const t = blogCopy[lang];
  const list = sortedPosts(lang);
  const [latest, ...rest] = list;
  const latestCard = toCard(latest, lang);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${site.name} ${t.crumb}`,
          url: absoluteUrl(lang, "/blog"),
          inLanguage: lang === "ne" ? "ne-NP" : "en",
          publisher: { "@id": `${site.url}/#organization` },
          blogPost: list.map((p) => ({ "@type": "BlogPosting", headline: p.title, datePublished: p.date, url: absoluteUrl(lang, `/blog/${p.slug}`) })),
        }}
      />
      <PageHero lang={lang} crumbs={[{ name: t.crumb, path: "/blog" }]} title={t.title} lead={t.lead} />

      <section className="container-site">
        <Reveal>
          <Link
            href={latestCard.href}
            className="group relative grid overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#003f73,#0078d6)] p-8 text-white md:grid-cols-[1.4fr_1fr] md:items-end md:gap-12 md:p-12"
          >
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[13px] font-medium">
                {t.featured} <span aria-hidden className="mx-1.5">·</span> {latestCard.category}
              </span>
              <h2 className="t-h2 mt-6 max-w-2xl text-balance">{latest.title}</h2>
            </div>
            <div className="relative mt-6 md:mt-0">
              <p className="text-[16px] leading-relaxed text-white/80">{latest.excerpt}</p>
              <span className="mt-6 flex items-center justify-between text-[14px] text-white/70">
                {latestCard.date} · {latestCard.read}
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-[#0b0d12] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight aria-hidden size={16} />
                </span>
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="container-site mt-16">
        <BlogFilter posts={rest.map((p) => toCard(p, lang))} allLabel={t.all} filterLabel={t.filterLabel} empty={t.empty} />
      </section>

      <CtaBand title={t.ctaTitle} lead={t.ctaLead}>
        <Button href={site.appUrl}>{common[lang].cta.start}</Button>
      </CtaBand>
    </>
  );
}
