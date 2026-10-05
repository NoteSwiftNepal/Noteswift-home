import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { locales, localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pageMetadata, JsonLd, absoluteUrl } from "@/lib/seo";
import { blogCopy, formatDate, posts, toCard } from "@/content/blog";
import { common } from "@/content/common";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import PostCard from "@/components/sections/resources/PostCard";

export const dynamicParams = false;
export const generateStaticParams = () => locales.flatMap((lang) => posts[lang].map((p) => ({ lang, slug: p.slug })));

const find = (lang: Locale, slug: string) => posts[lang].find((p) => p.slug === slug);

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = (await params) as { lang: Locale; slug: string };
  const post = find(lang, slug);
  if (!post) return {};
  return pageMetadata({ locale: lang, path: `/blog/${slug}`, title: post.title, description: post.excerpt, type: "article", publishedTime: post.date });
}

export default async function PostPage({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = (await params) as { lang: Locale; slug: string };
  const post = find(lang, slug);
  if (!post) notFound();
  const t = blogCopy[lang];
  const others = posts[lang].filter((p) => p.slug !== slug);
  const related = [...others.filter((p) => p.category === post.category), ...others.filter((p) => p.category !== post.category)].slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: lang === "ne" ? "ne-NP" : "en",
          mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(lang, `/blog/${slug}`) },
          image: absoluteUrl(lang, "/opengraph-image"),
          articleSection: post.category,
          author: { "@id": `${site.url}/#organization` },
          publisher: { "@id": `${site.url}/#organization` },
        }}
      />
      <PageHero
        lang={lang}
        crumbs={[
          { name: t.crumb, path: "/blog" },
          { name: post.title, path: `/blog/${slug}` },
        ]}
        eyebrow={post.category}
        title={post.title}
        lead={post.excerpt}
      />

      <div className="container-site grid gap-12 lg:grid-cols-[14rem_1fr]">
        <aside className="order-2 lg:order-1">
          <dl className="space-y-4 border-t border-line pt-6 text-[14px] lg:sticky lg:top-28">
            <div>
              <dt className="text-muted">{t.by}</dt>
              <dd className="mt-0.5 font-medium text-ink">{post.author}</dd>
            </div>
            <div>
              <dt className="text-muted">{t.published}</dt>
              <dd className="mt-0.5 font-medium text-ink">
                <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
              </dd>
            </div>
            <div>
              <dd className="text-muted">
                {post.readMinutes} {t.minRead}
              </dd>
            </div>
            <div className="pt-2">
              <Link href={localePath(lang, "/blog")} className="inline-flex items-center gap-1.5 font-medium text-brand hover:underline">
                <ArrowLeft aria-hidden size={14} /> {t.back}
              </Link>
            </div>
          </dl>
        </aside>

        <article className="order-1 max-w-[68ch] lg:order-2">
          {post.body.map((b, i) =>
            b.type === "h2" ? (
              <h2 key={i} className="mt-12 text-[24px] font-semibold tracking-[-0.02em] text-ink first:mt-0">
                {b.text}
              </h2>
            ) : b.type === "ul" ? (
              <ul key={i} className="mt-5 space-y-2.5">
                {b.items.map((it) => (
                  <li key={it} className="relative pl-6 text-[17px] leading-relaxed text-ink-soft">
                    <span aria-hidden className="absolute left-0 top-[0.7em] size-1.5 rounded-full bg-brand" />
                    {it}
                  </li>
                ))}
              </ul>
            ) : (
              <p key={i} className="mt-5 text-[17px] leading-[1.8] text-ink-soft first:mt-0">
                {b.text}
              </p>
            ),
          )}
        </article>
      </div>

      <section className="container-site mt-28">
        <Reveal>
          <h2 className="t-h2">{t.keepReading}</h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {related.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 80}>
              <PostCard post={toCard(p, lang)} compact />
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand title={t.ctaTitle} lead={t.ctaLead}>
        <Button href={site.appUrl}>{common[lang].cta.start}</Button>
      </CtaBand>
    </>
  );
}
