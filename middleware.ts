import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./lib/i18n/config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Se já tem locale, não fazer nada
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Detectar locale preferido do navegador
  const locale = request.headers.get("accept-language")?.split(",")[0] || defaultLocale;
  const detectedLocale = locale.startsWith("es")
    ? "es"
    : locale.startsWith("en")
    ? "en"
    : defaultLocale;

  // Redirecionar para a versão com locale (exceto se for pt-BR, que é o padrão)
  if (detectedLocale !== defaultLocale) {
    return NextResponse.redirect(
      new URL(`/${detectedLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};

