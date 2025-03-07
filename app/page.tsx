"use client"

import { useState } from "react"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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

const menuItems = [
  { value: "main", label: "Нүүр" },
  { value: "computer-tips", label: "Компьютер хэрэглээ" },
  { value: "device-comparison", label: "Техник харьцуулалт" },
  { value: "tutorials", label: "Хамгаалалт" },
  { value: "legal", label: "Хууль эрх зүй" },
  { value: "interactive", label: "Интерактив" },
  { value: "career", label: "Карьер" },
  { value: "news", label: "Мэдээ" },
  { value: "senior-tech-help", label: "Ахмадуудад зориулсан IT туслах" },
  { value: "ai-advisor", label: "AI зөвлөх" },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState("main")
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="main" value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
          {/* Header with Menu Button for all devices */}
          <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120] border-b border-slate-800 p-4 flex justify-end">
            <Button variant="outline" onClick={toggleMenu} className="text-white border-slate-700 hover:bg-slate-800">
              Цэс
            </Button>
          </div>

          {/* Menu for all devices */}
          {menuOpen && (
            <>
              {/* Backdrop overlay */}
              <div className="fixed inset-0 bg-black/80 z-40" onClick={() => setMenuOpen(false)} />

              {/* Menu content */}
              <div className="fixed top-16 left-0 right-0 z-50 bg-[#0B1120] shadow-lg">
                <div className="p-0">
                  <ul className="flex flex-col w-full">
                    {menuItems.map((item) => (
                      <li key={item.value} className="border-b border-slate-800">
                        <button
                          onClick={() => {
                            setActiveTab(item.value)
                            setMenuOpen(false)
                          }}
                          className={`w-full text-left px-6 py-4 text-base ${
                            activeTab === item.value ? "bg-blue-600 text-white" : "text-white hover:bg-slate-800"
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Content Area */}
          <div className="flex-1 p-2 sm:p-4 overflow-auto mt-16">
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
              <Card className="border-0 shadow-lg bg-slate-900 rounded-xl overflow-hidden">
                <CardContent className="p-4">
                  <h2 className="text-xl font-bold mb-4">Интерактив хэрэгслүүд</h2>
                  <p className="mb-4 text-sm text-slate-300">
                    Өөрийн кибер аюулгүй байдлын мэдлэгээ шалгаж, ур чадвараа сайжруулаарай
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <PasswordStrengthChecker />
                    <SecurityQuiz />
                    <PhishingDetectionGame />
                  </div>
                </CardContent>
              </Card>
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
    </main>
  )
}

