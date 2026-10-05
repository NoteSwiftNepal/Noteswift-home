import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import { staticRoutes } from "@/lib/routes";
import { courseSlugs } from "@/content/courses";
import { posts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: { path: string; priority: number; lastModified?: string }[] = [
    ...staticRoutes.map((path) => ({ path, priority: path === "/" ? 1 : ["/privacy", "/terms", "/refund-policy"].includes(path) ? 0.3 : 0.8 })),
    ...courseSlugs.map((s) => ({ path: `/courses/${s}`, priority: 0.9 })),
    ...posts.en.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6, lastModified: p.date })),
  ];
  return paths.flatMap(({ path, priority, lastModified }) =>
    locales.map((l) => ({
      url: absoluteUrl(l, path),
      lastModified: lastModified ?? new Date().toISOString().slice(0, 10),
      changeFrequency: "weekly" as const,
      priority: l === "en" ? priority : priority * 0.9,
      alternates: { languages: { en: absoluteUrl("en", path), "ne-NP": absoluteUrl("ne", path) } },
    })),
  );
}
