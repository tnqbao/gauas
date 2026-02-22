'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero({ locale, t }: { locale: string; t: (key: string) => string }) {
  return (
    <section className="min-h-screen relative flex items-center justify-center pt-24 md:pt-28 bg-white dark:bg-black scroll-mt-24">
      {/* Simple grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 inline-block">
          <div className="px-6 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-950">
            <span className="text-base font-bold text-blue-700 dark:text-blue-300">
              {t('hero.tagline')}
            </span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="text-black dark:text-white">{t('hero.title')}</span>
          <span className="block mt-3 text-blue-600 dark:text-blue-400">
            Gauas
          </span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link href={`/${locale}#contact`}>
            <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-colors w-full sm:w-auto border-2 border-blue-700">
              <span>{t('hero.cta')}</span>
              <ArrowRight size={20} />
            </button>
          </Link>
          <button className="px-10 py-5 bg-white dark:bg-gray-900 border-2 border-black dark:border-white text-black dark:text-white rounded-lg font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-full sm:w-auto">
            {locale === 'vi' ? 'Tìm Hiểu Thêm' : 'Learn More'}
          </button>
        </div>

        {/* Tech Stack */}
        <div>
          <p className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-6 uppercase tracking-widest">
            {t('hero.skills')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {['Web Development', 'App Development', 'Mobile Solutions', 'Cloud Services', 'Performance', 'UI/UX Design'].map((skill) => (
              <div
                key={skill}
                className="px-5 py-4 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-800 dark:border-gray-200 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

