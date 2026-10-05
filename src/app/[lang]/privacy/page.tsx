import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { legal } from "@/content/legal";
import LegalLayout from "@/components/sections/company/LegalLayout";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">) {
  const lang = (await params).lang as Locale;
  const d = legal[lang].privacy;
  return pageMetadata({ locale: lang, path: "/privacy", title: d.title, description: d.description });
}

export default async function Page({ params }: PageProps<"/[lang]/privacy">) {
  const lang = (await params).lang as Locale;
  return <LegalLayout lang={lang} doc={legal[lang].privacy} path="/privacy" />;
}
