"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Scale,
  FileText,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  Download,
  GavelIcon,
  FileWarning,
  Phone,
  Globe,
  Shield,
  BookOpen,
  ChevronRight,
  Info,
  HelpCircle,
} from "lucide-react"
import { CyberLawQuiz } from "@/components/quiz/cyber-law-quiz"

export default function CyberLawInfo() {
  const [activeTab, setActiveTab] = useState("laws")

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="relative p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg shadow-md flex-shrink-0">
            <Scale className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">Кибер хууль эрх зүй</h2>
              <Badge className="bg-indigo-600 hover:bg-indigo-700 text-white border-0">Шинэ</Badge>
            </div>
            <p className="text-xs text-slate-300">Монголын кибер гэмт хэрэг, хууль эрх зүйн орчин</p>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="px-4 pt-4">
        <div className="relative">
          <div className="flex overflow-x-auto space-x-1 pb-3 scrollbar-hide">
            <button
              onClick={() => setActiveTab("laws")}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "laws"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "bg-slate-800 text-slate-300 border border-slate-700"
              }`}
            >
              <GavelIcon className="w-4 h-4" />
              <span>Хууль</span>
            </button>
            <button
              onClick={() => setActiveTab("crimes")}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "crimes"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "bg-slate-800 text-slate-300 border border-slate-700"
              }`}
            >
              <FileWarning className="w-4 h-4" />
              <span>Гэмт хэрэг</span>
            </button>
            <button
              onClick={() => setActiveTab("resources")}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "resources"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "bg-slate-800 text-slate-300 border border-slate-700"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Туслалцаа</span>
            </button>
            <button
              onClick={() => setActiveTab("penalties")}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "penalties"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "bg-slate-800 text-slate-300 border border-slate-700"
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Хариуцлага</span>
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "quiz"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "bg-slate-800 text-slate-300 border border-slate-700"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Шалгалт</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "laws" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="p-3 hover:no-underline group">
                    <div className="flex items-center gap-3 w-full">
                      <div className="bg-indigo-600 p-2 rounded-md shadow-md flex-shrink-0">
                        <GavelIcon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-medium text-white">Үндсэн хууль тогтоомжууд</h3>
                        <p className="text-xs text-slate-400">Монгол Улсын кибер аюулгүй байдлын хууль</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 pt-0">
                    <div className="space-y-3">
                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-indigo-500">
                        <h4 className="text-sm font-medium text-white mb-2">Гол хууль тогтоомжууд:</h4>
                        <ul className="space-y-2 pl-1">
                          {[
                            {
                              title: "Кибер аюулгүй байдлын тухай хууль (2021)",
                              desc: "Монгол Улсын кибер орчны аюулгүй байдлыг хангах, кибер халдлагаас хамгаалах, кибер аюулгүй байдлын тогтолцоог бүрдүүлэхтэй холбоотой харилцааг зохицуулна.",
                            },
                            {
                              title: "Эрүүгийн хуулийн 26-р бүлэг (2015, 2020 оны нэмэлт өөрчлөлт)",
                              desc: "Кибер гэмт хэргийн төрлүүд, ял шийтгэлийг тодорхойлсон.",
                            },
                            {
                              title: "Мэдээллийн аюулгүй байдлын тухай хууль (2010)",
                              desc: "Төрийн байгууллагуудын мэдээллийн системийн аюулгүй байдлыг хангахтай холбоотой харилцааг зохицуулна.",
                            },
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                              <CheckCircle2 className="h-3 w-3 text-indigo-400 mt-0.5" />
                              <div>
                                <span className="font-medium">{item.title}</span>
                                <p className="mt-0.5 text-slate-400">{item.desc}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-purple-500">
                        <h4 className="text-sm font-medium text-white mb-2">Олон улсын гэрээ, конвенцууд:</h4>
                        <ul className="space-y-2 pl-1">
                          {[
                            {
                              title: "Будапештийн кибер гэмт хэргийн конвенц",
                              desc: "Монгол Улс 2017 онд нэгдэн орсон. Кибер гэмт хэрэгтэй тэмцэх, олон улсын хамтын ажиллагааг бэхжүүлэх зорилготой.",
                            },
                            {
                              title: "НҮБ-ын Кибер гэмт хэрэгтэй тэмцэх конвенц",
                              desc: "Олон улсын хамтын ажиллагааг бэхжүүлэх, кибер гэмт хэрэгтэй тэмцэх чадавхыг нэмэгдүүлэх.",
                            },
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                              <CheckCircle2 className="h-3 w-3 text-purple-400 mt-0.5" />
                              <div>
                                <span className="font-medium">{item.title}</span>
                                <p className="mt-0.5 text-slate-400">{item.desc}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-amber-500">
                        <h4 className="text-sm font-medium text-white flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-3 w-3 text-amber-400" />
                          Хуулийн өөрчлөлтүүд:
                        </h4>
                        <p className="text-slate-300 text-xs">
                          2023 оны 6-р сард Кибер аюулгүй байдлын тухай хуульд нэмэлт өөрчлөлт орж, кибер халдлагын
                          эсрэг арга хэмжээг чангатгаж, хариуцлагыг нэмэгдүүлсэн. Мөн Үндэсний кибер аюулгүй байдлын
                          төвийн эрх мэдлийг өргөжүүлсэн.
                        </p>
                      </div>

                      <Button
                        size="sm"
                        className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-2"
                      >
                        <Download className="h-3 w-3" />
                        <span className="text-xs">Хуулийн бүрэн эхийг татах</span>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="p-3 hover:no-underline group">
                    <div className="flex items-center gap-3 w-full">
                      <div className="bg-purple-600 p-2 rounded-md shadow-md flex-shrink-0">
                        <BookOpen className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-medium text-white">Хуулийн тайлбар, тодорхойлолт</h3>
                        <p className="text-xs text-slate-400">Хуулийн нэр томьёо, тайлбар</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 pt-0">
                    <div className="space-y-3">
                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-purple-500">
                        <h4 className="text-sm font-medium text-white mb-2">Үндсэн нэр томьёо:</h4>
                        <ul className="space-y-2 pl-1">
                          {[
                            {
                              title: "Кибер орчин",
                              desc: "Мэдээллийн технологийн дэд бүтэц, түүний хэрэглэгчид, мэдээллийн технологийн хэрэгсэл, програм хангамж, мэдээллийн сүлжээ, мэдээллийн систем, тоног төхөөрөмж, тэдгээрийн харилцан үйлчлэлийн цогц орчин.",
                            },
                            {
                              title: "Кибер халдлага",
                              desc: "Кибер орчинд хууль бусаар нэвтрэх, мэдээллийн технологийн дэд бүтцийн хэвийн үйл ажиллагааг алдагдуулах, мэдээллийн нууцлал, бүрэн бүтэн байдал, хүртээмжийг зөрчих зорилгоор хийгдэх үйлдэл.",
                            },
                            {
                              title: "Кибер аюулгүй байдал",
                              desc: "Кибер орчинд учирч болзошгүй аюул, эрсдэлээс хамгаалах, урьдчилан сэргийлэх, илрүүлэх, хариу арга хэмжээ авах замаар кибер орчны найдвартай, тасралтгүй, аюулгүй байдлыг хангах үйл ажиллагаа.",
                            },
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                              <Info className="h-3 w-3 text-purple-400 mt-0.5" />
                              <div>
                                <span className="font-medium">{item.title}:</span> {item.desc}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        size="sm"
                        className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span className="text-xs">Бүрэн тайлбарыг үзэх</span>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        )}

        {activeTab === "crimes" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="p-3 hover:no-underline group">
                    <div className="flex items-center gap-3 w-full">
                      <div className="bg-red-600 p-2 rounded-md shadow-md flex-shrink-0">
                        <FileWarning className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-medium text-white">Хувь хүнд чиглэсэн гэмт хэргүүд</h3>
                        <p className="text-xs text-slate-400">Иргэдэд чиглэсэн кибер гэмт хэрэг</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 pt-0">
                    <div className="space-y-3">
                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-red-500">
                        <h4 className="text-sm font-medium text-white mb-2">Түгээмэл гэмт хэргүүд:</h4>
                        <ul className="space-y-2 pl-1">
                          {[
                            {
                              title: "Онлайн залилан",
                              desc: "Хуурамч онлайн дэлгүүр, хуурамч ажлын байрны зар, хөрөнгө оруулалтын залилан гэх мэт. 2023 онд нийт мэдээлэгдсэн кибер гэмт хэргийн 45% нь онлайн залилан байжээ.",
                            },
                            {
                              title: "Хувийн мэдээлэл хулгайлах",
                              desc: "Нийгмийн сүлжээний аккаунт, банкны данс, иргэний үнэмлэхний мэдээлэл хулгайлах. 2023 онд 1200 гаруй иргэн хувийн мэдээлэл алдсан тухай мэдээлжээ.",
                            },
                            {
                              title: "Кибер дарамт",
                              desc: "Нийгмийн сүлжээгээр дарамтлах, айлган сүрдүүлэх, гүтгэх. Ялангуяа хүүхэд, залуучуудын дунд түгээмэл.",
                            },
                            {
                              title: "Хувийн зураг, бичлэг тараах",
                              desc: "Зөвшөөрөлгүйгээр хувийн зураг, бичлэгийг тараах, шантаажлах.",
                            },
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                              <AlertTriangle className="h-3 w-3 text-red-400 mt-0.5" />
                              <div>
                                <span className="font-medium">{item.title}:</span> {item.desc}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-green-500">
                        <h4 className="text-sm font-medium text-white mb-2">Хэрхэн өөрийгөө хамгаалах вэ:</h4>
                        <ul className="space-y-2 pl-1">
                          {[
                            "Сэжигтэй имэйл, мессеж, дуудлагад хариу өгөхгүй байх",
                            "Хувийн мэдээллээ (нууц үг, банкны мэдээлэл) хуваалцахгүй байх",
                            "Хоёр шатлалт баталгаажуулалт (2FA) идэвхжүүлэх",
                            "Сэжигтэй тохиолдолд цагдаагийн байгууллагад мэдэгдэх",
                            "Нийгмийн сүлжээний нууцлалын тохиргоог шалгах",
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
                        <span className="text-xs">Хамгаалалтын заавар татах</span>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="p-3 hover:no-underline group">
                    <div className="flex items-center gap-3 w-full">
                      <div className="bg-amber-600 p-2 rounded-md shadow-md flex-shrink-0">
                        <FileWarning className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-medium text-white">Байгууллагад чиглэсэн гэмт хэргүүд</h3>
                        <p className="text-xs text-slate-400">Байгууллагуудад чиглэсэн халдлага</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 pt-0">
                    <div className="space-y-3">
                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-amber-500">
                        <h4 className="text-sm font-medium text-white mb-2">Түгээмэл халдлагууд:</h4>
                        <ul className="space-y-2 pl-1">
                          {[
                            {
                              title: "Ransomware халдлага",
                              desc: "Файлуудыг түгжиж, мөнгө нэхэх. 2022-2023 онд Монголын 5 томоохон байгууллага ransomware халдлагад өртсөн.",
                            },
                            {
                              title: "Бизнес имэйл компромайз (BEC)",
                              desc: "Удирдах албан тушаалтны имэйлийг хуурамчаар үүсгэж, мөнгө шилжүүлэх хүсэлт явуулах.",
                            },
                            {
                              title: "DDoS халдлага",
                              desc: "Вэбсайт, онлайн үйлчилгээг түр зуур ажиллагаагүй болгох.",
                            },
                            {
                              title: "Дотоод халдлага",
                              desc: "Ажилтнуудын зүгээс хийгдэх мэдээлэл алдагдуулах, хулгайлах үйлдэл.",
                            },
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                              <AlertTriangle className="h-3 w-3 text-amber-400 mt-0.5" />
                              <div>
                                <span className="font-medium">{item.title}:</span> {item.desc}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-blue-500">
                        <h4 className="text-sm font-medium text-white mb-2">Статистик:</h4>
                        <p className="text-slate-300 text-xs">
                          Монгол Улсад 2023 онд 3500 гаруй кибер гэмт хэрэг бүртгэгдсэн нь 2022 оныхоос 27%-иар өссөн
                          үзүүлэлт юм. Нийт хохирлын хэмжээ 12 тэрбум төгрөгт хүрсэн байна.
                        </p>
                      </div>

                      <Button
                        size="sm"
                        className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span className="text-xs">Дэлгэрэнгүй статистик</span>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="p-3 hover:no-underline group">
                    <div className="flex items-center gap-3 w-full">
                      <div className="bg-blue-600 p-2 rounded-md shadow-md flex-shrink-0">
                        <HelpCircle className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-medium text-white">Шинэ төрлийн халдлагууд</h3>
                        <p className="text-xs text-slate-400">2023-2024 оны шинэ чиг хандлага</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 pt-0">
                    <div className="space-y-3">
                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-blue-500">
                        <h4 className="text-sm font-medium text-white mb-2">Шинэ төрлийн халдлагууд:</h4>
                        <ul className="space-y-2 pl-1">
                          {[
                            {
                              title: "AI-д суурилсан залилан",
                              desc: "Хиймэл оюун ухаан ашиглан хуурамч дуу, видео (deepfake) үүсгэж, хүмүүсийг залилах.",
                            },
                            {
                              title: "Крипто валютын залилан",
                              desc: "Хуурамч крипто валютын хөрөнгө оруулалтын төслүүд, NFT залилан.",
                            },
                            {
                              title: "Smishing (SMS phishing)",
                              desc: "Мессежээр хуурамч линк явуулж, хувийн мэдээлэл авах.",
                            },
                            {
                              title: "Хиймэл оюун ухааны аюулгүй байдал",
                              desc: "AI системүүдийн эмзэг байдлыг ашиглах халдлагууд.",
                            },
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                              <AlertTriangle className="h-3 w-3 text-blue-400 mt-0.5" />
                              <div>
                                <span className="font-medium">{item.title}:</span> {item.desc}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        size="sm"
                        className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span className="text-xs">Шинэ халдлагуудын тайлан</span>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        )}

        {activeTab === "resources" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="p-3 hover:no-underline group">
                    <div className="flex items-center gap-3 w-full">
                      <div className="bg-green-600 p-2 rounded-md shadow-md flex-shrink-0">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-medium text-white">Хууль зүйн туслалцаа авах газрууд</h3>
                        <p className="text-xs text-slate-400">Холбоо барих мэдээлэл</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 pt-0">
                    <div className="space-y-3">
                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-green-500">
                        <h4 className="text-sm font-medium text-white mb-2">Холбоо барих:</h4>
                        <ul className="space-y-2 pl-1">
                          {[
                            {
                              title: "Цагдаагийн Ерөнхий Газрын Кибер гэмт хэрэгтэй тэмцэх газар",
                              contact: "Утас: 126, 70121126",
                            },
                            {
                              title: "Үндэсний кибер аюулгүй байдлын төв",
                              contact: "Утас: 70110066",
                            },
                            {
                              title: "Монголын Хуульчдын Холбоо",
                              contact: "Утас: 77443010",
                            },
                            {
                              title: "Хүүхдийн тусламжийн утас",
                              contact: "Утас: 108",
                            },
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                              <CheckCircle2 className="h-3 w-3 text-green-400 mt-0.5" />
                              <div>
                                <span className="font-medium">{item.title}</span>
                                <p className="text-slate-400">{item.contact}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        size="sm"
                        className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                      >
                        <Phone className="h-3 w-3" />
                        <span className="text-xs">Бүх холбоо барих мэдээлэл</span>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="p-3 hover:no-underline group">
                    <div className="flex items-center gap-3 w-full">
                      <div className="bg-indigo-600 p-2 rounded-md shadow-md flex-shrink-0">
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-medium text-white">Хэрэгтэй материалууд</h3>
                        <p className="text-xs text-slate-400">Татаж авах боломжтой материалууд</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 pt-0">
                    <div className="space-y-3">
                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-indigo-500">
                        <h4 className="text-sm font-medium text-white mb-2">Татаж авах материалууд:</h4>
                        <ul className="space-y-2 pl-1">
                          {[
                            {
                              title: "Кибер гэмт хэргийн гомдол гаргах маягт",
                              desc: "PDF, 2 хуудас",
                            },
                            {
                              title: "Кибер аюулгүй байдлын тухай хууль",
                              desc: "PDF, 15 хуудас",
                            },
                            {
                              title: "Кибер гэмт хэргээс урьдчилан сэргийлэх гарын авлага",
                              desc: "Онлайн гарын авлага, Цагдаагийн Ерөнхий Газар",
                            },
                            {
                              title: "Хүүхдийн цахим аюулгүй байдлын гарын авлага",
                              desc: "PDF, 10 хуудас",
                            },
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                              <Download className="h-3 w-3 text-indigo-400 mt-0.5" />
                              <div>
                                <span className="font-medium">{item.title}</span>
                                <p className="text-slate-400">{item.desc}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        size="sm"
                        className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-2"
                      >
                        <Download className="h-3 w-3" />
                        <span className="text-xs">Бүх материалыг татах</span>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="p-3 hover:no-underline group">
                    <div className="flex items-center gap-3 w-full">
                      <div className="bg-blue-600 p-2 rounded-md shadow-md flex-shrink-0">
                        <Globe className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-medium text-white">Хэрэгтэй вэбсайтууд</h3>
                        <p className="text-xs text-slate-400">Мэдээлэл авах боломжтой сайтууд</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 pt-0">
                    <div className="space-y-3">
                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-blue-500">
                        <h4 className="text-sm font-medium text-white mb-2">Хэрэгтэй холбоосууд:</h4>
                        <ul className="space-y-2 pl-1">
                          {[
                            {
                              title: "Монголын Үндэсний CERT",
                              url: "https://cert.gov.mn",
                            },
                            {
                              title: "Цагдаагийн Ерөнхий Газар",
                              url: "https://police.gov.mn",
                            },
                            {
                              title: "Хууль зүйн мэдээллийн нэгдсэн систем",
                              url: "https://legalinfo.mn",
                            },
                            {
                              title: "Кибер аюулгүй байдлын зөвлөгөө",
                              url: "https://cybersecurity.mn",
                            },
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                              <ExternalLink className="h-3 w-3 text-blue-400 mt-0.5" />
                              <div>
                                <span className="font-medium">{item.title}</span>
                                <p className="text-blue-400">{item.url}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        size="sm"
                        className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                      >
                        <Globe className="h-3 w-3" />
                        <span className="text-xs">Бүх холбоосуудыг үзэх</span>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        )}

        {activeTab === "penalties" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="p-3 hover:no-underline group">
                    <div className="flex items-center gap-3 w-full">
                      <div className="bg-red-600 p-2 rounded-md shadow-md flex-shrink-0">
                        <Scale className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-medium text-white">Эрүүгийн хариуцлага</h3>
                        <p className="text-xs text-slate-400">Кибер гэмт хэргийн ял шийтгэл</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 pt-0">
                    <div className="space-y-3">
                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-red-500">
                        <h4 className="text-sm font-medium text-white mb-2">Эрүүгийн хариуцлага:</h4>
                        <ul className="space-y-2 pl-1">
                          {[
                            {
                              title: "Компьютерийн систем, сүлжээнд хууль бусаар нэвтрэх",
                              penalty: "Торгох, нийтэд тустай ажил хийлгэх, 6 сараас 3 жил хүртэл хорих ял",
                            },
                            {
                              title: "Компьютерийн вирус, хортой код тараах",
                              penalty: "Торгох, 1 жилээс 5 жил хүртэл хорих ял",
                            },
                            {
                              title: "Компьютерийн залилан",
                              penalty: "Торгох, 2 жилээс 8 жил хүртэл хорих ял",
                            },
                            {
                              title: "Хувийн нууцад халдах",
                              penalty: "Торгох, 1 жилээс 3 жил хүртэл хорих ял",
                            },
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                              <ChevronRight className="h-3 w-3 text-red-400 mt-0.5" />
                              <div>
                                <span className="font-medium">{item.title}</span>
                                <p className="text-slate-400">{item.penalty}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        size="sm"
                        className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span className="text-xs">Эрүүгийн хуулийг үзэх</span>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700/50">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="p-3 hover:no-underline group">
                    <div className="flex items-center gap-3 w-full">
                      <div className="bg-amber-600 p-2 rounded-md shadow-md flex-shrink-0">
                        <Scale className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-medium text-white">Иргэний хариуцлага</h3>
                        <p className="text-xs text-slate-400">Иргэний эрх зүйн хариуцлага</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 pt-0">
                    <div className="space-y-3">
                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-amber-500">
                        <h4 className="text-sm font-medium text-white mb-2">Иргэний хариуцлага:</h4>
                        <ul className="space-y-2 pl-1">
                          {[
                            "Учруулсан хохирлыг нөхөн төлөх",
                            "Нэр төр, алдар хүндийг сэргээх",
                            "Бусад иргэний хариуцлага",
                            "Хууль бусаар олсон орлогыг хураах",
                            "Зохиогчийн эрхийн зөрчлийн хариуцлага",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                              <ChevronRight className="h-3 w-3 text-amber-400 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-slate-700/40 rounded-lg p-3 border-l-2 border-green-500">
                        <h4 className="text-sm font-medium text-white flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-3 w-3 text-green-500" />
                          Чухал мэдээлэл:
                        </h4>
                        <p className="text-slate-300 text-xs">
                          Кибер гэмт хэргийн хохирогч болсон тохиолдолд нотлох баримтыг (дэлгэцийн зураг, имэйл, чат)
                          хадгалж, цагдаагийн байгууллагад нэн даруй мэдэгдэх шаардлагатай. Монгол Улсын Цагдаагийн
                          Ерөнхий Газрын Кибер гэмт хэрэгтэй тэмцэх газарт хандана.
                        </p>
                      </div>

                      <Button
                        size="sm"
                        className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center gap-2"
                      >
                        <Download className="h-3 w-3" />
                        <span className="text-xs">Гомдол гаргах маягт татах</span>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        )}

        {activeTab === "quiz" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <CyberLawQuiz />
          </motion.div>
        )}
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

