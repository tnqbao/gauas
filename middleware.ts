import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n.config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if pathname already has locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Get preferred locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || ''
  let locale = i18n.defaultLocale

  // Parse accept-language header
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, q = 'q=1'] = lang.split(';')
      return {
        code: code.trim().split('-')[0].toLowerCase(),
        priority: parseFloat(q.replace('q=', '')),
      }
    })
    .sort((a, b) => b.priority - a.priority)

  // Find matching locale
  for (const lang of languages) {
    if (i18n.locales.includes(lang.code as any)) {
      locale = lang.code
      break
    }
  }

  // Redirect to localized path
  return NextResponse.redirect(
    new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
  )
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
