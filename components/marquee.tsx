'use client'

interface MarqueeItem {
  name: string
  icon: string
}

interface MarqueeProps {
  items: MarqueeItem[]
  direction: 'left' | 'right'
}

export function Marquee({ items, direction }: MarqueeProps) {
  const isLeft = direction === 'left'

  return (
    <div className="py-6 md:py-8 bg-card/20 border-y border-border relative overflow-hidden" style={{ contain: 'layout style paint' }}>
      <div className="marquee-container will-change-transform" style={{ transform: 'translateZ(0)' }}>
        <div className={`marquee-content ${isLeft ? 'marquee-left' : 'marquee-right'}`} style={{ willChange: 'transform' }}>
          {/* Original items */}
          {items.map((item, index) => (
            <div
              key={`original-${index}`}
              className="flex items-center gap-2 md:gap-3 whitespace-nowrap flex-shrink-0 px-3 md:px-5 py-2 md:py-3 rounded-lg bg-card/30 border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="h-6 md:h-8 w-6 md:w-8 object-contain"
                loading="lazy"
                decoding="async"
              />
              <span className="font-medium text-foreground text-xs md:text-sm">{item.name}</span>
            </div>
          ))}

          {/* Duplicated items for seamless loop */}
          {items.map((item, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex items-center gap-2 md:gap-3 whitespace-nowrap flex-shrink-0 px-3 md:px-5 py-2 md:py-3 rounded-lg bg-card/30 border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="h-6 md:h-8 w-6 md:w-8 object-contain"
                loading="lazy"
                decoding="async"
              />
              <span className="font-medium text-foreground text-xs md:text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
