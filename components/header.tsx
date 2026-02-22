'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '@/src/presentation/components/ThemeToggle'

export function Header({ locale, t }: { locale: string; t: (key: string) => string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-4 group">
          <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Gauas Logo"
              width={64}
              height={64}
              className="transition-transform duration-300 group-hover:scale-105 dark:invert object-contain"
              priority
            />
          </div>
          <div className="text-2xl font-bold flex items-center">
            <span className="text-gray-900 dark:text-white">
              Gauas
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href={`/${locale}#services`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
            {t('nav.services')}
          </a>
          <a href={`/${locale}#contact`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
            {t('nav.contact')}
          </a>
        </nav>

        {/* Theme Toggle, Language & Mobile Menu */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={locale === 'vi' ? '/en' : '/vi'}
            className="px-3 py-1.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
          >
            {locale === 'vi' ? 'EN' : 'VN'}
          </a>
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <nav className="flex flex-col gap-1 p-4">
            <a href={`/${locale}#services`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors py-2 px-3 rounded-lg font-medium">
              {t('nav.services')}
            </a>
            <a href={`/${locale}#contact`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors py-2 px-3 rounded-lg font-medium">
              {t('nav.contact')}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
