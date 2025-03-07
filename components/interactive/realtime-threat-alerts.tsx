"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertTriangle, WormIcon as Virus, Shield, Globe, Lock, Smartphone, Laptop, Server } from "lucide-react"

// Mock threat data - in a real app, this would come from an API
const THREAT_TYPES = [
  {
    type: "Ransomware",
    icon: Lock,
    color: "red",
    description: "Файлуудыг шифрлэж, мөнгө шаарддаг хортой програм",
  },
  {
    type: "Trojan",
    icon: Shield,
    color: "amber",
    description: "Ашигтай програм мэт харагдах боловч, системийг хянах код агуулдаг",
  },
  {
    type: "Spyware",
    icon: Virus,
    color: "purple",
    description: "Хэрэглэгчийн үйл ажиллагааг хянаж, мэдээлэл цуглуулдаг",
  },
  {
    type: "Adware",
    icon: Globe,
    color: "blue",
    description: "Зар сурталчилгаа харуулж, мөнгө олох зорилготой хортой програм",
  },
  {
    type: "Worm",
    icon: Server,
    color: "green",
    description: "Сүлжээгээр дамжин тархдаг, өөрийгөө хуулдаг хортой програм",
  },
]

const TARGET_SYSTEMS = ["Windows", "Android", "iOS", "macOS", "Linux", "IoT Devices"]
const SEVERITY_LEVELS = ["Өндөр", "Дунд", "Бага"]

// Function to generate a random threat
const generateRandomThreat = () => {
  const threatType = THREAT_TYPES[Math.floor(Math.random() * THREAT_TYPES.length)]
  const targetSystem = TARGET_SYSTEMS[Math.floor(Math.random() * TARGET_SYSTEMS.length)]
  const severity = SEVERITY_LEVELS[Math.floor(Math.random() * SEVERITY_LEVELS.length)]

  // Generate random threat name
  const prefixes = ["Dark", "Cyber", "Shadow", "Stealth", "Silent", "Nightmare", "Chaos", "Crypto", "Black", "Red"]
  const suffixes = ["Locker", "Spy", "Hunter", "Thief", "Banker", "Miner", "Trojan", "Worm", "Bot", "Virus"]
  const threatName = `${prefixes[Math.floor(Math.random() * prefixes.length)]}${suffixes[Math.floor(Math.random() * suffixes.length)]}`

  return {
    id: Math.random().toString(36).substring(2, 9),
    name: threatName,
    type: threatType.type,
    icon: threatType.icon,
    color: threatType.color,
    description: threatType.description,
    targetSystem,
    severity,
    discoveredOn: new Date().toISOString(),
    isNew: Math.random() > 0.7, // 30% chance of being marked as new
  }
}

const getDeviceIcon = (system: string) => {
  if (system.includes("Windows") || system.includes("Linux") || system.includes("macOS")) {
    return Laptop
  } else if (system.includes("Android") || system.includes("iOS")) {
    return Smartphone
  } else {
    return Server
  }
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "Өндөр":
      return "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800"
    case "Дунд":
      return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800"
    case "Бага":
      return "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
    default:
      return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
  }
}

interface RealtimeThreatAlertsProps {
  maxItems?: number
  autoUpdate?: boolean
}

const RealtimeThreatAlerts = ({ maxItems = 5, autoUpdate = true }: RealtimeThreatAlertsProps) => {
  const [threats, setThreats] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  // Add a new threat
  const addNewThreat = () => {
    const newThreat = generateRandomThreat()
    setThreats((prev) => {
      const updated = [newThreat, ...prev]
      // Keep only the latest threats
      if (updated.length > maxItems) {
        updated.pop()
      }
      return updated
    })
    setLastUpdate(new Date())
  }

  useEffect(() => {
    // Simulate loading data from API
    const timer = setTimeout(() => {
      // Create initial threats
      const initialThreats = Array.from({ length: maxItems }, () => generateRandomThreat())
      setThreats(initialThreats)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [maxItems])

  useEffect(() => {
    if (!autoUpdate) return

    // Add a new threat at random intervals
    const interval = setInterval(
      () => {
        addNewThreat()
      },
      Math.random() * 15000 + 10000,
    ) // Random interval between 10-25 seconds

    return () => clearInterval(interval)
  }, [autoUpdate])

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return (
      date.toLocaleDateString("mn-MN", { month: "short", day: "numeric" }) +
      ", " +
      date.toLocaleTimeString("mn-MN", { hour: "2-digit", minute: "2-digit" })
    )
  }

  return (
    <Card className="overflow-hidden border-0 shadow-lg bg-slate-800/80 backdrop-blur-sm h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
              Шинэ вирус, malware анхааруулга
            </CardTitle>
            <CardDescription className="text-sm text-slate-300">Шинээр илрүүлсэн хортой програмууд</CardDescription>
          </div>
          <div>
            <Badge variant="outline" className="bg-slate-900/50 text-slate-300 border-slate-700">
              Сүүлийн шинэчлэл: {lastUpdate.toLocaleTimeString()}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-3">
            {Array.from({ length: maxItems }).map((_, i) => (
              <div key={i} className="flex gap-3 items-center">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ScrollArea className="h-[390px] pr-4">
            <div className="space-y-3">
              <AnimatePresence initial={false}>
                {threats.map((threat, index) => {
                  const DeviceIcon = getDeviceIcon(threat.targetSystem)
                  const ThreatIcon = threat.icon

                  return (
                    <motion.div
                      key={threat.id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 relative overflow-hidden"
                    >
                      {threat.isNew && (
                        <div className="absolute top-0 right-0">
                          <Badge className="bg-blue-600 text-white text-xs rounded-bl-lg rounded-tr-lg rounded-br-none rounded-tl-none">
                            Шинэ
                          </Badge>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <div
                          className={`flex-shrink-0 h-10 w-10 bg-${threat.color}-900/20 rounded-full flex items-center justify-center border border-${threat.color}-800`}
                        >
                          <ThreatIcon className={`h-5 w-5 text-${threat.color}-500`} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-sm">{threat.name}</h4>
                            <Badge variant="outline" className={getSeverityColor(threat.severity)}>
                              {threat.severity}
                            </Badge>
                          </div>

                          <div className="text-xs text-slate-400 mt-1">{threat.description}</div>

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1.5">
                              <DeviceIcon className="h-3.5 w-3.5 text-slate-500" />
                              <span className="text-xs text-slate-400">{threat.targetSystem}</span>
                            </div>

                            <div className="text-xs text-slate-500">{formatDate(threat.discoveredOn)}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  )
}

export default RealtimeThreatAlerts

