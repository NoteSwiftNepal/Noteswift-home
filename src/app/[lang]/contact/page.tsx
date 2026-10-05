import Link from "next/link";
import { EnvelopeSimple, WhatsappLogo, Phone, ArrowUpRight, Lifebuoy } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pageMetadata, JsonLd, absoluteUrl } from "@/lib/seo";
import { contact } from "@/content/contact";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/company/ContactForm";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">) {
  const lang = (await params).lang as Locale;
  const { title, description } = contact[lang].meta;
  return pageMetadata({ locale: lang, path: "/contact", title, description });
}

const linkCls = "inline-flex items-center gap-1.5 break-all text-[15px] font-medium text-brand underline-offset-4 hover:underline";

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const lang = (await params).lang as Locale;
  const t = contact[lang];
  const L = (p: string) => localePath(lang, p);

  const ld = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: t.meta.title,
    description: t.meta.description,
    url: absoluteUrl(lang, "/contact"),
    inLanguage: lang,
    mainEntity: {
      "@type": "Organization",
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      telephone: site.phone,
      email: site.email.contact,
      contactPoint: [
        { "@type": "ContactPoint", contactType: "customer support", email: site.email.support, telephone: site.phone, availableLanguage: ["en", "ne"] },
        { "@type": "ContactPoint", contactType: "partnerships", email: site.email.contact, availableLanguage: ["en", "ne"] },
      ],
    },
  };

  return (
    <>
      <JsonLd data={ld} />
      <PageHero lang={lang} crumbs={[{ name: t.crumb, path: "/contact" }]} title={t.hero.title} lead={t.hero.lead} />

      {/* Pathways: 2x2 tiles */}
      <section className="container-site py-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {t.paths.map((p, i) => {
            const email = site.email[p.email];
            return (
              <Reveal key={p.key} delay={i * 60} className="flex flex-col rounded-[1.25rem] border border-line bg-surface p-6 md:p-7">
                <h2 className="t-h3 text-ink">{p.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  <a href={`mailto:${email}`} className={linkCls}><EnvelopeSimple aria-hidden size={18} />{email}</a>
                  {p.whatsapp && <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={linkCls}><WhatsappLogo aria-hidden size={18} />{t.labels.whatsapp}</a>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Form + side info */}
      <section className="container-site mt-20 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <Reveal>
          <h2 className="t-h2 text-ink">{t.form.title}</h2>
          <p className="mb-8 mt-3 text-[16px] text-ink-soft">{t.form.lead}</p>
          <ContactForm t={t.form} supportEmail={site.email.support} contactEmail={site.email.contact} />
        </Reveal>
        <Reveal as="aside" delay={80} className="h-fit space-y-6 rounded-[2rem] border border-line bg-surface-2 p-8">
          <div>
            <p className="text-sm text-muted">{t.labels.phone}</p>
            <a href={site.phoneHref} className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-ink hover:text-brand"><Phone aria-hidden size={20} weight="duotone" />{site.phone}</a>
          </div>
          <div>
            <p className="text-sm text-muted">{t.labels.whatsapp}</p>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-ink hover:text-brand"><WhatsappLogo aria-hidden size={20} weight="duotone" />{site.phone}</a>
          </div>
          <div className="border-t border-line pt-6">
            <Link href={L("/help")} className="group flex items-start gap-3">
              <Lifebuoy aria-hidden size={22} weight="duotone" className="mt-0.5 text-brand" />
              <span>
                <span className="block font-semibold text-ink group-hover:text-brand">{t.labels.help}</span>
                <span className="block text-[15px] text-muted">{t.labels.helpBody}</span>
              </span>
            </Link>
          </div>
          <p className="border-t border-line pt-6 text-[15px] text-ink-soft">
            {t.existing}{" "}
            <a href={site.appUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-brand underline underline-offset-4">
              student.noteswift.com.np<ArrowUpRight aria-hidden size={13} weight="bold" />
            </a>
          </p>
        </Reveal>
      </section>
    </>
  );
}
