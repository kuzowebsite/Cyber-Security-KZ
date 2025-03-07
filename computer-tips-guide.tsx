"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  FileText,
  Table,
  PresentationIcon,
  Search,
  Keyboard,
  Lightbulb,
  CheckCircle2,
  ExternalLink,
  Download,
  Laptop,
  Bookmark,
  Zap,
  Save,
  ChevronRight,
  HelpCircle,
  AlertCircle,
  Wifi,
  Thermometer,
  RotateCcw,
} from "lucide-react"

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

export default function ComputerTipsGuide() {
  const [activeTab, setActiveTab] = useState("office")

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a101e] to-[#111827] text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="mb-12 text-center"
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
              Компьютер хэрэглээ
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Компьютер хэрэглээний зөвлөгөө
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Өдөр тутмын компьютер хэрэглээг хялбар, хурдан болгох зөвлөмжүүд
          </motion.p>
        </motion.div>

        <Tabs defaultValue="office" className="mb-8" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <motion.div
              className="w-full max-w-[800px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="bg-[#101725] rounded-xl shadow-xl overflow-hidden border border-slate-800">
                <div className="flex items-center px-4 py-3 border-b border-slate-800">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-1 bg-transparent p-0 h-auto">
                    <TabsTrigger
                      value="office"
                      className="flex items-center justify-center py-3 px-2 text-slate-300 data-[state=active]:text-white data-[state=active]:bg-blue-600 rounded-md transition-all"
                    >
                      <FileText className="mr-2 h-5 w-5" />
                      <span className="text-sm">Office</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="internet"
                      className="flex items-center justify-center py-3 px-2 text-slate-300 data-[state=active]:text-white data-[state=active]:bg-blue-600 rounded-md transition-all"
                    >
                      <Search className="mr-2 h-5 w-5" />
                      <span className="text-sm">Интернэт</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="shortcuts"
                      className="flex items-center justify-center py-3 px-2 text-slate-300 data-[state=active]:text-white data-[state=active]:bg-blue-600 rounded-md transition-all"
                    >
                      <Keyboard className="mr-2 h-5 w-5" />
                      <span className="text-sm md:inline">Товчлол</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="troubleshooting"
                      className="flex items-center justify-center py-3 px-2 text-slate-300 data-[state=active]:text-white data-[state=active]:bg-blue-600 rounded-md transition-all"
                    >
                      <Laptop className="mr-2 h-5 w-5" />
                      <span className="text-sm">Асуудал</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="tips"
                      className="flex items-center justify-center py-3 px-2 text-slate-300 data-[state=active]:text-white data-[state=active]:bg-blue-600 rounded-md transition-all"
                    >
                      <Lightbulb className="mr-2 h-5 w-5" />
                      <span className="text-sm">Зөвлөмж</span>
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>
            </motion.div>
          </div>

          <TabsContent value="office" className="mt-0">
            <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-2">
              <motion.div variants={item} className="md:col-span-2">
                <Card className="overflow-hidden border shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <FileText className="h-6 w-6 text-blue-500" />
                      Microsoft Office програмууд дээр хурдан ажиллах
                    </CardTitle>
                    <CardDescription>
                      Word, Excel, PowerPoint програмуудыг илүү үр дүнтэй ашиглах аргууд
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="grid gap-6 md:grid-cols-3">
                      {/* Word Section */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-lg">
                            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h3 className="text-xl font-semibold">Microsoft Word</h3>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="word-1">
                            <AccordionTrigger className="text-base font-medium">
                              Баримт бичиг форматлах
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Загварууд ашиглах:</strong> Home {">"} Styles хэсгээс бэлэн загварууд
                                    ашиглах
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Heading ашиглах:</strong> Гарчгуудыг Heading 1, 2, 3 гэх мэтээр тохируулж
                                    агуулгын хүснэгт үүсгэх боломжтой
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Автомат гарчиг:</strong> References {">"} Table of Contents ашиглан
                                    автоматаар агуулгын хүснэгт үүсгэх
                                  </span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="word-2">
                            <AccordionTrigger className="text-base font-medium">Хурдан бичих аргууд</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>AutoCorrect:</strong> File {">"} Options {">"} Proofing {">"} AutoCorrect
                                    Options - тогтмол ашигладаг урт үгсийг богино товчлолоор солих
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Quick Parts:</strong> Insert {">"} Quick Parts - давтагддаг текстүүдийг
                                    хадгалж дараа нь хурдан оруулах
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Find and Replace:</strong> Ctrl+H товчлуураар олон үгийг нэг дор солих
                                  </span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="word-3">
                            <AccordionTrigger className="text-base font-medium">
                              Хүснэгт, зураг оруулах
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Хүснэгт:</strong> Insert {">"} Table - хүснэгт оруулах, Design, Layout
                                    табуудаар хүснэгтийг засварлах
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Зураг:</strong> Insert {">"} Pictures - зураг оруулах, Picture Format табаар
                                    засварлах
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>SmartArt:</strong> Insert {">"} SmartArt - диаграм, схем оруулах
                                  </span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>

                        <div className="mt-4">
                          <Button variant="outline" size="sm" className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            <span>Бүх Word зөвлөмжүүд</span>
                          </Button>
                        </div>
                      </div>

                      {/* Excel Section */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-green-100 dark:bg-green-900/30 p-2.5 rounded-lg">
                            <Table className="h-5 w-5 text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="text-xl font-semibold">Microsoft Excel</h3>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="excel-1">
                            <AccordionTrigger className="text-base font-medium">
                              Томруулсан хүснэгт ашиглах
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Томруулсан хүснэгт үүсгэх:</strong> Ctrl+T товчлуураар эсвэл Insert {">"}{" "}
                                    Table
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Давуу тал:</strong> Автоматаар шүүлт, эрэмбэлэлт хийх боломжтой
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Нэмэлт боломж:</strong> Design таб дээрээс Total Row сонгож нийлбэр, дундаж
                                    гэх мэт тооцоолол хийх
                                  </span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="excel-2">
                            <AccordionTrigger className="text-base font-medium">Формул, функцууд</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>VLOOKUP:</strong> Өөр хүснэгтээс мэдээлэл хайх - =VLOOKUP(хайх_утга,
                                    хүснэгт, багана, FALSE)
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>IF:</strong> Нөхцөл шалгах - =IF(нөхцөл, үнэн_үед, худал_үед)
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>SUMIFS:</strong> Нөхцөлөөр нийлбэр бодох - =SUMIFS(нийлбэр_хүрээ,
                                    шалгах_хүрээ1, шалгах_утга1,...)
                                  </span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="excel-3">
                            <AccordionTrigger className="text-base font-medium">Диаграм, PivotTable</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Диаграм:</strong> Insert {">"} Charts - өгөгдлөө сонгоод диаграм үүсгэх
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>PivotTable:</strong> Insert {">"} PivotTable - өгөгдлийг бүлэглэж дүгнэлт
                                    хийх
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Slicer:</strong> PivotTable Tools {">"} Analyze {">"} Insert Slicer -
                                    интерактив шүүлтүүр үүсгэх
                                  </span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>

                        <div className="mt-4">
                          <Button variant="outline" size="sm" className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            <span>Бүх Excel зөвлөмжүүд</span>
                          </Button>
                        </div>
                      </div>

                      {/* PowerPoint Section */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-red-100 dark:bg-red-900/30 p-2.5 rounded-lg">
                            <PresentationIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
                          </div>
                          <h3 className="text-xl font-semibold">Microsoft PowerPoint</h3>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="ppt-1">
                            <AccordionTrigger className="text-base font-medium">Загвар, дизайн</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Загвар ашиглах:</strong> File {">"} New - бэлэн загварууд ашиглах
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Slide Master:</strong> View {">"} Slide Master - бүх слайдын загварыг нэг
                                    дор өөрчлөх
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Design Ideas:</strong> Design {">"} Design Ideas - автоматаар дизайны санал
                                    авах (Office 365)
                                  </span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="ppt-2">
                            <AccordionTrigger className="text-base font-medium">Анимэйшн, шилжилт</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Анимэйшн:</strong> Animations таб - элементүүдэд анимэйшн нэмэх
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Шилжилт:</strong> Transitions таб - слайд хооронд шилжилт нэмэх
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Зөвлөмж:</strong> Хэт олон анимэйшн ашиглахгүй байх, энгийн байлгах
                                  </span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="ppt-3">
                            <AccordionTrigger className="text-base font-medium">Танилцуулга хийх</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Presenter View:</strong> Slide Show {">"} Presenter View - өөрт тэмдэглэл
                                    харагдах горим
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Laser pointer:</strong> Танилцуулга үзүүлэх үед Ctrl+L дарж лазер заагчтай
                                    болох
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Хугацаа тохируулах:</strong> Slide Show {">"} Rehearse Timings - слайд
                                    бүрийн хугацааг тохируулах
                                  </span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>

                        <div className="mt-4">
                          <Button variant="outline" size="sm" className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            <span>Бүх PowerPoint зөвлөмжүүд</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="internet" className="mt-0">
            <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6">
              <motion.div variants={item}>
                <Card className="overflow-hidden border shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Search className="h-6 w-6 text-purple-500" />
                      Интернэтээс мэдээлэл хайх зөвлөмжүүд
                    </CardTitle>
                    <CardDescription>Google болон бусад хайлтын системүүдийг үр дүнтэй ашиглах аргууд</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Google Search Tips */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-purple-100 dark:bg-purple-900/30 p-2.5 rounded-lg">
                            <Search className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h3 className="text-xl font-semibold">Google хайлтын аргууд</h3>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Нарийвчилсан хайлт хийх</h4>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono mt-0.5">
                                  "хайх үг"
                                </div>
                                <div className="text-sm">
                                  <p>Яг тэр үг, өгүүлбэрийг хайх</p>
                                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                                    Жишээ: "Монгол улсын түүх"
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-2">
                                <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono mt-0.5">
                                  site:
                                </div>
                                <div className="text-sm">
                                  <p>Тодорхой сайтаас хайх</p>
                                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                                    Жишээ: site:mn мэдээлэл
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-2">
                                <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono mt-0.5">
                                  filetype:
                                </div>
                                <div className="text-sm">
                                  <p>Тодорхой төрлийн файл хайх</p>
                                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                                    Жишээ: "монгол хэл" filetype:pdf
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-2">
                                <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono mt-0.5">
                                  OR
                                </div>
                                <div className="text-sm">
                                  <p>Аль нэгийг нь хайх</p>
                                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                                    Жишээ: монгол OR mongolia
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-2">
                                <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono mt-0.5">
                                  -
                                </div>
                                <div className="text-sm">
                                  <p>Тодорхой үгийг хасах</p>
                                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                                    Жишээ: монгол -улаанбаатар
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                          <h4 className="font-medium mb-2">Хайлтын бусад зөвлөмжүүд</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Түлхүүр үгс ашиглах:</strong> Урт өгүүлбэрийн оронд чухал түлхүүр үгсийг ашиглах
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Хайлтын үр дүнг шүүх:</strong> Tools {">"} Any time, Any results гэх мэт
                                сонголтуудыг ашиглах
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Google Scholar:</strong> Судалгааны материал хайхдаа scholar.google.com ашиглах
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Information Evaluation */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-amber-100 dark:bg-amber-900/30 p-2.5 rounded-lg">
                            <HelpCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                          </div>
                          <h3 className="text-xl font-semibold">Мэдээллийн үнэн зөв байдлыг шалгах</h3>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                          <h4 className="font-medium mb-2">Мэдээллийн эх сурвалжийг шалгах</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Сайтын найдвартай байдал:</strong> Албан ёсны байгууллагын сайт эсэхийг шалгах
                                (.gov, .edu гэх мэт домэйнүүд илүү найдвартай)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Зохиогч:</strong> Зохиогчийн мэргэжил, туршлагыг шалгах
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Огноо:</strong> Мэдээлэл хэзээ нийтлэгдсэн, шинэчлэгдсэнийг шалгах
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Эх сурвалж:</strong> Мэдээлэл нь эх сурвалжтай эсэхийг шалгах
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                          <h4 className="font-medium mb-2">Хэрэгтэй вэбсайтууд</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <Bookmark className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Google Scholar</strong>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                  Судалгааны материал, эрдэм шинжилгээний өгүүлэл хайх
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <Bookmark className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Wikipedia</strong>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                  Ерөнхий мэдээлэл авах, гэхдээ эх сурвалжийг нь шалгах
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <Bookmark className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Internet Archive (archive.org)</strong>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                  Хуучин вэбсайтууд, устсан хуудсуудыг үзэх
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="mt-4">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            <span>Хайлтын зөвлөмжүүд татах</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="shortcuts" className="mt-0">
            <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6">
              <motion.div variants={item}>
                <Card className="overflow-hidden border shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Keyboard className="h-6 w-6 text-indigo-500" />
                      Гарын товчлолууд
                    </CardTitle>
                    <CardDescription>Windows болон Office програмуудын түгээмэл товчлолууд</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Windows Shortcuts */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-lg">
                            <Laptop className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h3 className="text-xl font-semibold">Windows товчлолууд</h3>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                          <h4 className="font-medium mb-3">Үндсэн товчлолууд</h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Цонх хооронд шилжих</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Alt + Tab
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Бүх цонхыг харах</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Win + Tab
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Цонх хаах</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Alt + F4
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Дэлгэц дарж авах</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Win + PrtScn
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Файл менежер</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Win + E
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Хайх</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Win + S
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Дэлгэц түгжих</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Win + L
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Тохиргоо</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Win + I
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                          <h4 className="font-medium mb-3">Цонхны удирдлага</h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Цонхыг томруулах</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Win + ↑
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Цонхыг багасгах</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Win + ↓
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Зүүн талд байрлуулах</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Win + ←
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Баруун талд байрлуулах</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Win + →
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Office Shortcuts */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-green-100 dark:bg-green-900/30 p-2.5 rounded-lg">
                            <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="text-xl font-semibold">Office товчлолууд</h3>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                          <h4 className="font-medium mb-3">Бүх Office програмд ажилладаг</h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Хадгалах</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Ctrl + S
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Хуулах</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Ctrl + C
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Тасдах</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Ctrl + X
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Буулгах</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Ctrl + V
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Бүгдийг сонгох</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Ctrl + A
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Хэвлэх</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Ctrl + P
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Буцаах</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Ctrl + Z
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Дахин хийх</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Ctrl + Y
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                          <h4 className="font-medium mb-3">Word-д зориулсан</h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Тод үсэг</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Ctrl + B
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Налуу үсэг</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Ctrl + I
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Доогуур зураас</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Ctrl + U
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Хайх</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Ctrl + F
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                          <h4 className="font-medium mb-3">Excel-д зориулсан</h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Формул оруулах</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                =
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Нийлбэр</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Alt + =
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Бүх нүдийг сонгох</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Ctrl + A
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Томруулсан хүснэгт</span>
                              <div className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">
                                Ctrl + T
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="troubleshooting" className="mt-0">
            <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6">
              <motion.div variants={item}>
                <Card className="bg-[#131c2e] border-slate-700 shadow-lg overflow-hidden">
                  <CardHeader className="border-b border-slate-700/50 pb-4">
                    <CardTitle className="text-2xl flex items-center gap-2 text-white">
                      <AlertCircle className="h-6 w-6 text-red-400" />
                      Түгээмэл асуудлуудыг шийдвэрлэх
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      Компьютер ашиглахад тулгардаг нийтлэг асуудлууд ба тэдгээрийг шийдвэрлэх аргууд
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    {/* Slow Computer */}
                    <div className="mb-10">
                      <div className="flex items-center gap-3 mb-4 pb-2 border-b border-slate-700/50">
                        <div className="bg-red-900/20 text-red-400 p-2.5 rounded">
                          <RotateCcw className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Компьютер асаад удаан ачаалдаг</h3>
                      </div>

                      <div className="ml-2 mb-4 flex gap-3">
                        <div className="bg-blue-900/20 text-blue-400 px-3 py-1.5 rounded text-sm font-medium h-fit">
                          Шалтгаан
                        </div>
                        <p className="text-slate-300">
                          Компьютер асаах үед хэрэггүй олон програмууд ачаалагдаж, RAM болон CPU-г их хэмжээгээр
                          ашигладаг.
                        </p>
                      </div>

                      <div className="space-y-4 mt-6">
                        <div className="relative pl-8 pb-1">
                          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 to-blue-500/0"></div>
                          <div className="absolute left-0 top-0 h-7 w-7 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            <span className="text-sm font-medium">W</span>
                          </div>
                          <h4 className="text-lg font-medium text-white mb-3">Windows дээр:</h4>
                          <ol className="space-y-2 text-slate-300 list-decimal ml-5">
                            <li>Ctrl + Shift + Esc дарж Task Manager нээнэ.</li>
                            <li>Startup таб руу орно.</li>
                            <li>Хэрэггүй ачааллаж байгаа програм дээр Right Click → Disable дарна.</li>
                            <li>Компьютерээ дахин асаана.</li>
                          </ol>
                        </div>

                        <div className="relative pl-8 pb-1">
                          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 to-blue-500/0"></div>
                          <div className="absolute left-0 top-0 h-7 w-7 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            <span className="text-sm font-medium">M</span>
                          </div>
                          <h4 className="text-lg font-medium text-white mb-3">Mac дээр:</h4>
                          <ol className="space-y-2 text-slate-300 list-decimal ml-5">
                            <li>System Settings → Users & Groups руу орно.</li>
                            <li>Login Items цэсийг сонгоно.</li>
                            <li>Ачааллах програмуудын жагсаалт гарч ирнэ.</li>
                            <li>Хэрэггүй програмыг сонгоод "-" (remove) товч дарна.</li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    {/* Browser Ads */}
                    <div className="mb-10">
                      <div className="flex items-center gap-3 mb-4 pb-2 border-b border-slate-700/50">
                        <div className="bg-amber-900/20 text-amber-400 p-2.5 rounded">
                          <AlertCircle className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          Хөтөч дээр зар сурталчилгаа, попап их гарч ирээд байна
                        </h3>
                      </div>

                      <div className="ml-2 mb-4 flex gap-3">
                        <div className="bg-blue-900/20 text-blue-400 px-3 py-1.5 rounded text-sm font-medium h-fit">
                          Шалтгаан
                        </div>
                        <p className="text-slate-300">
                          Вэб хөтөч дээр хортой зар сурталчилгаатай сайт руу орсон, AdBlock өргөтгөл суулгаагүй, эсвэл
                          компьютер вирус авсан байж болно.
                        </p>
                      </div>

                      <div className="space-y-4 mt-6">
                        <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700/50">
                          <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                            AdBlock суулгах (Chrome, Edge, Firefox-д тохиромжтой)
                          </h4>
                          <ol className="space-y-2 text-slate-300 list-decimal ml-5">
                            <li>Chrome Web Store руу орно: AdBlock татах</li>
                            <li>"Add to Chrome" дээр дараад "Add extension" товчийг дарна.</li>
                            <li>Суусны дараа AdBlock дүрс дээр дарж "Enable" болгоно.</li>
                          </ol>
                        </div>

                        <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700/50">
                          <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                            Вирус шалгах
                          </h4>
                          <div className="flex flex-col space-y-4">
                            <div>
                              <div className="text-white font-medium mb-1">Windows Defender ашиглах:</div>
                              <ul className="space-y-1 text-slate-300 list-disc ml-6">
                                <li>Windows Security нээгээд Virus & threat protection сонгоно.</li>
                                <li>Quick scan товчийг дарж шалгана.</li>
                              </ul>
                            </div>
                            <div>
                              <div className="text-white font-medium mb-1">Malwarebytes програм ашиглах:</div>
                              <ul className="space-y-1 text-slate-300 list-disc ml-6">
                                <li>Malwarebytes татах</li>
                                <li>Scan хийж, илэрсэн вирусыг устгана.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* WiFi Issues */}
                    <div className="mb-10">
                      <div className="flex items-center gap-3 mb-4 pb-2 border-b border-slate-700/50">
                        <div className="bg-blue-900/20 text-blue-400 p-2.5 rounded">
                          <Wifi className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">WiFi удаан, тасалдаад байна</h3>
                      </div>

                      <div className="ml-2 mb-4 flex gap-3">
                        <div className="bg-blue-900/20 text-blue-400 px-3 py-1.5 rounded text-sm font-medium h-fit">
                          Шалтгаан
                        </div>
                        <p className="text-slate-300">
                          Сүлжээний олон төхөөрөмж холбогдсон, роутерийн тохиргоо буруу, интернэт компани удаан байж
                          болно.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700/50">
                          <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                            WiFi хурд нэмэгдүүлэх аргууд
                          </h4>
                          <ul className="space-y-3 text-slate-300 ml-1">
                            <li className="flex items-start gap-3">
                              <span className="flex h-6 w-6 min-w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium">
                                1
                              </span>
                              <span>Router-оо унтрааж 10 секунд хүлээгээд дахин асаах</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="flex h-6 w-6 min-w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium">
                                2
                              </span>
                              <span>
                                Router settings рүү хандаж хэрэггүй холбогдсон төхөөрөмжүүдийг салгах (192.168.1.1 эсвэл
                                192.168.0.1 хаягаар орох)
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="flex h-6 w-6 min-w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium">
                                3
                              </span>
                              <span>WiFi 5GHz сүлжээг ашиглах (Хэрэв Router дэмждэг бол)</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700/50">
                          <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                            LAN кабель ашиглах
                          </h4>
                          <div className="flex items-start gap-2 text-slate-300">
                            <div className="flex items-center justify-center text-blue-400 mt-1">
                              <ChevronRight className="h-4 w-4" />
                            </div>
                            <p>
                              Боломжтой бол LAN кабель холбож ашиглах нь WiFi-аас илүү хурдан, тогтвортой интернэт
                              холболт бий болгоно.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Temperature Issues */}
                    <div>
                      <div className="flex items-center gap-3 mb-4 pb-2 border-b border-slate-700/50">
                        <div className="bg-red-900/20 text-red-400 p-2.5 rounded">
                          <Thermometer className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Компьютер өөрөө дахин асдаг эсвэл унтардаг</h3>
                      </div>

                      <div className="ml-2 mb-4 flex gap-3">
                        <div className="bg-blue-900/20 text-blue-400 px-3 py-1.5 rounded text-sm font-medium h-fit">
                          Шалтгаан
                        </div>
                        <p className="text-slate-300">
                          Дулаан хэт ихдэж CPU хамгаалалтын үүднээс унтардаг, эсвэл тоног төхөөрөмж асуудалтай байна.
                        </p>
                      </div>

                      <div className="mt-6">
                        <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700/50">
                          <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                            Дулаан хэт ихэсч байгаа эсэхийг шалгах, арилгах
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                                <span className="text-white font-medium">Температур шалгах</span>
                              </div>
                              <p className="text-slate-300 pl-4">
                                SpeedFan програм татаж CPU, GPU температур хэд байгааг шалгана. CPU: 70°C-с дээш, GPU:
                                85°C-с дээш бол аюултай.
                              </p>
                            </div>

                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                                <span className="text-white font-medium">Цэвэрлэгээ, засвар</span>
                              </div>
                              <ul className="space-y-2 text-slate-300 list-disc ml-6">
                                <li>Тоос шороог цэвэрлэх</li>
                                <li>Компьютерийн сэнсүүдийг шалгах</li>
                                <li>Шинэ термопаст түрхэх</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="tips" className="mt-0">
            <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6">
              <motion.div variants={item}>
                <Card className="overflow-hidden border shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Lightbulb className="h-6 w-6 text-yellow-500" />
                      Бусад хэрэгтэй зөвлөмжүүд
                    </CardTitle>
                    <CardDescription>Компьютер ашиглахад тустай бусад зөвлөмжүүд</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="grid gap-6 md:grid-cols-3">
                      {/* Productivity Tips */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-green-100 dark:bg-green-900/30 p-2.5 rounded-lg">
                            <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="text-xl font-semibold">Бүтээмж нэмэгдүүлэх</h3>
                        </div>

                        <ul className="space-y-3 text-sm">
                          <li className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Олон цонх ашиглах</strong>
                                <p className="text-slate-600 dark:text-slate-300 mt-1">
                                  Хоёр програмыг зэрэг харахын тулд Win+← болон Win+→ товчлуурыг ашиглаж цонхыг
                                  хажуугаар нь байрлуулах
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Олон дэлгэц ашиглах</strong>
                                <p className="text-slate-600 dark:text-slate-300 mt-1">
                                  Боломжтой бол хоёр дэлгэц ашиглах нь бүтээмжийг 20-30% нэмэгдүүлдэг
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Виртуал дэлгэцүүд</strong>
                                <p className="text-slate-600 dark:text-slate-300 mt-1">
                                  Win+Tab дарж New Desktop үүсгэн ажлуудаа ангилж ажиллах
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Автоматжуулах</strong>
                                <p className="text-slate-600 dark:text-slate-300 mt-1">
                                  Давтагддаг ажлуудыг автоматжуулахын тулд макро, скрипт ашиглах
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* File Management */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-lg">
                            <Save className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h3 className="text-xl font-semibold">Файл зохион байгуулалт</h3>
                        </div>

                        <ul className="space-y-3 text-sm">
                          <li className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Файлын нэрлэгээ</strong>
                                <p className="text-slate-600 dark:text-slate-300 mt-1">
                                  Файлуудыг огноо_нэр_хувилбар гэх мэт тогтсон форматаар нэрлэх
                                  (2024-03-07_Тайлан_v1.2.docx)
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Фолдер бүтэц</strong>
                                <p className="text-slate-600 dark:text-slate-300 mt-1">
                                  Логик бүтэцтэй фолдер үүсгэж, төстэй файлуудыг нэг дор хадгалах
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Нөөц хуулбар</strong>
                                <p className="text-slate-600 dark:text-slate-300 mt-1">
                                  Чухал файлуудаа тогтмол нөөцлөх, үүлэн үйлчилгээ (Google Drive, OneDrive) ашиглах
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Хайлтын индекс</strong>
                                <p className="text-slate-600 dark:text-slate-300 mt-1">
                                  Windows хайлтыг илүү хурдан болгохын тулд индексжүүлэлтийг тохируулах
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Computer Maintenance */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-amber-100 dark:bg-amber-900/30 p-2.5 rounded-lg">
                            <Laptop className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                          </div>
                          <h3 className="text-xl font-semibold">Компьютерын арчилгаа</h3>
                        </div>

                        <ul className="space-y-3 text-sm">
                          <li className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Тогтмол цэвэрлэгээ</strong>
                                <p className="text-slate-600 dark:text-slate-300 mt-1">
                                  Disk Cleanup ашиглан хэрэггүй файлуудыг устгах, Disk Defragmenter ашиглан диск
                                  оновчлох
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Шинэчлэлт</strong>
                                <p className="text-slate-600 dark:text-slate-300 mt-1">
                                  Windows болон програмуудын шинэчлэлтийг тогтмол хийх
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Антивирус</strong>
                                <p className="text-slate-600 dark:text-slate-300 mt-1">
                                  Антивирус програмаар тогтмол компьютерээ шалгаж байх
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>Эхлүүлэх програмууд</strong>
                                <p className="text-slate-600 dark:text-slate-300 mt-1">
                                  Task Manager (Ctrl+Shift+Esc) ашиглан эхлүүлэх програмуудыг хязгаарлах
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-slate-50 dark:bg-slate-800 border-t pt-4">
                    <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Сүүлийн шинэчлэл: {new Date().toLocaleDateString()}
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">Бүх зөвлөмжүүдийг үзэх</Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Компьютер хэрэглээний зөвлөгөө. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </motion.div>
      </div>
    </div>
  )
}