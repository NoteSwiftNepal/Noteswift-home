# noteswift-home

Public marketing site for Note Swift (noteswift.com.np). Next.js 16 App Router, Tailwind v4, Geist + Mukta (Devanagari), Phosphor icons. No CMS and no backend: all copy lives in typed content files.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL` in production if the domain is not `https://noteswift.com.np`. It drives canonical URLs, hreflang, the sitemap and Open Graph.

## How it is organised

| Path | What it holds |
|---|---|
| `src/app/[lang]/` | Every page. `lang` is `en` or `ne`. |
| `src/proxy.ts` | Serves English at `/…` and Nepali at `/ne/…`; redirects `/en/…` to the root so each page has one URL. |
| `src/content/*.ts` | All copy, one file per page, each exporting `{ en, ne }`. `ne` is typed as `typeof en`, so a missing translation fails the type check. |
| `src/lib/site.ts` | Real brand details: domains, portals, Play Store, email, phone. |
| `src/lib/seo.tsx` | `pageMetadata()` (canonical, hreflang, Open Graph) and JSON-LD helpers. |
| `src/components/phone/` | Phone frame and recreations of the real student app screens (from `noteswift-student`). |
| `scripts/brand-assets.mjs` | Regenerates `public/brand/*` and the app icons from the logo files in the sibling repos. |

## Adding a page

1. Add `src/content/<page>.ts` with `en` and `ne`.
2. Add `src/app/[lang]/<page>/page.tsx` using `pageMetadata()` and `PageHero`.
3. Add the path to `src/lib/routes.ts` (sitemap) and, if it belongs in navigation, to `src/content/common.ts`.

## Accessibility and display settings

The settings button in the header stores theme (system, light, dark), text size, high contrast, reduced motion and link underlines in `localStorage`. An inline script in the root layout applies them before first paint. Animations are CSS only and respect both `prefers-reduced-motion` and the in-site setting.
