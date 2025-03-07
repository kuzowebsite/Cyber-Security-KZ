"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Lock, ShieldAlert, ShieldCheck, Info, Shield } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("")
  const [strength, setStrength] = useState(0)
  const [feedback, setFeedback] = useState<string[]>([])
  const [showPassword, setShowPassword] = useState(false)
  const [showResult, setShowResult] = useState(false)

  // Calculate password strength
  useEffect(() => {
    if (!password) {
      setStrength(0)
      setFeedback([])
      setShowResult(false)
      return
    }

    let score = 0
    const issues: string[] = []

    // Length check
    if (password.length < 8) {
      issues.push("Нууц үг хэт богино байна (8+ тэмдэгт шаардлагатай)")
    } else {
      score += 20
    }

    // Uppercase check
    if (!/[A-Z]/.test(password)) {
      issues.push("Том үсэг байхгүй байна")
    } else {
      score += 20
    }

    // Lowercase check
    if (!/[a-z]/.test(password)) {
      issues.push("Жижиг үсэг байхгүй байна")
    } else {
      score += 20
    }

    // Number check
    if (!/\d/.test(password)) {
      issues.push("Тоо байхгүй байна")
    } else {
      score += 20
    }

    // Special character check
    if (!/[^A-Za-z0-9]/.test(password)) {
      issues.push("Тусгай тэмдэгт байхгүй байна (!@#$%^&*)")
    } else {
      score += 20
    }

    // Common password patterns
    const commonPatterns = [
      "123456",
      "password",
      "qwerty",
      "admin",
      "welcome",
      "123123",
      "abc123",
      "letmein",
      "monkey",
      "1234567",
    ]

    if (commonPatterns.some((pattern) => password.toLowerCase().includes(pattern))) {
      issues.push("Түгээмэл хэрэглэгддэг нууц үгийн загвар агуулж байна")
      score = Math.max(0, score - 20)
    }

    // Sequential characters
    if (
      /abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/i.test(password)
    ) {
      issues.push("Дараалсан үсэг агуулж байна")
      score = Math.max(0, score - 10)
    }

    // Sequential numbers
    if (/012|123|234|345|456|567|678|789|987|876|765|654|543|432|321|210/.test(password)) {
      issues.push("Дараалсан тоо агуулж байна")
      score = Math.max(0, score - 10)
    }

    setStrength(score)
    setFeedback(issues)
    setShowResult(true)
  }, [password])

  const getStrengthLabel = () => {
    if (strength < 20) return "Маш сул"
    if (strength < 40) return "Сул"
    if (strength < 60) return "Дунд"
    if (strength < 80) return "Сайн"
    return "Маш сайн"
  }

  const getStrengthColor = () => {
    if (strength < 20) return "bg-red-500"
    if (strength < 40) return "bg-orange-500"
    if (strength < 60) return "bg-yellow-500"
    if (strength < 80) return "bg-blue-500"
    return "bg-green-500"
  }

  const getStrengthIcon = () => {
    if (strength < 40) return <ShieldAlert className="h-5 w-5 text-red-500" />
    if (strength < 80) return <Shield className="h-5 w-5 text-yellow-500" />
    return <ShieldCheck className="h-5 w-5 text-green-500" />
  }

  const handleClear = () => {
    setPassword("")
    setShowResult(false)
  }

  return (
    <Card className="border shadow-lg bg-white dark:bg-slate-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <Lock className="h-5 w-5 text-blue-500" />
          Нууц үгийн хүч шалгагч
        </CardTitle>
        <CardDescription>Таны нууц үг хэр найдвартай болохыг шалгаарай</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Нууц үгээ оруулна уу"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pr-24"
          />
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 text-xs"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Нуух" : "Харах"}
          </Button>
        </div>

        <div className="flex gap-2">
          <Button onClick={() => setShowResult(true)} className="flex-1" disabled={!password}>
            Шалгах
          </Button>
          <Button variant="outline" onClick={handleClear} disabled={!password}>
            Цэвэрлэх
          </Button>
        </div>

        {showResult && password && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 mt-4"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {getStrengthIcon()}
                  <span className="font-medium">Хүч: {getStrengthLabel()}</span>
                </div>
                <Badge
                  variant="outline"
                  className={`
                    ${
                      strength < 40
                        ? "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"
                        : strength < 60
                          ? "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800"
                          : "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                    }
                  `}
                >
                  {strength}/100
                </Badge>
              </div>
              <Progress value={strength} className={getStrengthColor()} />
            </div>

            {feedback.length > 0 && (
              <Alert variant="destructive" className="bg-red-50 dark:bg-red-900/20">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Сайжруулах зүйлс</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {feedback.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {feedback.length === 0 && (
              <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <AlertTitle className="text-green-700 dark:text-green-400">Маш сайн!</AlertTitle>
                <AlertDescription className="text-green-600 dark:text-green-300">
                  Таны нууц үг бүх шаардлагыг хангаж байна.
                </AlertDescription>
              </Alert>
            )}

            <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <Info className="h-4 w-4 text-blue-500" />
              <AlertTitle className="text-blue-700 dark:text-blue-400">Санамж</AlertTitle>
              <AlertDescription className="text-blue-600 dark:text-blue-300">
                Бид таны нууц үгийг хадгалдаггүй. Бүх шалгалт таны хөтчид дээр хийгддэг.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </CardContent>
      <CardFooter className="bg-slate-50 dark:bg-slate-800/50 border-t pt-4">
        <div className="text-xs text-slate-500 dark:text-slate-400">
          Хүчтэй нууц үг нь дор хаяж 8 тэмдэгт, том, жижиг үсэг, тоо болон тусгай тэмдэгт агуулсан байх ёстой.
        </div>
      </CardFooter>
    </Card>
  )
}

