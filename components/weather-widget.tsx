"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Cloud, CloudRain, CloudSnow, Sun, Moon, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface WeatherData {
  current: {
    temp: number
    minTemp: number
    weather: string
    time: string
    city: string
  }
  forecast: Array<{
    day: string
    temp: number
    minTemp: number
    weather: string
  }>
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>({
    current: {
      temp: -1,
      minTemp: -13,
      weather: "cloudy",
      time: "2025-03-06",
      city: "Улаанбаатар",
    },
    forecast: [
      { day: "Баасан", temp: 1, minTemp: -14, weather: "cloudy" },
      { day: "Бямба", temp: 6, minTemp: -11, weather: "cloudy" },
      { day: "Ням", temp: 3, minTemp: -5, weather: "cloudy" },
      { day: "Даваа", temp: 6, minTemp: -10, weather: "cloudy" },
    ],
  })

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Simulate fetching weather data
    const fetchWeather = async () => {
      try {
        // In a real app, you would fetch from an API
        // For now, we'll just simulate with the data we have
        // but in a real implementation, you would use:
        // const response = await fetch('https://api.weather.example/ulaanbaatar');
        // const data = await response.json();

        // For demo purposes, we'll just update the time
        setWeather((prev) => ({
          ...prev,
          current: {
            ...prev.current,
            time: new Date().toISOString(),
          },
        }))
      } catch (error) {
        console.error("Error fetching weather data:", error)
      }
    }

    // Fetch weather initially and then every 30 minutes
    fetchWeather()
    const weatherTimer = setInterval(fetchWeather, 30 * 60 * 1000)

    return () => {
      clearInterval(timer)
      clearInterval(weatherTimer)
    }
  }, [])

  const getWeatherIcon = (weather: string, size = 20) => {
    switch (weather.toLowerCase()) {
      case "rain":
        return <CloudRain size={size} className="text-blue-500" />
      case "snow":
        return <CloudSnow size={size} className="text-blue-300" />
      case "sunny":
        return <Sun size={size} className="text-yellow-500" />
      case "night":
        return <Moon size={size} className="text-slate-400" />
      default:
        return <Cloud size={size} className="text-slate-400" />
    }
  }

  const formatDate = (date: Date) => {
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

    const month = months[date.getMonth()]
    const day = date.getDate()
    const weekday = days[date.getDay()]

    return `${month} сарын ${day}, ${weekday}`
  }

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const seconds = date.getSeconds().toString().padStart(2, "0")

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
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{formatDate(currentTime)}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <p className="text-lg font-mono font-semibold">{formatTime(currentTime)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AZPLaNguFK3zXbVgPlBvUqN2yrb9nI.png"
                  alt="Weather icon"
                  className="h-10 w-10"
                />
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-b border-slate-200 dark:border-slate-700 py-3">
              <div>
                <h3 className="font-semibold">{weather.current.city}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Өнөөдөр / {new Date().toLocaleDateString("mn-MN")}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Одоо</p>
                  <p className="text-2xl font-bold">{weather.current.temp}°</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Шөнөдөө</p>
                  <p className="text-2xl font-bold">{weather.current.minTemp}°</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {weather.forecast.map((day, i) => (
                <div key={i} className="text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400">{day.day}</p>
                  <div className="my-1">{getWeatherIcon(day.weather)}</div>
                  <div className="flex justify-center gap-2 text-sm">
                    <span className="font-medium">{day.temp}°</span>
                    <span className="text-slate-500 dark:text-slate-400">{day.minTemp}°</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-xs text-right text-slate-500 dark:text-slate-400 pt-1">
              Сүүлийн шинэчлэл: {new Date().toLocaleTimeString("mn-MN")}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

