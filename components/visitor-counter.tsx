"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [onlineUsers, setOnlineUsers] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real application, you would fetch this data from your analytics service
    // For example, using Google Analytics API, Firebase Analytics, or a custom backend
    const fetchVisitorData = async () => {
      try {
        setIsLoading(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // In a real app, you would fetch real data:
        // const response = await fetch('/api/analytics/visitors');
        // const data = await response.json();
        // setVisitorCount(data.totalVisitors);
        // setOnlineUsers(data.onlineUsers);

        // For demo purposes, we'll use simulated data
        const storedCount = localStorage.getItem("visitorCount")
        const initialCount = storedCount ? Number.parseInt(storedCount, 10) : 5432

        // Increment the count for this "new visitor"
        const newCount = initialCount + 1
        localStorage.setItem("visitorCount", newCount.toString())

        setVisitorCount(newCount)
        setOnlineUsers(Math.floor(Math.random() * 50) + 30)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching visitor data:", error)
        setIsLoading(false)
      }
    }

    fetchVisitorData()

    // Update online users count periodically
    const interval = setInterval(() => {
      setOnlineUsers((prev) => {
        // Simulate some fluctuation in online users
        const change = Math.floor(Math.random() * 5) - 2 // -2 to +2
        return Math.max(20, prev + change) // Ensure we don't go below 20
      })
    }, 30000) // Every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 h-full">
        <CardContent className="p-4">
          {isLoading ? (
            <div className="flex items-center justify-center h-24">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              <h3 className="font-semibold text-lg">Зочдын тоо</h3>

              <div className="flex flex-col space-y-6">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Нийт зочид</p>
                  <p className="text-3xl font-bold">{visitorCount.toLocaleString("mn-MN")}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Сайт нээгдсэнээс хойш</p>
                </div>

                <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-3 py-2 rounded-lg">
                  <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <div>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                      {onlineUsers} хэрэглэгч одоо онлайн байна
                    </p>
                    <p className="text-xs text-green-500 dark:text-green-500">
                      Сүүлийн шинэчлэл: {new Date().toLocaleTimeString("mn-MN")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

