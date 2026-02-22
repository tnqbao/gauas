import { useEffect, useState } from 'react'

type Translation = {
  [key: string]: string | Translation
}

// Cache translations to avoid reloading
const translationCache: Record<string, Translation> = {}

export function useTranslations(locale: string) {
  const [translations, setTranslations] = useState<Translation | null>(
    translationCache[locale] || null
  )

  useEffect(() => {
    // If already cached, use it immediately
    if (translationCache[locale]) {
      setTranslations(translationCache[locale])
      return
    }

    const loadTranslations = async () => {
      try {
        const data = await import(`../locales/${locale}.json`)
        translationCache[locale] = data.default
        setTranslations(data.default)
      } catch (error) {
        console.error(`Failed to load translations for locale: ${locale}`, error)
        try {
          const fallbackData = await import('../locales/vi.json')
          translationCache[locale] = fallbackData.default
          setTranslations(fallbackData.default)
        } catch (fallbackError) {
          console.error('Failed to load fallback translations', fallbackError)
        }
      }
    }

    loadTranslations()
  }, [locale])

  const t = (key: string): string => {
    if (!translations) return key

    const keys = key.split('.')
    let value: any = translations

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

  return { t, translations, isLoading: !translations }
}
