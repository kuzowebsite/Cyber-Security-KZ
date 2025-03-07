"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Smartphone,
  Laptop,
  FileText,
  Database,
  Lock,
  AlertTriangle,
  Play,
  Download,
  ExternalLink,
  CheckCircle2,
  Wifi,
  Globe,
  FileWarning,
  ShieldOff,
  ServerCrash,
  CloudOff,
} from "lucide-react"

export default function ProtectionTutorials() {
  const [activeTab, setActiveTab] = useState("personal")

  const tabs = [
    { id: "personal", label: "Хувь хүн", icon: <Smartphone className="w-4 h-4" /> },
    { id: "business", label: "Байгууллага", icon: <Laptop className="w-4 h-4" /> },
    { id: "resources", label: "Материал", icon: <FileText className="w-4 h-4" /> },
    { id: "threats", label: "Аюул", icon: <FileWarning className="w-4 h-4" /> },
  ]

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="relative p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-lg shadow-md flex-shrink-0">
            <ShieldCheck className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">Хамгаалалт</h2>
              <Badge className="bg-green-600 hover:bg-green-700 text-white border-0">Шинэ</Badge>
            </div>
            <p className="text-xs text-slate-300">Кибер аюулгүй байдлын зөвлөмжүүд</p>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="px-4 pt-4">
        <div className="relative">
          <div className="flex overflow-x-auto space-x-1 pb-3 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md"
                    : "bg-slate-800 text-slate-300 border border-slate-700"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <AnimatePresence mode="wait">
          {activeTab === "personal" && (
            <motion.div
              key="personal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-3">
                {/* Password Security */}
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="p-3 hover:no-underline group">
                        <div className="flex items-center gap-3 w-full">
                          <div className="bg-blue-600 p-2 rounded-md shadow-md flex-shrink-0">
                            <Lock className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-base font-medium text-white">Хүчтэй нууц үг үүсгэх</h3>
                            <p className="text-xs text-slate-400">Нууц үгээ хэрхэн хамгаалах вэ?</p>
                          </div>
                          <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 pb-3 pt-0">
                        <div className="space-y-3">
                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-blue-500">
                            <h4 className="text-sm font-medium text-white mb-2">Нууц үгийн шаардлага:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Хамгийн багадаа 12 тэмдэгт урттай байх",
                                "Том, жижиг үсэг хольж хэрэглэх (Аа-Яя, Aa-Zz)",
                                "Тоо оруулах (0-9)",
                                "Тусгай тэмдэгт оруулах (!@#$%^&*)",
                                "Өөр өөр сайтуудад өөр нууц үг хэрэглэх",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-blue-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-green-500">
                            <h4 className="text-sm font-medium text-white mb-2">Нууц үг хадгалах аргууд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "LastPass, 1Password, Bitwarden нууц үг хадгалагч програм ашиглах",
                                "Хоёр шатлалт баталгаажуулалт (2FA) идэвхжүүлэх",
                                "Нууц үгээ тогтмол шинэчлэх (3-6 сар тутамд)",
                                "Нэг мастер нууц үг цээжлэх, бусдыг програмаар үүсгэх",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-green-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-red-500">
                            <h4 className="text-sm font-medium text-white flex items-center gap-2 mb-2">
                              <AlertTriangle className="h-3 w-3 text-red-400" />
                              Хэзээ ч бүү хий:
                            </h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Нэг л нууц үгийг бүх газарт ашиглах",
                                "Хувийн мэдээлэл (нэр, төрсөн өдөр) ашиглах",
                                "Нууц үгээ бусадтай хуваалцах",
                                "Нууц үгээ цаасан дээр бичиж үлдээх",
                                "12345, password гэх мэт энгийн үгс хэрэглэх",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <AlertTriangle className="h-3 w-3 text-red-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            size="sm"
                            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                          >
                            <Play className="h-3 w-3" />
                            <span className="text-xs">Видео заавар үзэх</span>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Phishing */}
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="p-3 hover:no-underline group">
                        <div className="flex items-center gap-3 w-full">
                          <div className="bg-amber-600 p-2 rounded-md shadow-md flex-shrink-0">
                            <AlertTriangle className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-base font-medium text-white">Фишинг халдлагаас сэргийлэх</h3>
                            <p className="text-xs text-slate-400">Хуурамч имэйл, вэбсайтуудыг таних</p>
                          </div>
                          <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 pb-3 pt-0">
                        <div className="space-y-3">
                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-amber-500">
                            <h4 className="text-sm font-medium text-white mb-2">Фишингийн шинж тэмдгүүд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Хуурамч домэйн хаяг (g00gle.com, khaanbank-mn.com)",
                                "Зөв бичгийн алдаа, хэл найруулга эмх замбараагүй",
                                "Яаралтай арга хэмжээ авахыг шаардах",
                                "Хувийн мэдээлэл, нууц үг, банкны мэдээлэл асуух",
                                "Имэйлийн хаяг нь албан ёсны домэйнтэй таарахгүй",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-amber-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-green-500">
                            <h4 className="text-sm font-medium text-white mb-2">Өөрийгөө хамгаалах:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Сэжигтэй имэйл, мессежийг нээхгүй байх",
                                "URL хаягийг шалгах, https:// протоколтой эсэх",
                                "Линк дээр дарахын оронд шууд вэбсайт руу орох",
                                "Имэйлийн гарчиг дээр курсор тавьж, жинхэнэ хаягийг шалгах",
                                "Банк, төрийн байгууллагын нэрээр ирсэн имэйлд онцгой анхаар��х",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-green-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-blue-500">
                            <h4 className="text-sm font-medium text-white mb-2">Фишинг халдлага авсан үед:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Нууц үгээ даруй өөрчлөх",
                                "Банкны картаа түр хаалгах",
                                "Холбогдох байгууллагад мэдэгдэх",
                                "Вирус, малвэр шалгалт хийх",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-blue-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            size="sm"
                            className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center gap-2"
                          >
                            <Download className="h-3 w-3" />
                            <span className="text-xs">Фишинг жишээнүүд татах</span>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Mobile Security */}
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="p-3 hover:no-underline group">
                        <div className="flex items-center gap-3 w-full">
                          <div className="bg-green-600 p-2 rounded-md shadow-md flex-shrink-0">
                            <Smartphone className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-base font-medium text-white">Гар утасны аюулгүй байдал</h3>
                            <p className="text-xs text-slate-400">Утсаа хакераас хамгаалах</p>
                          </div>
                          <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 pb-3 pt-0">
                        <div className="space-y-3">
                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-green-500">
                            <h4 className="text-sm font-medium text-white mb-2">Гар утасны үндсэн хамгаалалт:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Үйлдлийн системээ тогтмол шинэчлэх (Android, iOS)",
                                "Play Store, App Store зэрэг албан ёсны дэлгүүрээс апп суулгах",
                                "Дэлгэцийн түгжээ идэвхжүүлэх (PIN, хээ, нүүр таних)",
                                "Чухал аппуудад нэмэлт түгжээ тавих",
                                "Утсаа бусдад зээлэхгүй байх",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-green-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-blue-500">
                            <h4 className="text-sm font-medium text-white mb-2">Нэмэлт хамгаалалтын аргууд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Kaspersky, ESET гэх мэт найдвартай антивирус апп суулгах",
                                "Чухал мэдээллээ Google Drive, iCloud-д нөөцлөх",
                                "Олон нийтийн Wi-Fi-д холбогдохдоо VPN ашиглах",
                                "Bluetooth-ээ хэрэглэхгүй үед унтрааж байх",
                                "Уншаагүй SMS-үүдийг устгах",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-blue-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-red-500">
                            <h4 className="text-sm font-medium text-white flex items-center gap-2 mb-2">
                              <AlertTriangle className="h-3 w-3 text-red-400" />
                              Анхаарах зүйлс:
                            </h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "root/jailbreak хийхгүй байх",
                                "Мэдээлэл алдагдсан аппуудыг устгах",
                                "Танихгүй хүмүүсээс ирсэн линкүүд дээр дарахгүй байх",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <AlertTriangle className="h-3 w-3 text-red-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            size="sm"
                            className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                          >
                            <ExternalLink className="h-3 w-3" />
                            <span className="text-xs">Дэлгэрэнгүй унших</span>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Wi-Fi Security (NEW) */}
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="p-3 hover:no-underline group">
                        <div className="flex items-center gap-3 w-full">
                          <div className="bg-blue-600 p-2 rounded-md shadow-md flex-shrink-0">
                            <Wifi className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-base font-medium text-white">Wi-Fi сүлжээний аюулгүй байдал</h3>
                            <p className="text-xs text-slate-400">Интернэт холболтоо хамгаалах</p>
                          </div>
                          <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 pb-3 pt-0">
                        <div className="space-y-3">
                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-blue-500">
                            <h4 className="text-sm font-medium text-white mb-2">Гэрийн Wi-Fi сүлжээний хамгаалалт:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Router-ийн анхны нууц үгийг солих",
                                "WPA3 тохиргоо идэвхжүүлэх (боломжтой бол)",
                                "Сүлжээний нэрээ (SSID) өөрчлөх",
                                "MAC address filtering идэвхжүүлэх",
                                "Router-ийн firmware-ийг шинэчлэх",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-blue-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-amber-500">
                            <h4 className="text-sm font-medium text-white mb-2">Нийтийн Wi-Fi сүлжээн дээр:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "VPN ашиглах (NordVPN, ExpressVPN, Surfshark)",
                                "Автоматаар холбогдох тохиргоог идэвхгүй болгох",
                                "Файл хуваалцах үйлчилгээгээ унтраах",
                                "Онлайн банк, санхүүгийн үйлчилгээ ашиглахгүй байх",
                                "HTTPS вэбсайтууд руу зөвхөн хандах",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-amber-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            size="sm"
                            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                          >
                            <Play className="h-3 w-3" />
                            <span className="text-xs">Wi-Fi хамгаалах видео</span>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "business" && (
            <motion.div
              key="business"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-3">
                {/* Business Policy */}
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="p-3 hover:no-underline group">
                        <div className="flex items-center gap-3 w-full">
                          <div className="bg-purple-600 p-2 rounded-md shadow-md flex-shrink-0">
                            <Database className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-base font-medium text-white">Кибер аюулгүй байдлын бодлого</h3>
                            <p className="text-xs text-slate-400">Үр дүнтэй бодлого боловсруулах</p>
                          </div>
                          <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 pb-3 pt-0">
                        <div className="space-y-3">
                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-purple-500">
                            <h4 className="text-sm font-medium text-white mb-2">Бодлогын үндсэн элементүүд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Нууц үгийн бодлого (хүчтэй нууц үг, тогтмол шинэчлэх)",
                                "Хандалтын хяналт (хэн ямар мэдээлэлд хандах эрхтэй)",
                                "Мэдээллийн ангилал (нууц, дотоод, нийтийн)",
                                "Инцидент хариу арга хэмжээний төлөвлөгөө",
                                "Ажилтнуудын сургалтын хөтөлбөр",
                                "Хөдөлгөөнт төхөөрөмжийн бодлого",
                                "Нөөцлөлтийн болон сэргээлтийн журам",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-purple-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-indigo-500">
                            <h4 className="text-sm font-medium text-white mb-2">Бодлого хэрэгжүүлэх алхамууд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Удирдлагын дэмжлэг авах",
                                "Эрсдэлийн үнэлгээ хийх",
                                "Бодлого, журам боловсруулах",
                                "Ажилтнуудад сургалт явуулах",
                                "Тогтмол хяналт, шинэчлэлт хийх",
                                "Кибер даатгал авах боломжийг судлах",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-indigo-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-amber-500">
                            <h4 className="text-sm font-medium text-white flex items-center gap-2 mb-2">
                              <AlertTriangle className="h-3 w-3 text-amber-400" />
                              Чухал санамж:
                            </h4>
                            <p className="text-slate-300 text-xs">
                              Кибер аюулгүй байдлын бодлого нь зөвхөн IT хэлтсийн асуудал биш, бүх ажилтнуудын оролцоо
                              шаардсан байгууллагын соёлын нэг хэсэг байх ёстой. Мөн эрх зүйн орчны өөрчлөлтүүдийг
                              тогтмол хянаж, шинэчлэлт хийж байх шаардлагатай.
                            </p>
                          </div>

                          <Button
                            size="sm"
                            className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center gap-2"
                          >
                            <Download className="h-3 w-3" />
                            <span className="text-xs">Бодлогын загвар татах</span>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Employee Training */}
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="p-3 hover:no-underline group">
                        <div className="flex items-center gap-3 w-full">
                          <div className="bg-blue-600 p-2 rounded-md shadow-md flex-shrink-0">
                            <Laptop className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-base font-medium text-white">Ажилтнуудын сургалт</h3>
                            <p className="text-xs text-slate-400">Үр дүнтэй сургалт зохион байгуулах</p>
                          </div>
                          <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 pb-3 pt-0">
                        <div className="space-y-3">
                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-blue-500">
                            <h4 className="text-sm font-medium text-white mb-2">Сургалтын гол сэдвүүд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Фишинг халдлагыг таних",
                                "Нууц үгийн аюулгүй байдал",
                                "Социал инженеринг",
                                "Мэдээллийн аюулгүй байдал",
                                "Зөөврийн төхөөрөмжийн аюулгүй байдал",
                                "Хувийн хэрэглээ, ажлын мэдээллийг тусгаарлах",
                                "Аюулгүй файл солилцоо",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-blue-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-green-500">
                            <h4 className="text-sm font-medium text-white mb-2">Сургалтын аргууд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Симуляцийн фишинг халдлага (тестийн имэйл явуулах)",
                                "Интерактив вэбинар",
                                "Богино хэмжээний видео хичээлүүд",
                                "Бодит жишээн дээр суурилсан дасгал ажил",
                                "Тогтмол сануулга явуулах (имэйл, мессеж, постер)",
                                "Шинэ ажилтны эхлэлийн сургалтад багтаах",
                                "Сургалтын үр дүнг шалгах тестүүд",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-green-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            size="sm"
                            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                          >
                            <Download className="h-3 w-3" />
                            <span className="text-xs">Сургалтын материал татах</span>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Data Protection */}
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="p-3 hover:no-underline group">
                        <div className="flex items-center gap-3 w-full">
                          <div className="bg-green-600 p-2 rounded-md shadow-md flex-shrink-0">
                            <Database className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-base font-medium text-white">Өгөгдлийн хамгаалалт</h3>
                            <p className="text-xs text-slate-400">Байгууллагын мэдээллийг хамгаалах</p>
                          </div>
                          <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 pb-3 pt-0">
                        <div className="space-y-3">
                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-green-500">
                            <h4 className="text-sm font-medium text-white mb-2">Өгөгдлийн хамгаалалтын аргууд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Мэдээллийг шифрлэх (encryption)",
                                "Нөөц хуулбар үүсгэх (3-2-1 дүрэм)",
                                "Хэрэглэгчийн эрхийн хяналт тавих",
                                "Хандалтын бүртгэл хөтлөх",
                                "Салбар хоорондын файрволл суурилуулах",
                                "Хэрэглэхгүй байгаа өгөгдлийг устгах",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-green-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-blue-500">
                            <h4 className="text-sm font-medium text-white mb-2">Өгөгдөл алдагдсан үед:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Холбогдох байгууллагуудад мэдэгдэх",
                                "Алдагдсан өгөгдлийн хүрээг тодорхойлох",
                                "Хохирлыг бууруулах арга хэмжээ авах",
                                "Сэргээх төлөвлөгөөг хэрэгжүүлэх",
                                "Хууль, эрх зүйн дагуу ажиллах",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-blue-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            size="sm"
                            className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                          >
                            <ExternalLink className="h-3 w-3" />
                            <span className="text-xs">GDPR зөвлөмж үзэх</span>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "resources" && (
            <motion.div
              key="resources"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-3">
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50 p-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-600 p-2 rounded-md shadow-md flex-shrink-0">
                      <FileText className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-base font-medium text-white">Монгол хэл дээрх номууд</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      { title: "Кибер аюулгүй байдлын үндэс", author: "Б. Баттулга, 2022", level: "Анхан" },
                      { title: "Хакерын ертөнц", author: "Д. Энхбаяр, 2020", level: "Дунд" },
                      { title: "Мэдээллийн аюулгүй байдал", author: "МУИС, 2019", level: "Гүнзгий" },
                      { title: "Монголын кибер аюулгүй байдлын орчин", author: "Т. Бат-Эрдэнэ, 2021", level: "Дунд" },
                      { title: "Хувийн мэдээллийн хамгаалалт", author: "С. Энхбаяр, 2022", level: "Анхан" },
                    ].map((book, i) => (
                      <div key={i} className="bg-slate-700/40 rounded-md p-2 flex items-start">
                        <div className="flex-1">
                          <p className="text-sm text-white font-medium">{book.title}</p>
                          <p className="text-xs text-slate-400">{book.author}</p>
                        </div>
                        <Badge className="bg-slate-600 text-xs">{book.level}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50 p-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-600 p-2 rounded-md shadow-md flex-shrink-0">
                      <FileText className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-base font-medium text-white">Англи хэл дээрх номууд</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      { title: "The Art of Invisibility", author: "Kevin Mitnick, 2017", level: "Анхан" },
                      { title: "Social Engineering", author: "C. Hadnagy, 2018", level: "Дунд" },
                      { title: "Practical Malware Analysis", author: "M. Sikorski, 2012", level: "Гүнзгий" },
                      { title: "The Web Application Hacker's Handbook", author: "D. Stuttard, 2011", level: "Гүнзгий" },
                      { title: "Cybersecurity For Dummies", author: "J. Steinberg, 2019", level: "Анхан" },
                    ].map((book, i) => (
                      <div key={i} className="bg-slate-700/40 rounded-md p-2 flex items-start">
                        <div className="flex-1">
                          <p className="text-sm text-white font-medium">{book.title}</p>
                          <p className="text-xs text-slate-400">{book.author}</p>
                        </div>
                        <Badge className="bg-slate-600 text-xs">{book.level}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50 p-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-600 p-2 rounded-md shadow-md flex-shrink-0">
                      <Globe className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-base font-medium text-white">Хэрэгтэй вэбсайтууд</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        title: "Монголын Үндэсний CERT",
                        url: "https://cert.gov.mn",
                        desc: "Үндэсний кибер аюулгүй байдлын төв",
                      },
                      {
                        title: "Have I Been Pwned",
                        url: "https://haveibeenpwned.com",
                        desc: "Нууц үг задарсан эсэхийг шалгах",
                      },
                      { title: "OWASP", url: "https://owasp.org", desc: "Нээлттэй вэб аппликэйшн аюулгүй байдал" },
                      {
                        title: "Krebs on Security",
                        url: "https://krebsonsecurity.com",
                        desc: "Кибер аюулгүй байдлын блог",
                      },
                      { title: "Shodan.io", url: "https://shodan.io", desc: "Интернэт төхөөрөмжийн хайлтын систем" },
                    ].map((site, i) => (
                      <div key={i} className="bg-slate-700/40 rounded-md p-2">
                        <p className="text-sm text-white font-medium">{site.title}</p>
                        <p className="text-xs text-slate-400">{site.desc}</p>
                        <p className="text-xs text-blue-400 mt-1">{site.url}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "threats" && (
            <motion.div
              key="threats"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-3">
                {/* Malware Types */}
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="p-3 hover:no-underline group">
                        <div className="flex items-center gap-3 w-full">
                          <div className="bg-red-600 p-2 rounded-md shadow-md flex-shrink-0">
                            <ShieldOff className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-base font-medium text-white">Хортой програм хангамжийн төрлүүд</h3>
                            <p className="text-xs text-slate-400">Өргөн тархсан малверүүд</p>
                          </div>
                          <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 pb-3 pt-0">
                        <div className="space-y-3">
                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-red-500">
                            <h4 className="text-sm font-medium text-white mb-2">Малверийн төрлүүд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                { name: "Ransomware", desc: "Файлуудыг түгжиж, төлбөр нэхдэг (WannaCry, Petya)" },
                                { name: "Spyware", desc: "Хэрэглэгчийн үйлдлийг нууцаар хянаж, дамжуулдаг" },
                                { name: "Trojan", desc: "Хэрэгтэй програм мэт харагдаж, далд үйлдэл хийдэг" },
                                { name: "Worm", desc: "Өөрийгөө хуулж, сүлжээгээр өөрөө тархдаг" },
                                { name: "Keylogger", desc: "Гарын дээр хийсэн бичлэгийг бүртгэж, дамжуулдаг" },
                                { name: "Rootkit", desc: "Системийн гүн түвшинд нэвтэрч, нууцлагддаг" },
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <AlertTriangle className="h-3 w-3 text-red-400 mt-0.5" />
                                  <div>
                                    <span className="font-medium">{item.name}:</span> {item.desc}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-green-500">
                            <h4 className="text-sm font-medium text-white mb-2">Хамгаалах аргууд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Антивирус програм суулгаж, тогтмол шинэчлэх",
                                "Файл татахдаа найдвартай эх сурвалжаас авах",
                                "Имэйлээр ирсэн хавсралтуудыг болгоомжтой нээх",
                                "Үйлдлийн системээ шинэчлэх",
                                "Чухал файлуудаа тогтмол нөөцлөх",
                                "Сэжигтэй холбоосуудыг дарахгүй байх",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-green-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            size="sm"
                            className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2"
                          >
                            <Download className="h-3 w-3" />
                            <span className="text-xs">Малвераас хамгаалах заавар</span>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Social Engineering */}
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="p-3 hover:no-underline group">
                        <div className="flex items-center gap-3 w-full">
                          <div className="bg-amber-600 p-2 rounded-md shadow-md flex-shrink-0">
                            <Globe className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-base font-medium text-white">Социал инженеринг</h3>
                            <p className="text-xs text-slate-400">Хүний сэтгэл зүйд суурилсан халдлага</p>
                          </div>
                          <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 pb-3 pt-0">
                        <div className="space-y-3">
                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-amber-500">
                            <h4 className="text-sm font-medium text-white mb-2">Халдлагын аргууд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                { name: "Pretexting", desc: "Хуурамч шалтгаан, дүр эсгэж мэдээлэл авах" },
                                { name: "Baiting", desc: "Ямар нэг урхи тавьж, түүнд ороход уриалах" },
                                { name: "Quid pro quo", desc: "Ямар нэг тусламж санал болгож, мэдээлэл авах" },
                                { name: "Tailgating", desc: "Хамгаалалттай газар бусдын ард дагаж орох" },
                                { name: "Vishing", desc: "Утсаар залилан хийх" },
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <AlertTriangle className="h-3 w-3 text-amber-400 mt-0.5" />
                                  <div>
                                    <span className="font-medium">{item.name}:</span> {item.desc}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-green-500">
                            <h4 className="text-sm font-medium text-white mb-2">Хамгаалах аргууд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Мэдээллээ шалгаж баталгаажуулах",
                                "Хэзээ ч яаран шийдвэр гаргахгүй байх",
                                "Танихгүй хүнд хувийн мэдээлэл өгөхгүй байх",
                                "Утасны дуудлагын эх сурвалжийг шалгах",
                                "Аливаа урамшуулал, мэдээлэл хэт сайхан санагдвал болгоомжлох",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-green-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            size="sm"
                            className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center gap-2"
                          >
                            <Play className="h-3 w-3" />
                            <span className="text-xs">Жишээ үзэх</span>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Cloud Security */}
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="p-3 hover:no-underline group">
                        <div className="flex items-center gap-3 w-full">
                          <div className="bg-blue-600 p-2 rounded-md shadow-md flex-shrink-0">
                            <CloudOff className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-base font-medium text-white">Үүлэн технологийн аюулгүй байдал</h3>
                            <p className="text-xs text-slate-400">Үүлэн дээрх мэдээллээ хамгаалах</p>
                          </div>
                          <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 pb-3 pt-0">
                        <div className="space-y-3">
                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-blue-500">
                            <h4 className="text-sm font-medium text-white mb-2">Үүлэн технологийн эрсдэлүүд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                { name: "Өгөгдөл алдагдах", desc: "Үүлэн үйлчилгээ үзүүлэгч руу нэвтрэх эрх алдагдах" },
                                {
                                  name: "Хандалтын хяналт",
                                  desc: "Өгөгдөлд хэн хандаж байгааг хянах боломж хязгаарлагдмал",
                                },
                                {
                                  name: "Үйлчилгээ тасалдах",
                                  desc: "Үйлчилгээ үзүүлэгчийн талд асуудал гарвал өгөгдөлд хандах боломжгүй болох",
                                },
                                {
                                  name: "Хуулийн зохицуулалт",
                                  desc: "Өгөгдөл хадгалагдаж буй улсын хууль, дүрмийн асуудал",
                                },
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <AlertTriangle className="h-3 w-3 text-blue-400 mt-0.5" />
                                  <div>
                                    <span className="font-medium">{item.name}:</span> {item.desc}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-green-500">
                            <h4 className="text-sm font-medium text-white mb-2">Хамгаалах аргууд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "Хүчтэй нууц үг, 2FA ашиглах",
                                "Чухал файлуудыг шифрлэх",
                                "Хандалтын эрхийг хязгаарлах",
                                "Олон үүлэн үйлчилгээ ашиглах (Multi-cloud)",
                                "Тогтмол нөөц хуулбар авах",
                                "Үүлэн үйлчилгээ үзүүлэгчийн аюулгүй байдлын тохиргоог шалгах",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-green-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            size="sm"
                            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                          >
                            <ExternalLink className="h-3 w-3" />
                            <span className="text-xs">Үүлэн сервис сонгох</span>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* DDoS Attacks */}
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="p-3 hover:no-underline group">
                        <div className="flex items-center gap-3 w-full">
                          <div className="bg-red-600 p-2 rounded-md shadow-md flex-shrink-0">
                            <ServerCrash className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-base font-medium text-white">DDoS халдлага</h3>
                            <p className="text-xs text-slate-400">Үйлчилгээ тасалдуулах халдлага</p>
                          </div>
                          <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 pb-3 pt-0">
                        <div className="space-y-3">
                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-red-500">
                            <h4 className="text-sm font-medium text-white mb-2">DDoS халдлагын төрлүүд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                { name: "Volume-based", desc: "Сүлжээний өргөн зурвасыг дүүргэх" },
                                { name: "Protocol-based", desc: "Сервер, файрволлын нөөцийг дуусгах" },
                                { name: "Application layer", desc: "Веб аппликэйшний тодорхой сул талд чиглэсэн" },
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <AlertTriangle className="h-3 w-3 text-red-400 mt-0.5" />
                                  <div>
                                    <span className="font-medium">{item.name}:</span> {item.desc}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-green-500">
                            <h4 className="text-sm font-medium text-white mb-2">Хамгаалах аргууд:</h4>
                            <ul className="space-y-2 pl-1">
                              {[
                                "DDoS хамгаалалтын үйлчилгээ авах (Cloudflare, AWS Shield)",
                                "Трафикийг шүүх",
                                "Нөөц серверүүд ашиглах",
                                "Bandwidth нөөц бэлтгэх",
                                "Мэдрэгч систем суурилуулах",
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-green-400 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            size="sm"
                            className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2"
                          >
                            <Download className="h-3 w-3" />
                            <span className="text-xs">DDoS халдлагын тайлан</span>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 bg-slate-800/80 border-t border-slate-700/50 mt-4">
        <p className="text-xs text-slate-400">Сүүлийн шинэчлэл: {new Date().toLocaleDateString("mn-MN")}</p>
        <Button
          variant="outline"
          size="sm"
          className="text-xs flex items-center gap-1 border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700"
        >
          <ChevronRight className="h-3 w-3" />
          <span>Бүгдийг үзэх</span>
        </Button>
      </div>
    </div>
  )
}

