"use client"

import { useState, useEffect, useRef } from "react"
import { useNewsFeed } from "./news-fetcher"
import { ExternalLink } from "lucide-react"

interface NewsTickerProps {
  maxItems?: number
  animationDuration?: number
}

export default function NewsTicker({ maxItems = 8, animationDuration = 6000 }: NewsTickerProps) {
  const { news, loading, error } = useNewsFeed()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Filter to max items
  const displayNews = news.slice(0, maxItems)

  useEffect(() => {
    if (displayNews.length === 0) return

    let timeoutId: NodeJS.Timeout

    const animateNews = () => {
      setIsAnimating(true)

      timeoutId = setTimeout(() => {
        setIsAnimating(false)

        // Wait a bit after fade out before changing index
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % displayNews.length)

          // Start next animation cycle
          animateNews()
        }, 300)
      }, animationDuration)
    }

    animateNews()

    return () => {
      clearTimeout(timeoutId)
    }
  }, [displayNews, animationDuration])

  // Get source icon based on news source
  const getSourceIcon = (source: string) => {
    switch (source.toLowerCase()) {
      case "gogo.mn":
        return "🔵"
      case "ikon.mn":
        return "🟣"
      case "news.mn":
        return "🟠"
      default:
        return "📰"
    }
  }

  // Get category icon based on news category
  const getCategoryIcon = (category?: string) => {
    if (!category) return "📱"

    switch (category.toLowerCase()) {
      case "технологи":
        return "💻"
      case "кибер аюулгүй байдал":
        return "🔒"
      case "entertainment":
        return "🎮"
      default:
        return "📱"
    }
  }

  if (loading && news.length === 0) {
    return (
      <div className="relative px-4 py-3 flex items-center justify-center h-16">
        <div className="animate-pulse flex space-x-2">
          <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
          <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
          <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    )
  }

  if (error && news.length === 0) {
    return (
      <div className="relative px-4 py-3 flex items-center justify-center h-16 text-red-500">
        <p>{error}</p>
      </div>
    )
  }

  if (displayNews.length === 0) {
    return (
      <div className="relative px-4 py-3 flex items-center justify-center h-16">
        <p className="text-white text-sm">Мэдээ олдсонгүй</p>
      </div>
    )
  }

  const currentNews = displayNews[currentIndex]

  return (
    <div ref={containerRef} className="relative px-4 py-3">
      <div className="h-10 sm:h-10 overflow-hidden relative">
        <a
          href={currentNews.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center space-x-2 absolute left-0 w-full transition-opacity duration-500 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="flex-shrink-0 mr-2">{getCategoryIcon(currentNews.category)}</span>
          <span className="flex-shrink-0 mr-2">{getSourceIcon(currentNews.source)}</span>
          <span className="text-white text-sm sm:text-base font-medium truncate">{currentNews.title}</span>
          <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0 text-white/70" />
        </a>
      </div>
      <div className="absolute bottom-1 left-0 w-full px-4">
        <div className="flex justify-center space-x-1">
          {displayNews.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-4 bg-white" : "w-1 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

