import Link from "next/link";
import { EnvelopeSimple, Phone, WhatsappLogo, GooglePlayLogo, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import type { CommonCopy } from "@/content/common";
import { localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer({ lang, t }: { lang: Locale; t: CommonCopy }) {
  const L = (p: string) => localePath(lang, p);
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-night text-white">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container-site grid gap-12 pb-10 pt-16 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/60">{t.orgSummary}</p>
          <ul className="mt-6 space-y-2.5 text-[14px] text-white/70">
            <li>
              <a href={`mailto:${site.email.contact}`} className="inline-flex items-center gap-2 hover:text-white">
                <EnvelopeSimple aria-hidden size={16} /> {site.email.contact}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
                <Phone aria-hidden size={16} /> {site.phone}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-2">
            {[
              { href: site.playStore, label: "Google Play", Icon: GooglePlayLogo },
              { href: site.whatsapp, label: "WhatsApp", Icon: WhatsappLogo },
              { href: site.github, label: "GitHub", Icon: GithubLogo },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="press inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-white/30 hover:text-white">
                <Icon aria-hidden size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {f.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-[13px] font-medium text-white/45">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={L(href)} className="text-[14px] text-white/75 transition-colors hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="container-site">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 py-6 text-[14px]">
          <span className="text-white/45">{f.portals}:</span>
          {(Object.keys(f.portalLinks) as (keyof typeof f.portalLinks)[]).map((k) => (
            <a key={k} href={site.portals[k]} target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white">
              {f.portalLinks[k]}
            </a>
          ))}
        </div>
      </div>

      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="container-site -mb-[0.18em] whitespace-nowrap text-[min(15vw,12rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-white/[0.04]">Note Swift</p>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-4 py-6 text-[13px] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. {f.rights} {f.madeIn}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {f.legal.map(([label, href]) => (
              <li key={href}>
                <Link href={L(href)} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
