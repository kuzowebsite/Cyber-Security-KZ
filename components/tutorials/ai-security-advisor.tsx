"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bot,
  Send,
  User,
  Shield,
  AlertTriangle,
  Info,
  CheckCircle,
  Loader2,
  Sparkles,
  Lock,
  RefreshCw,
} from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface Recommendation {
  id: string
  title: string
  description: string
  severity: "critical" | "high" | "medium" | "low"
  category: string
}

const sampleRecommendations: Recommendation[] = [
  {
    id: "rec1",
    title: "Хүчтэй нууц үг ашиглах",
    description:
      "Таны нууц үг хамгийн багадаа 12 тэмдэгт урттай, тусгай тэмдэгт, том, жижиг үсэг, тоо агуулсан байх хэрэгтэй.",
    severity: "high",
    category: "password",
  },
  {
    id: "rec2",
    title: "Хоёр үе шаттай баталгаажуулалт идэвхжүүлэх",
    description: "Бүх чухал бүртгэлдээ хоёр үе шаттай баталгаажуулалт (2FA) идэвхжүүлж, нэмэлт хамгаалалт үүсгэнэ.",
    severity: "critical",
    category: "authentication",
  },
  {
    id: "rec3",
    title: "Програм хангамжаа шинэчлэх",
    description:
      "Үйлдлийн систем болон бусад програм хангамжаа байнга шинэчилж байх нь чухал. Автомат шинэчлэлтийг идэвхжүүлнэ үү.",
    severity: "medium",
    category: "software",
  },
  {
    id: "rec4",
    title: "Нөөц хуулбар үүсгэх",
    description: "Чухал файл, өгөгдлөө тогтмол нөөцлөж, гадаад төхөөрөмж эсвэл үүлэн үйлчилгээнд хадгалах.",
    severity: "high",
    category: "backup",
  },
]

const sampleResponses: { [key: string]: string } = {
  password:
    "Хүчтэй нууц үг нь таны цахим аюулгүй байдлын үндэс юм. Дараах зөвлөмжүүдийг дагаж мөрдөөрэй:\n\n1. Хамгийн багадаа 12 тэмдэгт урттай байх\n2. Том, жижиг үсэг, тоо, тусгай тэмдэгт хослуулах\n3. Өөр өөр бүртгэлд өөр өөр нууц үг ашиглах\n4. Нууц үг хадгалагч програм ашиглах (LastPass, 1Password, Bitwarden гэх мэт)\n5. Нууц үгээ 3-6 сар тутамд солих\n\nНууц үгээ бусадтай хуваалцахгүй байх, цаасан дээр бичихгүй байх нь чухал.",
  phishing:
    "Фишинг халдлага нь хакерууд таныг хуурамч вэбсайт, имэйл ашиглан хувийн мэдээлэл, нууц үгийг тань авахыг оролддог арга юм. Өөрийгөө хамгаалах арга:\n\n1. Сэжигтэй имэйл, мессежийг нээхгүй байх\n2. URL хаягийг шалгах, https:// гэсэн протоколтой эсэхийг анхаарах\n3. Банк, төрийн байгууллагын нэрээр ирсэн имэйлд онцгой анхаарал хандуулах\n4. Хувийн мэдээлэл, нууц үгээ оруулахаас өмнө вэбсайтын жинхэнэ эсэхийг шалгах\n5. Хэрэв эргэлзэж байвал, тухайн байгууллагатай шууд холбогдож лавлах",
  malware:
    "Хортой програм хангамж (malware) нь таны төхөөрөмжид халдаж, мэдээлэл хулгайлах, устгах, эсвэл хяналтдаа авах зорилготой. Хамгаалах арга:\n\n1. Найдвартай антивирус програм суулгаж, байнга шинэчлэх\n2. Үйлдлийн систем, програм хангамжаа шинэчилж байх\n3. Итгэлгүй эх сурвалжаас програм татаж суулгахгүй байх\n4. Сэжигтэй холбоос, файлыг нээхгүй байх\n5. Флаш диск зэрэг гадаад төхөөрөмжийг анхааралтай ашиглах\n6. Тогтмол нөөц хуулбар үүсгэх",
  vpn: "VPN (Virtual Private Network) нь таны интернэт холболтыг шифрлэж, IP хаягийг нууцалдаг. VPN ашиглах давуу талууд:\n\n1. Таны интернэт үйл ажиллагааг нууцалдаг\n2. Олон нийтийн WiFi сүлжээнд аюулгүй холбогдох боломжтой\n3. Байршлаас хамаарсан хязгаарлалтыг тойрч гарах\n4. Таны өгөгдлийг шифрлэж, хакераас хамгаалдаг\n\nНайдвартай, төлбөртэй VPN үйлчилгээ сонгохыг зөвлөж байна. Үнэгүй VPN-үүд нь таны мэдээллийг цуглуулж, борлуулах эрсдэлтэй.",
}

// Add a greetings vocabulary object after the sampleResponses object
const greetingPhrases: { [key: string]: string } = {
  // Mongolian greetings
  "сайн уу": "Сайн байна уу! Би таны кибер аюулгүй байдлын зөвлөх AI туслах байна. Танд хэрхэн туслах вэ?",
    "сайн байна уу": "Сайн байна уу! Би таны кибер аюулгүй байдлын зөвлөх AI туслах байна. Танд хэрхэн туслах вэ?",
    сайн: "Сайн байна уу! Би таны кибер аюулгүй байдлын зөвлөх AI туслах байна. Танд хэрхэн туслах вэ?",
    "юу байна": "Сайн байна, танд хэрхэн туслах вэ? Кибер аюулгүй байдлын талаар асуулт байна уу?",
    "юу байна даа": "Сайн байна, танд хэрхэн туслах вэ? Кибер аюулгүй байдлын талаар асуулт байна уу?",
    мэнд: "Мэндчилгээ! Би таны кибер аюулгүй байдлын зөвлөх AI туслах байна. Танд хэрхэн туслах вэ?",
    мэндээ: "Мэндчилгээ! Би таны кибер аюулгүй байдлын зөвлөх AI туслах байна. Танд хэрхэн туслах вэ?",
    "өглөөний мэнд": "Өглөөний мэнд! Би таны кибер аюулгүй байдлын зөвлөх AI туслах байна. Танд хэрхэн туслах вэ?",
    "орой сайн": "Орой сайн! Би таны кибер аюулгүй байдлын зөвлөх AI туслах байна. Танд хэрхэн туслах вэ?",
    "сайхан өдөр":
      "Танд сайхан өдрийн мэнд хүргэе! Би таны кибер аюулгүй байдлын зөвлөх AI туслах байна. Танд хэрхэн туслах вэ?",
    "байна уу": "Сайн байна уу! Би таны кибер аюулгүй байдлын зөвлөх AI туслах байна. Танд хэрхэн туслах вэ?",
    "сонсож байна уу": "Тийм, би сонсож байна! Танд кибер аюулгүй байдлын талаар ямар асуулт байна?",
    туслаач: "Тиймээ, би танд туслахад бэлэн байна! Кибер аюулгүй байдлын талаар ямар асуулт байна?",
    "тусална уу": "Тиймээ, би танд туслахад бэлэн байна! Кибер аюулгүй байдлын талаар ямар асуулт байна?",
    "тусалж чадах уу": "Тиймээ, би танд туслахад бэлэн байна! Кибер аюулгүй байдлын талаар ямар асуулт байна?",

    // Common Mongolian questions and phrases
    "чи юу хийж чадах вэ":
      "Би танд кибер аюулгүй байдлын талаар зөвлөгөө өгч чадна. Нууц үг, фишинг халдлага, хортой програм, VPN болон бусад аюулгүй байдлын асуудлаар асууж болно.",
    "чи хэн бэ":
      "Би таны кибер аюулгүй байдлын зөвлөх AI туслах байна. Надад кибер аюулгүй байдлын талаар асуулт асууж, зөвлөгөө авч болно.",
    "танилцахад таатай байна": "Танилцахад таатай байна! Би танд кибер аюулгүй байдлын талаар туслахад бэлэн.",
    баярлалаа: "Таатай байна! Өөр ямар нэг асуулт байвал надаас асууж болно.",
    гайтай: "Таатай байна! Өөр ямар нэг асуулт байвал надаас асууж болно.",
    баяртай: "Баяртай! Дараа дахин уулзах болно, аюулгүй байгаарай!",
    "дараа уулзъя": "Баяртай! Дараа дахин уулзах болно, аюулгүй байгаарай!",

    // Security-related Mongolian phrases
    "надад асуулт байна": "Тиймээ, танд ямар асуулт байна вэ? Би кибер аюулгүй байдлын талаар хариулахад бэлэн байна.",
    "аюулгүй байдал": "Кибер аюулгүй байдал нь маш чухал асуудал юм. Танд ямар асуулт байна вэ?",
    "надад тусламж хэрэгтэй": "Би танд туслахад бэлэн байна. Танд ямар тусламж хэрэгтэй вэ?",
    "яаж хамгаалах вэ":
      "Өөрийгөө цахим халдлагаас хамгаалах олон арга байдаг. Танд ямар төрлийн хамгаалалтын талаар мэдэхийг хүсэж байна вэ? Жишээлбэл: нууц үг, фишинг, хортой програм, эсвэл VPN?",
    "ямар аюул байдаг вэ":
      "Цахим орчинд олон төрлийн аюул занал байдаг. Үүнд фишинг халдлага, хортой програм, нууц үг хулгайлах, DDoS халдлага болон бусад. Аль нэг талаар илүү дэлгэрэнгүй мэдээлэл авахыг хүсэж байна уу?",

    // English greetings (keeping these for completeness)
    hi: "Hello! I'm your AI cybersecurity advisor. How can I help you today?",
    hello: "Hello! I'm your AI cybersecurity advisor. How can I help you today?",
    hey: "Hey there! I'm your AI cybersecurity advisor. How can I help you today?",
    "good morning": "Good morning! I'm your AI cybersecurity advisor. How can I help you today?",
    "good afternoon": "Good afternoon! I'm your AI cybersecurity advisor. How can I help you today?",
    "good evening": "Good evening! I'm your AI cybersecurity advisor. How can I help you today?",
    greetings: "Greetings! I'm your AI cybersecurity advisor. How can I help you today?",
    howdy: "Howdy! I'm your AI cybersecurity advisor. How can I help you today?",
    "how are you":
      "I'm functioning well, thank you for asking! How can I help with your cybersecurity questions today?",
    thanks: "You're welcome! If you have any more questions about cybersecurity, feel free to ask.",
    "thank you": "You're welcome! If you have any more questions about cybersecurity, feel free to ask.",
    goodbye: "Goodbye! Stay safe online!",
    bye: "Goodbye! Stay safe online!",
    help: "I'd be happy to help! What cybersecurity questions do you have?",
    "what can you do":
      "I can provide advice on cybersecurity topics such as password security, phishing protection, malware prevention, VPNs, and more. What would you like to know about?",
}

export default function AiSecurityAdvisor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Сайн байна уу! Би таны кибер аюулгүй байдлын зөвлөх AI туслах байна. Та надаас кибер аюулгүй байдлын талаар асуулт асууж, зөвлөгөө авч болно. Жишээ нь: нууц үгний аюулгүй байдал, фишинг халдлагаас хамгаалах, хортой програм хангамж, VPN гэх мэт.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Modify the handleSend function to check for greetings
  const handleSend = () => {
    if (input.trim() === "") return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let responseContent = "Уучлаарай, таны асуултыг ойлгосонгүй. Та өөр асуулт асууж үзнэ үү."

      // Check for greetings first
      const lowerInput = input.toLowerCase().trim()

      // Check if the input is a greeting
      for (const phrase in greetingPhrases) {
        if (lowerInput === phrase || lowerInput.includes(phrase)) {
          responseContent = greetingPhrases[phrase]
          break
        }
      }

      // If not a greeting, check for security topics
      if (responseContent === "Уучлаарай, таны асуултыг ойлгосонгүй. Та өөр асуулт асууж үзнэ үү.") {
        if (lowerInput.includes("нууц үг") || lowerInput.includes("password")) {
          responseContent = sampleResponses["password"]
        } else if (lowerInput.includes("фишинг") || lowerInput.includes("phishing") || lowerInput.includes("хуурамч")) {
          responseContent = sampleResponses["phishing"]
        } else if (lowerInput.includes("хортой") || lowerInput.includes("вирус") || lowerInput.includes("malware")) {
          responseContent = sampleResponses["malware"]
        } else if (lowerInput.includes("vpn") || lowerInput.includes("нууцлал")) {
          responseContent = sampleResponses["vpn"]
        }
      }

      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: responseContent,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800"
      case "high":
        return "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800"
      case "medium":
        return "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800"
      case "low":
        return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
      default:
        return ""
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "high":
        return <AlertTriangle className="h-4 w-4 text-orange-500" />
      case "medium":
        return <Info className="h-4 w-4 text-amber-500" />
      case "low":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  return (
    <Card className="border shadow-lg bg-white dark:bg-slate-900">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Bot className="h-6 w-6 text-blue-500" />
          AI Кибер аюулгүй байдлын зөвлөх
        </CardTitle>
        <CardDescription>Кибер аюулгүй байдлын талаар асуулт асууж, зөвлөгөө авах</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="chat">
          <TabsList className="w-full rounded-none border-b">
            <TabsTrigger value="chat" className="flex-1">
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4" />
                <span>Чат</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="flex-1">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Зөвлөмжүүд</span>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="m-0">
            <div className="flex flex-col h-[400px]">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                      <Avatar
                        className={`h-8 w-8 ${message.role === "assistant" ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-600"}`}
                      >
                        <AvatarFallback>
                          {message.role === "assistant" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div
                          className={`rounded-lg p-3 text-sm ${
                            message.role === "assistant"
                              ? "bg-blue-50 dark:bg-blue-900/20 text-slate-700 dark:text-slate-200"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                          }`}
                        >
                          <div className="whitespace-pre-wrap">{message.content}</div>
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex gap-3 max-w-[80%]">
                      <Avatar className="h-8 w-8 bg-blue-100 text-blue-600">
                        <AvatarFallback>
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="rounded-lg p-3 text-sm bg-blue-50 dark:bg-blue-900/20 text-slate-700 dark:text-slate-200 flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                        <span>Хариулж байна...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Асуултаа бичнэ үү..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="min-h-[60px] resize-none"
                  />
                  <Button onClick={handleSend} disabled={isLoading || input.trim() === ""} className="shrink-0">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Илгээх</span>
                  </Button>
                </div>
                <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  <span>AI-д суурилсан зөвлөгөө. Чухал асуудалд мэргэжилтэнтэй зөвлөлдөнө үү.</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="m-0">
            <div className="p-4 space-y-4 h-[400px] overflow-y-auto">
              <div className="grid gap-4">
                {sampleRecommendations.map((rec) => (
                  <div
                    key={rec.id}
                    className="border rounded-lg p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-full ${
                          rec.severity === "critical"
                            ? "bg-red-100 dark:bg-red-900/30"
                            : rec.severity === "high"
                              ? "bg-orange-100 dark:bg-orange-900/30"
                              : rec.severity === "medium"
                                ? "bg-amber-100 dark:bg-amber-900/30"
                                : "bg-green-100 dark:bg-green-900/30"
                        }`}
                      >
                        {getSeverityIcon(rec.severity)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{rec.title}</h3>
                          <Badge variant="outline" className={getSeverityColor(rec.severity)}>
                            {rec.severity === "critical" && "Маш чухал"}
                            {rec.severity === "high" && "Чухал"}
                            {rec.severity === "medium" && "Дунд зэрэг"}
                            {rec.severity === "low" && "Бага"}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{rec.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="bg-slate-50 dark:bg-slate-800/50 border-t pt-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Lock className="h-3 w-3" />
            <span>Таны мэдээлэл нууцлагдсан байдаг</span>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Шинэчлэх
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

