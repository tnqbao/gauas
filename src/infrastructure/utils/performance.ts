/**
 * Performance Optimization Utilities
 * Helps monitor and optimize page performance
 */

// Debounce hook for event handlers
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null

  return function debounced(...args: Parameters<T>) {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

// Throttle hook for scroll/resize events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false

  return function throttled(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Report Web Vitals
export function reportWebVitals(metric: {
  id: string
  name: string
  startTime: number
  value: number
  delta: number
  entries: PerformanceEntry[]
}) {
  if (typeof window !== 'undefined' && 'sendBeacon' in navigator) {
    // Send to analytics
    const body = JSON.stringify(metric)
    navigator.sendBeacon('/api/vitals', body)
  }
}

// Check if component is in viewport
export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0
  )
}

// Prefetch resource hints
export function prefetchResources(urls: string[], rel: 'prefetch' | 'preconnect' = 'prefetch') {
  if (typeof window === 'undefined') return

  urls.forEach((url) => {
    const link = document.createElement('link')
    link.rel = rel
    link.href = url
    document.head.appendChild(link)
  })
}

// Lazy load stylesheet
export function lazyLoadStylesheet(href: string) {
  if (typeof document === 'undefined') return

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  link.media = 'print'
  link.onload = function () {
    link.media = 'all'
  }
  document.head.appendChild(link)
}

// Monitor performance metrics
export function monitorPerformance() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return

  try {
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      console.log('[Performance] LCP:', lastEntry.renderTime || lastEntry.loadTime)
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // First Input Delay
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach((entry) => {
        console.log('[Performance] FID:', entry.processingDuration)
      })
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Cumulative Layout Shift
    let clsValue = 0
    const clsObserver = new PerformanceObserver((entryList) => {
      entryList.getEntries().forEach((entry) => {
        if ('hadRecentInput' in entry && !entry.hadRecentInput) {
          clsValue += entry.value
          console.log('[Performance] CLS:', clsValue)
        }
      })
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    return { lcpObserver, fidObserver, clsObserver }
  } catch (e) {
    console.error('[Performance] Failed to setup monitoring:', e)
  }
}
