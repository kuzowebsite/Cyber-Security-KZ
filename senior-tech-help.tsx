"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Monitor,
  Wifi,
  Home,
  Search,
  MessageSquare,
  Camera,
  Power,
  Volume,
  Phone,
  Video,
  Lightbulb,
  ZoomIn,
  ZoomOut,
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  AlertTriangle,
  ChevronRight,
} from "lucide-react"

export default function SeniorTechHelp() {
  const [darkMode, setDarkMode] = useState(false)
  const [textSize, setTextSize] = useState(1)
  const [activeTab, setActiveTab] = useState("phone")
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobile, setIsMobile] = useState(true)

  // Check if the device is mobile based on screen width
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Text size styles
  const textStyles = {
    fontSize: `${1 + (textSize - 1) * 0.25}rem`,
    lineHeight: `${1.5 + (textSize - 1) * 0.25}`,
  }

  const headingStyles = {
    fontSize: `${1.5 + (textSize - 1) * 0.5}rem`,
  }

  const subheadingStyles = {
    fontSize: `${1.25 + (textSize - 1) * 0.25}rem`,
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Mobile View
  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Mobile-like status bar */}
        <div className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 flex justify-between items-center">
          <div className="text-sm font-medium">9:41</div>
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4" />
            <div className="w-6 h-3 bg-white rounded-sm relative">
              <div className="absolute top-0.5 left-0.5 bottom-0.5 right-1 bg-blue-500 dark:bg-blue-600 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* App header */}
        <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
                <h1 className="text-xl font-bold" style={headingStyles}>
                  IT Туслах
                </h1>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Ахмадуудад</Badge>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setMenuOpen(false)}>
            <div
              className="absolute top-0 left-0 h-full w-3/4 max-w-xs bg-white dark:bg-gray-800 shadow-xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-6">
                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h2 className="text-lg font-semibold">Тохиргоо</h2>
                  <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-3">Текст хэмжээ</h3>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setTextSize(Math.max(1, textSize - 0.5))}
                        disabled={textSize <= 1}
                        className="rounded-full h-10 w-10"
                      >
                        <ZoomOut className="h-5 w-5" />
                      </Button>

                      <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div
                          className="h-2 bg-blue-500 rounded-full"
                          style={{ width: `${((textSize - 1) / 2) * 100}%` }}
                        ></div>
                      </div>

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setTextSize(Math.min(3, textSize + 0.5))}
                        disabled={textSize >= 3}
                        className="rounded-full h-10 w-10"
                      >
                        <ZoomIn className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-medium mb-3">Харанхуй горим</h3>
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="flex items-center justify-between w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-700"
                    >
                      <div className="flex items-center gap-3">
                        {darkMode ? (
                          <Sun className="h-5 w-5 text-yellow-500" />
                        ) : (
                          <Moon className="h-5 w-5 text-blue-500" />
                        )}
                        <span>{darkMode ? "Гэрэлтэй горим" : "Харанхуй горим"}</span>
                      </div>
                      <div
                        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${darkMode ? "bg-blue-500" : "bg-gray-300"}`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full transform transition-transform duration-300 ${darkMode ? "translate-x-6" : "translate-x-0"}`}
                        ></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="container mx-auto px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Хайх..."
              className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300 dark:border-gray-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={textStyles}
            />
          </div>
        </div>

        {/* Main content */}
        <main className="container mx-auto px-4 py-4">
          <Card className="mb-6 border-0 shadow-md overflow-hidden rounded-xl">
            <CardContent className="p-0">
              <Tabs defaultValue="phone" value={activeTab} onValueChange={setActiveTab}>
                {/* Phone Content */}
                <TabsContent value="phone" className="p-4">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400" style={headingStyles}>
                      Гар утсаа хэрхэн ашиглах вэ?
                    </h2>

                    <div className="space-y-4">
                      {/* Basic Phone Operations */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="bg-blue-50 dark:bg-blue-900/10 px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <Power className="h-5 w-5 text-blue-500" />
                            <h3 className="font-medium" style={subheadingStyles}>
                              Үндсэн үйлдлүүд
                            </h3>
                          </div>
                        </div>

                        <div className="divide-y divide-gray-100 dark:divide-gray-700">
                          <div className="p-4">
                            <div className="flex gap-4">
                              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <Power className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-2" style={textStyles}>
                                  Утсаа асаах/унтраах
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300" style={textStyles}>
                                  Утасны хажуу талд байрлах товчийг 3 секунд удаан дарна. Дараа нь дэлгэц дээр гарч ирэх
                                  "Унтраах" товчийг дарна.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4">
                            <div className="flex gap-4">
                              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <Volume className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-2" style={textStyles}>
                                  Дууны хэм тохируулах
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300" style={textStyles}>
                                  Утасны хажуу талд байрлах дээш/доош товчнуудыг дарж дууг чангалж эсвэл намсгана.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4">
                            <div className="flex gap-4">
                              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-2" style={textStyles}>
                                  Утасны дуудлага хийх
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300" style={textStyles}>
                                  Утасны "Утас" эсвэл "Залгах" апп-г нээж, дугаараа оруулаад ногоон товчийг дарна.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Messaging and Contacts */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="bg-green-50 dark:bg-green-900/10 px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <MessageSquare className="h-5 w-5 text-green-500" />
                            <h3 className="font-medium" style={subheadingStyles}>
                              Мессеж & Харилцагчид
                            </h3>
                          </div>
                        </div>

                        <div className="divide-y divide-gray-100 dark:divide-gray-700">
                          <div className="p-4">
                            <div className="flex gap-4">
                              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-2" style={textStyles}>
                                  Мессеж бичих
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300" style={textStyles}>
                                  "Мессеж" апп-г нээж, баруун доод буланд байрлах + товчийг дарна. Хүлээн авагчийн
                                  дугаар эсвэл нэрийг оруулж, мессежээ бичээд илгээх товчийг дарна.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4">
                            <div className="flex gap-4">
                              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-2" style={textStyles}>
                                  Харилцагч нэмэх
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300" style={textStyles}>
                                  "Харилцагчид" апп-г нээж, + товчийг дарна. Хүний нэр, утасны дугаар зэрэг мэдээллийг
                                  оруулж "Хадгалах" товчийг дарна.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Camera and Photos */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="bg-purple-50 dark:bg-purple-900/10 px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <Camera className="h-5 w-5 text-purple-500" />
                            <h3 className="font-medium" style={subheadingStyles}>
                              Камер & Зураг
                            </h3>
                          </div>
                        </div>

                        <div className="divide-y divide-gray-100 dark:divide-gray-700">
                          <div className="p-4">
                            <div className="flex gap-4">
                              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <Camera className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-2" style={textStyles}>
                                  Зураг авах
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300" style={textStyles}>
                                  "Камер" апп-г нээж, дэлгэцийн доод хэсэгт байрлах том дугуй товчийг дарж зураг авна.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4">
                            <div className="flex gap-4">
                              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <Video className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-2" style={textStyles}>
                                  Видео бичих
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300" style={textStyles}>
                                  "Камер" апп-г нээж, "Видео" горимд шилжинэ (доод хэсэгт байрлах сонголтоос). Дараа нь
                                  улаан товчийг дарж бичлэг эхлүүлнэ. Дуусахад дахин дарна.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tip Box */}
                      <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-4 border border-amber-200 dark:border-amber-800/30">
                        <div className="flex gap-4">
                          <div className="mt-1">
                            <Lightbulb className="h-6 w-6 text-amber-500" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-2 text-amber-800 dark:text-amber-300" style={textStyles}>
                              Санамж
                            </h3>
                            <p className="text-amber-700 dark:text-amber-200" style={textStyles}>
                              Утасны загвар бүр өөр өөр байж болох тул таны утсан дээр товчнууд, тохиргоо бага зэрэг өөр
                              байж болно. Хэрэв асуудал гарвал, гэр бүлийн гишүүн эсвэл найзаасаа тусламж хүсээрэй.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                {/* Computer Content */}
                <TabsContent value="computer" className="p-4">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400" style={headingStyles}>
                      Компьютероо хэрхэн ашиглах вэ?
                    </h2>

                    <div className="space-y-4">
                      {/* Basic Computer Operations */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="bg-blue-50 dark:bg-blue-900/10 px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <Monitor className="h-5 w-5 text-blue-500" />
                            <h3 className="font-medium" style={subheadingStyles}>
                              Үндсэн үйлдлүүд
                            </h3>
                          </div>
                        </div>

                        <div className="divide-y divide-gray-100 dark:divide-gray-700">
                          <div className="p-4">
                            <div className="flex gap-4">
                              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <Power className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-2" style={textStyles}>
                                  Компьютер асаах/унтраах
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300" style={textStyles}>
                                  Компьютерийн товчийг дарж асаана. Унтраахын тулд "Эхлэл" цэсийг дарж, "Унтраах"
                                  сонголтыг сонгоно.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4">
                                <div className="flex gap-4">
                                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                    <Monitor className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Дэлгэцийн тохиргоо
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Дэлгэцийн хэмжээг тохируулахын тулд дэлгэц дээр хулганы баруун товчийг дарж,
                                      "Дэлгэцийн тохиргоо" эсвэл "Display settings" сонголтыг сонгоно.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="p-4">
                                <div className="flex gap-4">
                                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                    <Volume className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Дууны хэм тохируулах
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Дэлгэцийн доод хэсэгт байрлах чанга яригчийн дүрс дээр дарж дууны хэмжээг
                                      тохируулна. Эсвэл гарын клавиатур дээрх дууны товчнуудыг ашиглана.
                                    </p>
                                  </div>
                                </div>
                              </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                {/* Internet Content */}
                <TabsContent value="internet" className="p-4">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400" style={headingStyles}>
                      Интернэтээс мэдээлэл хайх
                    </h2>

                    <div className="space-y-4">
                      {/* Search Engines */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="bg-green-50 dark:bg-green-900/10 px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <Search className="h-5 w-5 text-green-500" />
                            <h3 className="font-medium" style={subheadingStyles}>
                              Хайлтын системүүд
                            </h3>
                          </div>
                        </div>

                        <div className="divide-y divide-gray-100 dark:divide-gray-700">
                          <div className="p-4">
                            <div className="flex gap-4">
                              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <Search className="h-6 w-6 text-green-600 dark:text-green-400" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-2" style={textStyles}>
                                  Google ашиглах
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300" style={textStyles}>
                                  Хөтчөө нээж, google.com хаяг руу орно. Хайлтын хэсэгт хайх зүйлээ бичээд Enter товчийг
                                  дарна эсвэл хайх товчийг дарна.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4">
                            <div className="flex gap-4">
                              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <ArrowRight className="h-6 w-6 text-green-600 dark:text-green-400" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-2" style={textStyles}>
                                  Хайлтын үр дүнг ашиглах
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300" style={textStyles}>
                                  Хайлтын үр дүнгээс таны хайсан мэдээлэлтэй холбоотой холбоосууд гарч ирнэ. Сонирхсон
                                  холбоос дээр дарж тухайн сайт руу орно.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4">
                                <div className="flex gap-4">
                                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                    <ChevronRight className="h-6 w-6 text-green-600 dark:text-green-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Вэбсайтад шилжих
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Хэрэв та вэбсайтын хаягийг мэддэг бол, хөтчийн дээд хэсэгт байрлах хаягийн талбарт
                                      шууд бичиж Enter товчийг дарж орж болно. Жишээ нь: www.google.com
                                    </p>
                                  </div>
                                </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                {/* Smart Home Content */}
                <TabsContent value="smarthome" className="p-4">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400" style={headingStyles}>
                      Гэрийн ухаалаг төхөөрөмжүүдийг тохируулах
                    </h2>

                    <div className="space-y-4">
                      {/* Smart Speakers */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="bg-purple-50 dark:bg-purple-900/10 px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <Volume className="h-5 w-5 text-purple-500" />
                            <h3 className="font-medium" style={subheadingStyles}>
                              Ухаалаг чанга яригч
                            </h3>
                          </div>
                        </div>

                        

                        <div className="divide-y divide-gray-100 dark:divide-gray-700">

                              <div className="p-4">
                                <div className="flex gap-4">
                                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                    <Volume className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Ухаалаг чанга яригч тохируулах
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Ухаалаг чанга яригчийг (Amazon Echo, Google Home) цахилгаанд залгаж асаана. Гар
                                      утсандаа тохирох апп-г суулгаж (Amazon Alexa эсвэл Google Home), апп-н зааврын
                                      дагуу холбоно.
                                    </p>
                                  </div>
                                </div>
                              </div>

                        <div className="p-4">
                                <div className="flex gap-4">
                                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                    <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Ухаалаг гэрэл
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Ухаалаг гэрлийг (Philips Hue, LIFX) суурилуулж, гар утсандаа тохирох апп-г
                                      суулгана. Апп-н зааврын дагуу гэрлээ холбож, өнгө, гэрлийн хүч, хуваарь зэргийг
                                      тохируулах боломжтой.
                                    </p>
                                  </div>
                                </div>
                              </div>

                          <div className="p-4">
                            <div className="flex gap-4">
                              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                <Volume className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-2" style={textStyles}>
                                  Ухаалаг чанга яригч тохируулах
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300" style={textStyles}>
                                  Ухаалаг чанга яригчийг (Amazon Echo, Google Home) цахилгаанд залгаж асаана. Гар
                                  утсандаа тохирох апп-г суулгаж (Amazon Alexa эсвэл Google Home), апп-н зааврын дагуу
                                  холбоно.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="border-0 shadow-md overflow-hidden rounded-xl">
            <CardContent className="p-0">
              <div className="bg-blue-50 dark:bg-blue-900/10 px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                <h3 className="font-medium" style={headingStyles}>
                  Тусламж хэрэгтэй юу?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300" style={textStyles}>
                  Хэрэв танд нэмэлт тусламж хэрэгтэй бол, дараах хувилбаруудыг ашиглаарай:
                </p>
              </div>

              <div className="p-4 grid grid-cols-1 gap-3">
                <Button className="flex items-center justify-start gap-3 h-auto py-4 px-4 bg-blue-500 hover:bg-blue-600 text-white">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium" style={textStyles}>
                      Утсаар холбогдох
                    </p>
                    <p className="text-xs text-blue-100" style={textStyles}>
                      Шууд тусламж авах
                    </p>
                  </div>
                </Button>

                <Button className="flex items-center justify-start gap-3 h-auto py-4 px-4 bg-green-500 hover:bg-green-600 text-white">
                  <div className="bg-white/20 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium" style={textStyles}>
                      Чат ашиглах
                    </p>
                    <p className="text-xs text-green-100" style={textStyles}>
                      Онлайн чатаар холбогдох
                    </p>
                  </div>
                </Button>

                <Button className="flex items-center justify-start gap-3 h-auto py-4 px-4 bg-purple-500 hover:bg-purple-600 text-white">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Video className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium" style={textStyles}>
                      Видео заавар
                    </p>
                    <p className="text-xs text-purple-100" style={textStyles}>
                    Видео заавар зөвөлгөө
                    </p>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Mobile-like bottom navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-4 gap-1 p-2">
            <button
              className={`flex flex-col items-center justify-center p-2 rounded-xl ${
                activeTab === "phone"
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("phone")}
            >
              <Smartphone className="h-5 w-5" />
              <span className="text-xs mt-1">Гар утас</span>
            </button>
            <button
              className={`flex flex-col items-center justify-center p-2 rounded-xl ${
                activeTab === "computer"
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("computer")}
            >
              <Monitor className="h-5 w-5" />
              <span className="text-xs mt-1">Компьютер</span>
            </button>
            <button
              className={`flex flex-col items-center justify-center p-2 rounded-xl ${
                activeTab === "internet"
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("internet")}
            >
              <Wifi className="h-5 w-5" />
              <span className="text-xs mt-1">Интернэт</span>
            </button>
            <button
              className={`flex flex-col items-center justify-center p-2 rounded-xl ${
                activeTab === "smarthome"
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("smarthome")}
            >
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Ухаалаг гэр</span>
            </button>
          </div>
        </div>

        {/* Add padding at the bottom to account for the fixed navigation */}
        <div className="h-20"></div>
      </div>
    )
  }

  // Desktop View
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-md flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">IT Туслах</h1>
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Ахмадуудад</Badge>
            </div>
          </div>

          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Хайх..."
                className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300 dark:border-gray-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            <div className="p-2">
              <div className="space-y-1">
                <button
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg ${
                    activeTab === "phone"
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveTab("phone")}
                >
                  <Smartphone className="h-5 w-5" />
                  <span>Гар утас</span>
                </button>
                <button
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg ${
                    activeTab === "computer"
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveTab("computer")}
                >
                  <Monitor className="h-5 w-5" />
                  <span>Компьютер</span>
                </button>
                <button
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg ${
                    activeTab === "internet"
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveTab("internet")}
                >
                  <Wifi className="h-5 w-5" />
                  <span>Интернэт</span>
                </button>
                <button
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg ${
                    activeTab === "smarthome"
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveTab("smarthome")}
                >
                  <Home className="h-5 w-5" />
                  <span>Ухаалаг гэр</span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-3">Текст хэмжээ</h3>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTextSize(Math.max(1, textSize - 0.5))}
                  disabled={textSize <= 1}
                  className="rounded-full h-8 w-8"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>

                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-2 bg-blue-500 rounded-full"
                    style={{ width: `${((textSize - 1) / 2) * 100}%` }}
                  ></div>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTextSize(Math.min(3, textSize + 0.5))}
                  disabled={textSize >= 3}
                  className="rounded-full h-8 w-8"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Харанхуй горим</h3>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-between w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-700"
              >
                <div className="flex items-center gap-3">
                  {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-blue-500" />}
                  <span>{darkMode ? "Гэрэлтэй горим" : "Харанхуй горим"}</span>
                </div>
                <div
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${darkMode ? "bg-blue-500" : "bg-gray-300"}`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full transform transition-transform duration-300 ${darkMode ? "translate-x-6" : "translate-x-0"}`}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <main className="p-6">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-6 border shadow-md overflow-hidden rounded-xl">
                <CardContent className="p-0">
                  <Tabs defaultValue="phone" value={activeTab} onValueChange={setActiveTab}>
                    {/* Phone Content */}
                    <TabsContent value="phone" className="p-6">
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                        <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400" style={headingStyles}>
                          Гар утсаа хэрхэн ашиглах вэ?
                        </h2>

                        <div className="space-y-6">
                          {/* Basic Phone Operations */}
                          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                            <div className="bg-blue-50 dark:bg-blue-900/10 px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                              <div className="flex items-center gap-2">
                                <Power className="h-5 w-5 text-blue-500" />
                                <h3 className="font-medium text-xl" style={subheadingStyles}>
                                  Үндсэн үйлдлүүд
                                </h3>
                              </div>
                            </div>

                            <div className="divide-y divide-gray-100 dark:divide-gray-700">
                              <div className="p-6">
                                <div className="flex gap-6">
                                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                                    <Power className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Утсаа асаах/унтраах
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Утасны хажуу талд байрлах товчийг 3 секунд удаан дарна. Дараа нь дэлгэц дээр гарч
                                      ирэх "Унтраах" товчийг дарна.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="p-6">
                                <div className="flex gap-6">
                                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                                    <Volume className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Дууны хэм тохируулах
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Утасны хажуу талд байрлах дээш/доош товчнуудыг дарж дууг чангалж эсвэл намсгана.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="p-6">
                                <div className="flex gap-6">
                                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                                    <Phone className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Утасны дуудлага хийх
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Утасны "Утас" эсвэл "Залгах" апп-г нээж, дугаараа оруулаад ногоон товчийг дарна.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Other sections would follow the same pattern but with desktop-optimized spacing */}
                        </div>
                      </motion.div>
                    </TabsContent>

                    {/* Other tab contents would follow the same pattern */}
                    <TabsContent value="computer" className="p-6">
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                        <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400" style={headingStyles}>
                          Компьютероо хэрхэн ашиглах вэ?
                        </h2>

                        <div className="space-y-6">
                          {/* Basic Computer Operations */}
                          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                            <div className="bg-blue-50 dark:bg-blue-900/10 px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                              <div className="flex items-center gap-2">
                                <Monitor className="h-5 w-5 text-blue-500" />
                                <h3 className="font-medium text-xl" style={subheadingStyles}>
                                  Үндсэн үйлдлүүд
                                </h3>
                              </div>
                            </div>

                            <div className="divide-y divide-gray-100 dark:divide-gray-700">
                              <div className="p-6">
                                <div className="flex gap-6">
                                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                                    <Power className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Компьютер асаах/унтраах
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Компьютерийн товчийг дарж асаана. Унтраахын тулд "Эхлэл" цэсийг дарж, "Унтраах"
                                      сонголтыг сонгоно.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="p-6">
                                <div className="flex gap-6">
                                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                                    <Monitor className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Дэлгэцийн тохиргоо
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Дэлгэцийн хэмжээг тохируулахын тулд дэлгэц дээр хулганы баруун товчийг дарж,
                                      "Дэлгэцийн тохиргоо" эсвэл "Display settings" сонголтыг сонгоно.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="p-6">
                                <div className="flex gap-6">
                                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                                    <Volume className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Дууны хэм тохируулах
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Дэлгэцийн доод хэсэгт байрлах чанга яригчийн дүрс дээр дарж дууны хэмжээг
                                      тохируулна. Эсвэл гарын клавиатур дээрх дууны товчнуудыг ашиглана.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Tip Box */}
                          <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-6 border border-amber-200 dark:border-amber-800/30">
                            <div className="flex gap-6">
                              <div className="mt-1">
                                <Lightbulb className="h-8 w-8 text-amber-500" />
                              </div>
                              <div>
                                <h3
                                  className="font-medium mb-3 text-lg text-amber-800 dark:text-amber-300"
                                  style={textStyles}
                                >
                                  Санамж
                                </h3>
                                <p className="text-amber-700 dark:text-amber-200 text-base" style={textStyles}>
                                  Компьютерийн үйлдлийн систем бүр өөр өөр байж болох тул таны компьютер дээр товчнууд,
                                  тохиргоо бага зэрэг өөр байж болно. Windows, Mac, эсвэл Linux гэх мэт үйлдлийн
                                  системүүд нь өөр өөр интерфэйстэй.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </TabsContent>

                    <TabsContent value="internet" className="p-6">
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                        <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400" style={headingStyles}>
                          Интернэтээс мэдээлэл хайх
                        </h2>

                        <div className="space-y-6">
                          {/* Search Engines */}
                          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                            <div className="bg-green-50 dark:bg-green-900/10 px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                              <div className="flex items-center gap-2">
                                <Search className="h-5 w-5 text-green-500" />
                                <h3 className="font-medium text-xl" style={subheadingStyles}>
                                  Хайлтын системүүд
                                </h3>
                              </div>
                            </div>

                            <div className="divide-y divide-gray-100 dark:divide-gray-700">
                              <div className="p-6">
                                <div className="flex gap-6">
                                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                                    <Search className="h-8 w-8 text-green-600 dark:text-green-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Google ашиглах
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Хөтчөө нээж, google.com хаяг руу орно. Хайлтын хэсэгт хайх зүйлээ бичээд Enter
                                      товчийг дарна эсвэл хайх товчийг дарна.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="p-6">
                                <div className="flex gap-6">
                                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                                    <ArrowRight className="h-8 w-8 text-green-600 dark:text-green-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Хайлтын үр дүнг ашиглах
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Хайлтын үр дүнгээс таны хайсан мэдээлэлтэй холбоотой холбоосууд гарч ирнэ.
                                      Сонирхсон холбоос дээр дарж тухайн сайт руу орно.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="p-6">
                                <div className="flex gap-6">
                                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                                    <ChevronRight className="h-8 w-8 text-green-600 dark:text-green-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Вэбсайтад шилжих
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Хэрэв та вэбсайтын хаягийг мэддэг бол, хөтчийн дээд хэсэгт байрлах хаягийн талбарт
                                      шууд бичиж Enter товчийг дарж орж болно. Жишээ нь: www.google.com
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Online Safety */}
                          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                            <div className="bg-red-50 dark:bg-red-900/10 px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                              <div className="flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-red-500" />
                                <h3 className="font-medium text-xl" style={subheadingStyles}>
                                  Интернэт аюулгүй байдал
                                </h3>
                              </div>
                            </div>

                            <div className="p-6">
                              <div className="flex gap-6">
                                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
                                </div>
                                <div>
                                  <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                    Интернэтэд аюулгүй ажиллах
                                  </h4>
                                  <ul
                                    className="text-gray-600 dark:text-gray-300 text-base space-y-2"
                                    style={textStyles}
                                  >
                                    <li className="flex items-start gap-2">
                                      <ChevronRight className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                                      <span>Танихгүй имэйл, холбоосууд дээр дарахгүй байх</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <ChevronRight className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                                      <span>
                                        Хувийн мэдээллээ (нууц үг, банкны мэдээлэл) итгэлгүй сайтуудад оруулахгүй байх
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <ChevronRight className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                                      <span>Вэбсайтын хаяг https:// гэж эхэлж байгаа эсэхийг шалгах</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </TabsContent>

                    <TabsContent value="smarthome" className="p-6">
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                        <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400" style={headingStyles}>
                          Гэрийн ухаалаг төхөөрөмжүүдийг тохируулах
                        </h2>

                        <div className="space-y-6">
                          {/* Smart Speakers */}
                          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                            <div className="bg-purple-50 dark:bg-purple-900/10 px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                              <div className="flex items-center gap-2">
                                <Volume className="h-5 w-5 text-purple-500" />
                                <h3 className="font-medium text-xl" style={subheadingStyles}>
                                  Ухаалаг чанга яригч
                                </h3>
                              </div>
                            </div>

                            <div className="divide-y divide-gray-100 dark:divide-gray-700">
                              <div className="p-6">
                                <div className="flex gap-6">
                                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                                    <Volume className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Ухаалаг чанга яригч тохируулах
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Ухаалаг чанга яригчийг (Amazon Echo, Google Home) цахилгаанд залгаж асаана. Гар
                                      утсандаа тохирох апп-г суулгаж (Amazon Alexa эсвэл Google Home), апп-н зааврын
                                      дагуу холбоно.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="p-6">
                                <div className="flex gap-6">
                                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                                    <Lightbulb className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Ухаалаг гэрэл
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Ухаалаг гэрлийг (Philips Hue, LIFX) суурилуулж, гар утсандаа тохирох апп-г
                                      суулгана. Апп-н зааврын дагуу гэрлээ холбож, өнгө, гэрлийн хүч, хуваарь зэргийг
                                      тохируулах боломжтой.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="p-6">
                                <div className="flex gap-6">
                                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                                    <Home className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-3 text-lg" style={textStyles}>
                                      Ухаалаг термостат
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-base" style={textStyles}>
                                      Ухаалаг термостат (Nest, Ecobee) нь гэрийн температурыг хянах, эрчим хүч хэмнэх
                                      боломжийг олгоно. Суурилуулалтын зааврын дагуу суурилуулж, гар утсандаа тохирох
                                      апп-г суулгана.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Tip Box */}
                          <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-6 border border-amber-200 dark:border-amber-800/30">
                            <div className="flex gap-6">
                              <div className="mt-1">
                                <Lightbulb className="h-8 w-8 text-amber-500" />
                              </div>
                              <div>
                                <h3
                                  className="font-medium mb-3 text-lg text-amber-800 dark:text-amber-300"
                                  style={textStyles}
                                >
                                  Санамж
                                </h3>
                                <p className="text-amber-700 dark:text-amber-200 text-base" style={textStyles}>
                                  Ухаалаг төхөөрөмжүүд нь таны Wi-Fi сүлжээнд холбогддог тул сүлжээний нэр, нууц үгээ
                                  бэлэн байлгаарай. Мөн төхөөрөмж бүр өөр өөр апп шаардаж болох тул гар утсандаа
                                  хангалттай сул зай байгаа эсэхийг шалгаарай.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Help Section - Desktop version */}
              <Card className="border shadow-md overflow-hidden rounded-xl">
                <CardContent className="p-0">
                  <div className="bg-blue-50 dark:bg-blue-900/10 px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                    <h3 className="font-medium text-xl" style={headingStyles}>
                      Тусламж хэрэгтэй юу?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300" style={textStyles}>
                      Хэрэв танд нэмэлт тусламж хэрэгтэй бол, дараах хувилбаруудыг ашиглаарай:
                    </p>
                  </div>

                  <div className="p-6 grid grid-cols-3 gap-4">
                    <Button className="flex items-center justify-start gap-3 h-auto py-4 px-4 bg-blue-500 hover:bg-blue-600 text-white">
                      <div className="bg-white/20 p-2 rounded-full">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium" style={textStyles}>
                          Утсаар холбогдох
                        </p>
                        <p className="text-xs text-blue-100" style={textStyles}>
                          Шууд тусламж авах
                        </p>
                      </div>
                    </Button>

                    <Button className="flex items-center justify-start gap-3 h-auto py-4 px-4 bg-green-500 hover:bg-green-600 text-white">
                      <div className="bg-white/20 p-2 rounded-full">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium" style={textStyles}>
                          Чат ашиглах
                        </p>
                        <p className="text-xs text-green-100" style={textStyles}>
                          Онлайн чатаар холбогдох
                        </p>
                      </div>
                    </Button>

                    <Button className="flex items-center justify-start gap-3 h-auto py-4 px-4 bg-purple-500 hover:bg-purple-600 text-white">
                      <div className="bg-white/20 p-2 rounded-full">
                        <Video className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium" style={textStyles}>
                          Видео заавар
                        </p>
                        <p className="text-xs text-purple-100" style={textStyles}>
                        Видео заавар зөвөлгөө
                        </p>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

