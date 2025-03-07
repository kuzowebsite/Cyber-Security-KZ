"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  date: string
  category: string
  content: string
}

export default function NewsSection() {
  const [activeNewsIndex, setActiveNewsIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Кибер аюулгүй байдлын шинэ дүрэм батлагдлаа",
      date: "2024.07.15",
      category: "Үндэсний",
      content:
        "Монгол Улсын Засгийн газар кибер аюулгүй байдлын шинэ дүрэм, журмыг баталлаа. Энэхүү дүрэм нь төрийн болон хувийн хэвшлийн байгууллагуудад мөрдөгдөх бөгөөд 2024 оны 9-р сараас хэрэгжиж эхэлнэ.",
    },
    {
      id: 2,
      title: "Монгол улсын кибер аюулгүй байдлын стратеги шинэчлэгдэв",
      date: "2024.07.10",
      category: "Үндэсний",
      content:
        "Монгол Улсын Засгийн газар 2024-2030 оны кибер аюулгүй байдлын үндэсний стратегийг баталлаа. Шинэ стратеги нь дижитал дэд бүтцийг хамгаалах, мэргэжилтнүүдийг бэлтгэх, олон улсын хамтын ажиллагааг өргөжүүлэхэд чиглэгдсэн.",
    },
    {
      id: 3,
      title: "Дэлхийн хэмжээний ransomware халдлагаас сэрэмжлүүлж байна",
      date: "2024.07.05",
      category: "Олон улсын",
      content:
        "Олон улсын кибер аюулгүй байдлын байгууллагууд шинэ төрлийн ransomware халдлагаас сэрэмжлүүлж байна. Энэхүү халдлага нь санхүүгийн байгууллагууд, эрүүл мэндийн салбарт чиглэж байгаа бөгөөд өндөр хэмжээний мөнгө нэхэж байгаа юм.",
    },
    {
      id: 4,
      title: "Хятадын хакерууд Монголын төрийн байгууллагуудад халдсан гэх мэдээлэл гарлаа",
      date: "2024.06.28",
      category: "Аюулгүй байдал",
      content:
        "Олон улсын кибер аюулгүй байдлын компаниудын мэдээлснээр Хятадын APT бүлэглэлүүд Монголын төрийн байгууллагуудын системд нэвтрэх оролдлого хийсэн байна. Халдлагын гол зорилго нь улс төр, эдийн засгийн мэдээлэл цуглуулах байсан гэж үзэж байна.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setActiveNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
        setIsVisible(true)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [newsItems.length])

  return (
    <div className="w-full mb-6">
      {/* Mobile News Display */}
      <div className="block sm:hidden">
        <Card className="border-none shadow-md bg-white dark:bg-slate-900">
          <CardContent className="p-0">
            <div className="bg-blue-600 text-white py-2 px-3 flex items-center justify-between">
              <div className="flex items-center">
                <Badge variant="outline" className="bg-white text-blue-600 border-none mr-2">
                  МЭДЭЭ
                </Badge>
                <span className="text-xs font-medium">{newsItems[activeNewsIndex].date}</span>
              </div>
              <Badge variant="outline" className="bg-transparent border-white text-white text-xs">
                {newsItems[activeNewsIndex].category}
              </Badge>
            </div>
            <div className={`p-3 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <h3 className="font-medium text-sm mb-2">{newsItems[activeNewsIndex].title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">{newsItems[activeNewsIndex].content}</p>
            </div>
            <div className="flex justify-between items-center px-3 py-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex space-x-1">
                {newsItems.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full ${
                      index === activeNewsIndex ? "w-4 bg-blue-600" : "w-1.5 bg-slate-300 dark:bg-slate-700"
                    }`}
                  />
                ))}
              </div>
              <button
                className="text-xs text-blue-600 dark:text-blue-400 flex items-center"
                onClick={() => {
                  setIsVisible(false)
                  setTimeout(() => {
                    setActiveNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
                    setIsVisible(true)
                  }, 500)
                }}
              >
                Дараагийн
                <ChevronRight className="h-3 w-3 ml-1" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Desktop News Ticker */}
      <div className="hidden sm:block">
        <div className="bg-white dark:bg-slate-900 shadow-md rounded-lg py-2 px-4 flex items-center">
          <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded mr-3 whitespace-nowrap">МЭДЭЭ</div>
          <div className="overflow-hidden flex-1 h-5 relative">
            <div className={`transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <span className="text-sm">{newsItems[activeNewsIndex].title}</span>
            </div>
          </div>
          <Badge variant="outline" className="ml-3 text-xs">
            {newsItems[activeNewsIndex].date}
          </Badge>
        </div>
      </div>

      {/* News List for Mobile (Alternative) */}
      <div className="mt-4 block sm:hidden">
        <h3 className="text-sm font-medium mb-2 px-1">Бусад мэдээ</h3>
        <div className="space-y-2">
          {newsItems
            .filter((_, index) => index !== activeNewsIndex)
            .map((item) => (
              <Card key={item.id} className="border-none shadow-sm">
                <CardContent className="p-3">
                  <div className="flex justify-between items-center mb-1">
                    <Badge variant="outline" className="text-xs bg-slate-100 dark:bg-slate-800 border-none">
                      {item.category}
                    </Badge>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{item.date}</span>
                  </div>
                  <h4 className="text-xs font-medium line-clamp-2">{item.title}</h4>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}

