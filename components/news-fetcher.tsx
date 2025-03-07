"use client"

import { useState, useEffect } from "react"

export interface NewsItem {
  title: string
  source: string
  url: string
  date?: string
  category?: string
}

export function useNewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true)
        // In a real implementation, you would fetch from an API
        // For demo purposes, we're simulating an API response
        const response = await fetch("/api/news")

        if (!response.ok) {
          throw new Error("Failed to fetch news")
        }

        const data = await response.json()
        setNews(data)
      } catch (err) {
        console.error("Error fetching news:", err)
        setError("Мэдээ татахад алдаа гарлаа")

        // Fallback to sample data if API fails
        setNews(getSampleNews())
      } finally {
        setLoading(false)
      }
    }

    fetchNews()

    // Refresh news every 30 minutes
    const intervalId = setInterval(fetchNews, 30 * 60 * 1000)

    return () => clearInterval(intervalId)
  }, [])

  return { news, loading, error }
}

// Sample news data as fallback
function getSampleNews(): NewsItem[] {
  return [
    {
      title: "iPhone 16е загварын урьдчилсан захиалга II/21-нээс эхэлнэ",
      source: "gogo.mn",
      url: "https://gogo.mn/r/6876",
      category: "Технологи",
    },
    {
      title: "Сайн, гэхдээ жангалтгүй - Nvidia-ийн IV улирлын тайлан",
      source: "gogo.mn",
      url: "https://gogo.mn/r/6875",
      category: "Технологи",
    },
    {
      title: "Хүний нүүц мэдээлэл хадгалдаг байгууллагууд эрсдэлийн үнэлгээ буруу хийлээ шаардлагатай",
      source: "gogo.mn",
      url: "https://gogo.mn/r/6874",
      category: "Кибер аюулгүй байдал",
    },
    {
      title: "APPLE КОМПАНИ УДААН ХҮЛЭЭЛГЭСЭН ХЯМД ҮНЭТЭЙ IPHONE 16E ЗАГВАРЫГ ТАНИЛЦУУЛЛАА",
      source: "ikon.mn",
      url: "https://ikon.mn/n/2zw9",
      category: "Технологи",
    },
    {
      title: "МЕТА КОМПАНИ ДЭЛХИЙГ ХЭРСЭН ХАМГИЙН УРТ КАБЕЛИЙН СҮЛЖЭЭГ ДАЛАЙН УСАН ДООГУУР БАЙГУУЛАХ ТӨСӨЛ ЗАРЛАЛАА",
      source: "ikon.mn",
      url: "https://ikon.mn/n/2zw8",
      category: "Технологи",
    },
    {
      title: 'Илон Маск "Дэлхийн хамгийн ухаалаг AI" гэх тодотголтой "Grok-3" чатботоо танилцуулав',
      source: "gogo.mn",
      url: "https://gogo.mn/r/6873",
      category: "Технологи",
    },
    {
      title: "Шинжээчийн ажлыг хийгээд олууулаар орлуулсан хөдөж сэн өгөөжөөрөө зах зээлд хол илүүрхжээ",
      source: "gogo.mn",
      url: "https://gogo.mn/r/6872",
      category: "Технологи",
    },
    {
      title: "The MongolZ ESL Pro League-ийн эхний тоглолтдоо 2-0 харьцаагаар хожлоо",
      source: "gogo.mn",
      url: "https://gogo.mn/r/6871",
      category: "Технологи",
    },
  ]
}

