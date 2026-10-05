import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { schools } from "@/content/schools";
import { common } from "@/content/common";
import PageHero from "@/components/ui/PageHero";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import SchoolDashboard from "@/components/sections/schools/SchoolDashboard";
import RoleTabs from "@/components/sections/schools/RoleTabs";

const roleHref: Record<string, string> = {
  leaders: site.portals.school,
  teachers: site.portals.teacher,
  parents: site.portals.parent,
  students: site.portals.student,
};

export async function generateMetadata({ params }: PageProps<"/[lang]/schools">) {
  const lang = (await params).lang as Locale;
  return pageMetadata({ locale: lang, path: "/schools", ...schools[lang].meta });
}

export default async function SchoolsPage({ params }: PageProps<"/[lang]/schools">) {
  const lang = (await params).lang as Locale;
  const t = schools[lang];
  const c = common[lang];
  const L = (p: string) => localePath(lang, p);

  return (
    <>
      <PageHero
        lang={lang}
        crumbs={[{ name: t.crumb, path: "/schools" }]}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={
          <>
            <Button href={L("/school-partnership")}>{c.cta.schools}</Button>
            <Button href={site.portals.school} variant="secondary">{t.hero.portal}</Button>
          </>
        }
        visual={<SchoolDashboard d={t.dash} />}
      />

      {/* Statement */}
      <section className="container-site mt-16">
        <Reveal className="border-l-2 border-brand pl-6 md:pl-10">
          <p className="max-w-4xl text-[clamp(1.5rem,3vw,2.35rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-balance">{t.statement.title}</p>
          <p className="t-lead mt-4 max-w-[60ch]">{t.statement.body}</p>
        </Reveal>
      </section>

      {/* Roles: tabs */}
      <section className="container-site mt-28">
        <Heading title={t.roles.title} lead={t.roles.lead} />
        <Reveal className="mt-10">
          <RoleTabs label={t.roles.tabsLabel} roles={t.roles.items.map((r) => ({ ...r, href: roleHref[r.key] }))} />
        </Reveal>
      </section>

      {/* Modules: definition rows */}
      <section className="mt-28 bg-surface-2/60 py-24">
        <div className="container-site">
          <Heading title={t.modules.title} lead={t.modules.lead} />
          <dl className="mt-12 border-t border-line">
            {t.modules.groups.map((g, i) => (
              <Reveal key={g.name} delay={i * 80} className="grid gap-4 border-b border-line py-8 md:grid-cols-[1fr_2fr] md:gap-10">
                <dt className="t-h3">{g.name}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2.5">
                    {g.items.map((it) => (
                      <li key={it} className="rounded-full border border-line bg-surface px-5 py-2.5 text-[15px] text-ink-soft">{it}</li>
                    ))}
                  </ul>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Portals: bento */}
      <section className="container-site mt-28">
        <Heading title={t.portals.title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 md:grid-rows-2">
          {t.portals.items.map((p, i) => (
            <Reveal key={p.key} delay={i * 80} className={i === 0 ? "md:row-span-2" : ""}>
              <a
                href={site.portals[p.key as "school" | "teacher" | "parent"]}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full min-h-40 flex-col justify-between gap-8 rounded-[1.25rem] border p-7 transition-colors ${
                  i === 0 ? "border-transparent bg-brand text-on-brand md:p-9" : "border-line bg-surface hover:border-brand"
                }`}
              >
                <span className="flex size-11 items-center justify-center rounded-full border border-current/30 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight aria-hidden size={18} />
                </span>
                <span>
                  <span className={`block font-semibold ${i === 0 ? "text-[1.75rem] tracking-[-0.02em]" : "text-[18px]"}`}>{p.name}</span>
                  <span className={`mt-1.5 block text-[15px] ${i === 0 ? "opacity-85" : "text-muted"}`}>{p.desc}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title={t.cta.title} lead={t.cta.lead}>
        <Button href={L("/school-partnership")}>{c.cta.schools}</Button>
        <Button href={L("/contact")} variant="secondary" arrow={false}>{c.cta.contact}</Button>
      </CtaBand>
    </>
  );
}
