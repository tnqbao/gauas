import type { Locale } from '@/i18n.config'
import en from '@/locales/en.json'
import vi from '@/locales/vi.json'

const translations = {
  en,
  vi,
} as const

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.vi
}

export function t(locale: Locale, key: string): string {
  const trans = getTranslations(locale)
  const keys = key.split('.')
  let value: any = trans

  for (const k of keys) {
    if (value?.[k] !== undefined) {
      value = value[k]
    } else {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
  }

  return typeof value === 'string' ? value : key
}

