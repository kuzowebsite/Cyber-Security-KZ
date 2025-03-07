"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { ArrowLeftRight, Calculator } from "lucide-react"

// Define currency code type to ensure type safety
type CurrencyCode =
  | "USD"
  | "EUR"
  | "CNY"
  | "KRW"
  | "JPY"
  | "GBP"
  | "AUD"
  | "CAD"
  | "SGD"
  | "HKD"
  | "XAU"
  | "XAG"
  | "MNT"

// Mock exchange rates - in a real app, these would come from an API
const EXCHANGE_RATES: Record<Exclude<CurrencyCode, "MNT">, number> = {
  USD: 3457.0,
  EUR: 3750.12,
  CNY: 482.15,
  KRW: 2.62,
  JPY: 23.21,
  GBP: 4380.45,
  AUD: 2250.3,
  CAD: 2540.8,
  SGD: 2570.15,
  HKD: 442.3,
  XAU: 6914000.0, // Gold
  XAG: 82000.0, // Silver
}

const BANKS = [
  "Монгол банк",
  "Голомт",
  "ХХБанк",
  "ХААН",
  "Капитрон",
  "Төрийн банк",
  "Үндэсний хөрөнгө оруулалтын банк",
  "Евро Ази",
  '"Номин Юнити" ББСБ',
]

export function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState<CurrencyCode>("USD")
  const [toCurrency, setToCurrency] = useState<CurrencyCode>("MNT")
  const [amount, setAmount] = useState("1")
  const [selectedBank, setSelectedBank] = useState("ХААН")
  const [convertedAmount, setConvertedAmount] = useState("")

  // Convert currency when inputs change
  useEffect(() => {
    const numAmount = Number.parseFloat(amount)
    if (!isNaN(numAmount)) {
      if (fromCurrency === "MNT" && toCurrency !== "MNT") {
        // Convert from MNT to another currency
        setConvertedAmount((numAmount / EXCHANGE_RATES[toCurrency as Exclude<CurrencyCode, "MNT">]).toFixed(2))
      } else if (toCurrency === "MNT" && fromCurrency !== "MNT") {
        // Convert from another currency to MNT
        setConvertedAmount((numAmount * EXCHANGE_RATES[fromCurrency as Exclude<CurrencyCode, "MNT">]).toFixed(2))
      } else if (fromCurrency !== "MNT" && toCurrency !== "MNT") {
        // Convert between two non-MNT currencies
        const inMNT = numAmount * EXCHANGE_RATES[fromCurrency as Exclude<CurrencyCode, "MNT">]
        setConvertedAmount((inMNT / EXCHANGE_RATES[toCurrency as Exclude<CurrencyCode, "MNT">]).toFixed(2))
      } else {
        // MNT to MNT
        setConvertedAmount(numAmount.toFixed(2))
      }
    }
  }, [amount, fromCurrency, toCurrency])

  // Swap currencies
  const handleSwap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  // Helper function to safely get exchange rate
  const getExchangeRate = (currency: CurrencyCode): number | null => {
    if (currency === "MNT") return 1
    return EXCHANGE_RATES[currency as Exclude<CurrencyCode, "MNT">] || null
  }

  return (
    <Card className="overflow-hidden border-0 shadow-lg bg-slate-800/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
          <Calculator className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
          Ханш хөрвүүлэгч
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-slate-400">Банк сонгох</label>
            <Select value={selectedBank} onValueChange={setSelectedBank}>
              <SelectTrigger className="bg-slate-900/50 border-slate-700">
                <SelectValue placeholder="Банк сонгоно уу" />
              </SelectTrigger>
              <SelectContent>
                {BANKS.map((bank) => (
                  <SelectItem key={bank} value={bank}>
                    {bank}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-center">
            <div className="space-y-2">
              <Select value={fromCurrency} onValueChange={(value) => setFromCurrency(value as CurrencyCode)}>
                <SelectTrigger className="bg-slate-900/50 border-slate-700">
                  <SelectValue placeholder="Валют сонгох" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MNT">MNT - Төгрөг</SelectItem>
                  <SelectItem value="USD">USD - Ам.доллар</SelectItem>
                  <SelectItem value="EUR">EUR - Евро</SelectItem>
                  <SelectItem value="CNY">CNY - Юань</SelectItem>
                  <SelectItem value="KRW">KRW - Вон</SelectItem>
                  <SelectItem value="JPY">JPY - Иен</SelectItem>
                  <SelectItem value="GBP">GBP - Фунт</SelectItem>
                  <SelectItem value="AUD">AUD - Австрали доллар</SelectItem>
                  <SelectItem value="CAD">CAD - Канад доллар</SelectItem>
                  <SelectItem value="SGD">SGD - Сингапур доллар</SelectItem>
                  <SelectItem value="HKD">HKD - Хонгконг доллар</SelectItem>
                  <SelectItem value="XAU">XAU - Алт /унци/</SelectItem>
                  <SelectItem value="XAG">XAG - Мөнгө /унци/</SelectItem>
                </SelectContent>
              </Select>

              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-slate-900/50 border-slate-700"
                placeholder="0.00"
              />
            </div>

            <button onClick={handleSwap} className="p-2 rounded-full hover:bg-slate-700/50 transition-colors">
              <ArrowLeftRight className="h-4 w-4 text-slate-400" />
            </button>

            <div className="space-y-2">
              <Select value={toCurrency} onValueChange={(value) => setToCurrency(value as CurrencyCode)}>
                <SelectTrigger className="bg-slate-900/50 border-slate-700">
                  <SelectValue placeholder="Валют сонгох" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MNT">MNT - Төгрөг</SelectItem>
                  <SelectItem value="USD">USD - Ам.доллар</SelectItem>
                  <SelectItem value="EUR">EUR - Евро</SelectItem>
                  <SelectItem value="CNY">CNY - Юань</SelectItem>
                  <SelectItem value="KRW">KRW - Вон</SelectItem>
                  <SelectItem value="JPY">JPY - Иен</SelectItem>
                  <SelectItem value="GBP">GBP - Фунт</SelectItem>
                  <SelectItem value="AUD">AUD - Австрали доллар</SelectItem>
                  <SelectItem value="CAD">CAD - Канад доллар</SelectItem>
                  <SelectItem value="SGD">SGD - Сингапур доллар</SelectItem>
                  <SelectItem value="HKD">HKD - Хонгконг доллар</SelectItem>
                  <SelectItem value="XAU">XAU - Алт /унци/</SelectItem>
                  <SelectItem value="XAG">XAG - Мөнгө /унци/</SelectItem>
                </SelectContent>
              </Select>

              <Input
                type="text"
                value={convertedAmount}
                readOnly
                className="bg-slate-900/50 border-slate-700"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="text-xs text-slate-400 space-y-1">
            {fromCurrency !== "MNT" && (
              <p>
                1 {fromCurrency} = {EXCHANGE_RATES[fromCurrency as Exclude<CurrencyCode, "MNT">]} MNT
              </p>
            )}
            {fromCurrency === "MNT" && toCurrency !== "MNT" && (
              <p>
                1 {toCurrency} = {EXCHANGE_RATES[toCurrency as Exclude<CurrencyCode, "MNT">]} MNT
              </p>
            )}
            <p>Сүүлийн шинэчлэл: {new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

