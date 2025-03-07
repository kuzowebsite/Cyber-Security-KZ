"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, XCircle, AlertTriangle, HelpCircle, Trophy, RefreshCcw } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: {
    id: string
    text: string
  }[]
  correctAnswer: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "Монгол Улсад кибер гэмт хэрэг гэж юу вэ?",
    options: [
      { id: "A", text: "Сүлжээний халдлага" },
      { id: "B", text: "Хувийн мэдээллийг хууль бусаар ашиглах" },
      { id: "C", text: "Бүх сонголтууд зөв" },
      { id: "D", text: "Хэрэглэгчийн төхөөрөмжийг хулгайлах" },
    ],
    correctAnswer: "C",
  },
  {
    id: 2,
    question: "Кибер гэмт хэрэгтэй тэмцэх хууль тогтоомжийг хэрэгжүүлдэг гол байгууллага нь аль нь вэ?",
    options: [
      { id: "A", text: "Монголын Төрийн Банк" },
      { id: "B", text: "Мэдээллийн технологийн газар" },
      { id: "C", text: "Цагдаагийн байгууллага" },
      { id: "D", text: "Тусгай үйлчилгээний байгууллага" },
    ],
    correctAnswer: "C",
  },
  {
    id: 3,
    question: "Монголд кибер гэмт хэрэг үйлдсэн хүнд ямар төрлийн шийтгэл ногдуулах вэ?",
    options: [
      { id: "A", text: "Шударга шийтгэл" },
      { id: "B", text: "Ял эдлэх" },
      { id: "C", text: "Хууль зүйн арга хэмжээг авч хэрэгжүүлэх" },
      { id: "D", text: "Бүгд зөв" },
    ],
    correctAnswer: "D",
  },
  {
    id: 4,
    question: "Кибер аюулгүй байдлын хууль зүйн зохицуулалт нь юуны тухай вэ?",
    options: [
      { id: "A", text: "Хувийн мэдээллийн хамгаалалт" },
      { id: "B", text: "Сүлжээний аюулгүй байдал" },
      { id: "C", text: "Кибер гэмт хэргийн тогтолцоо" },
      { id: "D", text: "Бүх сонголтууд зөв" },
    ],
    correctAnswer: "D",
  },
  {
    id: 5,
    question: "Монголын кибер аюулгүй байдлыг хангах хууль тогтоомжуудаас аль нь хамгийн гол юм?",
    options: [
      { id: "A", text: "Мэдээллийн аюулгүй байдлын хууль" },
      { id: "B", text: "Кибер аюулгүй байдлын тухай хууль" },
      { id: "C", text: "Банкны нууцлалын хууль" },
      { id: "D", text: "Хувийн мэдээллийн хамгаалалтын хууль" },
    ],
    correctAnswer: "B",
  },
  {
    id: 6,
    question: "Кибер халдлагаас хэрхэн урьдчилан сэргийлэх вэ?",
    options: [
      { id: "A", text: "Сайтуудын аюулгүй байдлыг сайжруулах" },
      { id: "B", text: "Хувийн мэдээллээ хамгаалах" },
      { id: "C", text: "Төхөөрөмжийн аюулгүй байдлыг хангах" },
      { id: "D", text: "Бүх сонголтууд зөв" },
    ],
    correctAnswer: "D",
  },
  {
    id: 7,
    question: "Кибер гэмт хэргийн хохирогч болох тохиолдолд хэнд хандах хэрэгтэй вэ?",
    options: [
      { id: "A", text: "Цагдаагийн байгууллага" },
      { id: "B", text: "Шүүх эрх мэдэл" },
      { id: "C", text: "Мэдээллийн технологийн газар" },
      { id: "D", text: "Бүх сонголтууд зөв" },
    ],
    correctAnswer: "D",
  },
  {
    id: 8,
    question: "Кибер гэмт хэрэгт холбогдсон хуулийн этгээдүүдэд ямар хариуцлага хүлээлгэж болох вэ?",
    options: [
      { id: "A", text: "Санхүүгийн торгууль" },
      { id: "B", text: "Хуулийн байгууллагад хариуцлага хүлээлгэх" },
      { id: "C", text: "Технологийн үйлчилгээний хязгаарлалт" },
      { id: "D", text: "Бүгд зөв" },
    ],
    correctAnswer: "D",
  },
]

export function CyberLawQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)

  const handleAnswerSelect = (answerId: string) => {
    if (isAnswered) return
    setSelectedAnswer(answerId)
    setIsAnswered(true)

    if (answerId === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setIsAnswered(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 90) return "Маш сайн!"
    if (percentage >= 70) return "Сайн!"
    if (percentage >= 50) return "Дунд!"
    return "Дахин оролдоорой!"
  }

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 90) return "text-green-500"
    if (percentage >= 70) return "text-blue-500"
    if (percentage >= 50) return "text-amber-500"
    return "text-red-500"
  }

  return (
    <Card className="border-0 shadow-lg bg-slate-800/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-purple-500" />
              Кибер хууль эрх зүйн шалгалт
            </CardTitle>
            <CardDescription className="text-slate-400">
              Өөрийн мэдлэгээ шалгаарай
            </CardDescription>
          </div>
          {!showResult && (
            <Badge variant="outline" className="bg-purple-900/30 text-purple-300 border-purple-800">
              {currentQuestion + 1}/{questions.length}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent>
        {!showResult ? (
          <div className="space-y-4">
            <div className="mb-4">
              <Progress
                value={((currentQuestion + 1) / questions.length) * 100}
                className="h-2 bg-slate-700 [&>div]:bg-purple-500"
              />
            </div>

            <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
              <p className="text-white text-sm md:text-base">
                {questions[currentQuestion].question}
              </p>
            </div>

            <div className="grid gap-3">
              <AnimatePresence mode="wait">
                {questions[currentQuestion].options.map((option) => (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="outline"
                      className={`w-full justify-start gap-2 h-auto py-3 px-4 text-left text-sm font-normal border-slate-700 hover:bg-slate-700/50 ${
                        selectedAnswer === option.id
                          ? isAnswered
                            ? option.id === questions[currentQuestion].correctAnswer
                              ? "bg-green-500/20 border-green-500 text-green-300"
                              : "bg-red-500/20 border-red-500 text-red-300"
                            : "bg-purple-500/20 border-purple-500 text-purple-300"
                          : ""
                      }`}
                      onClick={() => handleAnswerSelect(option.id)}
                    >
                      <span
                        className={`flex items-center justify-center h-6 w-6 rounded-full text-xs font-medium ${
                          selectedAnswer === option.id
                            ? isAnswered
                              ? option.id === questions[currentQuestion].correctAnswer
                                ? "bg-green-500/20 text-green-300"
                                : "bg-red-500/20 text-red-300"
                              : "bg-purple-500/20 text-purple-300"
                            : "bg-slate-700 text-slate-300"
                        }`}
                      >
                        {option.id}
                      </span>
                      {option.text}
                      {isAnswered && option.id === questions[currentQuestion].correctAnswer && (
                        <CheckCircle2 className="h-4 w-4 text-green-500 ml-auto" />
                      )}
                      {isAnswered && selectedAnswer === option.id && option.id !== questions[currentQuestion].correctAnswer && (
                        <XCircle className="h-4 w-4 text-red-500 ml-auto" />
                      )}
                    </Button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {isAnswered && (
              <div className="flex justify-end mt-4">
                <Button
                  onClick={handleNext}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {currentQuestion === questions.length - 1 ? "Дүн үзэх" : "Дараагийн асуулт"}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-700/30 mb-4">
              <Trophy className="h-10 w-10 text-purple-500" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{getScoreMessage()}</h3>
              <p className={`text-4xl font-bold ${getScoreColor()}`}>
                {((score / questions.length) * 100).toFixed(0)}%
              </p>
              <p className="text-slate-400 mt-1">
                {score} зөв хариулт {questions.length} асуултаас
              </p>
            </div>

            <div className="pt-4">
              <Button
                onClick={resetQuiz}
                className="bg-purple-600 hover:bg-purple-700 text-white inline-flex items-center gap-2"
              >
                <RefreshCcw className="h-4 w-4" />
                Дахин эхлэх
              </Button>
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}
