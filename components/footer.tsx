'use client'

import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export function Footer({ locale, t }: { locale: string; t: (key: string) => string }) {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/logo.svg"
                  alt="Gauas Logo"
                  width={32}
                  height={32}
                />
              </div>
              <span className="glow-text">Gauas</span>
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              {locale === 'vi'
                ? 'Giải pháp phát triển phần mềm chuyên nghiệp, hiệu năng cao.'
                : 'Professional software development solutions, high performance.'}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">{t('nav.services')}</h4>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li><a href={`/${locale}#services`} className="hover:text-accent transition-colors">{t('services.web.title')}</a></li>
              <li><a href={`/${locale}#services`} className="hover:text-accent transition-colors">{t('services.app.title')}</a></li>
              <li><a href={`/${locale}#services`} className="hover:text-accent transition-colors">{t('services.cloud.title')}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">{locale === 'vi' ? 'Công Ty' : 'Company'}</h4>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li><a href={`/${locale}#contact`} className="hover:text-accent transition-colors">{t('nav.contact')}</a></li>
              <li><a href={`/${locale}#services`} className="hover:text-accent transition-colors">{t('nav.services')}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{locale === 'vi' ? 'Portfolio' : 'Portfolio'}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">{t('footer.contact')}</h4>
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Mail size={16} className="flex-shrink-0" />
                <a href={`mailto:${t('owner.email')}`} className="truncate">{t('contact.email')}</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Phone size={16} className="flex-shrink-0" />
                <a href={`tel:${t('owner.phone')}`}>{t('owner.phone')}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-muted-foreground gap-4">
          <div className="text-center md:text-left">© 2025 {t('owner.name')}. {t('footer.rights')}.</div>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-accent transition-colors">{locale === 'vi' ? 'Quyền Riêng Tư' : 'Privacy'}</a>
            <a href="#" className="hover:text-accent transition-colors">{locale === 'vi' ? 'Điều Khoản' : 'Terms'}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
