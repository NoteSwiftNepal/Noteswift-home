import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { legal } from "@/content/legal";
import LegalLayout from "@/components/sections/company/LegalLayout";

export async function generateMetadata({ params }: PageProps<"/[lang]/refund-policy">) {
  const lang = (await params).lang as Locale;
  const d = legal[lang].refund;
  return pageMetadata({ locale: lang, path: "/refund-policy", title: d.title, description: d.description });
}

export default async function Page({ params }: PageProps<"/[lang]/refund-policy">) {
  const lang = (await params).lang as Locale;
  return <LegalLayout lang={lang} doc={legal[lang].refund} path="/refund-policy" />;
}
