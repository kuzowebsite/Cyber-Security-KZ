"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Globe, Shield, Server, Laptop, Smartphone, Wand2 } from "lucide-react"

// Mock attack data - in a real app, this would come from an API
const ATTACK_TYPES = [
  { type: "DDoS", icon: Server, color: "red" },
  { type: "Malware", icon: Laptop, color: "amber" },
  { type: "Phishing", icon: Smartphone, color: "orange" },
  { type: "Ransomware", icon: Shield, color: "purple" },
]

const COUNTRIES = [
  { name: "United States", code: "US", coords: { x: 150, y: 120 } },
  { name: "Russia", code: "RU", coords: { x: 500, y: 80 } },
  { name: "China", code: "CN", coords: { x: 600, y: 150 } },
  { name: "Brazil", code: "BR", coords: { x: 250, y: 300 } },
  { name: "Germany", code: "DE", coords: { x: 420, y: 90 } },
  { name: "India", code: "IN", coords: { x: 560, y: 180 } },
  { name: "South Korea", code: "KR", coords: { x: 650, y: 140 } },
  { name: "United Kingdom", code: "GB", coords: { x: 380, y: 80 } },
  { name: "Australia", code: "AU", coords: { x: 680, y: 280 } },
  { name: "Japan", code: "JP", coords: { x: 690, y: 120 } },
  { name: "Canada", code: "CA", coords: { x: 180, y: 80 } },
  { name: "France", code: "FR", coords: { x: 400, y: 100 } },
  { name: "Mongolia", code: "MN", coords: { x: 580, y: 110 } },
  { name: "South Africa", code: "ZA", coords: { x: 460, y: 300 } },
  { name: "Mexico", code: "MX", coords: { x: 150, y: 180 } },
  { name: "Italy", code: "IT", coords: { x: 430, y: 110 } },
  { name: "Spain", code: "ES", coords: { x: 390, y: 120 } },
  { name: "Saudi Arabia", code: "SA", coords: { x: 500, y: 180 } },
  { name: "Indonesia", code: "ID", coords: { x: 640, y: 220 } },
  { name: "Turkey", code: "TR", coords: { x: 470, y: 130 } },
]

// Function to generate a random attack
const generateRandomAttack = () => {
  const attackType = ATTACK_TYPES[Math.floor(Math.random() * ATTACK_TYPES.length)]
  const sourceCountry = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)]
  const targetCountry = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)]

  // Avoid same source and target
  if (sourceCountry.code === targetCountry.code) {
    return generateRandomAttack()
  }

  return {
    id: Math.random().toString(36).substring(2, 9),
    type: attackType.type,
    icon: attackType.icon,
    color: attackType.color,
    source: sourceCountry,
    target: targetCountry,
    timestamp: new Date().toISOString(),
    intensity: Math.floor(Math.random() * 100),
  }
}

const LiveAttackMap = () => {
  const [attacks, setAttacks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [stats, setStats] = useState({
    total: 0,
    ddos: 0,
    malware: 0,
    phishing: 0,
    ransomware: 0,
  })
  const mapRef = useRef<HTMLDivElement>(null)

  // Function to add a new attack
  const addNewAttack = () => {
    const newAttack = generateRandomAttack()
    setAttacks((prev) => {
      const updated = [...prev, newAttack]
      // Keep only the last 15 attacks for performance
      if (updated.length > 15) {
        updated.shift()
      }
      return updated
    })

    // Update stats
    setStats((prev) => ({
      ...prev,
      total: prev.total + 1,
      ddos: newAttack.type === "DDoS" ? prev.ddos + 1 : prev.ddos,
      malware: newAttack.type === "Malware" ? prev.malware + 1 : prev.malware,
      phishing: newAttack.type === "Phishing" ? prev.phishing + 1 : prev.phishing,
      ransomware: newAttack.type === "Ransomware" ? prev.ransomware + 1 : prev.ransomware,
    }))

    setLastUpdate(new Date())
  }

  useEffect(() => {
    // Simulate loading data from API
    const timer = setTimeout(() => {
      // Create initial attacks
      const initialAttacks = Array.from({ length: 8 }, () => generateRandomAttack())
      setAttacks(initialAttacks)
      setLoading(false)

      // Update initial stats
      const initialStats = initialAttacks.reduce(
        (acc, attack) => {
          acc.total += 1
          if (attack.type === "DDoS") acc.ddos += 1
          if (attack.type === "Malware") acc.malware += 1
          if (attack.type === "Phishing") acc.phishing += 1
          if (attack.type === "Ransomware") acc.ransomware += 1
          return acc
        },
        { total: 0, ddos: 0, malware: 0, phishing: 0, ransomware: 0 },
      )
      setStats(initialStats)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Add a new attack every few seconds
    const interval = setInterval(
      () => {
        addNewAttack()
      },
      Math.random() * 2000 + 1000,
    ) // Random interval between 1-3 seconds

    return () => clearInterval(interval)
  }, [])

  // Get coordinates based on country position
  const getCoordinates = (country: any) => {
    if (!mapRef.current) return { x: 0, y: 0 }

    const mapWidth = mapRef.current.clientWidth
    const mapHeight = mapRef.current.clientHeight

    return {
      x: (country.coords.x / 100) * mapWidth,
      y: (country.coords.y / 100) * mapHeight,
    }
  }

  return (
    <Card className="overflow-hidden border-0 shadow-lg bg-slate-800/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
              <Globe className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
              Хакерын халдлагын газрын зураг
            </CardTitle>
            <CardDescription className="text-sm text-slate-300">Бодит цагийн кибер халдлагууд</CardDescription>
          </div>
          <div>
            <Badge variant="outline" className="bg-blue-900/30 text-blue-300 border-blue-800">
              Сүүлийн шинэчлэл: {lastUpdate.toLocaleTimeString()}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="h-[400px] w-full flex flex-col items-center justify-center gap-4">
            <Skeleton className="h-[300px] w-full" />
            <div className="text-sm text-slate-400">Өгөгдөл ачаалж байна...</div>
          </div>
        ) : (
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-slate-900 border border-slate-700">
            {/* World Map (simplified) */}
            <div
              ref={mapRef}
              className="absolute inset-0 bg-[url('/world-map-dark.svg')] bg-no-repeat bg-contain bg-center opacity-30 animate-pulse"
              style={{ animationDuration: "10s" }}
            />

            {/* Attack lines and points */}
            <svg className="absolute inset-0 w-full h-full">
              {attacks.map((attack) => {
                const source = getCoordinates(attack.source)
                const target = getCoordinates(attack.target)

                return (
                  <g key={attack.id}>
                    {/* Attack line */}
                    <motion.line
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2 }}
                      x1={source.x}
                      y1={source.y}
                      x2={target.x}
                      y2={target.y}
                      stroke={`var(--${attack.color}-500)`}
                      strokeWidth={1.5}
                      strokeDasharray="4 2"
                      strokeLinecap="round"
                    />

                    {/* Source point */}
                    <motion.circle
                      initial={{ r: 0, opacity: 0 }}
                      animate={{ r: 4, opacity: 1 }}
                      exit={{ r: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      cx={source.x}
                      cy={source.y}
                      fill={`var(--${attack.color}-700)`}
                      stroke={`var(--${attack.color}-400)`}
                      strokeWidth={1}
                    />

                    {/* Target point with pulse effect */}
                    <motion.circle
                      initial={{ r: 5, opacity: 0 }}
                      animate={{ r: 8, opacity: 1 }}
                      exit={{ r: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      cx={target.x}
                      cy={target.y}
                      fill={`var(--${attack.color}-600)`}
                      stroke={`var(--${attack.color}-300)`}
                      strokeWidth={1.5}
                    />

                    {/* Pulse effect */}
                    <motion.circle
                      initial={{ r: 5, opacity: 0.7 }}
                      animate={{ r: 18, opacity: 0 }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 0.5,
                      }}
                      cx={target.x}
                      cy={target.y}
                      fill="transparent"
                      stroke={`var(--${attack.color}-400)`}
                      strokeWidth={1.5}
                    />
                  </g>
                )
              })}
            </svg>

            {/* Legend */}
            <div className="absolute bottom-3 left-3 bg-slate-900/70 backdrop-blur-sm p-2 rounded-lg border border-slate-700">
              <div className="text-xs font-medium text-slate-300 mb-1">Халдлагын төрлүүд:</div>
              <div className="flex gap-3">
                {ATTACK_TYPES.map((type) => (
                  <div key={type.type} className="flex items-center gap-1.5">
                    <type.icon className={`h-3 w-3 text-${type.color}-500`} />
                    <span className="text-xs text-slate-400">{type.type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="absolute top-3 right-3 bg-slate-900/70 backdrop-blur-sm p-2 rounded-lg border border-slate-700">
              <div className="text-xs font-medium text-slate-300 mb-1">Статистик:</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Нийт:</span>
                  <span className="text-xs font-medium text-slate-200">{stats.total}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">DDoS:</span>
                  <span className="text-xs font-medium text-red-400">{stats.ddos}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Malware:</span>
                  <span className="text-xs font-medium text-amber-400">{stats.malware}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Phishing:</span>
                  <span className="text-xs font-medium text-orange-400">{stats.phishing}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Ransomware:</span>
                  <span className="text-xs font-medium text-purple-400">{stats.ransomware}</span>
                </div>
              </div>
            </div>

            {/* Loading overlay for initial load */}
            {loading && (
              <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <Wand2 className="h-8 w-8 text-blue-500 animate-spin" />
                  <p className="text-sm text-slate-300">Газрын зураг ачаалж байна...</p>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default LiveAttackMap

