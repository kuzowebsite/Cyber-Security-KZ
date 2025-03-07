"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import {
  ExternalLink,
  ShieldAlert,
  Lock,
  Globe,
  AlertTriangle,
  BookOpen,
  Database,
  Zap,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  Fingerprint,
  Key,
  Shield,
  Smartphone,
  Laptop,
  Server,
  Wifi,
  Cloud,
} from "lucide-react"

import WeatherWidget from "./components/weather-widget"
import VisitorCounter from "./components/visitor-counter"
import HackerNews from "./components/hacker-news"
import LiveAttackMap from "./components/interactive/live-attack-map"
import RealtimeThreatAlerts from "./components/interactive/realtime-threat-alerts"
import { CurrencyConverter } from "./components/currency-converter"
import NewsTicker from "./components/news-ticker"

// Custom background grid pattern
const gridBgStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23FFFFFF' fillOpacity='0.05' d='M0 0h1v1H0V0zm2 0h1v1H2V0zm2 0h1v1H4V0zm2 0h1v1H6V0zm2 0h1v1H8V0zm2 0h1v1h-1V0zm2 0h1v1h-1V0zm2 0h1v1h-1V0zM0 2h1v1H0V2zm2 0h1v1H2V2zm2 0h1v1H4V2zm2 0h1v1H6V2zm2 0h1v1H8V2zm2 0h1v1h-1V2zm2 0h1v1h-1V2zm2 0h1v1h-1V2zM0 4h1v1H0V4zm2 0h1v1H2V4zm2 0h1v1H4V4zm2 0h1v1H6V4zm2 0h1v1H8V4zm2 0h1v1h-1V4zm2 0h1v1h-1V4zm2 0h1v1h-1V4zM0 6h1v1H0V6zm2 0h1v1H2V6zm2 0h1v1H4V6zm2 0h1v1H6V6zm2 0h1v1H8V6zm2 0h1v1h-1V6zm2 0h1v1h-1V6zm2 0h1v1h-1V6zM0 8h1v1H0V8zm2 0h1v1H2V8zm2 0h1v1H4V8zm2 0h1v1H6V8zm2 0h1v1H8V8zm2 0h1v1h-1V8zm2 0h1v1h-1V8zm2 0h1v1h-1V8zM0 10h1v1H0v-1zm2 0h1v1H2v-1zm2 0h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zM0 12h1v1H0v-1zm2 0h1v1H2v-1zm2 0h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zM0 14h1v1H0v-1zm2 0h1v1H2v-1zm2 0h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z'/%3E%3C/svg%3E")`,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
}

export default function CyberSecurityGuide() {
  const [activeTab, setActiveTab] = useState("world")
  const [scrollY, setScrollY] = useState(0)
  const [isHeaderFixed, setIsHeaderFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsHeaderFixed(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* New modern news ticker design with real news feed */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-xl shadow-lg mb-4">
        <div className="absolute inset-0" style={gridBgStyle}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-sm"></div>

        {/* News ticker header */}
        <div className="relative px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
            <h3 className="text-white font-bold text-sm sm:text-base">ШИНЭ МЭДЭЭ</h3>
          </div>
          <div className="flex items-center text-xs text-white/70">
            <span className="hidden sm:inline-block">Хамгийн сүүлийн үеийн мэдээ</span>
            <span className="inline-block sm:hidden">Шинэ</span>
          </div>
        </div>

        {/* News content with real news feed */}
        <NewsTicker maxItems={8} animationDuration={6000} />
      </div>

      <div className="">
        {/* Google Custom Search */}
        <div className=" backdrop-blur-sm py-3 sm:py-4 mb-3 sm:mb-4 rounded-xl mt-3 sm:mt-4 shadow-md">
          <div className="">
            <div className=""></div>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 mb-3 sm:mb-4">
          <div className="md:col-span-2 lg:col-span-1">
            <WeatherWidget />
          </div>
          <div className="lg:col-span-1">
            <VisitorCounter />
          </div>
          <div className="lg:col-span-1">
            <CurrencyConverter />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <HackerNews />
        </div>

        {/* New Interactive Elements */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mb-8">
          <div className="col-span-1">
            <LiveAttackMap />
          </div>
          <div className="col-span-1">
            <RealtimeThreatAlerts />
          </div>
        </div>

        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Badge
              variant="outline"
              className="px-4 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
            >
              Кибер аюулгүй байдал
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Түүхэн дэх хакерын халдлагууд
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Баталгаатай мэдээлэл дээр суурилсан кибер аюулгүй байдлын гарын авлага
          </motion.p>
        </motion.div>

        {/* New Tab Navigation */}
        <div className="flex justify-center mb-6">
          <div className="bg-slate-900 dark:bg-slate-950 rounded-full p-1 w-[280px] flex justify-between">
            <button
              onClick={() => setActiveTab("world")}
              className={`flex items-center justify-center w-1/4 h-10 rounded-full transition-all ${
                activeTab === "world" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Globe className="h-4 w-4" />
            </button>
            <button
              onClick={() => setActiveTab("mongolia")}
              className={`flex items-center justify-center w-1/4 h-10 rounded-full transition-all ${
                activeTab === "mongolia" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Database className="h-4 w-4" />
            </button>
            <button
              onClick={() => setActiveTab("protection")}
              className={`flex items-center justify-center w-1/4 h-10 rounded-full transition-all ${
                activeTab === "protection" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <ShieldAlert className="h-4 w-4" />
            </button>
            <button
              onClick={() => setActiveTab("concepts")}
              className={`flex items-center justify-center w-1/4 h-10 rounded-full transition-all ${
                activeTab === "concepts" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <BookOpen className="h-4 w-4" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-6 pt-4"
          >
            {activeTab === "world" && (
              <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-2">
                <motion.div variants={item} className="md:col-span-2">
                  <div className="space-y-4 p-4 md:p-6">
                    <Card className="overflow-hidden border-0 shadow-md bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 dark:border dark:border-slate-700">
                      <CardHeader className="pb-2 space-y-2">
                        <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                          Дэлхийн түүхэн дэх хамгийн том хакерын халдлагууд
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base text-slate-300">
                          Дэлхийн хэмжээнд тохиолдсон том хэмжээний халдлагууд, тэдгээрийн үр дагавар
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-3 sm:p-5">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          <motion.div
                            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-red-100 dark:bg-red-900/30 p-2.5 rounded-lg">
                                <Database className="h-5 w-5 text-red-600 dark:text-red-400" />
                              </div>
                              <div>
                                <h3 className="font-semibold">Yahoo</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">2013-2014</p>
                              </div>
                            </div>
                            <p className="text-sm mb-2 font-medium">3 тэрбум хэрэглэгчийн мэдээлэл алдсан</p>
                            <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300 mb-3">
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>
                                  Имэйл хаяг, нууц үг, утасны дугаар, төрсөн огноо зэрэг мэдээлэл хулгайлагдсан
                                </span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Оросын хакеруудын халдлага байсан гэж үздэг</span>
                              </li>
                            </ul>
                            <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700">
                              <strong>Эх сурвалж:</strong> Verizon-ийн 2017 оны тайлан, Yahoo-гийн албан ёсны мэдэгдэл
                              (2017.10)
                            </div>
                          </motion.div>

                          <motion.div
                            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-amber-100 dark:bg-amber-900/30 p-2.5 rounded-lg">
                                <Database className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                              </div>
                              <div>
                                <h3 className="font-semibold">Equifax</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">2017</p>
                              </div>
                            </div>
                            <p className="text-sm mb-2 font-medium">147 сая хэрэглэгчийн санхүүгийн мэдээлэл алдсан</p>
                            <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300 mb-3">
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>АНУ-ын зээлийн үнэлгээний Equifax компани хакердуулсан</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Вэбсайтын хамгаалалтын алдаанаас үүдэлтэй</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>700 сая долларын торгууль төлсөн</span>
                              </li>
                            </ul>
                            <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700">
                              <strong>Эх сурвалж:</strong> АНУ-ын Холбооны Худалдааны Комисс (FTC), 2019.07.22
                            </div>
                          </motion.div>

                          <motion.div
                            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-lg">
                                <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <h3 className="font-semibold">Marriott</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">2014-2018</p>
                              </div>
                            </div>
                            <p className="text-sm mb-2 font-medium">500 сая хэрэглэгчийн мэдээлэл алдсан</p>
                            <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300 mb-3">
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Starwood зочид буудлын сүлжээг хакердсан</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Пасспортын дугаар, кредит картын мэдээлэл хулгайлагдсан</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Хятадын хакерууд холбоотой гэж үздэг</span>
                              </li>
                            </ul>
                            <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700">
                              <strong>Эх сурвалж:</strong> Marriott-ийн албан ёсны мэдэгдэл (2018.11.30)
                            </div>
                          </motion.div>

                          <motion.div
                            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2.5 rounded-lg">
                                <Database className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                              </div>
                              <div>
                                <h3 className="font-semibold">Sony PlayStation</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">2011</p>
                              </div>
                            </div>
                            <p className="text-sm mb-2 font-medium">77 сая хэрэглэгчийн мэдээлэл алдсан</p>
                            <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300 mb-3">
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Sony-гийн PlayStation Network систем хакердуулсан</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Сүлжээ 23 хоног ажиллаагүй</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Sony 171 сая долларын хохирол амссан</span>
                              </li>
                            </ul>
                            <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700">
                              <strong>Эх сурвалж:</strong> Sony Computer Entertainment-ийн мэдэгдэл (2011.04.26)
                            </div>
                          </motion.div>

                          <motion.div
                            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-red-100 dark:bg-red-900/30 p-2.5 rounded-lg">
                                <Lock className="h-5 w-5 text-red-600 dark:text-red-400" />
                              </div>
                              <div>
                                <h3 className="font-semibold">WannaCry Ransomware</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">2017</p>
                              </div>
                            </div>
                            <p className="text-sm mb-2 font-medium">200,000 төхөөрөмж халдварласан</p>
                            <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300 mb-3">
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Windows үйлдлийн системийн эмзэг байдлыг ашигласан</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>150 гаруй орны 200,000 компьютер халдварласан</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Биткойноор төлбөр төлөхийг шаарддаг байсан</span>
                              </li>
                            </ul>
                            <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700">
                              <strong>Эх сурвалж:</strong> Microsoft-ийн аюулгүй байдлын тайлан (2017.05)
                            </div>
                          </motion.div>

                          <motion.div
                            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-purple-100 dark:bg-purple-900/30 p-2.5 rounded-lg">
                                <Lock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                              </div>
                              <div>
                                <h3 className="font-semibold">NotPetya</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">2017</p>
                              </div>
                            </div>
                            <p className="text-sm mb-2 font-medium">10 тэрбум долларын хохирол учруулсан</p>
                            <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300 mb-3">
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Украины засгийн газрын систем рүү чиглэсэн халдлага</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Олон улсын томоохон компаниуд (Maersk, Merck, FedEx) өртсөн</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Компьютерийн системийг бүрэн ажиллагаагүй болгодог байсан</span>
                              </li>
                            </ul>
                            <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700">
                              <strong>Эх сурвалж:</strong> Олон улсын кибер аюулгүй байдлын судалгаа (2018)
                            </div>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "mongolia" && (
              <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6">
                <motion.div variants={item}>
                  <Card className="overflow-hidden border-0 shadow-md bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 dark:border dark:border-slate-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Database className="h-6 w-6 text-blue-500" />
                        Монголд гарсан хакерын халдлагууд
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-300">
                        Монгол Улсын төрийн болон хувийн байгууллагуудад чиглэсэн халдлагууд
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-3 sm:p-5">
                      <div className="grid gap-6 md:grid-cols-2">
                        <motion.div
                          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-amber-100 dark:bg-amber-900/30 p-2.5 rounded-lg">
                              <Globe className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold">"NetTraveler" хакерын халдлага</h3>
                              <p className="text-xs text-slate-500 dark:text-slate-400">2013 он</p>
                            </div>
                            <Badge
                              variant="outline"
                              className="ml-auto bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800"
                            >
                              Амжилттай
                            </Badge>
                          </div>
                          <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300 mb-3">
                            <li className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Монгол Улсын 5 байгууллага халдлагад өртсөн</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Вирус тарааж, мэдээлэлд нэвтэрсэн гэж мэдээлэгдсэн</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Тагнуулын шинжтэй халдлага байсан</span>
                            </li>
                          </ul>
                          <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700">
                            <strong>Эх сурвалж:</strong> Kaspersky Lab тайлан (2013.06)
                          </div>
                        </motion.div>

                        <motion.div
                          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-lg">
                              <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Хятадын хакерын бүлэглэлийн халдлага</h3>
                              <p className="text-xs text-slate-500 dark:text-slate-400">2013 оноос хойш</p>
                            </div>
                            <Badge
                              variant="outline"
                              className="ml-auto bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
                            >
                              Хэсэгчлэн амжилттай
                            </Badge>
                          </div>
                          <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300 mb-3">
                            <li className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Монголын төрийн байгууллагуудын эсрэг зохион байгуулалттай халдлагууд</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                Тагнуулын байгууллагууд болон кибер аюулгүй байдлын албад халдлагыг илрүүлэн хамгаалалт
                                хийсэн
                              </span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Зарим мэдээлэл алдсан байх магадлалтай</span>
                            </li>
                          </ul>
                          <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700">
                            <strong>Эх сурвалж:</strong> FireEye кибер аюулгүй байдлын компанийн тайлан (2016)
                          </div>
                        </motion.div>

                        <motion.div
                          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2.5 rounded-lg">
                              <Globe className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold">"RoyalRoad" хортой кодын халдлага</h3>
                              <p className="text-xs text-slate-500 dark:text-slate-400">2020 он</p>
                            </div>
                            <Badge
                              variant="outline"
                              className="ml-auto bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800"
                            >
                              Хэсэгчлэн амжилттай
                            </Badge>
                          </div>
                          <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300 mb-3">
                            <li className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Төрийн болон хувийн хэвшлийн байгууллагуудын мэдээлэлд заналхийлсэн</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                Кибер аюулгүй байдлын мэргэжилтнүүд халдлагыг тодорхойлж, устгах арга хэмжээ авсан
                              </span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Халдлагын цар хүрээ болон үр дүн тодорхой бус</span>
                            </li>
                          </ul>
                          <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700">
                            <strong>Эх сурвалж:</strong> Trend Micro-ийн судалгааны тайлан (2020.08)
                          </div>
                        </motion.div>

                        <motion.div
                          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-red-100 dark:bg-red-900/30 p-2.5 rounded-lg">
                              <Globe className="h-5 w-5 text-red-600 dark:text-red-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Засгийн газрын вэбсайтуудад халдсан APT29</h3>
                              <p className="text-xs text-slate-500 dark:text-slate-400">2023-2024</p>
                            </div>
                            <Badge
                              variant="outline"
                              className="ml-auto bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800"
                            >
                              Амжилттай
                            </Badge>
                          </div>
                          <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300 mb-3">
                            <li className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Хугацаа: 2023 оны 11-р сар, 2024 оны 2-р сар, 2024 оны 7-р сар</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                Засгийн газрын (cabinet.gov.mn) болон Гадаад харилцааны яамны (mfa.gov.mn) вэбсайтуудад
                                халдсан
                              </span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                Google Chrome-д хадгалагдсан нууц үг, вэб хөтчийн түүх, кредит картын мэдээлэл
                                хулгайлагдсан
                              </span>
                            </li>
                          </ul>
                          <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700">
                            <strong>Эх сурвалж:</strong> Gogo.mn (2024.07), Mandiant тагнуулын тайлан (2024.08)
                          </div>
                        </motion.div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-white/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700 p-3 sm:p-4">
                      <div className="w-full">
                        <h3 className="text-sm font-medium mb-2">Монголд гарсан халдлагуудын статистик</h3>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm border border-slate-100 dark:border-slate-700">
                            <p className="text-xs text-slate-500 dark:text-slate-400">Нийт халдлага</p>
                            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">120+</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">2010-2024</p>
                          </div>
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm border border-slate-100 dark:border-slate-700">
                            <p className="text-xs text-slate-500 dark:text-slate-400">Төрийн байгууллагууд</p>
                            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">65%</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Халдлагын хувь</p>
                          </div>
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm border border-slate-100 dark:border-slate-700">
                            <p className="text-xs text-slate-500 dark:text-slate-400">Хувийн хэвшил</p>
                            <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">35%</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Халдлагын хувь</p>
                          </div>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "protection" && (
              <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6">
                <motion.div variants={item}>
                  <Card className="overflow-hidden border-0 shadow-md bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 dark:border dark:border-slate-700">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <ShieldAlert className="h-6 w-6 text-green-500" />
                        Хакерын халдлагаас хамгаалах аргууд
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-300">
                        Байгууллага болон хувь хүмүүс өөрсдийгөө хамгаалах аргууд
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-3 sm:p-5">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                          <motion.div
                            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-green-100 dark:bg-green-900/30 p-2.5 rounded-lg">
                                <Server className="h-5 w-5 text-green-600 dark:text-green-400" />
                              </div>
                              <div>
                                <h3 className="font-semibold">Байгууллагуудын хамгаалалтын арга хэмжээ</h3>
                              </div>
                            </div>
                            <ul className="text-sm space-y-3 text-slate-600 dark:text-slate-300 mb-3">
                              <li className="flex items-start gap-1.5">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mt-0.5 flex-shrink-0">
                                  <CheckCircle2 className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <span className="font-medium">Системийн эмзэг байдлыг тогтмол шалгах</span>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    Penetration testing хийж, эмзэг байдлуудыг илрүүлэх
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mt-0.5 flex-shrink-0">
                                  <CheckCircle2 className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <span className="font-medium">Хүчирхэг галт хана (firewall) ашиглах</span>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    IDS/IPS системүүдийг суурилуулах
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mt-0.5 flex-shrink-0">
                                  <CheckCircle2 className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <span className="font-medium">Хоёр шатлалтай баталгаажуулалт (2FA, MFA)</span>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    Нууц үг дээр нэмэлт OTP код, биометр ашиглах
                                  </p>
                                </div>
                              </li>
                            </ul>
                            <div className="mt-3">
                              <HoverCard>
                                <HoverCardTrigger asChild>
                                  <Button
                                    variant="link"
                                    size="sm"
                                    className="p-0 h-auto text-blue-600 dark:text-blue-400"
                                  >
                                    Нэмэлт мэдээлэл үзэх
                                  </Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-80">
                                  <div className="space-y-2">
                                    <h4 className="text-sm font-semibold">
                                      Байгууллагын хамгаалалтын шинэ технологиуд
                                    </h4>
                                    <div className="text-xs space-y-1">
                                      <p>
                                        <span className="font-medium">SIEM системүүд:</span> Security Information and
                                        Event Management - аюулгүй байдлын үйл явдлуудыг хянах
                                      </p>
                                      <p>
                                        <span className="font-medium">EDR шийдлүүд:</span> Endpoint Detection and
                                        Response - төгсгөлийн төхөөрөмжүүдийг хамгаалах
                                      </p>
                                      <p>
                                        <span className="font-medium">SOAR платформууд:</span> Security Orchestration,
                                        Automation and Response - аюулгүй байдлын үйл явцыг автоматжуулах
                                      </p>
                                    </div>
                                  </div>
                                </HoverCardContent>
                              </HoverCard>
                            </div>
                          </motion.div>

                          <motion.div
                            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-amber-100 dark:bg-amber-900/30 p-2.5 rounded-lg">
                                <Eye className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                              </div>
                              <div>
                                <h3 className="font-semibold">Хакердуулсан гэдгээ хэрхэн мэдэх вэ?</h3>
                              </div>
                            </div>
                            <ul className="text-sm space-y-3 text-slate-600 dark:text-slate-300 mb-3">
                              <li className="flex items-start gap-1.5">
                                <div className="bg-amber-100 dark:bg-amber-900/30 p-1 rounded-full mt-0.5 flex-shrink-0">
                                  <AlertTriangle className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                                </div>
                                <div>
                                  <span className="font-medium">Хэт олон сэжигтэй нэвтрэх оролдлого гарах</span>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    "Таны акаунтад сэжигтэй нэвтрэх оролдлого илэрлээ" гэсэн мэдэгдэл ирэх
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <div className="bg-amber-100 dark:bg-amber-900/30 p-1 rounded-full mt-0.5 flex-shrink-0">
                                  <AlertTriangle className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                                </div>
                                <div>
                                  <span className="font-medium">Таны аккаунт руу нэвтрэх боломжгүй болох</span>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    Нууц үгээ зөв оруулсан ч нэвтрэх боломжгүй болох
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <div className="bg-amber-100 dark:bg-amber-900/30 p-1 rounded-full mt-0.5 flex-shrink-0">
                                  <AlertTriangle className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                                </div>
                                <div>
                                  <span className="font-medium">Сэжигтэй гүйлгээ хийгдэх</span>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    Банкны данснаас мөнгө автоматаар гарах
                                  </p>
                                </div>
                              </li>
                            </ul>
                            <div className="mt-3">
                              <a
                                href="https://haveibeenpwned.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                              >
                                "Have I Been Pwned" сайтаар шалгах
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </a>
                            </div>
                          </motion.div>
                        </div>

                        <div className="space-y-4">
                          <motion.div
                            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2.5 rounded-lg">
                                <Smartphone className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                              </div>
                              <div>
                                <h3 className="font-semibold">Хувь хүний цахим мэдээллээ хамгаалах арга</h3>
                              </div>
                            </div>
                            <ul className="text-sm space-y-3 text-slate-600 dark:text-slate-300 mb-3">
                              <li className="flex items-start gap-1.5">
                                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mt-0.5 flex-shrink-0">
                                  <Key className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div>
                                  <span className="font-medium">Хүчтэй нууц үг (Password) хэрэглэх</span>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    12-16 тэмдэгттэй, том жижиг үсэг, тоо, тусгай тэмдэгт оролцуулсан байх
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mt-0.5 flex-shrink-0">
                                  <Fingerprint className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div>
                                  <span className="font-medium">Хоёр шатлалт баталгаажуулалт (2FA) идэвхжүүлэх</span>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    Google Authenticator, Microsoft Authenticator, SMS код ашиглах
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mt-0.5 flex-shrink-0">
                                  <EyeOff className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div>
                                  <span className="font-medium">Фишинг халдлагаас сэргийлэх</span>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    Сэжигтэй и-мэйл дээрх линк дээр дарахгүй байх
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mt-0.5 flex-shrink-0">
                                  <Laptop className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div>
                                  <span className="font-medium">
                                    Гар утас болон компьютерийн шинэчлэлт тогтмол хийх
                                  </span>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    Хуучин, эмзэг байдлуудтай програм хангамж ашиглавал хакерууд амархан нэвтэрнэ
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mt-0.5 flex-shrink-0">
                                  <Wifi className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div>
                                  <span className="font-medium">Хамгаалалтгүй нийтийн Wi-Fi ашиглахгүй байх</span>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    Нийтийн Wi-Fi дээр банкны апп, имэйл, хувийн мэдээлэлтэй зүйлсээ шалгахгүй байх
                                  </p>
                                </div>
                              </li>
                            </ul>
                            <div className="mt-3">
                              <HoverCard>
                                <HoverCardTrigger asChild>
                                  <Button
                                    variant="link"
                                    size="sm"
                                    className="p-0 h-auto text-indigo-600 dark:text-indigo-400"
                                  >
                                    Нэмэлт мэдээлэл үзэх
                                  </Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-80">
                                  <div className="space-y-2">
                                    <h4 className="text-sm font-semibold">Хувь хүний хамгаалалтын шинэ технологиуд</h4>
                                    <div className="text-xs space-y-1">
                                      <p>
                                        <span className="font-medium">Password Manager:</span> 1Password, LastPass,
                                        Bitwarden гэх мэт нууц үг хадгалах програмууд
                                      </p>
                                      <p>
                                        <span className="font-medium">VPN:</span> NordVPN, ExpressVPN, Surfshark гэх мэт
                                        интернэт холболтоо хамгаалах
                                      </p>
                                      <p>
                                        <span className="font-medium">Антивирус:</span> Kaspersky, Bitdefender,
                                        Malwarebytes гэх мэт хамгаалалтын програмууд
                                      </p>
                                    </div>
                                  </div>
                                </HoverCardContent>
                              </HoverCard>
                            </div>
                          </motion.div>

                          <motion.div
                            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-lg">
                                <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <h3 className="font-semibold">Сайт руу нэвтрэхээс өмнө аюулгүй эсэхийг шалгах</h3>
                              </div>
                            </div>
                            <ul className="text-sm space-y-3 text-slate-600 dark:text-slate-300 mb-3">
                              <li className="flex items-start gap-1.5">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mt-0.5 flex-shrink-0">
                                  <CheckCircle2 className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <span className="font-medium">Google Safe Browsing</span>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    Google-ээс хортой сайт эсэхийг шалгадаг албан ёсны хэрэгсэл
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mt-0.5 flex-shrink-0">
                                  <CheckCircle2 className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <span className="font-medium">VirusTotal</span>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    70+ вирусны хөдөлгүүр ашиглан сайт хортой эсэхийг шалгадаг
                                  </p>
                                </div>
                              </li>
                            </ul>
                            <div className="mt-3">
                              <Button variant="outline" size="sm" className="text-xs h-8 rounded-full">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Бүх хэрэгслүүдийг үз
                              </Button>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-white/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700 p-3 sm:p-4">
                      <div className="w-full">
                        <h3 className="text-sm font-medium mb-2">Шинэ хамгаалалтын технологиуд</h3>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-2 mb-1">
                              <Cloud className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <p className="text-xs font-medium">Cloud Security</p>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Үүлэн технологид суурилсан хамгаалалтын шийдлүүд
                            </p>
                          </div>
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-2 mb-1">
                              <Zap className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                              <p className="text-xs font-medium">AI-Based Security</p>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Хиймэл оюун ухаанд суурилсан хамгаалалтын системүүд
                            </p>
                          </div>
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-2 mb-1">
                              <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
                              <p className="text-xs font-medium">Blockchain Security</p>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Блокчэйн технологид суурилсан хамгаалалтын шийдлүүд
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "concepts" && (
              <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6">
                <motion.div variants={item}>
                  <Card className="overflow-hidden border-0 shadow-md bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 dark:border dark:border-slate-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <BookOpen className="h-6 w-6 text-purple-500" />
                        Кибер аюулгүй байдлын үндсэн ойлголтууд
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-300">
                        Кибер аюулгүй байдалтай холбоотой чухал нэр томъёонууд
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-3 sm:p-5">
                      <div className="grid gap-6 md:grid-cols-2">
                        <motion.div
                          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-red-100 dark:bg-red-900/30 p-2.5 rounded-lg">
                              <ShieldAlert className="h-5 w-5 text-red-600 dark:text-red-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Malware (Хортой программ хангамж)</h3>
                            </div>
                          </div>
                          <p className="text-sm mb-3 text-slate-600 dark:text-slate-300">
                            "Malicious software" буюу хортой программ хангамж гэсэн үг. Энэ нь компьютер, гар утас,
                            сүлжээний аюулгүй байдалд халдаж, мэдээлэл хулгайлах, эвдлэх, системийг хянах зориулалттай.
                          </p>
                          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 mb-3">
                            <h4 className="text-sm font-medium mb-2">Malware-ийн түгээмэл төрлүүд:</h4>
                            <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
                              <li className="flex items-start gap-1.5">
                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>
                                  <span className="font-medium">Вирус (Virus)</span> – Өөрийгөө өөр файлууд руу хуулж,
                                  системд тархана
                                </span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>
                                  <span className="font-medium">Троян (Trojan)</span> – Ашигтай программ мэт харагдах
                                  боловч, системийг нууцаар хянах код агуулдаг
                                </span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>
                                  <span className="font-medium">Ransomware</span> – Компьютерийн файлуудыг түгжиж, мөнгө
                                  нэхдэг хортой программ
                                </span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>
                                  <span className="font-medium">Spyware</span> – Хэрэглэгчийн үйл ажиллагааг хянаж,
                                  мэдээлэл цуглуулдаг
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700">
                            <strong>Эх сурвалж:</strong> Symantec Threat Report (2023), CISA
                          </div>
                        </motion.div>

                        <motion.div
                          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-amber-100 dark:bg-amber-900/30 p-2.5 rounded-lg">
                              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Blacklisting (Хар жагсаалт)</h3>
                            </div>
                          </div>
                          <p className="text-sm mb-3 text-slate-600 dark:text-slate-300">
                            Тодорхой IP хаяг, домэйн нэр, эсвэл файлуудыг аюултай гэж бүртгэж, хориглох үйл явц.
                          </p>
                          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 mb-3">
                            <h4 className="text-sm font-medium mb-2">Blacklisting хэрхэн ажилладаг вэ?</h4>
                            <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
                              <li className="flex items-start gap-1.5">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                <span>
                                  <span className="font-medium">Вэбсайт Blacklist-д орвол</span> – Google, Norton,
                                  McAfee гэх мэт хамгаалалтын системүүд тухайн сайтад хандах эрхийг хаана
                                </span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                <span>
                                  <span className="font-medium">IP хаяг Blacklist-д орвол</span> – Тухайн IP-аас и-мэйл
                                  илгээх, серверт хандах боломжгүй болно
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700">
                            <strong>Эх сурвалж:</strong> Google Safe Browsing (2023), VirusTotal
                          </div>
                        </motion.div>

                        <motion.div
                          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-lg">
                              <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Phishing (Фишинг халдлага)</h3>
                            </div>
                          </div>
                          <p className="text-sm mb-3 text-slate-600 dark:text-slate-300">
                            Итгэл төрүүлэх замаар хэрэглэгчээс хувийн мэдээллийг нь хулгайлах халдлага. Ихэвчлэн e-mail,
                            хуурамч вэбсайт, мессеж, дуудлага, сошиал медиа зэргээр хийгддэг.
                          </p>
                          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 mb-3">
                            <h4 className="text-sm font-medium mb-2">Фишинг халдлагын төрлүүд:</h4>
                            <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
                              <li className="flex items-start gap-1.5">
                                <Lock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>
                                  <span className="font-medium">Email Phishing</span> – Хуурамч банк, байгууллагаас мэйл
                                  илгээн, линк дээр дарахыг шаардана
                                </span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <Lock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>
                                  <span className="font-medium">Spear Phishing</span> – Тодорхой байгууллага, хувь хүнд
                                  чиглэсэн илүү нарийн төлөвлөгдсөн халдлага
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700">
                            <strong>Эх сурвалж:</strong> Kaspersky Lab (2023), PhishTank тайлан
                          </div>
                        </motion.div>

                        <motion.div
                          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 dark:border-slate-700"
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-100 dark:bg-purple-900/30 p-2.5 rounded-lg">
                              <Database className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Ransomware (Түгжих халдлага)</h3>
                            </div>
                          </div>
                          <p className="text-sm mb-3 text-slate-600 dark:text-slate-300">
                            Кибер гэмт хэрэгтнүүдийн хамгийн түгээмэл ашигладаг халдлагын төрөл бөгөөд компьютерийн
                            системд нэвтэрч, файлуудыг шифрлэн, тэдгээрийг нээж өгөхийн тулд мөнгө шаарддаг.
                          </p>
                          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 mb-3">
                            <h4 className="text-sm font-medium mb-2">Ransomware-ийн түгээмэл жишээ:</h4>
                            <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
                              <li className="flex items-start gap-1.5">
                                <Database className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span>
                                  <span className="font-medium">WannaCry (2017)</span> – Microsoft Windows системд
                                  халдаж, 150 орны 200,000 компьютерийг гэмтээсэн
                                </span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <Database className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span>
                                  <span className="font-medium">NotPetya (2017)</span> – 10 тэрбум долларын хохирол
                                  учруулсан
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700">
                            <strong>Эх сурвалж:</strong> FBI Internet Crime Report (2023), Trend Micro
                          </div>
                        </motion.div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-white/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700 p-3 sm:p-4">
                      <div className="w-full">
                        <h3 className="text-sm font-medium mb-2">Кибер аюулгүй байдлын статистик</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm border border-slate-100 dark:border-slate-700">
                            <p className="text-xs text-slate-500 dark:text-slate-400">Дэлхийн хэмжээнд</p>
                            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">$8T</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 ">
                              Кибер гэмт хэргийн хохирол (2023)
                            </p>
                          </div>
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm border border-slate-100 dark:border-slate-700">
                            <p className="text-xs text-slate-500 dark:text-slate-400">Ransomware</p>
                            <p className="text-2xl font-bold text-red-600 dark:text-red-400">11 сек</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Тутамд шинэ халдлага</p>
                          </div>
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm border border-slate-100 dark:border-slate-700">
                            <p className="text-xs text-slate-500 dark:text-slate-400">Phishing</p>
                            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">36%</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Халдлагын хувь</p>
                          </div>
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm border border-slate-100 dark:border-slate-700">
                            <p className="text-xs text-slate-500 dark:text-slate-400">Хүний алдаа</p>
                            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">95%</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Кибер халдлагын шалтгаан</p>
                          </div>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} КиберХамгаалалт. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

