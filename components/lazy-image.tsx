'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  unoptimized?: boolean
}

export function LazyImage({ 
  src, 
  alt, 
  width = 400, 
  height = 300, 
  className = '',
  priority = false,
  unoptimized = false 
}: LazyImageProps) {
  const [isVisible, setIsVisible] = useState(priority)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [priority])

  if (!isVisible && !priority) {
    return (
      <div
        ref={ref}
        className={`bg-muted animate-pulse ${className}`}
        style={{ width, height }}
      />
    )
  }

  return (
    <div ref={ref} className={className}>
      {unoptimized ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          quality={85}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  )
}
