"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Battery, Cpu, Camera, MemoryStickIcon as Memory, Smartphone, Wifi } from 'lucide-react'
import { Separator } from "@/components/ui/separator"

// Sample smartphone data
const smartphones = {
  iphone15: {
    name: "iPhone 15",
    image: "iphone_15.png?height=250&width=250",
    specs: {
      processor: "A16 Bionic chip",
      display: "6.1 inch Super Retina XDR OLED",
      camera: "48MP бүхий гурван камертай",
      battery: "3877 mAh",
      storage: "128GB, 256GB, 512GB",
      ram: "6GB",
      os: "iOS 17",
      weight: "171g",
      dimensions: "146.7 x 71.5 x 7.8 mm",
      waterproof: "IP68",
      charging: "27W wired, 15W MagSafe wireless",
    },
    benchmarks: {
      antutu: 950000,
      geekbench: 6400,
      camera: 145,
      battery: 86,
      display: 92,
    },
  },
  iphone15pro: {
    name: "iPhone 15 Pro",
    image: "iPhone_15_Pro.png?height=250&width=250",
    specs: {
      processor: "A17 Pro chip",
      display: "6.1 inch Super Retina XDR OLED, ProMotion",
      camera: "48MP өндөр нарийвчлалтай дөрвөн камертай",
      battery: "3650 mAh",
      storage: "128GB, 256GB, 512GB, 1TB",
      ram: "8GB",
      os: "iOS 17",
      weight: "187g",
      dimensions: "146.6 x 70.6 x 8.25 mm",
      waterproof: "IP68",
      charging: "27W wired, 15W MagSafe wireless",
    },
    benchmarks: {
      antutu: 1230000,
      geekbench: 7400,
      camera: 152,
      battery: 83,
      display: 96,
    },
  },
  samsungs23: {
    name: "Samsung Galaxy S23",
    image: "/Samsung_Galaxy_S23.png?height=250&width=250",
    specs: {
      processor: "Snapdragon 8 Gen 2",
      display: "6.1 inch Dynamic AMOLED 2X, 120Hz",
      camera: "50MP + 12MP + 10MP гурван камертай",
      battery: "3900 mAh",
      storage: "128GB, 256GB",
      ram: "8GB",
      os: "Android 13, One UI 5.1",
      weight: "168g",
      dimensions: "146.3 x 70.9 x 7.6 mm",
      waterproof: "IP68",
      charging: "25W wired, 15W wireless",
    },
    benchmarks: {
      antutu: 1020000,
      geekbench: 5800,
      camera: 140,
      battery: 89,
      display: 93,
    },
  },
  samsungs23ultra: {
    name: "Samsung Galaxy S23 Ultra",
    image: "samsung-galaxy-s23-ultra.webp?height=250&width=250",
    specs: {
      processor: "Snapdragon 8 Gen 2",
      display: "6.8 inch Dynamic AMOLED 2X, 120Hz",
      camera: "200MP + 12MP + 10MP + 10MP дөрвөн камертай",
      battery: "5000 mAh",
      storage: "256GB, 512GB, 1TB",
      ram: "12GB",
      os: "Android 13, One UI 5.1",
      weight: "234g",
      dimensions: "163.4 x 78.1 x 8.9 mm",
      waterproof: "IP68",
      charging: "45W wired, 15W wireless",
    },
    benchmarks: {
      antutu: 1140000,
      geekbench: 6200,
      camera: 151,
      battery: 94,
      display: 95,
    },
  },
  xiaomi13: {
    name: "Xiaomi 13",
    image: "/Xiaomi_13.png?height=250&width=250",
    specs: {
      processor: "Snapdragon 8 Gen 2",
      display: "6.36 inch AMOLED, 120Hz",
      camera: "50MP + 10MP + 12MP гурван камертай (Leica)",
      battery: "4500 mAh",
      storage: "128GB, 256GB",
      ram: "8GB, 12GB",
      os: "Android 13, MIUI 14",
      weight: "189g",
      dimensions: "152.8 x 71.5.3 x 8.0 mm",
      waterproof: "IP68",
      charging: "67W wired, 50W wireless",
    },
    benchmarks: {
      antutu: 1070000,
      geekbench: 5900,
      camera: 138,
      battery: 90,
      display: 88,
    },
  },
}

export function SmartphoneComparison() {
  const [device1, setDevice1] = useState<string>("iphone15")
  const [device2, setDevice2] = useState<string>("samsungs23")

  const phone1 = smartphones[device1 as keyof typeof smartphones]
  const phone2 = smartphones[device2 as keyof typeof smartphones]

  // Calculate max values for benchmarks to normalize
  const maxValues = {
    antutu: Math.max(...Object.values(smartphones).map((s) => s.benchmarks.antutu)),
    geekbench: Math.max(...Object.values(smartphones).map((s) => s.benchmarks.geekbench)),
    camera: Math.max(...Object.values(smartphones).map((s) => s.benchmarks.camera)),
    battery: Math.max(...Object.values(smartphones).map((s) => s.benchmarks.battery)),
    display: Math.max(...Object.values(smartphones).map((s) => s.benchmarks.display)),
  }

  const getColorClass = (value1: number, value2: number) => {
    if (value1 > value2) return "text-green-500 font-medium"
    if (value1 < value2) return "text-red-500"
    return "text-yellow-500"
  }

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Эхний төхөөрөмж</label>
              <Select value={device1} onValueChange={setDevice1}>
                <SelectTrigger className="bg-white/80 dark:bg-black/20 border-0 shadow-sm">
                  <SelectValue placeholder="Төхөөрөмж сонгоно уу" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(smartphones).map(([id, phone]) => (
                    <SelectItem key={id} value={id}>
                      {phone.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Хоёр дахь төхөөрөмж</label>
              <Select value={device2} onValueChange={setDevice2}>
                <SelectTrigger className="bg-white/80 dark:bg-black/20 border-0 shadow-sm">
                  <SelectValue placeholder="Төхөөрөмж сонгоно уу" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(smartphones).map(([id, phone]) => (
                    <SelectItem key={id} value={id}>
                      {phone.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {phone1 && phone2 && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden border-none shadow-md bg-white dark:bg-black/20">
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-6 flex justify-center">
                <img src={phone1.image || "/placeholder.svg"} alt={phone1.name} className="h-40 w-40 object-contain" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-bold">{phone1.name}</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md bg-white dark:bg-black/20">
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-6 flex justify-center">
                <img src={phone2.image || "/placeholder.svg"} alt={phone2.name} className="h-40 w-40 object-contain" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-bold">{phone2.name}</h3>
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
                  <div className="font-medium text-center">{phone1.name}</div>
                  <div className="font-medium text-center">{phone2.name}</div>
                </div>

                <div className="grid grid-cols-3 p-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-blue-500" /> Процессор
                  </div>
                  <div className="text-center text-sm">{phone1.specs.processor}</div>
                  <div className="text-center text-sm">{phone2.specs.processor}</div>
                </div>

                <div className="grid grid-cols-3 p-4 bg-muted/30">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-indigo-500" /> Дэлгэц
                  </div>
                  <div className="text-center text-sm">{phone1.specs.display}</div>
                  <div className="text-center text-sm">{phone2.specs.display}</div>
                </div>

                <div className="grid grid-cols-3 p-4">
                  <div className="flex items-center gap-2">
                    <Camera className="h-4 w-4 text-purple-500" /> Камер
                  </div>
                  <div className="text-center text-sm">{phone1.specs.camera}</div>
                  <div className="text-center text-sm">{phone2.specs.camera}</div>
                </div>

                <div className="grid grid-cols-3 p-4 bg-muted/30">
                  <div className="flex items-center gap-2">
                    <Battery className="h-4 w-4 text-green-500" /> Батерей
                  </div>
                  <div className="text-center text-sm">{phone1.specs.battery}</div>
                  <div className="text-center text-sm">{phone2.specs.battery}</div>
                </div>

                <div className="grid grid-cols-3 p-4">
                  <div className="flex items-center gap-2">
                    <Memory className="h-4 w-4 text-amber-500" /> Сан
                  </div>
                  <div className="text-center text-sm">{phone1.specs.storage}</div>
                  <div className="text-center text-sm">{phone2.specs.storage}</div>
                </div>

                <div className="grid grid-cols-3 p-4 bg-muted/30">
                  <div className="flex items-center gap-2">
                    <Memory className="h-4 w-4 text-orange-500" /> RAM
                  </div>
                  <div className="text-center text-sm">{phone1.specs.ram}</div>
                  <div className="text-center text-sm">{phone2.specs.ram}</div>
                </div>

                <div className="grid grid-cols-3 p-4">
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-sky-500" /> Үйлдлийн систем
                  </div>
                  <div className="text-center text-sm">{phone1.specs.os}</div>
                  <div className="text-center text-sm">{phone2.specs.os}</div>
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
                    <span className="font-medium text-sm">AnTuTu (Нийт гүйцэтгэл)</span>
                    <div className="grid grid-cols-2 gap-8 text-right">
                      <span className={getColorClass(phone1.benchmarks.antutu, phone2.benchmarks.antutu)}>
                        {phone1.benchmarks.antutu.toLocaleString()}
                      </span>
                      <span className={getColorClass(phone2.benchmarks.antutu, phone1.benchmarks.antutu)}>
                        {phone2.benchmarks.antutu.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Progress
                        value={(phone1.benchmarks.antutu / maxValues.antutu) * 100}
                        className="h-2 bg-blue-100 dark:bg-blue-950/30 [&>div]:bg-blue-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{phone1.name}</div>
                    </div>
                    <div className="space-y-1">
                      <Progress
                        value={(phone2.benchmarks.antutu / maxValues.antutu) * 100}
                        className="h-2 bg-indigo-100 dark:bg-indigo-950/30 [&>div]:bg-indigo-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{phone2.name}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">Geekbench (CPU гүйцэтгэл)</span>
                    <div className="grid grid-cols-2 gap-8 text-right">
                      <span className={getColorClass(phone1.benchmarks.geekbench, phone2.benchmarks.geekbench)}>
                        {phone1.benchmarks.geekbench.toLocaleString()}
                      </span>
                      <span className={getColorClass(phone2.benchmarks.geekbench, phone1.benchmarks.geekbench)}>
                        {phone2.benchmarks.geekbench.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Progress
                        value={(phone1.benchmarks.geekbench / maxValues.geekbench) * 100}
                        className="h-2 bg-blue-100 dark:bg-blue-950/30 [&>div]:bg-blue-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{phone1.name}</div>
                    </div>
                    <div className="space-y-1">
                      <Progress
                        value={(phone2.benchmarks.geekbench / maxValues.geekbench) * 100}
                        className="h-2 bg-indigo-100 dark:bg-indigo-950/30 [&>div]:bg-indigo-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{phone2.name}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">Камерын чанар үнэлгээ</span>
                    <div className="grid grid-cols-2 gap-8 text-right">
                      <span className={getColorClass(phone1.benchmarks.camera, phone2.benchmarks.camera)}>
                        {phone1.benchmarks.camera}/150
                      </span>
                      <span className={getColorClass(phone2.benchmarks.camera, phone1.benchmarks.camera)}>
                        {phone2.benchmarks.camera}/150
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Progress
                        value={(phone1.benchmarks.camera / maxValues.camera) * 100}
                        className="h-2 bg-blue-100 dark:bg-blue-950/30 [&>div]:bg-blue-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{phone1.name}</div>
                    </div>
                    <div className="space-y-1">
                      <Progress
                        value={(phone2.benchmarks.camera / maxValues.camera) * 100}
                        className="h-2 bg-indigo-100 dark:bg-indigo-950/30 [&>div]:bg-indigo-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{phone2.name}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">Батерейн үнэлгээ</span>
                    <div className="grid grid-cols-2 gap-8 text-right">
                      <span className={getColorClass(phone1.benchmarks.battery, phone2.benchmarks.battery)}>
                        {phone1.benchmarks.battery}/100
                      </span>
                      <span className={getColorClass(phone2.benchmarks.battery, phone1.benchmarks.battery)}>
                        {phone2.benchmarks.battery}/100
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Progress
                        value={(phone1.benchmarks.battery / maxValues.battery) * 100}
                        className="h-2 bg-blue-100 dark:bg-blue-950/30 [&>div]:bg-blue-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{phone1.name}</div>
                    </div>
                    <div className="space-y-1">
                      <Progress
                        value={(phone2.benchmarks.battery / maxValues.battery) * 100}
                        className="h-2 bg-indigo-100 dark:bg-indigo-950/30 [&>div]:bg-indigo-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{phone2.name}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">Дэлгэцийн үнэлгээ</span>
                    <div className="grid grid-cols-2 gap-8 text-right">
                      <span className={getColorClass(phone1.benchmarks.display, phone2.benchmarks.display)}>
                        {phone1.benchmarks.display}/100
                      </span>
                      <span className={getColorClass(phone2.benchmarks.display, phone1.benchmarks.display)}>
                        {phone2.benchmarks.display}/100
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Progress
                        value={(phone1.benchmarks.display / maxValues.display) * 100}
                        className="h-2 bg-blue-100 dark:bg-blue-950/30 [&>div]:bg-blue-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{phone1.name}</div>
                    </div>
                    <div className="space-y-1">
                      <Progress
                        value={(phone2.benchmarks.display / maxValues.display) * 100}
                        className="h-2 bg-indigo-100 dark:bg-indigo-950/30 [&>div]:bg-indigo-500"
                      />
                      <div className="text-xs text-center text-muted-foreground">{phone2.name}</div>
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
