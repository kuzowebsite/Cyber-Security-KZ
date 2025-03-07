"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink, GraduationCap, Book, FileText, Globe, Code, Terminal, Shield, Award } from "lucide-react"

interface Resource {
  title: string
  description: string
  type: string
  level: "Beginner" | "Intermediate" | "Advanced"
  language: "Монгол" | "English"
  link: string
  tags: string[]
}

const resources: Resource[] = [
  {
    title: "Кибер аюулгүй байдлын үндэс",
    description: "Кибер аюулгүй байдлын үндсэн ойлголт, нэр томъёо, халдлагын төрлүүд",
    type: "course",
    level: "Beginner",
    language: "Монгол",
    link: "https://example.com/cyber-security-basics",
    tags: ["Үндэс", "Онол", "Нэр томъёо"],
  },
  {
    title: "Этик хакерын гарын авлага",
    description: "Этик хакер болох, CEH сертификат авах бэлтгэл",
    type: "book",
    level: "Intermediate",
    language: "Монгол",
    link: "https://example.com/ethical-hacking-guide",
    tags: ["CEH", "Этик хакер", "Практик"],
  },
  {
    title: "CompTIA Security+ Certification",
    description: "Complete course to prepare for Security+ certification",
    type: "course",
    level: "Intermediate",
    language: "English",
    link: "https://example.com/security-plus",
    tags: ["Security+", "Certification", "CompTIA"],
  },
  {
    title: "Penetration Testing Workshop",
    description: "Hands-on penetration testing and vulnerability assessment",
    type: "workshop",
    level: "Advanced",
    language: "English",
    link: "https://example.com/pentest-workshop",
    tags: ["Pentest", "Kali Linux", "Tools"],
  },
  {
    title: "Кибер аюулгүй байдлын лаборатори",
    description: "Виртуал орчинд дадлага хийх, халдлага, хамгаалалтыг турших",
    type: "lab",
    level: "Advanced",
    language: "Монгол",
    link: "https://example.com/cyber-lab",
    tags: ["Лаборатори", "Практик", "Дадлага"],
  },
  {
    title: "Web Application Security",
    description: "Learn to secure web applications and prevent common vulnerabilities",
    type: "course",
    level: "Intermediate",
    language: "English",
    link: "https://example.com/web-security",
    tags: ["Web", "OWASP", "AppSec"],
  },
  {
    title: "Криптограф, нууцлалын үндэс",
    description: "Криптографийн үндсэн ойлголт, алгоритмууд",
    type: "book",
    level: "Beginner",
    language: "Монгол",
    link: "https://example.com/crypto-basics",
    tags: ["Криптограф", "Нууцлал", "Алгоритм"],
  },
  {
    title: "OSCP Preparation Guide",
    description: "Comprehensive guide to prepare for OSCP certification",
    type: "guide",
    level: "Advanced",
    language: "English",
    link: "https://example.com/oscp-guide",
    tags: ["OSCP", "Certification", "Offensive Security"],
  },
]

export default function TrainingResources() {
  const [selectedLevel, setSelectedLevel] = useState<string>("all")
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all")
  const [selectedType, setSelectedType] = useState<string>("all")

  const filteredResources = resources.filter((resource) => {
    const levelMatch = selectedLevel === "all" || resource.level.toLowerCase() === selectedLevel
    const languageMatch = selectedLanguage === "all" || resource.language === selectedLanguage
    const typeMatch = selectedType === "all" || resource.type === selectedType
    return levelMatch && languageMatch && typeMatch
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "course":
        return <GraduationCap className="h-5 w-5 text-blue-500" />
      case "book":
        return <Book className="h-5 w-5 text-purple-500" />
      case "workshop":
        return <Terminal className="h-5 w-5 text-green-500" />
      case "lab":
        return <Code className="h-5 w-5 text-amber-500" />
      case "guide":
        return <FileText className="h-5 w-5 text-indigo-500" />
      default:
        return <Globe className="h-5 w-5 text-slate-500" />
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
      case "Intermediate":
        return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
      case "Advanced":
        return "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
      default:
        return ""
    }
  }

  return (
    <Card className="border shadow-lg bg-white dark:bg-slate-900">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Shield className="h-6 w-6 text-blue-500" />
          Сургалт, материалууд
        </CardTitle>
        <CardDescription>Кибер аюулгүй байдлын чиглэлээр өөрийгөө хөгжүүлэх материалууд</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <select
              className="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="all">Бүх түвшин</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            <select
              className="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="all">Бүх хэл</option>
              <option value="Монгол">Монгол</option>
              <option value="English">English</option>
            </select>

            <select
              className="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">Бүх төрөл</option>
              <option value="course">Курс</option>
              <option value="book">Ном</option>
              <option value="workshop">Воркшоп</option>
              <option value="lab">Лаборатори</option>
              <option value="guide">Гарын авлага</option>
            </select>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {filteredResources.map((resource, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg">{getTypeIcon(resource.type)}</div>
                    <div className="text-left">
                      <h3 className="font-medium">{resource.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className={getLevelColor(resource.level)}>
                          {resource.level}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                        >
                          {resource.language}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pl-14">
                    <p className="text-slate-600 dark:text-slate-300">{resource.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Үзэх
                      </a>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </CardContent>
      <CardFooter className="bg-slate-50 dark:bg-slate-800/50 border-t pt-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Эдгээр материалуудыг ашиглан өөрийгөө хөгжүүлж, мэргэжлийн түвшиндээ хүрээрэй.
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-amber-500" />
            <span className="text-xs text-amber-600 dark:text-amber-400">
              {filteredResources.length} материал олдлоо
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

