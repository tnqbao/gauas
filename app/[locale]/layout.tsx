import type { Metadata } from 'next'
import { i18n, type Locale } from '@/i18n.config'
import { TranslationProvider } from '@/contexts/TranslationContext'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Gauas - Developer Freelancer',
  description: 'Code optimization, full-stack development, legacy software modernization.',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo.svg',
    shortcut: '/favicon.svg',
  },
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <TranslationProvider locale={locale}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}
