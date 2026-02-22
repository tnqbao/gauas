'use client'

import { CheckCircle2, Award, Zap, Users } from 'lucide-react'

export function About({ locale, t }: { locale: string; t: (key: string) => string }) {
  const skills = locale === 'vi'
    ? [
        'Kinh nghiệm 5+ năm phát triển web',
        'Chuyên React, Next.js, TypeScript',
        'Backend Node.js, Express, database',
        'DevOps, Docker, deployment',
      ]
    : [
        '5+ years web development experience',
        'Specialized in React, Next.js, TypeScript',
        'Backend Node.js, Express, databases',
        'DevOps, Docker, cloud deployment',
      ]

  const stats = [
    { number: '50+', labelKey: 'about.projects' },
    { number: '30+', labelKey: 'about.clients' },
    { number: '5+', labelKey: 'about.experience' },
    { number: '100%', label: locale === 'vi' ? 'Mục Tiêu Đạt Được' : 'Goals Achieved' },
  ]

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden scroll-mt-24" style={{ contain: 'layout style paint' }}>
      {/* Background tech elements */}
      <div className="absolute inset-0 opacity-5" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl will-change-auto" style={{ backfaceVisibility: 'hidden' }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full blur-3xl will-change-auto" style={{ backfaceVisibility: 'hidden' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center" style={{ contain: 'layout' }}>
          {/* Left side - Text */}
          <div className="animate-fade-in-up" style={{ transform: 'translateZ(0)' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="glow-text">{t('about.title')}</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
              {t('about.intro')}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              {t('about.desc')}
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {skills.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm md:text-base text-foreground">
                  <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="px-6 md:px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-sm md:text-base">
              {locale === 'vi' ? 'Xem Portfolio' : 'View Portfolio'}
            </button>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="glow-border p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm text-center hover:bg-card/80 transition-all">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">{stat.number}</div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.labelKey ? t(stat.labelKey) : stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
