'use client'

import { createContext, useContext, ReactNode } from 'react'

type Translation = {
  [key: string]: string | Translation
}

type TranslationContextType = {
  locale: string
  t: (key: string) => string
  translations: Translation
}

const TranslationContext = createContext<TranslationContextType | null>(null)

// Import translations directly
import enTranslations from '../locales/en.json'
import viTranslations from '../locales/vi.json'

const translationsMap: Record<string, Translation> = {
  en: enTranslations as Translation,
  vi: viTranslations as Translation,
}

export function TranslationProvider({
  children,
  locale,
}: {
  children: ReactNode
  locale: string
}) {
  const translations = translationsMap[locale] || translationsMap.vi


  const t = (key: string): string => {
    // For flat JSON structure like "nav.services": "Services"
    const value = translations[key]

    if (value !== undefined && typeof value === 'string') {
      return value
    }

    // If not found, try nested structure as fallback
    const keys = key.split('.')
    let nestedValue: any = translations

    for (const k of keys) {
      if (nestedValue?.[k] !== undefined) {
        nestedValue = nestedValue[k]
      } else {
        console.warn(`Translation key not found: ${key} for locale: ${locale}`)
        return key
      }
    }

    return typeof nestedValue === 'string' ? nestedValue : key
  }

  return (
    <TranslationContext.Provider value={{ locale, t, translations }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)

  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider')
  }

  return context
}

