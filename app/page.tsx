"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import CyberSecurityGuide from "@/cyber-security-guide"
import WeatherWidget from "@/components/weather-widget"
import VisitorCounter from "@/components/visitor-counter"
import HackerNews from "@/components/hacker-news"
import MongolianClock from "@/components/mongolian-clock"
import ProtectionTutorials from "@/components/tutorials/protection-tutorials"
import CyberLawInfo from "@/components/legal/cyber-law-info"
import PasswordStrengthChecker from "@/components/interactive/password-strength-checker"
import SecurityQuiz from "@/components/interactive/security-quiz"
import PhishingDetectionGame from "@/components/interactive/phishing-detection-game"
import TrainingResources from "@/components/career/training-resources"
import TechNews from "@/components/tech-news"
import AiSecurityAdvisor from "@/components/tutorials/ai-security-advisor"
import ComputerTipsGuide from "@/computer-tips-guide"
import SeniorTechHelp from "@/senior-tech-help"
import DeviceComparison from "@/app/device-comparison/page"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import {
  Shield,
  Info,
  AlertCircle,
  Moon,
  Sun,
  Home,
  Laptop,
  Cpu,
  GavelIcon,
  Gamepad2,
  Briefcase,
  Newspaper,
  UserRound,
  Bot,
  X,
  Menu,
  ArrowRight,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full text-slate-900 dark:text-white">
        <span className="sr-only">Toggle theme</span>
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className="sr-only">Toggle theme</span>
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}

const menuItems = [
  { value: "main", label: "Нүүр", icon: Home },
  { value: "computer-tips", label: "Компьютер хэрэглээ", icon: Laptop },
  { value: "device-comparison", label: "Техник харьцуулалт", icon: Cpu },
  { value: "tutorials", label: "Хамгаалалт", icon: Shield },
  { value: "legal", label: "Хууль эрх зүй", icon: GavelIcon },
  { value: "interactive", label: "Интерактив", icon: Gamepad2 },
  { value: "career", label: "Карьер", icon: Briefcase },
  { value: "news", label: "Мэдээ", icon: Newspaper },
  { value: "senior-tech-help", label: "Ахмадуудад зориулсан IT туслах", icon: UserRound },
  { value: "ai-advisor", label: "AI зөвлөх", icon: Bot },
]

function HomePage() {
  const [activeTab, setActiveTab] = useState("main")
  const [menuOpen, setMenuOpen] = useState(false)
  const [showInfoDialog, setShowInfoDialog] = useState(false)
  const [showSecurityGuideDialog, setShowSecurityGuideDialog] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Explicit toggle function to ensure proper state updates
  const handleMenuToggle = useCallback(() => {
    setMenuOpen((prevState) => !prevState)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      // Check if the click is on the menu button itself
      if (menuButtonRef.current && menuButtonRef.current.contains(target)) {
        return // Let the button's onClick handler handle this
      }

      // Otherwise, close the menu if clicking outside
      if (menuOpen && !target.closest('[data-menu="true"]')) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen || showSecurityGuideDialog) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen, showSecurityGuideDialog])

  // Security Guide Dialog - Redesigned with cleaner look
  const SecurityGuideDialog = () => (
    <AnimatePresence>
      {showSecurityGuideDialog && (
        <>
          {/* Backdrop with blur effect */}
          <motion.div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSecurityGuideDialog(false)}
          />

          {/* Centered alert dialog */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] px-4">
            <motion.div
              className="w-full max-w-[300px] bg-slate-900 rounded-xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Header with close button inside */}
              <div className="px-4 pt-4 pb-2 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-blue-500">
                      <Shield className="h-4 w-4" />
                    </div>
                    <h2 className="text-white text-sm font-medium">Кибер Хамгаалалт</h2>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Кибер аюулгүй байдлын гарын авлага</p>
                </div>
                <button
                  className="text-gray-500 hover:text-gray-300 transition-colors p-1 rounded-full hover:bg-slate-800/50 flex-shrink-0"
                  onClick={() => setShowSecurityGuideDialog(false)}
                  aria-label="Close dialog"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-800 mx-4 my-1"></div>

              {/* Content */}
              <div className="px-4 py-4 space-y-4">
                {/* About this site */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="bg-blue-900/50 p-1.5 rounded-full">
                      <Info className="h-3.5 w-3.5 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-xs font-medium">Энэ сайтын тухай</h3>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Энэхүү сайт нь Монгол хэрэглэгчдэд зориулсан кибер аюулгүй байдлын мэдээлэл, зөвлөгөө, хэрэгсэл,
                      тоглоом зэргийг агуулсан цогц гарын авлага юм.
                    </p>
                  </div>
                </div>

                {/* Protection advice */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="bg-green-900/50 p-1.5 rounded-full">
                      <Shield className="h-3.5 w-3.5 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-xs font-medium">Хамгаалалтын зөвлөгөө</h3>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Хувь хүн, байгууллагууд өөрсдийгөө хакерын халдлагаас хамгаалах аргууд, шинэ технологиуд, хууль
                      эрх зүйн мэдээллийг авах боломжтой.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="main" value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
          {/* Header with Menu Button and Theme Toggle */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0B1120] border-b border-gray-200 dark:border-slate-800 shadow-sm">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
                  <span className="font-bold text-base md:text-lg text-slate-900 dark:text-white">
                    Кибер Хамгаалалт
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  

                  <ThemeToggle />

                  {/* Menu button with ref for better event handling */}
                  <Button
                    ref={menuButtonRef}
                    variant="outline"
                    onClick={handleMenuToggle}
                    className="text-slate-900 dark:text-white border-gray-300 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center gap-2"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                  >
                    <Menu className="h-4 w-4" />
                    <span className="text-sm">Цэс</span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </header>

          {/* Mobile Menu without Animation */}
          {menuOpen && (
            <>
              {/* Backdrop without animation */}
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setMenuOpen(false)} />

              {/* Menu panel without animation */}
              <div
                id="mobile-menu"
                className="fixed top-16 right-0 bottom-0 w-[85%] max-w-[320px] z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl overflow-hidden flex flex-col rounded-l-2xl border-l border-gray-200 dark:border-slate-700"
                data-menu="true"
              >
                {/* Menu header with icon and text */}
                <div className="flex items-center p-5 border-b border-gray-200 dark:border-slate-800">
                  <div
                    className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => {
                      setShowSecurityGuideDialog(true)
                      setMenuOpen(false)
                    }}
                  >
                    <div className="bg-blue-600 dark:bg-blue-700 p-2 rounded-full shadow-md">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Кибер аюулгүй байдлын гарын авлага
                    </span>
                  </div>
                </div>

                {/* Menu items with scroll */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="py-3 px-3">
                    {menuItems.map((item, index) => {
                      const Icon = item.icon
                      const isActive = activeTab === item.value

                      return (
                        <button
                          key={item.value}
                          onClick={() => {
                            setActiveTab(item.value)
                            setMenuOpen(false)
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3.5 text-left rounded-xl mb-1.5 transition-all ${
                            isActive
                              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm"
                              : "text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800/50"
                          }`}
                        >
                          <div
                            className={`flex-shrink-0 p-2.5 rounded-full ${
                              isActive
                                ? "bg-blue-100 dark:bg-blue-800/30 shadow-inner"
                                : "bg-gray-100 dark:bg-slate-800"
                            }`}
                          >
                            <Icon
                              className={`h-5 w-5 ${
                                isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-400"
                              }`}
                            />
                          </div>
                          <span className={`text-sm font-medium ${isActive ? "font-semibold" : ""}`}>{item.label}</span>
                          {isActive && <div className="ml-auto w-2 h-2 rounded-full bg-blue-500" />}
                        </button>
                      )
                    })}
                  </nav>
                </div>

                {/* Menu footer */}
                <div className="p-5 border-t border-gray-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
                    © {new Date().getFullYear()} КиберХамгаалалт | Бүх эрх хамгаалагдсан
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Content Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-auto mt-[64px]">
            <TabsContent value="main" className="mt-0 space-y-4">
              <CyberSecurityGuide />
            </TabsContent>

            <TabsContent value="tutorials" className="mt-0 space-y-4">
              <ProtectionTutorials />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <WeatherWidget />
                <MongolianClock />
              </div>
            </TabsContent>

            <TabsContent value="legal" className="mt-0 space-y-4">
              <CyberLawInfo />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <VisitorCounter />
                <HackerNews />
              </div>
            </TabsContent>

            <TabsContent value="interactive" className="mt-0 space-y-4">
              <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-white">Интерактив хэрэгслүүд</h2>
                <p className="mb-4 text-sm text-slate-300">
                  Өөрийн кибер аюулгүй байдлын мэдлэгээ шалгаж, ур чадвараа сайжруулаарай
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <PasswordStrengthChecker />
                  <SecurityQuiz />
                  <PhishingDetectionGame />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="career" className="mt-0 space-y-4">
              <TrainingResources />
            </TabsContent>

            <TabsContent value="news" className="mt-0 space-y-4">
              <TechNews />
            </TabsContent>

            <TabsContent value="ai-advisor" className="mt-0 space-y-4">
              <AiSecurityAdvisor />
            </TabsContent>

            <TabsContent value="computer-tips" className="mt-0 space-y-4">
              <ComputerTipsGuide />
            </TabsContent>

            <TabsContent value="senior-tech-help" className="mt-0 space-y-4">
              <SeniorTechHelp />
            </TabsContent>

            <TabsContent value="device-comparison" className="mt-0 space-y-4">
              <DeviceComparison />
            </TabsContent>
          </div>
        </Tabs>
      </div>
      <SecurityGuideDialog />
    </main>
  )
}

export default HomePage

