"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  AlertTriangle,
  Mail,
  ArrowRight,
  RotateCcw,
  Award,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  MessageSquare,
  Eye,
  EyeOff,
  ChevronRight,
  LightbulbIcon,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react"

type PhishingExample = {
  id: number
  type: "email" | "website" | "message"
  title: string
  content: string
  sender?: string
  recipient?: string
  url?: string
  isPhishing: boolean
  clues: string[]
}

const phishingExamples: PhishingExample[] = [
  {
    id: 1,
    type: "email",
    title: "Таны банкны данс түдгэлэгдлээ - яаралтай арга хэмжээ авна уу",
    content:
      "Эрхэм хэрэглэгч, Таны банкны данс сэжигтэй үйл ажиллагааны улмаас түр түдгэлэгдсэн байна. Дансаа нээлгэхийн тулд доорх линк дээр дарж мэдээллээ баталгаажуулна уу. Яаралтай арга хэмжээ авахгүй бол таны данс бүрмөсөн хаагдах болно.",
    sender: "security@khaan-bank.co.mn",
    recipient: "customer@mail.com",
    url: "https://khaan-bank-security.com/verify",
    isPhishing: true,
    clues: [
      "Имэйл хаяг албан ёсны домэйнтэй таарахгүй байна (khaan-bank.co.mn биш khaanbank.mn байх ёстой)",
      "Яаралтай арга хэмжээ авахыг шаардаж байна",
      "Линк нь банкны жинхэнэ вэбсайт биш",
      "Ерөнхий хаягаар эхэлсэн ('Эрхэм хэрэглэгч'), таны нэрийг ашиглаагүй",
    ],
  },
  {
    id: 2,
    type: "website",
    title: "Facebook нэвтрэх хуудас",
    content:
      "Фэйсбүүк рүү нэвтрэхийн тулд имэйл хаяг, нууц үгээ оруулна уу. Бид таны мэдээллийг хамгаалахын тулд шинэ аюулгүй байдлын шинэчлэл хийсэн.",
    url: "https://faceb00k-login.com/login",
    isPhishing: true,
    clues: [
      "URL хаяг буруу байна (faceb00k-login.com биш facebook.com байх ёстой)",
      "URL дахь '0' тоо нь 'o' үсгийг орлуулсан",
      "Шинэ аюулгүй байдлын шинэчлэлийн талаар тодорхойгүй мэдээлэл",
      "HTTPS холболт байгаа ч домэйн хуурамч",
    ],
  },
  {
    id: 3,
    type: "message",
    title: "Таны хүргэлт саатаж байна",
    content:
      "Таны багц хүргэлтийн явцад асуудал гарлаа. Хүргэлтийг үргэлжлүүлэхийн тулд 2000₮ төлбөр төлөх шаардлагатай. Төлбөр төлөх: https://mongolpost-delivery.info",
    sender: "+976 9988 7766",
    isPhishing: true,
    clues: [
      "Албан ёсны байгууллага мессежээр нэмэлт төлбөр шаардахгүй",
      "URL нь албан ёсны mongolpost.mn домэйн биш",
      "Яаралтай арга хэмжээ авахыг шаардаж байна",
      "Тодорхой мэдээлэл (захиалгын дугаар, хүргэлтийн хаяг) дурдаагүй",
    ],
  },
  {
    id: 4,
    type: "email",
    title: "Таны Khanbank картын сарын хуулга",
    content:
      "Эрхэм Б. Болд, Танд энэ сарын картын хуулгыг илгээж байна. Та хавсралтаас хуулгаа татаж авна уу. Асуулт байвал манай лавлах утас 1800-1917 руу холбогдоно уу.",
    sender: "statement@khanbank.mn",
    recipient: "bold.b@mail.com",
    isPhishing: false,
    clues: [
      "Имэйл хаяг албан ёсны домэйнтэй (khanbank.mn) таарч байна",
      "Таны нэрийг зөв ашигласан",
      "Яаралтай арга хэмжээ авахыг шаардаагүй",
      "Банкны жинхэнэ лавлах утасны дугаарыг өгсөн",
    ],
  },
  {
    id: 5,
    type: "website",
    title: "Amazon Prime нэвтрэх хуудас",
    content: "Amazon Prime-д тавтай морил. Бүртгэлдээ нэвтрэхийн тулд имэйл хаяг, нууц үгээ оруулна уу.",
    url: "https://www.amazon.com/login",
    isPhishing: false,
    clues: [
      "URL хаяг зөв байна (amazon.com)",
      "HTTPS холболттой",
      "Нэмэлт мэдээлэл шаардаагүй",
      "Яаралтай арга хэмжээ авахыг шаардаагүй",
    ],
  },
  {
    id: 6,
    type: "email",
    title: "Таны Google Drive-с файл хуваалцлаа",
    content: "Танд Google Drive-с файл хуваалцлаа. Үзэхийн тулд доорх товч дээр дарна уу.",
    sender: "drive-shares-noreply@google.com",
    recipient: "user@gmail.com",
    url: "https://drive.google.com/file/d/1a2b3c4d5e",
    isPhishing: false,
    clues: [
      "Имэйл хаяг албан ёсны Google домэйнтэй таарч байна",
      "URL нь жинхэнэ Google Drive домэйн",
      "Яаралтай арга хэмжээ авахыг шаардаагүй",
      "Хувийн мэдээлэл шаардаагүй",
    ],
  },
  {
    id: 7,
    type: "message",
    title: "Таны PayPal данснаас 1,500,000₮ гарлаа",
    content:
      "PayPal: Таны данснаас 1,500,000₮ гарсан байна. Хэрэв та энэ гүйлгээг хийгээгүй бол энд дарж цуцлана уу: http://paypal-secure.co/cancel",
    sender: "+1 (332) 456-7890",
    isPhishing: true,
    clues: [
      "URL нь албан ёсны paypal.com домэйн биш",
      "Айлган сүрдүүлсэн мессеж",
      "PayPal нь ийм төрлийн мессеж явуулдаггүй",
      "Холбоо барих утасны дугаар сэжигтэй",
    ],
  },
  {
    id: 8,
    type: "email",
    title: "Таны Microsoft аккаунтын нууц үгийн хугацаа дууслаа",
    content:
      "Эрхэм хэрэглэгч, Таны Microsoft аккаунтын нууц үгийн хугацаа дууслаа. Нууц үгээ шинэчлэхийн тулд доорх линк дээр дарна уу. Шинэчлэхгүй бол таны аккаунт хаагдах болно.",
    sender: "security@microsoft.365.com",
    recipient: "user@outlook.com",
    url: "https://microsoft-secure-login.com/reset",
    isPhishing: true,
    clues: [
      "Имэйл хаяг сэжигтэй (microsoft.365.com биш microsoft.com байх ёстой)",
      "URL нь Microsoft-ийн албан ёсны домэйн биш",
      "Яаралтай арга хэмжээ авахыг шаардаж байна",
      "Ерөнхий хаягаар эхэлсэн ('Эрхэм хэрэглэгч'), таны нэрийг ашиглаагүй",
    ],
  },
]

export default function PhishingDetectionGame() {
  const [examples, setExamples] = useState<PhishingExample[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [showClues, setShowClues] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Shuffle examples and set loading state
    const shuffled = [...phishingExamples].sort(() => Math.random() - 0.5)
    setExamples(shuffled)

    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const handleAnswer = (answer: boolean) => {
    if (showAnswer) return
    setSelectedAnswer(answer)

    // Auto-check answer when selected
    if (answer === examples[currentIndex].isPhishing) {
      setScore(score + 1)
    }
    setShowAnswer(true)
  }

  const handleNextExample = () => {
    if (currentIndex < examples.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedAnswer(null)
      setShowAnswer(false)
      setShowClues(false)
    } else {
      setGameCompleted(true)
    }
  }

  const resetGame = () => {
    setIsLoading(true)
    const shuffled = [...phishingExamples].sort(() => Math.random() - 0.5)
    setExamples(shuffled)
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowAnswer(false)
    setScore(0)
    setGameCompleted(false)
    setShowClues(false)

    setTimeout(() => {
      setIsLoading(false)
    }, 800)
  }

  const getScoreMessage = () => {
    const percentage = (score / examples.length) * 100
    if (percentage >= 90) return "Гайхалтай! Та фишинг халдлагыг маш сайн таньдаг байна!"
    if (percentage >= 70) return "Сайн байна! Та ихэнх фишинг халдлагыг таньж чаддаг байна."
    if (percentage >= 50) return "Дунд зэрэг. Та фишинг халдлагыг таних чадвараа сайжруулах хэрэгтэй."
    return "Анхаарал хандуулах хэрэгтэй. Та фишинг халдлагыг таних чадвараа сайжруулах шаардлагатай байна."
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="h-5 w-5" />
      case "website":
        return <ExternalLink className="h-5 w-5" />
      case "message":
        return <MessageSquare className="h-5 w-5" />
      default:
        return <AlertTriangle className="h-5 w-5" />
    }
  }

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-950 rounded-xl overflow-hidden shadow-md">
        <div className="flex flex-col items-center justify-center h-[400px]">
          <div className="w-12 h-12 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Жишээнүүдийг ачааллаж байна...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-950 rounded-xl overflow-hidden shadow-md min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Existing content div - add flex-1 to push footer down */}
      <div className="flex-1">
        {!gameCompleted ? (
          <div>
            {/* Header with progress */}
            <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {currentIndex + 1}/{examples.length}
                  </span>
                  <Progress
                    value={(currentIndex / examples.length) * 100}
                    className="w-24 h-1.5 bg-gray-200 dark:bg-gray-800"
                  />
                </div>
                <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800 font-medium">
                  {score}/{currentIndex + (showAnswer ? 1 : 0)}
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Example card */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className={`p-2 rounded-full ${
                      examples[currentIndex].type === "email"
                        ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : examples[currentIndex].type === "website"
                          ? "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                          : "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                    }`}
                  >
                    {getTypeIcon(examples[currentIndex].type)}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {examples[currentIndex].type === "email"
                        ? "Имэйл"
                        : examples[currentIndex].type === "website"
                          ? "Вэбсайт"
                          : "Мессеж"}
                    </h3>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 mb-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                    {examples[currentIndex].title}
                  </h3>

                  {/* Metadata */}
                  {examples[currentIndex].type === "email" && (
                    <div className="grid gap-1 text-sm mb-3">
                      <div className="text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Илгээгч:</span> {examples[currentIndex].sender}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Хүлээн авагч:</span> {examples[currentIndex].recipient}
                      </div>
                    </div>
                  )}

                  {examples[currentIndex].type === "website" && (
                    <div className="text-sm mb-3">
                      <div className="text-gray-500 dark:text-gray-400">
                        <span className="font-medium">URL:</span> {examples[currentIndex].url}
                      </div>
                    </div>
                  )}

                  {examples[currentIndex].type === "message" && (
                    <div className="text-sm mb-3">
                      <div className="text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Илгээгч:</span> {examples[currentIndex].sender}
                      </div>
                    </div>
                  )}

                  {/* Main Content */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    <p className="text-sm leading-relaxed">{examples[currentIndex].content}</p>
                    {examples[currentIndex].url && examples[currentIndex].type !== "website" && (
                      <div className="mt-2 text-sm text-blue-500 break-all">{examples[currentIndex].url}</div>
                    )}
                  </div>
                </div>

                {/* Clues Toggle */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowClues(!showClues)}
                  className="w-full mb-4 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                >
                  {showClues ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                  {showClues ? "Сэжүүр нуух" : "Сэжүүр харах"}
                </Button>

                {/* Clues */}
                <AnimatePresence>
                  {showClues && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl p-4 border border-blue-100 dark:border-blue-800/30"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <LightbulbIcon className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Анхаарах зүйлс:</span>
                      </div>
                      <ul className="space-y-2">
                        {examples[currentIndex].clues.map((clue, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-blue-700 dark:text-blue-300">
                            <ChevronRight className="h-3 w-3 mt-0.5 flex-shrink-0 text-blue-500" />
                            <span>{clue}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Answer Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    className={`py-6 ${
                      selectedAnswer === true
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
                    }`}
                    onClick={() => handleAnswer(true)}
                    disabled={showAnswer}
                  >
                    <ShieldAlert className="h-5 w-5 mr-0" />
                    <span>Фишинг халдлага</span>
                  </Button>
                  <Button
                    className={`py-6 ${
                      selectedAnswer === false
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
                    }`}
                    onClick={() => handleAnswer(false)}
                    disabled={showAnswer}
                  >
                    <ShieldCheck className="h-5 w-5 mr-0" />
                    <span>Найдвартай</span>
                  </Button>
                </div>

                {/* Answer Feedback */}
                <AnimatePresence>
                  {showAnswer && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 space-y-4"
                    >
                      <div
                        className={`rounded-xl p-4 ${
                          examples[currentIndex].isPhishing
                            ? "bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-800/30"
                            : "bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/30"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {examples[currentIndex].isPhishing ? (
                            <ShieldAlert className="h-5 w-5 text-red-500" />
                          ) : (
                            <ShieldCheck className="h-5 w-5 text-green-500" />
                          )}
                          <span
                            className={`font-medium ${
                              examples[currentIndex].isPhishing
                                ? "text-red-700 dark:text-red-400"
                                : "text-green-700 dark:text-green-400"
                            }`}
                          >
                            {examples[currentIndex].isPhishing ? "Энэ бол фишинг халдлага!" : "Энэ бол найдвартай!"}
                          </span>
                        </div>

                        <div className="mt-3 flex items-center gap-2">
                          {selectedAnswer === examples[currentIndex].isPhishing ? (
                            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                              <ThumbsUp className="h-4 w-4" />
                              <span className="text-sm">Зөв таалаа!</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                              <ThumbsDown className="h-4 w-4" />
                              <span className="text-sm">Буруу таалаа!</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <Button onClick={handleNextExample} className="w-full py-6">
                        {currentIndex < examples.length - 1 ? (
                          <>
                            Дараагийн жишээ
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          "Дуусгах"
                        )}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Award className="h-16 w-16 text-yellow-500" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Тоглоом дууслаа!</h3>

              <div className="grid grid-cols-2 gap-4 w-full max-w-xs mb-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Оноо</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {score}/{examples.length}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Хувь</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {Math.round((score / examples.length) * 100)}%
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-4 border border-blue-100 dark:border-blue-800/30 mb-6">
                <p className="text-blue-700 dark:text-blue-300">{getScoreMessage()}</p>
              </div>

              <Button onClick={resetGame} className="py-6 px-8">
                <RotateCcw className="mr-2 h-4 w-4" />
                Дахин эхлүүлэх
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer - will now stay at bottom */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-slate-800/80 backdrop-blur-sm border-t border-slate-700/50 text-center sm:text-left gap-2">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
          <p className="text-xs text-slate-400">Сүүлийн шинэчлэл: {new Date().toLocaleDateString("mn-MN")}</p>
        </div>
        <p className="text-xs text-slate-400">Фишинг халдлагыг таних нь кибер аюулгүй байдлын чухал ур чадвар юм</p>
      </div>
    </div>
  )
}

