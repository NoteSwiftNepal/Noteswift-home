import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { staticRoutes } from "@/lib/routes";
import { courses } from "@/content/courses";
import { sortedPosts } from "@/content/blog";
import PageHero from "@/components/ui/PageHero";

// Human-readable sitemap. Crawlers use /sitemap.xml; this is for people.
const copy = {
  en: { title: "Sitemap", lead: "Every page on the Note Swift website.", pages: "Pages", courses: "Courses", blog: "Blog", xml: "XML sitemap for search engines" },
  ne: { title: "साइटम्याप", lead: "Note Swift वेबसाइटका सबै पृष्ठहरू।", pages: "पृष्ठहरू", courses: "कोर्सहरू", blog: "ब्लग", xml: "सर्च इन्जिनका लागि XML साइटम्याप" },
};

// "/about/team" -> "About / Team"
const pathLabel = (p: string) =>
  p === "/" ? "Home" : p.slice(1).split("/").map((s) => s.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())).join(" / ");

export async function generateMetadata({ params }: PageProps<"/[lang]/sitemap">) {
  const lang = (await params).lang as Locale;
  return pageMetadata({ locale: lang, path: "/sitemap", title: copy[lang].title, description: copy[lang].lead });
}

export default async function SitemapPage({ params }: PageProps<"/[lang]/sitemap">) {
  const lang = (await params).lang as Locale;
  const t = copy[lang];
  const groups = [
    { title: t.pages, links: staticRoutes.map((p) => ({ href: p, label: pathLabel(p) })) },
    { title: t.courses, links: courses[lang].map((c) => ({ href: `/courses/${c.slug}`, label: c.label })) },
    { title: t.blog, links: sortedPosts(lang).map((p) => ({ href: `/blog/${p.slug}`, label: p.title })) },
  ];

  return (
    <>
      <PageHero lang={lang} crumbs={[{ name: t.title, path: "/sitemap" }]} title={t.title} lead={t.lead} />
      <section className="container-site grid gap-12 pb-24 md:grid-cols-3">
        {groups.map((g) => (
          <nav key={g.title} aria-label={g.title}>
            <h2 className="t-h3 text-ink">{g.title}</h2>
            <ul className="mt-5 space-y-2.5">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link href={localePath(lang, l.href)} className="text-[15px] text-muted hover:text-brand hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <a href="/sitemap.xml" className="text-[14px] font-medium text-brand hover:underline md:col-span-3">{t.xml}</a>
      </section>
    </>
  );
}
