import { NextResponse, type NextRequest } from "next/server";

// English is served at the root without a prefix; /en/* is redirected there so each page has one URL.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/ne" || pathname.startsWith("/ne/")) return;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, metadata routes and any file with an extension.
  matcher: ["/((?!_next|api|sitemap.xml|robots.txt|manifest.webmanifest|icon|apple-icon|opengraph-image|.*\\..*).*)"],
};
