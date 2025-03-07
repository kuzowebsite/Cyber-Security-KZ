"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw, Award, Brain } from "lucide-react"

type Question = {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "Фишинг халдлагыг хэрхэн таних вэ?",
    options: [
      "Имэйлийн хаяг албан ёсны домэйнтэй таарахгүй байх",
      "Имэйл нь таны хувийн мэдээллийг шаардах",
      "Имэйл нь яаралтай арга хэмжээ авахыг шаардах",
      "Дээрх бүгд зөв",
    ],
    correctAnswer: 3,
    explanation:
      "Фишинг имэйлүүд нь ихэвчлэн хуурамч домэйн хаягтай байх, хувийн мэдээлэл шаардах, яаралтай арга хэмжээ авахыг шаардах зэрэг шинж тэмдгүүдтэй байдаг.",
  },
  {
    id: 2,
    question: "Ransomware гэж юу вэ?",
    options: [
      "Таны компьютерийн хурдыг удаашруулдаг вирус",
      "Таны файлуудыг түгжиж, мөнгө нэхдэг хортой програм",
      "Таны интернэт хөтчийг хакердаг програм",
      "Таны нууц үгийг хулгайлдаг програм",
    ],
    correctAnswer: 1,
    explanation:
      "Ransomware нь таны файлуудыг шифрлэж түгжээд, тэдгээрийг буцааж нээхийн тулд мөнгө төлөхийг шаарддаг хортой програм юм.",
  },
  {
    id: 3,
    question: "Хоёр шатлалт баталгаажуулалт (2FA) гэж юу вэ?",
    options: [
      "Нэг аккаунтад хоёр нууц үг ашиглах",
      "Нэвтрэхийн тулд хоёр өөр төхөөрөмж ашиглах",
      "Нэвтрэхийн тулд нууц үгээс гадна нэмэлт баталгаажуулалт шаардах",
      "Хоёр өөр имэйл хаягаар нэвтрэх",
    ],
    correctAnswer: 2,
    explanation:
      "Хоёр шатлалт баталгаажуулалт (2FA) нь нууц үгээс гадна өөр нэг хүчин зүйл (утсан дээрх код, хурууны хээ гэх мэт) ашиглан нэвтрэлтийг баталгаажуулдаг аюулгүй байдлын арга юм.",
  },
  {
    id: 4,
    question: "VPN ашиглах үндсэн зорилго юу вэ?",
    options: [
      "Интернэт хурдыг нэмэгдүүлэх",
      "Таны IP хаягийг нуух, холболтыг шифрлэх",
      "Вирусаас хамгаалах",
      "Нууц үгийг хадгалах",
    ],
    correctAnswer: 1,
    explanation:
      "VPN (Virtual Private Network) нь таны IP хаягийг нуух, интернэт холболтыг шифрлэх замаар таны онлайн үйл ажиллагааг хамгаалдаг.",
  },
  {
    id: 5,
    question: "Дараах аль нь хүчтэй нууц үг вэ?",
    options: ["password123", "Password", "P@ssw0rd!2023", "qwerty"],
    correctAnswer: 2,
    explanation:
      "Хүчтэй нууц үг нь том, жижиг үсэг, тоо, тусгай тэмдэгт агуулсан, урт байх ёстой. 'P@ssw0rd!2023' нь эдгээр шаардлагыг хангаж байна.",
  },
  {
    id: 6,
    question: "Социал инженеринг гэж юу вэ?",
    options: [
      "Нийгмийн сүлжээний аппуудыг хөгжүүлэх",
      "Хүмүүсийг мэхлэн мэдээлэл өгөх, үйлдэл хийхэд хүргэх сэтгэл зүйн арга",
      "Нийгмийн сүлжээн дэх хуурамч профайл үүсгэх",
      "Компьютерийн сүлжээг засварлах",
    ],
    correctAnswer: 1,
    explanation:
      "Социал инженеринг нь техникийн арга биш, харин хүмүүсийг сэтгэл зүйн аргаар мэхлэн нууц мэдээлэл өгөх, аюултай үйлдэл хийхэд хүргэх арга юм.",
  },
  {
    id: 7,
    question: "Malware-аас хамгаалах хамгийн сайн арга юу вэ?",
    options: [
      "Зөвхөн найдвартай эх сурвалжаас програм татаж суулгах",
      "Антивирус програм суулгах",
      "Үйлдлийн системээ шинэчлэх",
      "Дээрх бүгд зөв",
    ],
    correctAnswer: 3,
    explanation:
      "Malware-аас хамгаалахын тулд найдвартай эх сурвалжаас програм татах, антивирус ашиглах, үйлдлийн системээ шинэчлэх гэх мэт олон давхар хамгаалалт хэрэгтэй.",
  },
  {
    id: 8,
    question: "Нууц үгийг хамгийн аюулгүй хадгалах арга юу вэ?",
    options: [
      "Цаасан дээр бичиж хадгалах",
      "Утасны тэмдэглэлд хадгалах",
      "Нууц үг хадгалагч програм (Password Manager) ашиглах",
      "Имэйлдээ илгээж хадгалах",
    ],
    correctAnswer: 2,
    explanation:
      "Нууц үг хадгалагч програм (LastPass, 1Password, Bitwarden гэх мэт) нь таны бүх нууц үгийг шифрлэж, ганц мастер нууц үгээр хамгаалдаг тул хамгийн аюулгүй арга юм.",
  },
]

export default function SecurityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleOptionSelect = (index: number) => {
    if (showAnswer) return
    setSelectedOption(index)
  }

  const handleCheckAnswer = () => {
    if (selectedOption === null) return
    setShowAnswer(true)
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setShowAnswer(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setShowAnswer(false)
    setScore(0)
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 90) return "Гайхалтай! Та кибер аюулгүй байдлын мэргэжилтэн шиг байна!"
    if (percentage >= 70) return "Сайн байна! Та кибер аюулгүй байдлын талаар сайн мэдлэгтэй байна."
    if (percentage >= 50) return "Дунд зэрэг. Та кибер аюулгүй байдлын талаар суралцах хэрэгтэй байна."
    return "Анхаарал хандуулах хэрэгтэй. Та кибер аюулгүй байдлын талаар илүү ихийг суралцах хэрэгтэй."
  }

  return (
    <Card className="border shadow-lg bg-white dark:bg-slate-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-500" />
          Кибер аюулгүй байдлын тест
        </CardTitle>
        <CardDescription>Та кибер аюулгүй байдлын талаар хэр мэдлэгтэй вэ?</CardDescription>
      </CardHeader>
      <CardContent>
        {!quizCompleted ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Badge
                variant="outline"
                className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
              >
                Асуулт {currentQuestion + 1}/{questions.length}
              </Badge>
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
              >
                Оноо: {score}/{currentQuestion + (showAnswer ? 1 : 0)}
              </Badge>
            </div>

            <Progress
              value={(currentQuestion / questions.length) * 100}
              className="bg-purple-100 dark:bg-purple-900/30"
            />

            <div className="py-2">
              <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h3>

              <RadioGroup value={selectedOption?.toString()} className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`
                      flex items-center space-x-2 p-3 rounded-md border cursor-pointer
                      ${selectedOption === index ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20" : "border-gray-200 dark:border-gray-700"}
                      ${showAnswer && index === questions[currentQuestion].correctAnswer ? "border-green-500 bg-green-50 dark:bg-green-900/20" : ""}
                      ${showAnswer && selectedOption === index && index !== questions[currentQuestion].correctAnswer ? "border-red-500 bg-red-50 dark:bg-red-900/20" : ""}
                    `}
                    onClick={() => handleOptionSelect(index)}
                  >
                    <RadioGroupItem
                      value={index.toString()}
                      id={`option-${index}`}
                      disabled={showAnswer}
                      className={`
                        ${showAnswer && index === questions[currentQuestion].correctAnswer ? "text-green-500" : ""}
                        ${showAnswer && selectedOption === index && index !== questions[currentQuestion].correctAnswer ? "text-red-500" : ""}
                      `}
                    />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                    {showAnswer && index === questions[currentQuestion].correctAnswer && (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    )}
                    {showAnswer && selectedOption === index && index !== questions[currentQuestion].correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                ))}
              </RadioGroup>
            </div>

            {showAnswer && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md border border-blue-200 dark:border-blue-800"
              >
                <div className="flex items-start gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-700 dark:text-blue-300">Тайлбар:</h4>
                    <p className="text-blue-600 dark:text-blue-200 text-sm">{questions[currentQuestion].explanation}</p>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="flex justify-end gap-2 pt-2">
              {!showAnswer ? (
                <Button
                  onClick={handleCheckAnswer}
                  disabled={selectedOption === null}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Хариулт шалгах
                </Button>
              ) : (
                <Button onClick={handleNextQuestion} className="bg-purple-600 hover:bg-purple-700">
                  {currentQuestion < questions.length - 1 ? (
                    <>
                      Дараагийн асуулт <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    "Дуусгах"
                  )}
                </Button>
              )}
            </div>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 py-4">
            <div className="flex flex-col items-center justify-center text-center">
              <Award className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Тест дууслаа!</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Таны оноо:{" "}
                <span className="font-bold text-purple-600 dark:text-purple-400">
                  {score}/{questions.length}
                </span>{" "}
                ({Math.round((score / questions.length) * 100)}%)
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-md border border-purple-200 dark:border-purple-800 max-w-md">
                <p className="text-purple-700 dark:text-purple-300">{getScoreMessage()}</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button onClick={resetQuiz} className="bg-purple-600 hover:bg-purple-700">
                <RotateCcw className="mr-2 h-4 w-4" />
                Дахин эхлүүлэх
              </Button>
            </div>
          </motion.div>
        )}
      </CardContent>
      <CardFooter className="bg-slate-50 dark:bg-slate-800/50 border-t pt-4">
        <div className="text-xs text-slate-500 dark:text-slate-400">
          Энэхүү тест нь таны кибер аюулгүй байдлын мэдлэгийг шалгах зорилготой. Өөрийн мэдлэгийг дээшлүүлэхийн тулд
          кибер аюулгүй байдлын талаар илүү ихийг суралцаарай.
        </div>
      </CardFooter>
    </Card>
  )
}

