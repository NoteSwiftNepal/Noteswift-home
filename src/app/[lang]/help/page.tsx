import { Envelope, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pageMetadata, JsonLd, faqLd } from "@/lib/seo";
import { help } from "@/content/help";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import HelpSearch from "@/components/sections/resources/HelpSearch";

export async function generateMetadata({ params }: PageProps<"/[lang]/help">) {
  const lang = (await params).lang as Locale;
  return pageMetadata({ locale: lang, path: "/help", ...help[lang].meta });
}

export default async function HelpPage({ params }: PageProps<"/[lang]/help">) {
  const lang = (await params).lang as Locale;
  const t = help[lang];
  const contacts = [
    { Icon: Envelope, label: t.contact.email, value: site.email.support, href: `mailto:${site.email.support}` },
    { Icon: WhatsappLogo, label: t.contact.whatsapp, value: site.phone, href: site.whatsapp },
    { Icon: Phone, label: t.contact.phone, value: site.phone, href: site.phoneHref },
  ];

  return (
    <>
      <JsonLd data={faqLd(t.items)} />
      <PageHero lang={lang} crumbs={[{ name: t.crumb, path: "/help" }]} title={t.hero.title} lead={t.hero.lead} />

      <section className="container-site max-w-4xl">
        <HelpSearch
          items={t.items}
          categories={t.categories}
          labels={{
            search: t.search.label,
            placeholder: t.search.placeholder,
            clear: t.search.clear,
            filterLabel: t.filterLabel,
            all: t.all,
            emptyTitle: t.empty.title,
            emptyBody: t.empty.body,
            reset: t.empty.reset,
            resultsTemplate: t.results,
          }}
        />
      </section>

      <section className="container-site mt-24 max-w-4xl">
        <Reveal className="grid gap-8 rounded-[2rem] border border-line bg-surface p-8 md:grid-cols-[1fr_1.2fr] md:p-12">
          <div>
            <h2 className="t-h2 text-balance">{t.contact.title}</h2>
            <p className="t-lead mt-4 text-pretty">{t.contact.lead}</p>
          </div>
          <ul className="divide-y divide-line self-center">
            {contacts.map(({ Icon, label, value, href }) => (
              <li key={label}>
                <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon aria-hidden size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] text-muted">{label}</span>
                    <span className="block break-words font-medium text-ink group-hover:text-brand">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
