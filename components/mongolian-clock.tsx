"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clock, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function MongolianClock() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatDate = () => {
    const months = [
      "Нэгдүгээр",
      "Хоёрдугаар",
      "Гуравдугаар",
      "Дөрөвдүгээр",
      "Тавдугаар",
      "Зургадугаар",
      "Долдугаар",
      "Наймдугаар",
      "Есдүгээр",
      "Аравдугаар",
      "Арван нэгдүгээр",
      "Арван хоёрдугаар",
    ]

    const days = ["Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"]

    const year = currentTime.getFullYear()
    const month = months[currentTime.getMonth()]
    const day = currentTime.getDate()
    const weekday = days[currentTime.getDay()]

    return `${year} оны ${month} сарын ${day}, ${weekday}`
  }

  const formatTime = () => {
    const hours = currentTime.getHours().toString().padStart(2, "0")
    const minutes = currentTime.getMinutes().toString().padStart(2, "0")
    const seconds = currentTime.getSeconds().toString().padStart(2, "0")

    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              <h3 className="font-semibold">Монгол цаг</h3>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full text-xs text-blue-700 dark:text-blue-300">
              Улаанбаатар
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <div className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{formatDate()}</div>

            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <p className="text-2xl sm:text-3xl font-mono font-bold tracking-wider">{formatTime()}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

