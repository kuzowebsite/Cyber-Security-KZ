"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Terminal, Skull, Shield, AlertTriangle, Trophy, Target } from "lucide-react"

export default function HackerNews() {
  const [activeTab, setActiveTab] = useState("famous")

  const famousHackers = [
    {
      name: "Kevin Mitnick",
      type: "White Hat",
      description: "Нэгэн цагт дэлхийн хамгийн эрэн сурвалжлагдаж байсан хакер. Одоо кибер аюулгүй байдлын зөвлөх.",
      achievements: [
        "FBI-н Most Wanted жагсаалтад орж байсан",
        "Sun, Nokia компаниудын системийг хакердсан",
        "Өнөөдөр Mitnick Security компанийг үүсгэн байгуулагч",
      ],
      year: "1963-2023",
    },
    {
      name: "Anonymous",
      type: "Hacktivists",
      description: "Олон улсын хакер бүлэглэл. Улс төр, нийгмийн шударга ёсны төлөө тэмцдэг.",
      achievements: [
        "ISIS-н эсрэг кибер дайн зарласан",
        "Засгийн газруудын нууц мэдээллийг задруулсан",
        "Church of Scientology-н эсрэг Project Chanology",
      ],
      year: "2003-одоог хүртэл",
    },
    {
      name: "Gary McKinnon",
      type: "Grey Hat",
      description: "NASA болон АНУ-ын цэргийн компьютерт нэвтэрч, НЛО-ны нотолгоо хайсан хакер.",
      achievements: [
        "97 цэргийн болон NASA-гийн компьютерт нэвтэрсэн",
        "Хамгийн том цэргийн кибер халдлага гэж нэрлэгдсэн",
        "700,000 долларын хохирол учруулсан",
      ],
      year: "2001-2002",
    },
  ]

  const recentAttacks = [
    {
      name: "MOVEit Transfer халдлага",
      date: "2023",
      type: "Mass Attack",
      impact: "40 сая хэрэглэгчийн мэдээлэл алдагдсан",
      description: "Progress Software-ийн MOVEit Transfer програмын эмзэг байдлыг ашигласан томоохон халдлага.",
    },
    {
      name: "ChatGPT аккаунт алдагдал",
      date: "2023",
      type: "Data Breach",
      impact: "500,000 хэрэглэгчийн мэдээлэл",
      description: "OpenAI-н ChatGPT хэрэглэгчдийн мэдээлэл алдагдсан.",
    },
    {
      name: "Microsoft-н имэйл систем халдлага",
      date: "2023",
      type: "State Sponsored",
      impact: "Засгийн газрын өндөр албан тушаалтнуудын имэйл",
      description: "Хятадын Storm-0558 хакер бүлэг Microsoft-н имэйл системд халдсан.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-purple-500" />
          Хакерын ертөнц
        </CardTitle>
        <CardDescription>Алдартай хакерууд болон сүүлийн үеийн халдлагууд</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="famous" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 gap-1">
            <TabsTrigger value="famous">
              <Trophy className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Алдартай хакерууд</span>
              <span className="sm:hidden">Хакерууд</span>
            </TabsTrigger>
            <TabsTrigger value="recent">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Сүүлийн үеийн халдлагууд</span>
              <span className="sm:hidden">Халдлагууд</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="famous">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
              {famousHackers.map((hacker, i) => (
                <motion.div key={i} variants={item} className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div>
                      <h3 className="font-semibold flex items-center gap-2">
                        {hacker.name}
                        {hacker.type === "White Hat" ? (
                          <Shield className="h-4 w-4 text-green-500" />
                        ) : hacker.type === "Grey Hat" ? (
                          <Target className="h-4 w-4 text-amber-500" />
                        ) : (
                          <Skull className="h-4 w-4 text-red-500" />
                        )}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{hacker.year}</p>
                    </div>
                    <Badge
                      variant={
                        hacker.type === "White Hat" ? "success" : hacker.type === "Grey Hat" ? "warning" : "destructive"
                      }
                      className="mt-1 sm:mt-0"
                    >
                      {hacker.type}
                    </Badge>
                  </div>
                  <p className="text-sm mb-2">{hacker.description}</p>
                  <div className="space-y-1">
                    {hacker.achievements.map((achievement, j) => (
                      <p key={j} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Trophy className="h-3 w-3 text-yellow-500" />
                        {achievement}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="recent">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
              {recentAttacks.map((attack, i) => (
                <motion.div key={i} variants={item} className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">{attack.name}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{attack.date}</p>
                    </div>
                    <Badge
                      variant={
                        attack.type === "Mass Attack"
                          ? "destructive"
                          : attack.type === "Data Breach"
                            ? "warning"
                            : "default"
                      }
                    >
                      {attack.type}
                    </Badge>
                  </div>
                  <p className="text-sm mb-2">{attack.description}</p>
                  <div className="flex items-center gap-1 text-xs text-red-500 dark:text-red-400">
                    <AlertTriangle className="h-3 w-3" />
                    <span>Нөлөөлөл: {attack.impact}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

