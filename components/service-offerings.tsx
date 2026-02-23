'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export function ServiceOfferings({ locale, t }: { locale: string; t: (key: string) => string }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const offerings = [
    {
      id: 1,
      titleKey: 'services.offering.aiCodeImprovement.title',
      descKey: 'services.offering.aiCodeImprovement.desc',
      bgColor: 'bg-blue-600',
      detailsVi: 'Sử dụng AI và công nghệ tiên tiến để phân tích, tối ưu hóa code của bạn. Giảm technical debt, cải thiện performance và maintainability.',
      detailsEn: 'Use AI and advanced technology to analyze and optimize your code. Reduce technical debt, improve performance and maintainability.',
      image: '/ai-code-improvement.jpg',
    },
    {
      id: 2,
      titleKey: 'services.offering.fullCycle.title',
      descKey: 'services.offering.fullCycle.desc',
      bgColor: 'bg-green-600',
      detailsVi: 'Từ ý tưởng đến sản phẩm hoàn chỉnh. Phân tích yêu cầu, thiết kế, phát triển, testing và deployment. Hỗ trợ maintenance lâu dài.',
      detailsEn: 'From idea to complete product. Requirements analysis, design, development, testing and deployment. Long-term maintenance support.',
      image: '/full-cycle-development.jpg',
    },
    {
      id: 3,
      titleKey: 'services.offering.optimization.title',
      descKey: 'services.offering.optimization.desc',
      bgColor: 'bg-purple-600',
      detailsVi: 'Tối ưu hóa hiệu năng hệ thống, giảm chi phí vận hành. Database tuning, caching strategies, load balancing và cloud optimization.',
      detailsEn: 'Optimize system performance, reduce operating costs. Database tuning, caching strategies, load balancing and cloud optimization.',
      image: '/performance-cost-optimization.jpg',
    },
    {
      id: 4,
      titleKey: 'services.offering.consulting.title',
      descKey: 'services.offering.consulting.desc',
      bgColor: 'bg-orange-600',
      detailsVi: 'Tư vấn kiến trúc hệ thống, tech stack selection, best practices. Đánh giá code review và hướng dẫn team development.',
      detailsEn: 'System architecture consulting, tech stack selection, best practices. Code review assessment and team development guidance.',
      image: '/architecture-consulting.jpg',
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
          const isHovered = hoveredId === offering.id

          return (
            <div
              key={offering.id}
              className="group relative rounded-xl cursor-pointer border-2 border-black dark:border-white overflow-hidden"
              style={{
                height: isHovered ? '490px' : '200px',
                transition: 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={() => setHoveredId(offering.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={scrollToContact}
            >
              {/* Always-mounted image background */}
              <Image
                src={offering.image}
                alt={t(offering.titleKey)}
                fill
                className="object-cover"
              />

              {/* Dark overlay — fades out on hover */}
              <div
                className="absolute inset-0 bg-black transition-opacity duration-700"
                style={{ opacity: isHovered ? 0 : 0.72 }}
              />

              {/* Collapsed content — title + desc, fades out on hover */}
              <div
                className="absolute inset-0 flex items-center px-8 md:px-10 gap-4 transition-opacity duration-500"
                style={{ opacity: isHovered ? 0 : 1 }}
              >
                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow">
                    {t(offering.titleKey)}
                  </h4>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed font-medium line-clamp-2">
                    {t(offering.descKey)}
                  </p>
                </div>
                <ArrowRight size={24} className="text-white flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Expanded content — solid color right panel + detail, fades in on hover */}
              <div
                className="absolute inset-0 grid grid-cols-2 transition-opacity duration-500"
                style={{ opacity: isHovered ? 1 : 0, pointerEvents: isHovered ? 'auto' : 'none' }}
              >
                {/* Left: image already showing via the background Image above */}
                <div />

                {/* Right: colored panel with content */}
                <div
                  className={`${offering.bgColor} h-full p-8 md:p-10 flex flex-col justify-center`}
                  style={{
                    transform: isHovered ? 'translateX(0)' : 'translateX(20px)',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                  }}
                >
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t(offering.titleKey)}
                  </h4>
                  <p className="text-xl text-white/95 leading-relaxed mb-6 font-medium">
                    {t(offering.descKey)}
                  </p>
                  <div className="border-t-2 border-white/30 pt-6 mb-6">
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
            </div>
          )
        })}
      </div>
    </div>
  )
}
