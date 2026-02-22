'use client'

import { Marquee } from './marquee'
import { ServiceOfferings } from './service-offerings'

interface MarqueeItem {
  name: string
  icon: string
}

export function Services({ locale, t, devTools }: { locale: string; t: (key: string) => string; devTools: MarqueeItem[] }) {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-950 scroll-mt-24">
      {/* Minimal grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Service Offerings Section */}
        <ServiceOfferings locale={locale} t={t} />
      </div>

      {/* Dev Tools Marquee - Moving Left - Full Width */}
      <div className="mt-16 md:mt-20 relative z-10">
        <Marquee
          items={devTools}
          direction="left"
        />
      </div>
    </section>
  )
}

