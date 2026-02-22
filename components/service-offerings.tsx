'use client'

import { Code2, Zap, TrendingUp, Lightbulb, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export function ServiceOfferings({ locale, t }: { locale: string; t: (key: string) => string }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const offerings = [
    {
      id: 1,
      icon: Code2,
      titleKey: 'services.offering.aiCodeImprovement.title',
      descKey: 'services.offering.aiCodeImprovement.desc',
      bgColor: 'bg-blue-600 dark:bg-blue-600',
      iconBg: 'bg-blue-700',
      detailsVi: 'Sử dụng AI và công nghệ tiên tiến để phân tích, tối ưu hóa code của bạn. Giảm technical debt, cải thiện performance và maintainability.',
      detailsEn: 'Use AI and advanced technology to analyze and optimize your code. Reduce technical debt, improve performance and maintainability.',
      imagePlaceholder: '/placeholder.svg',
    },
    {
      id: 2,
      icon: Zap,
      titleKey: 'services.offering.fullCycle.title',
      descKey: 'services.offering.fullCycle.desc',
      bgColor: 'bg-green-600 dark:bg-green-600',
      iconBg: 'bg-green-700',
      detailsVi: 'Từ ý tưởng đến sản phẩm hoàn chỉnh. Phân tích yêu cầu, thiết kế, phát triển, testing và deployment. Hỗ trợ maintenance lâu dài.',
      detailsEn: 'From idea to complete product. Requirements analysis, design, development, testing and deployment. Long-term maintenance support.',
      imagePlaceholder: '/placeholder.svg',
    },
    {
      id: 3,
      icon: TrendingUp,
      titleKey: 'services.offering.optimization.title',
      descKey: 'services.offering.optimization.desc',
      bgColor: 'bg-purple-600 dark:bg-purple-600',
      iconBg: 'bg-purple-700',
      detailsVi: 'Tối ưu hóa hiệu năng hệ thống, giảm chi phí vận hành. Database tuning, caching strategies, load balancing và cloud optimization.',
      detailsEn: 'Optimize system performance, reduce operating costs. Database tuning, caching strategies, load balancing and cloud optimization.',
      imagePlaceholder: '/placeholder.svg',
    },
    {
      id: 4,
      icon: Lightbulb,
      titleKey: 'services.offering.consulting.title',
      descKey: 'services.offering.consulting.desc',
      bgColor: 'bg-orange-600 dark:bg-orange-600',
      iconBg: 'bg-orange-700',
      detailsVi: 'Tư vấn kiến trúc hệ thống, tech stack selection, best practices. Đánh giá code review và hướng dẫn team development.',
      detailsEn: 'System architecture consulting, tech stack selection, best practices. Code review assessment and team development guidance.',
      imagePlaceholder: '/placeholder.svg',
    },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="mt-16 md:mt-20">
      <div className="mb-12 text-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
          {t('services.offering.title')}
        </h3>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto font-medium">
          {locale === 'vi'
            ? 'Bốn dịch vụ chính giúp bạn đạt được mục tiêu phần mềm'
            : 'Four core services to help you achieve your software goals'}
        </p>
      </div>

      <div className="space-y-6 max-w-5xl mx-auto">
        {offerings.map((offering) => {
          const Icon = offering.icon
          const isHovered = hoveredId === offering.id

          return (
            <div
              key={offering.id}
              className={`group relative rounded-xl cursor-pointer ${offering.bgColor} border-2 border-black dark:border-white overflow-hidden ${
                isHovered ? 'p-0' : 'p-8 md:p-10'
              }`}
              style={{
                maxHeight: isHovered ? '700px' : '200px',
                transition: 'max-height 1.2s cubic-bezier(0.4, 0, 0.2, 1), padding 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={() => setHoveredId(offering.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={scrollToContact}
            >
              {!isHovered ? (
                // Collapsed state
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 p-5 rounded-lg ${offering.iconBg}`}>
                    <Icon size={40} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {t(offering.titleKey)}
                    </h4>
                    <p className="text-lg text-white/95 leading-relaxed font-medium">
                      {t(offering.descKey)}
                    </p>
                  </div>
                  <ArrowRight size={24} className="text-white flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ) : (
                // Expanded state with details and image
                <div
                  className="grid md:grid-cols-2 gap-0 h-full"
                  style={{
                    animation: 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s backwards',
                  }}
                >
                  {/* Left: Image */}
                  <div className="relative h-full bg-black/20" style={{ minHeight: '490px' }}>
                    <Image
                      src={offering.imagePlaceholder}
                      alt={t(offering.titleKey)}
                      fill
                      className="object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`p-6 rounded-2xl ${offering.iconBg}`}
                        style={{
                          opacity: 0,
                          animation: 'scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) 1.4s forwards',
                        }}
                      >
                        <Icon size={60} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div
                    className="p-8 md:p-10 flex flex-col justify-center"
                    style={{
                      opacity: 0,
                      animation: 'slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) 1.4s forwards',
                    }}
                  >
                    <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {t(offering.titleKey)}
                    </h4>
                    <p className="text-xl text-white/95 leading-relaxed mb-6 font-medium">
                      {t(offering.descKey)}
                    </p>
                    <div className="border-t-2 border-white/20 pt-6 mb-6">
                      <p className="text-base text-white/90 leading-relaxed">
                        {locale === 'vi' ? offering.detailsVi : offering.detailsEn}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                      <span>{locale === 'vi' ? 'Nhấn để liên hệ' : 'Click to contact'}</span>
                      <ArrowRight size={24} className="animate-pulse" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

