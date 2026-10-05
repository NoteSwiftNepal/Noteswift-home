import type { Metadata } from "next";
import { locales, localePath, ogLocale, type Locale } from "./i18n";
import { site } from "./site";

type PageMeta = {
  locale: Locale;
  path: string; // locale-free path, e.g. "/features"
  title: string;
  description: string;
  type?: "website" | "article";
  publishedTime?: string;
};

// Shared social card from app/opengraph-image.tsx (served at the root, outside the locale proxy).
const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "Note Swift. The smarter way to learn." };

export const absoluteUrl = (locale: Locale, path: string) => new URL(localePath(locale, path), site.url).toString();

/** Canonical + hreflang alternates + Open Graph for one page. */
export function pageMetadata({ locale, path, title, description, type = "website", publishedTime }: PageMeta): Metadata {
  const languages = Object.fromEntries(locales.map((l) => [l === "ne" ? "ne-NP" : "en", absoluteUrl(l, path)]));
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(locale, path),
      languages: { ...languages, "x-default": absoluteUrl("en", path) },
    },
    openGraph: {
      type,
      url: absoluteUrl(locale, path),
      siteName: site.name,
      title,
      description,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/brand/icon-512.png`,
  email: site.email.contact,
  telephone: site.phone,
  areaServed: { "@type": "Country", name: "Nepal" },
  address: { "@type": "PostalAddress", addressCountry: "NP" },
  sameAs: [site.playStore, site.github],
};

export const breadcrumbLd = (locale: Locale, items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(locale, it.path),
  })),
});

export const faqLd = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
});
