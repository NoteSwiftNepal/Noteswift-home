import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Mukta } from "next/font/google";
import "../globals.css";
import { htmlLang, isLocale, locales } from "@/lib/i18n";
import { prefsScript } from "@/lib/prefs";
import { site } from "@/lib/site";
import { JsonLd, organizationLd } from "@/lib/seo";
import { common } from "@/content/common";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const deva = Mukta({ subsets: ["devanagari", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-deva", display: "swap" });

export const dynamicParams = false;
export const generateStaticParams = () => locales.map((lang) => ({ lang }));

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafbfc" },
    { media: "(prefers-color-scheme: dark)", color: "#07090d" },
  ],
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const ne = lang === "ne";
  return {
    metadataBase: new URL(site.url),
    title: { default: ne ? "Note Swift | नेपालका विद्यार्थीका लागि सिकाइ प्लेटफर्म" : "Note Swift | Learning platform for students in Nepal", template: "%s | Note Swift" },
    description: ne ? common.ne.orgSummary : common.en.orgSummary,
    applicationName: site.name,
    authors: [{ name: site.legalName, url: site.url }],
    creator: site.legalName,
    publisher: site.legalName,
    formatDetection: { telephone: false },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    other: { "google-play-app": "app-id=com.noteswift" },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = common[lang];

  return (
    <html lang={htmlLang[lang]} className={`${GeistSans.variable} ${GeistMono.variable} ${deva.variable}`} suppressHydrationWarning>
      <head>
        <Script id="prefs" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: prefsScript }} />
        <JsonLd
          data={[
            organizationLd,
            { "@context": "https://schema.org", "@type": "WebSite", "@id": `${site.url}/#website`, name: site.name, url: site.url, inLanguage: ["en", "ne"], publisher: { "@id": `${site.url}/#organization` } },
          ]}
        />
      </head>
      <body className="min-h-dvh bg-bg text-ink">
        <a href="#main" className="sr-only-focusable fixed left-4 top-3 z-[100] rounded-full bg-brand px-4 py-2 text-sm font-medium text-on-brand">
          {t.skip}
        </a>
        <Header lang={lang} t={t} />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer lang={lang} t={t} />
      </body>
    </html>
  );
}
