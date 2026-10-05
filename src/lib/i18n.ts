export const locales = ["en", "ne"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

/** English lives at the root (/about), Nepali under /ne (/ne/about). */
export function localePath(locale: Locale, path = "/") {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return p;
  return p === "/" ? `/${locale}` : `/${locale}${p}`;
}

/** Strip a locale prefix from a pathname: /ne/about -> /about */
export function stripLocale(pathname: string) {
  const m = pathname.match(/^\/(en|ne)(?=\/|$)/);
  return m ? pathname.slice(m[0].length) || "/" : pathname;
}

export const htmlLang: Record<Locale, string> = { en: "en", ne: "ne" };
export const ogLocale: Record<Locale, string> = { en: "en_US", ne: "ne_NP" };
