"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Cpu,
  HardDrive,
  MemoryStickIcon as Memory,
  Monitor,
  Battery,
  DollarSign,
  Zap,
  Layers,
  Fan,
  AlertTriangle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

// PC component database
const pcComponents = {
  cpus: [
    { id: "i5_13600k", name: "Intel Core i5-13600K", price: 320, performance: 85, tdp: 125 },
    { id: "i7_13700k", name: "Intel Core i7-13700K", price: 420, performance: 92, tdp: 125 },
    { id: "i9_13900k", name: "Intel Core i9-13900K", price: 590, performance: 100, tdp: 125 },
    { id: "r5_7600x", name: "AMD Ryzen 5 7600X", price: 300, performance: 84, tdp: 105 },
    { id: "r7_7700x", name: "AMD Ryzen 7 7700X", price: 400, performance: 91, tdp: 105 },
    { id: "r9_7950x", name: "AMD Ryzen 9 7950X", price: 580, performance: 99, tdp: 170 },
  ],
  gpus: [
    { id: "rtx_4060", name: "NVIDIA RTX 4060", price: 300, performance: 75, tdp: 115 },
    { id: "rtx_4070", name: "NVIDIA RTX 4070", price: 550, performance: 88, tdp: 200 },
    { id: "rtx_4080", name: "NVIDIA RTX 4080", price: 1100, performance: 96, tdp: 320 },
    { id: "rtx_4090", name: "NVIDIA RTX 4090", price: 1600, performance: 100, tdp: 450 },
    { id: "rx_7600", name: "AMD RX 7600", price: 280, performance: 73, tdp: 165 },
    { id: "rx_7700xt", name: "AMD RX 7700 XT", price: 450, performance: 86, tdp: 245 },
    { id: "rx_7900xt", name: "AMD RX 7900 XT", price: 900, performance: 95, tdp: 315 },
  ],
  motherboards: [
    { id: "z790", name: "Intel Z790 Motherboard", price: 250, performance: 90, socket: "LGA1700" },
    { id: "b760", name: "Intel B760 Motherboard", price: 170, performance: 80, socket: "LGA1700" },
    { id: "x670e", name: "AMD X670E Motherboard", price: 270, performance: 92, socket: "AM5" },
    { id: "b650", name: "AMD B650 Motherboard", price: 180, performance: 82, socket: "AM5" },
  ],
  ram: [
    { id: "ddr4_16gb", name: "16GB DDR4-3600", price: 70, performance: 75 },
    { id: "ddr4_32gb", name: "32GB DDR4-3600", price: 130, performance: 85 },
    { id: "ddr5_16gb", name: "16GB DDR5-6000", price: 100, performance: 88 },
    { id: "ddr5_32gb", name: "32GB DDR5-6000", price: 180, performance: 95 },
    { id: "ddr5_64gb", name: "64GB DDR5-6000", price: 350, performance: 100 },
  ],
  storage: [
    { id: "sata_1tb", name: "1TB SATA SSD", price: 80, performance: 65 },
    { id: "nvme_1tb", name: "1TB NVMe SSD", price: 120, performance: 85 },
    { id: "nvme_2tb", name: "2TB NVMe SSD", price: 220, performance: 90 },
    { id: "nvme_4tb", name: "4TB NVMe SSD Gen4", price: 450, performance: 100 },
  ],
  cases: [
    { id: "budget_case", name: "Budget ATX Case", price: 60, performance: 70 },
    { id: "midrange_case", name: "Mid-range ATX Case", price: 110, performance: 85 },
    { id: "premium_case", name: "Premium ATX Case", price: 180, performance: 95 },
  ],
  psus: [
    { id: "650w", name: "650W 80+ Gold PSU", price: 90, performance: 75, wattage: 650 },
    { id: "850w", name: "850W 80+ Gold PSU", price: 140, performance: 85, wattage: 850 },
    { id: "1000w", name: "1000W 80+ Platinum PSU", price: 200, performance: 95, wattage: 1000 },
    { id: "1200w", name: "1200W 80+ Platinum PSU", price: 260, performance: 100, wattage: 1200 },
  ],
  cooling: [
    { id: "air_basic", name: "Basic Air Cooler", price: 40, performance: 65, tdp: 150 },
    { id: "air_premium", name: "Premium Air Cooler", price: 90, performance: 80, tdp: 200 },
    { id: "aio_240", name: "240mm AIO Liquid Cooler", price: 120, performance: 90, tdp: 280 },
    { id: "aio_360", name: "360mm AIO Liquid Cooler", price: 180, performance: 98, tdp: 350 },
  ],
}

// PC use cases
const useCases = [
  { id: "gaming", name: "Тоглоом", description: "Gaming PC with high FPS", icon: Monitor },
  { id: "productivity", name: "Бүтээмж", description: "For work and productivity", icon: Layers },
  { id: "budget", name: "Хямд үнэтэй", description: "Best value configuration", icon: DollarSign },
]

export function PcBuilder() {
  const [selectedUseCase, setSelectedUseCase] = useState("gaming")
  const [configuration, setConfiguration] = useState({
    cpu: "",
    gpu: "",
    motherboard: "",
    ram: "",
    storage: "",
    case: "",
    psu: "",
    cooling: "",
  })

  const [performance, setPerformance] = useState({
    gaming: 0,
    productivity: 0,
    valueForMoney: 0,
    totalPrice: 0,
    powerConsumption: 0,
    coolingAdequacy: true,
  })

  // Helper functions
  const getCpuById = (id: string) => pcComponents.cpus.find((cpu) => cpu.id === id)
  const getGpuById = (id: string) => pcComponents.gpus.find((gpu) => gpu.id === id)
  const getMotherboardById = (id: string) => pcComponents.motherboards.find((mb) => mb.id === id)
  const getRamById = (id: string) => pcComponents.ram.find((ram) => ram.id === id)
  const getStorageById = (id: string) => pcComponents.storage.find((storage) => storage.id === id)
  const getCaseById = (id: string) => pcComponents.cases.find((c) => c.id === id)
  const getPsuById = (id: string) => pcComponents.psus.find((psu) => psu.id === id)
  const getCoolingById = (id: string) => pcComponents.cooling.find((cooling) => cooling.id === id)

  // Auto-configure based on use case
  useEffect(() => {
    if (selectedUseCase === "gaming") {
      setConfiguration({
        cpu: "i7_13700k",
        gpu: "rtx_4070",
        motherboard: "z790",
        ram: "ddr5_32gb",
        storage: "nvme_2tb",
        case: "midrange_case",
        psu: "850w",
        cooling: "aio_240",
      })
    } else if (selectedUseCase === "productivity") {
      setConfiguration({
        cpu: "r9_7950x",
        gpu: "rtx_4060",
        motherboard: "x670e",
        ram: "ddr5_64gb",
        storage: "nvme_4tb",
        case: "premium_case",
        psu: "850w",
        cooling: "aio_360",
      })
    } else if (selectedUseCase === "budget") {
      setConfiguration({
        cpu: "r5_7600x",
        gpu: "rx_7600",
        motherboard: "b650",
        ram: "ddr4_16gb",
        storage: "sata_1tb",
        case: "budget_case",
        psu: "650w",
        cooling: "air_basic",
      })
    }
  }, [selectedUseCase])

  // Calculate performance metrics when configuration changes
  useEffect(() => {
    // Get components
    const cpu = getCpuById(configuration.cpu)
    const gpu = getGpuById(configuration.gpu)
    const motherboard = getMotherboardById(configuration.motherboard)
    const ram = getRamById(configuration.ram)
    const storage = getStorageById(configuration.storage)
    const computerCase = getCaseById(configuration.case)
    const psu = getPsuById(configuration.psu)
    const cooling = getCoolingById(configuration.cooling)

    if (!cpu || !gpu || !motherboard || !ram || !storage || !computerCase || !psu || !cooling) {
      return
    }

    // Calculate total price
    const totalPrice =
      cpu.price +
      gpu.price +
      motherboard.price +
      ram.price +
      storage.price +
      computerCase.price +
      psu.price +
      cooling.price

    // Calculate power consumption
    const powerConsumption = cpu.tdp + gpu.tdp + 50 // 50W for other components

    // Check if cooling is adequate
    const coolingAdequacy = cooling.tdp >= cpu.tdp

    // Calculate gaming performance (GPU heavy)
    const gamingPerf = gpu.performance * 0.6 + cpu.performance * 0.2 + ram.performance * 0.1 + storage.performance * 0.1

    // Calculate productivity performance (CPU heavy)
    const productivityPerf =
      cpu.performance * 0.5 + ram.performance * 0.2 + storage.performance * 0.2 + gpu.performance * 0.1

    // Calculate value for money
    const valueForMoney = ((gamingPerf + productivityPerf) / 2 / (totalPrice / 1000)) * 10

    setPerformance({
      gaming: Math.round(gamingPerf),
      productivity: Math.round(productivityPerf),
      valueForMoney: Math.round(valueForMoney),
      totalPrice,
      powerConsumption,
      coolingAdequacy,
    })
  }, [configuration])

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">PC зориулалт сонгох:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <Button
                  key={useCase.id}
                  variant={selectedUseCase === useCase.id ? "default" : "outline"}
                  className={`h-auto py-4 flex flex-col items-center justify-center gap-2 ${
                    selectedUseCase === useCase.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      : "bg-white/80 dark:bg-black/20 border-0 shadow-sm"
                  }`}
                  onClick={() => setSelectedUseCase(useCase.id)}
                >
                  <Icon className="h-6 w-6" />
                  <div>
                    <div className="font-medium">{useCase.name}</div>
                    <div className="text-xs text-muted-foreground">{useCase.description}</div>
                  </div>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="overflow-hidden border-none shadow-md bg-white dark:bg-black/20">
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-4">
            <h2 className="font-bold text-lg">Эд ангиуд сонгох</h2>
          </div>
          <CardContent className="p-6 space-y-5">
            <div className="space-y-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-blue-500" /> CPU (Процессор)
                </label>
                <Select
                  value={configuration.cpu}
                  onValueChange={(value) => setConfiguration({ ...configuration, cpu: value })}
                >
                  <SelectTrigger className="bg-muted/30 border-0 shadow-sm">
                    <SelectValue placeholder="CPU сонгоно уу" />
                  </SelectTrigger>
                  <SelectContent>
                    {pcComponents.cpus.map((cpu) => (
                      <SelectItem key={cpu.id} value={cpu.id}>
                        <div className="flex justify-between items-center w-full">
                          <span>{cpu.name}</span>
                          <Badge variant="outline" className="ml-2">
                            ${cpu.price}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-indigo-500" /> GPU (Видео карт)
                </label>
                <Select
                  value={configuration.gpu}
                  onValueChange={(value) => setConfiguration({ ...configuration, gpu: value })}
                >
                  <SelectTrigger className="bg-muted/30 border-0 shadow-sm">
                    <SelectValue placeholder="GPU сонгоно уу" />
                  </SelectTrigger>
                  <SelectContent>
                    {pcComponents.gpus.map((gpu) => (
                      <SelectItem key={gpu.id} value={gpu.id}>
                        <div className="flex justify-between items-center w-full">
                          <span>{gpu.name}</span>
                          <Badge variant="outline" className="ml-2">
                            ${gpu.price}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Layers className="h-4 w-4 text-purple-500" /> Motherboard (Үндсэн хавтан)
                </label>
                <Select
                  value={configuration.motherboard}
                  onValueChange={(value) => setConfiguration({ ...configuration, motherboard: value })}
                >
                  <SelectTrigger className="bg-muted/30 border-0 shadow-sm">
                    <SelectValue placeholder="Motherboard сонгоно уу" />
                  </SelectTrigger>
                  <SelectContent>
                    {pcComponents.motherboards.map((mb) => (
                      <SelectItem key={mb.id} value={mb.id}>
                        <div className="flex justify-between items-center w-full">
                          <span>{mb.name}</span>
                          <Badge variant="outline" className="ml-2">
                            ${mb.price}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Memory className="h-4 w-4 text-amber-500" /> RAM (Санах ой)
                </label>
                <Select
                  value={configuration.ram}
                  onValueChange={(value) => setConfiguration({ ...configuration, ram: value })}
                >
                  <SelectTrigger className="bg-muted/30 border-0 shadow-sm">
                    <SelectValue placeholder="RAM сонгоно уу" />
                  </SelectTrigger>
                  <SelectContent>
                    {pcComponents.ram.map((ram) => (
                      <SelectItem key={ram.id} value={ram.id}>
                        <div className="flex justify-between items-center w-full">
                          <span>{ram.name}</span>
                          <Badge variant="outline" className="ml-2">
                            ${ram.price}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <HardDrive className="h-4 w-4 text-green-500" /> Storage (Хадгалах төхөөрөмж)
                </label>
                <Select
                  value={configuration.storage}
                  onValueChange={(value) => setConfiguration({ ...configuration, storage: value })}
                >
                  <SelectTrigger className="bg-muted/30 border-0 shadow-sm">
                    <SelectValue placeholder="Storage сонгоно уу" />
                  </SelectTrigger>
                  <SelectContent>
                    {pcComponents.storage.map((storage) => (
                      <SelectItem key={storage.id} value={storage.id}>
                        <div className="flex justify-between items-center w-full">
                          <span>{storage.name}</span>
                          <Badge variant="outline" className="ml-2">
                            ${storage.price}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Layers className="h-4 w-4 text-orange-500" /> Case (Компьютерийн их бие)
                </label>
                <Select
                  value={configuration.case}
                  onValueChange={(value) => setConfiguration({ ...configuration, case: value })}
                >
                  <SelectTrigger className="bg-muted/30 border-0 shadow-sm">
                    <SelectValue placeholder="Case сонгоно уу" />
                  </SelectTrigger>
                  <SelectContent>
                    {pcComponents.cases.map((computerCase) => (
                      <SelectItem key={computerCase.id} value={computerCase.id}>
                        <div className="flex justify-between items-center w-full">
                          <span>{computerCase.name}</span>
                          <Badge variant="outline" className="ml-2">
                            ${computerCase.price}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Battery className="h-4 w-4 text-red-500" /> PSU (Тэжээлийн блок)
                </label>
                <Select
                  value={configuration.psu}
                  onValueChange={(value) => setConfiguration({ ...configuration, psu: value })}
                >
                  <SelectTrigger className="bg-muted/30 border-0 shadow-sm">
                    <SelectValue placeholder="PSU сонгоно уу" />
                  </SelectTrigger>
                  <SelectContent>
                    {pcComponents.psus.map((psu) => (
                      <SelectItem key={psu.id} value={psu.id}>
                        <div className="flex justify-between items-center w-full">
                          <span>{psu.name}</span>
                          <Badge variant="outline" className="ml-2">
                            ${psu.price}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Fan className="h-4 w-4 text-sky-500" /> Cooling (Хөргөлт)
                </label>
                <Select
                  value={configuration.cooling}
                  onValueChange={(value) => setConfiguration({ ...configuration, cooling: value })}
                >
                  <SelectTrigger className="bg-muted/30 border-0 shadow-sm">
                    <SelectValue placeholder="Cooling сонгоно уу" />
                  </SelectTrigger>
                  <SelectContent>
                    {pcComponents.cooling.map((cooling) => (
                      <SelectItem key={cooling.id} value={cooling.id}>
                        <div className="flex justify-between items-center w-full">
                          <span>{cooling.name}</span>
                          <Badge variant="outline" className="ml-2">
                            ${cooling.price}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-none shadow-md bg-white dark:bg-black/20">
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-4">
            <h2 className="font-bold text-lg">Системийн гүйцэтгэл</h2>
          </div>
          <CardContent className="p-6">
            {performance.totalPrice > 0 ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium flex items-center gap-2">
                        <Monitor className="h-4 w-4 text-blue-500" /> Тоглоомын гүйцэтгэл
                      </span>
                      <span className="font-bold">{performance.gaming}/100</span>
                    </div>
                    <Progress
                      value={performance.gaming}
                      className="h-2 bg-blue-100 dark:bg-blue-950/30 [&>div]:bg-blue-500"
                    />
                    <p className="text-xs text-muted-foreground">
                      {performance.gaming > 90
                        ? "Хамгийн орчин үеийн тоглоомыг өндөр тохиргоотой тоглох боломжтой"
                        : performance.gaming > 75
                          ? "Ихэнх тоглоомыг дунд зэргийн тохиргоотой тоглох боломжтой"
                          : "Хуучин тоглоомуудыг тоглох боломжтой"}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium flex items-center gap-2">
                        <Layers className="h-4 w-4 text-indigo-500" /> Бүтээмжийн гүйцэтгэл
                      </span>
                      <span className="font-bold">{performance.productivity}/100</span>
                    </div>
                    <Progress
                      value={performance.productivity}
                      className="h-2 bg-indigo-100 dark:bg-indigo-950/30 [&>div]:bg-indigo-500"
                    />
                    <p className="text-xs text-muted-foreground">
                      {performance.productivity > 90
                        ? "Хүнд хэрэглээний програмууд болон олон тооны цонхтой ажиллахад төгс"
                        : performance.productivity > 75
                          ? "Ихэнх бүтээмжийн програмуудад сайн гүйцэтгэлтэй"
                          : "Үндсэн офисын програмуудад хангалттай"}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-500" /> Үнэ-чанарын харьцаа
                    </span>
                    <span className="font-bold">{performance.valueForMoney}/100</span>
                  </div>
                  <Progress
                    value={performance.valueForMoney}
                    className="h-2 bg-green-100 dark:bg-green-950/30 [&>div]:bg-green-500"
                  />
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 flex flex-col items-center justify-center">
                    <DollarSign className="h-6 w-6 text-blue-500 mb-2" />
                    <div className="text-sm text-muted-foreground">Нийт үнэ</div>
                    <div className="text-xl font-bold">${performance.totalPrice}</div>
                  </div>

                  <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-lg p-4 flex flex-col items-center justify-center">
                    <Zap className="h-6 w-6 text-indigo-500 mb-2" />
                    <div className="text-sm text-muted-foreground">Цахилгааны хэрэглээ</div>
                    <div className={`text-xl font-bold ${performance.powerConsumption > 500 ? "text-amber-500" : ""}`}>
                      {performance.powerConsumption}W
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 flex flex-col items-center justify-center">
                    <Fan className="h-6 w-6 text-purple-500 mb-2" />
                    <div className="text-sm text-muted-foreground">Хөргөлтийн чадамж</div>
                    <div
                      className={`text-xl font-bold ${performance.coolingAdequacy ? "text-green-500" : "text-red-500"}`}
                    >
                      {performance.coolingAdequacy ? "Хангалттай" : "Хангалтгүй"}
                    </div>
                  </div>
                </div>

                {!performance.coolingAdequacy && (
                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border-l-4 border-red-500">
                    <div className="flex gap-2 text-red-700 dark:text-red-300">
                      <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Анхааруулга</p>
                        <p className="text-sm">
                          Сонгосон хөргөлт нь процессорын дулааныг хангалттай зайлуулах боломжгүй. Илүү сайн хөргөлт
                          сонгохыг зөвлөж байна.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <Separator />

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Системийн дүгнэлт:</h3>
                  <p className="text-sm">
                    {performance.gaming > 90 && performance.productivity > 90
                      ? "Энэ бол хамгийн өндөр хүчин чадалтай систем бөгөөд аливаа хэрэглээнд тохиромжтой."
                      : performance.gaming > 80 && performance.productivity > 80
                        ? "Энэ бол өндөр гүйцэтгэлтэй систем бөгөөд ихэнх тоглоом болон хүнд програмуудыг ажиллуулах боломжтой."
                        : performance.gaming > 70 && performance.productivity > 70
                          ? "Энэ бол дунд зэргийн систем бөгөөд ихэнх тоглоом болон програмуудыг хангалттай сайн ажиллуулна."
                          : "Энэ бол суурь түвшний систем бөгөөд энгийн хэрэглээнд тохиромжтой."}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="text-center text-muted-foreground">
                  <Cpu className="h-12 w-12 mx-auto mb-4 opacity-20" />
                  <p>Эд ангиудаа сонгоно уу</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

