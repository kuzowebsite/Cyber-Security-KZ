"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Cpu, Zap, Thermometer, DollarSign } from "lucide-react"
import { Separator } from "@/components/ui/separator"

// Sample processor data
const processors = {
  intel_i5_13600k: {
    name: "Intel Core i5-13600K",
    image: "/Intel-Core-i5-13600K.png?height=200&width=200",
    specs: {
      cores: "14 (6P + 8E)",
      threads: "20",
      baseClock: "3.5 GHz",
      boostClock: "5.1 GHz",
      cache: "24 MB Intel Smart Cache",
      tdp: "125W",
      socket: "LGA 1700",
      lithography: "Intel 7 (10nm)",
      pcieLanes: "PCIe 5.0 x16",
      memory: "DDR5-5600, DDR4-3200",
      igpu: "Intel UHD Graphics 770",
    },
    benchmarks: {
      singleCore: 2100,
      multiCore: 19200,
      gaming: 186,
      productivity: 178,
      power: 225,
      temperature: 75,
      price: 320,
    },
  },
  intel_i7_13700k: {
    name: "Intel Core i7-13700K",
    image: "/Intel Core i7-13700K.jpg?height=200&width=200",
    specs: {
      cores: "16 (8P + 8E)",
      threads: "24",
      baseClock: "3.4 GHz",
      boostClock: "5.4 GHz",
      cache: "30 MB Intel Smart Cache",
      tdp: "125W",
      socket: "LGA 1700",
      lithography: "Intel 7 (10nm)",
      pcieLanes: "PCIe 5.0 x16",
      memory: "DDR5-5600, DDR4-3200",
      igpu: "Intel UHD Graphics 770",
    },
    benchmarks: {
      singleCore: 2160,
      multiCore: 23500,
      gaming: 194,
      productivity: 195,
      power: 253,
      temperature: 78,
      price: 420,
    },
  },
  intel_i9_13900k: {
    name: "Intel Core i9-13900K",
    image: "/Intel Core i9-13900K.webp?height=200&width=200",
    specs: {
      cores: "24 (8P + 16E)",
      threads: "32",
      baseClock: "3.0 GHz",
      boostClock: "5.8 GHz",
      cache: "36 MB Intel Smart Cache",
      tdp: "125W",
      socket: "LGA 1700",
      lithography: "Intel 7 (10nm)",
      pcieLanes: "PCIe 5.0 x16",
      memory: "DDR5-5600, DDR4-3200",
      igpu: "Intel UHD Graphics 770",
    },
    benchmarks: {
      singleCore: 2250,
      multiCore: 29500,
      gaming: 198,
      productivity: 212,
      power: 320,
      temperature: 85,
      price: 590,
    },
  },
  amd_r5_7600x: {
    name: "AMD Ryzen 5 7600X",
    image: "/AMD Ryzen 5 7600X.webp?height=200&width=200",
    specs: {
      cores: "6",
      threads: "12",
      baseClock: "4.7 GHz",
      boostClock: "5.3 GHz",
      cache: "38 MB (6 MB L2 + 32 MB L3)",
      tdp: "105W",
      socket: "AM5",
      lithography: "TSMC 5nm",
      pcieLanes: "PCIe 5.0 x24",
      memory: "DDR5-5200",
      igpu: "AMD Radeon Graphics (RDNA 2)",
    },
    benchmarks: {
      singleCore: 2100,
      multiCore: 15200,
      gaming: 184,
      productivity: 165,
      power: 142,
      temperature: 70,
      price: 300,
    },
  },
  amd_r7_7700x: {
    name: "AMD Ryzen 7 7700X",
    image: "/AMD Ryzen 7 7700X.webp?height=200&width=200",
    specs: {
      cores: "8",
      threads: "16",
      baseClock: "4.5 GHz",
      boostClock: "5.4 GHz",
      cache: "40 MB (8 MB L2 + 32 MB L3)",
      tdp: "105W",
      socket: "AM5",
      lithography: "TSMC 5nm",
      pcieLanes: "PCIe 5.0 x24",
      memory: "DDR5-5200",
      igpu: "AMD Radeon Graphics (RDNA 2)",
    },
    benchmarks: {
      singleCore: 2160,
      multiCore: 19800,
      gaming: 191,
      productivity: 186,
      power: 156,
      temperature: 73,
      price: 400,
    },
  },
  amd_r9_7950x: {
    name: "AMD Ryzen 9 7950X",
    image: "/AMD Ryzen 9 7950X.webp?height=200&width=200",
    specs: {
      cores: "16",
      threads: "32",
      baseClock: "4.5 GHz",
      boostClock: "5.7 GHz",
      cache: "80 MB (16 MB L2 + 64 MB L3)",
      tdp: "170W",
      socket: "AM5",
      lithography: "TSMC 5nm",
      pcieLanes: "PCIe 5.0 x24",
      memory: "DDR5-5200",
      igpu: "AMD Radeon Graphics (RDNA 2)",
    },
    benchmarks: {
      singleCore: 2270,
      multiCore: 31500,
      gaming: 197,
      productivity: 213,
      power: 230,
      temperature: 82,
      price: 580,
    },
  },
}

export function ProcessorComparison() {
  const [cpu1, setCpu1] = useState<string>("intel_i7_13700k")
  const [cpu2, setCpu2] = useState<string>("amd_r7_7700x")

  const processor1 = processors[cpu1 as keyof typeof processors]
  const processor2 = processors[cpu2 as keyof typeof processors]

  // Calculate max values for benchmarks to normalize
  const maxValues = {
    singleCore: Math.max(...Object.values(processors).map((p) => p.benchmarks.singleCore)),
    multiCore: Math.max(...Object.values(processors).map((p) => p.benchmarks.multiCore)),
    gaming: Math.max(...Object.values(processors).map((p) => p.benchmarks.gaming)),
    productivity: Math.max(...Object.values(processors).map((p) => p.benchmarks.productivity)),
    power: Math.max(...Object.values(processors).map((p) => p.benchmarks.power)),
    temperature: Math.max(...Object.values(processors).map((p) => p.benchmarks.temperature)),
    price: Math.max(...Object.values(processors).map((p) => p.benchmarks.price)),
  }

  const getColorClass = (value1: number, value2: number, invert = false) => {
    if (invert) {
      if (value1 < value2) return "text-green-500 font-medium"
      if (value1 > value2) return "text-red-500"
      return "text-yellow-500"
    } else {
      if (value1 > value2) return "text-green-500 font-medium"
      if (value1 < value2) return "text-red-500"
      return "text-yellow-500"
    }
  }

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Эхний процессор</label>
              <Select value={cpu1} onValueChange={setCpu1}>
                <SelectTrigger className="bg-white/80 dark:bg-black/20 border-0 shadow-sm">
                  <SelectValue placeholder="Процессор сонгоно уу" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(processors).map(([id, cpu]) => (
                    <SelectItem key={id} value={id}>
                      {cpu.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Хоёр дахь процессор</label>
              <Select value={cpu2} onValueChange={setCpu2}>
                <SelectTrigger className="bg-white/80 dark:bg-black/20 border-0 shadow-sm">
                  <SelectValue placeholder="Процессор сонгоно уу" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(processors).map(([id, cpu]) => (
                    <SelectItem key={id} value={id}>
                      {cpu.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {processor1 && processor2 && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden border-none shadow-md bg-white dark:bg-black/20">
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-6 flex justify-center">
                <img
                  src={processor1.image || "/placeholder.svg"}
                  alt={processor1.name}
                  className="h-32 w-32 object-contain"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-bold">{processor1.name}</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md bg-white dark:bg-black/20">
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-6 flex justify-center">
                <img
                  src={processor2.image || "/placeholder.svg"}
                  alt={processor2.name}
                  className="h-32 w-32 object-contain"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-bold">{processor2.name}</h3>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden border-none shadow-md bg-white dark:bg-black/20">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-4">
              <h2 className="font-bold text-lg">Техникийн үзүүлэлт</h2>
            </div>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="grid grid-cols-3 p-4 bg-muted/30">
                  <div className="font-medium">Үзүүлэлт</div>
                  <div className="font-medium text-center">{processor1.name}</div>
                  <div className="font-medium text-center">{processor2.name}</div>
                </div>

                <div className="grid grid-cols-3 p-4">
                  <div>Цөм</div>
                  <div className="text-center text-sm">{processor1.specs.cores}</div>
                  <div className="text-center text-sm">{processor2.specs.cores}</div>
                </div>

                <div className="grid grid-cols-3 p-4 bg-muted/30">
                  <div>Утас</div>
                  <div className="text-center text-sm">{processor1.specs.threads}</div>
                  <div className="text-center text-sm">{processor2.specs.threads}</div>
                </div>

                <div className="grid grid-cols-3 p-4">
                  <div>Суурь хурд</div>
                  <div className="text-center text-sm">{processor1.specs.baseClock}</div>
                  <div className="text-center text-sm">{processor2.specs.baseClock}</div>
                </div>

                <div className="grid grid-cols-3 p-4 bg-muted/30">
                  <div>Boost хурд</div>
                  <div className="text-center text-sm">{processor1.specs.boostClock}</div>
                  <div className="text-center text-sm">{processor2.specs.boostClock}</div>
                </div>

                <div className="grid grid-cols-3 p-4">
                  <div>Cache</div>
                  <div className="text-center text-sm">{processor1.specs.cache}</div>
                  <div className="text-center text-sm">{processor2.specs.cache}</div>
                </div>

                <div className="grid grid-cols-3 p-4 bg-muted/30">
                  <div>TDP</div>
                  <div className="text-center text-sm">{processor1.specs.tdp}</div>
                  <div className="text-center text-sm">{processor2.specs.tdp}</div>
                </div>

                <div className="grid grid-cols-3 p-4">
                  <div>Socket</div>
                  <div className="text-center text-sm">{processor1.specs.socket}</div>
                  <div className="text-center text-sm">{processor2.specs.socket}</div>
                </div>

                <div className="grid grid-cols-3 p-4 bg-muted/30">
                  <div>Технологи</div>
                  <div className="text-center text-sm">{processor1.specs.lithography}</div>
                  <div className="text-center text-sm">{processor2.specs.lithography}</div>
                </div>

                <div className="grid grid-cols-3 p-4">
                  <div>Санах ой</div>
                  <div className="text-center text-sm">{processor1.specs.memory}</div>
                  <div className="text-center text-sm">{processor2.specs.memory}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-md bg-white dark:bg-black/20">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-4">
              <h2 className="font-bold text-lg">Benchmark харьцуулалт</h2>
            </div>
            <CardContent className="p-6">
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-blue-500" /> Нэг цөмийн гүйцэтгэл
                    </span>
                    <div className="grid grid-cols-2 gap-8 text-right">
                      <span
                        className={getColorClass(processor1.benchmarks.singleCore, processor2.benchmarks.singleCore)}
                      >
                        {processor1.benchmarks.singleCore}
                      </span>
                      <span
                        className={getColorClass(processor2.benchmarks.singleCore, processor1.benchmarks.singleCore)}
                      >
                        {processor2.benchmarks.singleCore}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Progress
                        value={(processor1.benchmarks.singleCore / maxValues.singleCore) * 100}
                        className="h-2 bg-blue-100 dark:bg-blue-950/30 [&>div]:bg-blue-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{processor1.name}</div>
                    </div>
                    <div className="space-y-1">
                      <Progress
                        value={(processor2.benchmarks.singleCore / maxValues.singleCore) * 100}
                        className="h-2 bg-indigo-100 dark:bg-indigo-950/30 [&>div]:bg-indigo-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{processor2.name}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-purple-500" /> Олон цөмийн гүйцэтгэл
                    </span>
                    <div className="grid grid-cols-2 gap-8 text-right">
                      <span className={getColorClass(processor1.benchmarks.multiCore, processor2.benchmarks.multiCore)}>
                        {processor1.benchmarks.multiCore.toLocaleString()}
                      </span>
                      <span className={getColorClass(processor2.benchmarks.multiCore, processor1.benchmarks.multiCore)}>
                        {processor2.benchmarks.multiCore.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Progress
                        value={(processor1.benchmarks.multiCore / maxValues.multiCore) * 100}
                        className="h-2 bg-blue-100 dark:bg-blue-950/30 [&>div]:bg-blue-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{processor1.name}</div>
                    </div>
                    <div className="space-y-1">
                      <Progress
                        value={(processor2.benchmarks.multiCore / maxValues.multiCore) * 100}
                        className="h-2 bg-indigo-100 dark:bg-indigo-950/30 [&>div]:bg-indigo-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{processor2.name}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium flex items-center gap-2">
                      <Zap className="h-4 w-4 text-amber-500" /> Тоглоомын гүйцэтгэл
                    </span>
                    <div className="grid grid-cols-2 gap-8 text-right">
                      <span className={getColorClass(processor1.benchmarks.gaming, processor2.benchmarks.gaming)}>
                        {processor1.benchmarks.gaming}/200
                      </span>
                      <span className={getColorClass(processor2.benchmarks.gaming, processor1.benchmarks.gaming)}>
                        {processor2.benchmarks.gaming}/200
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Progress
                        value={(processor1.benchmarks.gaming / maxValues.gaming) * 100}
                        className="h-2 bg-blue-100 dark:bg-blue-950/30 [&>div]:bg-blue-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{processor1.name}</div>
                    </div>
                    <div className="space-y-1">
                      <Progress
                        value={(processor2.benchmarks.gaming / maxValues.gaming) * 100}
                        className="h-2 bg-indigo-100 dark:bg-indigo-950/30 [&>div]:bg-indigo-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{processor2.name}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium flex items-center gap-2">
                      <Zap className="h-4 w-4 text-green-500" /> Бүтээмжийн гүйцэтгэл
                    </span>
                    <div className="grid grid-cols-2 gap-8 text-right">
                      <span
                        className={getColorClass(
                          processor1.benchmarks.productivity,
                          processor2.benchmarks.productivity,
                        )}
                      >
                        {processor1.benchmarks.productivity}/220
                      </span>
                      <span
                        className={getColorClass(
                          processor2.benchmarks.productivity,
                          processor1.benchmarks.productivity,
                        )}
                      >
                        {processor2.benchmarks.productivity}/220
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Progress
                        value={(processor1.benchmarks.productivity / maxValues.productivity) * 100}
                        className="h-2 bg-blue-100 dark:bg-blue-950/30 [&>div]:bg-blue-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{processor1.name}</div>
                    </div>
                    <div className="space-y-1">
                      <Progress
                        value={(processor2.benchmarks.productivity / maxValues.productivity) * 100}
                        className="h-2 bg-indigo-100 dark:bg-indigo-950/30 [&>div]:bg-indigo-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{processor2.name}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium flex items-center gap-2">
                      <Zap className="h-4 w-4 text-red-500" /> Цахилгааны хэрэглээ (Watt)
                    </span>
                    <div className="grid grid-cols-2 gap-8 text-right">
                      <span className={getColorClass(processor1.benchmarks.power, processor2.benchmarks.power, true)}>
                        {processor1.benchmarks.power}W
                      </span>
                      <span className={getColorClass(processor2.benchmarks.power, processor1.benchmarks.power, true)}>
                        {processor2.benchmarks.power}W
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Progress
                        value={(processor1.benchmarks.power / maxValues.power) * 100}
                        className="h-2 bg-blue-100 dark:bg-blue-950/30 [&>div]:bg-blue-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{processor1.name}</div>
                    </div>
                    <div className="space-y-1">
                      <Progress
                        value={(processor2.benchmarks.power / maxValues.power) * 100}
                        className="h-2 bg-indigo-100 dark:bg-indigo-950/30 [&>div]:bg-indigo-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{processor2.name}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-orange-500" /> Температур (°C)
                    </span>
                    <div className="grid grid-cols-2 gap-8 text-right">
                      <span
                        className={getColorClass(
                          processor1.benchmarks.temperature,
                          processor2.benchmarks.temperature,
                          true,
                        )}
                      >
                        {processor1.benchmarks.temperature}°C
                      </span>
                      <span
                        className={getColorClass(
                          processor2.benchmarks.temperature,
                          processor1.benchmarks.temperature,
                          true,
                        )}
                      >
                        {processor2.benchmarks.temperature}°C
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Progress
                        value={(processor1.benchmarks.temperature / maxValues.temperature) * 100}
                        className="h-2 bg-blue-100 dark:bg-blue-950/30 [&>div]:bg-blue-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{processor1.name}</div>
                    </div>
                    <div className="space-y-1">
                      <Progress
                        value={(processor2.benchmarks.temperature / maxValues.temperature) * 100}
                        className="h-2 bg-indigo-100 dark:bg-indigo-950/30 [&>div]:bg-indigo-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{processor2.name}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-sky-500" /> Үнэ (USD)
                    </span>
                    <div className="grid grid-cols-2 gap-8 text-right">
                      <span className={getColorClass(processor1.benchmarks.price, processor2.benchmarks.price, true)}>
                        ${processor1.benchmarks.price}
                      </span>
                      <span className={getColorClass(processor2.benchmarks.price, processor1.benchmarks.price, true)}>
                        ${processor2.benchmarks.price}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Progress
                        value={(processor1.benchmarks.price / maxValues.price) * 100}
                        className="h-2 bg-blue-100 dark:bg-blue-950/30 [&>div]:bg-blue-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{processor1.name}</div>
                    </div>
                    <div className="space-y-1">
                      <Progress
                        value={(processor2.benchmarks.price / maxValues.price) * 100}
                        className="h-2 bg-indigo-100 dark:bg-indigo-950/30 [&>div]:bg-indigo-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{processor2.name}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Үнэ-гүйцэтгэлийн харьцаа:</h4>
                    <div className="text-lg font-bold">
                      {(processor1.benchmarks.multiCore / processor1.benchmarks.price).toFixed(2)}
                      <span className="text-sm font-normal text-muted-foreground ml-1">оноо/доллар</span>
                    </div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-indigo-700 dark:text-indigo-300">Үнэ-гүйцэтгэлийн харьцаа:</h4>
                    <div className="text-lg font-bold">
                      {(processor2.benchmarks.multiCore / processor2.benchmarks.price).toFixed(2)}
                      <span className="text-sm font-normal text-muted-foreground ml-1">оноо/доллар</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

