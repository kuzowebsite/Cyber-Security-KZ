"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ExternalLink, Clock, AlertTriangle, Globe, Newspaper, TrendingUp, Shield } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  summary: string
  source: string
  date: string
  url: string
  category: "threat" | "vulnerability" | "tool" | "research" | "event"
  isMongolian: boolean
}

// Sample news data
const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Монголд шинэ төрлийн фишинг халдлага илрэв",
    summary:
      "Банкны үйлчилгээ болон төрийн үйлчилгээний нэрийг ашиглан иргэдийн мэдээллийг хулгайлах оролдлого бүртгэгдлээ.",
    source: "CyberMongolia",
    date: "2024-03-01",
    url: "https://example.com/news/1",
    category: "threat",
    isMongolian: true,
  },
  {
    id: 2,
    title: "Кибер аюулгүй байдлын тухай хуульд өөрчлөлт орлоо",
    summary:
      "Монгол Улсын Их Хурлаас Кибер аюулгүй байдлын тухай хуульд нэмэлт өөрчлөлт оруулах тухай хуулийн төслийг баталлаа.",
    source: "Засгийн газрын мэдээ",
    date: "2024-02-15",
    url: "https://example.com/news/2",
    category: "research",
    isMongolian: true,
  },
  {
    id: 3,
    title: "Critical Vulnerability Found in Popular VPN Service",
    summary:
      "Security researchers have discovered a critical vulnerability in a widely used VPN service that could allow attackers to intercept traffic.",
    source: "Security Weekly",
    date: "2024-03-05",
    url: "https://example.com/news/3",
    category: "vulnerability",
    isMongolian: false,
  },
  {
    id: 4,
    title: "Үүлэн технологийн аюулгүй байдлын шинэ шийдэл",
    summary: "Монголын мэдээллийн технологийн компани үүлэн технологийн аюулгүй байдлын шинэ шийдэл гаргалаа.",
    source: "ICT News",
    date: "2024-02-28",
    url: "https://example.com/news/4",
    category: "tool",
    isMongolian: true,
  },
  {
    id: 5,
    title: "New Ransomware Strain Targets Healthcare Organizations",
    summary:
      "A new ransomware variant has been observed targeting healthcare organizations worldwide, encrypting patient data and demanding payment.",
    source: "Threat Post",
    date: "2024-03-10",
    url: "https://example.com/news/5",
    category: "threat",
    isMongolian: false,
  },
  {
    id: 6,
    title: "Кибер аюулгүй байдлын үндэсний форум болно",
    summary: "Монгол улсын хэмжээнд анх удаа зохион байгуулагдах Кибер аюулгүй байдлын үндэсний форум ирэх сард болно.",
    source: "CITA",
    date: "2024-02-20",
    url: "https://example.com/news/6",
    category: "event",
    isMongolian: true,
  },
  {
    id: 7,
    title: "Open Source Security Tool Released for Network Monitoring",
    summary:
      "A new open-source security tool has been released that helps organizations monitor their networks for suspicious activity.",
    source: "Open Source Security",
    date: "2024-03-08",
    url: "https://example.com/news/7",
    category: "tool",
    isMongolian: false,
  },
  {
    id: 8,
    title: "Монголын банкуудад кибер халдлагын эрсдэл нэмэгдэж байна",
    summary:
      "Сүүлийн 6 сарын хугацаанд Монголын санхүүгийн байгууллагуудад чиглэсэн кибер халдлагын оролдлого 30%-иар нэмэгджээ.",
    source: "Банк, Санхүүгийн мэдээ",
    date: "2024-03-12",
    url: "https://example.com/news/8",
    category: "research",
    isMongolian: true,
  },
]

export default function TechNews() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all")
  const [isLoading, setIsLoading] = useState(true)
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setNews(newsData)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const filteredNews = news.filter((item) => {
    const categoryMatch = selectedCategory === "all" || item.category === selectedCategory
    const languageMatch =
      selectedLanguage === "all" ||
      (selectedLanguage === "mongolian" && item.isMongolian) ||
      (selectedLanguage === "english" && !item.isMongolian)
    return categoryMatch && languageMatch
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "threat":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "vulnerability":
        return <Shield className="h-4 w-4 text-amber-500" />
      case "tool":
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case "research":
        return <Globe className="h-4 w-4 text-blue-500" />
      case "event":
        return <Clock className="h-4 w-4 text-purple-500" />
      default:
        return <Newspaper className="h-4 w-4 text-slate-500" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "threat":
        return "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800"
      case "vulnerability":
        return "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800"
      case "tool":
        return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
      case "research":
        return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
      case "event":
        return "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
      default:
        return ""
    }
  }

  return (
    <Card className="border shadow-lg bg-white dark:bg-slate-900">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Newspaper className="h-6 w-6 text-blue-500" />
          Кибер аюулгүй байдлын мэдээ
        </CardTitle>
        <CardDescription>Хамгийн сүүлийн үеийн кибер аюулгүй байдлын мэдээ, мэдээлэл</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <select
              className="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">Бүх ангилал</option>
              <option value="threat">Аюул заналхийлэл</option>
              <option value="vulnerability">Эмзэг байдал</option>
              <option value="tool">Хэрэгсэл, шийдэл</option>
              <option value="research">Судалгаа</option>
              <option value="event">Үйл явдал</option>
            </select>

            <select
              className="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="all">Бүх хэл</option>
              <option value="mongolian">Монгол</option>
              <option value="english">English</option>
            </select>
          </div>

          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <Skeleton className="h-5 w-2/3" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <div className="flex gap-2">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredNews.length > 0 ? (
                filteredNews.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-lg p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-3">{item.summary}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Globe className="h-4 w-4" />
                        <span>{item.source}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <Badge variant="outline" className={getCategoryColor(item.category)}>
                        <span className="flex items-center gap-1">
                          {getCategoryIcon(item.category)}
                          {item.category === "threat" && "Аюул заналхийлэл"}
                          {item.category === "vulnerability" && "Эмзэг байдал"}
                          {item.category === "tool" && "Хэрэгсэл, шийдэл"}
                          {item.category === "research" && "Судалгаа"}
                          {item.category === "event" && "Үйл явдал"}
                        </span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                      >
                        {item.isMongolian ? "Монгол" : "English"}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Дэлгэрэнгүй
                      </a>
                    </Button>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                  Таны хайлтад тохирох мэдээ олдсонгүй
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="bg-slate-50 dark:bg-slate-800/50 border-t pt-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
          <div className="text-xs text-slate-500 dark:text-slate-400">Мэдээ, мэдээллийг өдөр бүр шинэчилж байна</div>
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Newspaper className="h-4 w-4" />
              Бүх мэдээ үзэх
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

