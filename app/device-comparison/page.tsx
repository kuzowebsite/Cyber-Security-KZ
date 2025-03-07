"use client"
import { useState } from "react"
import { SmartphoneComparison } from "@/components/comparison/smartphone-comparison"
import { ProcessorComparison } from "@/components/comparison/processor-comparison"
import { PcBuilder } from "@/components/comparison/pc-builder"
import { Smartphone, Cpu, Laptop } from "lucide-react"

export default function DeviceComparisonPage() {
  const [activeTab, setActiveTab] = useState<"smartphones" | "processors" | "pc-builder">("smartphones")

  return (
    <div className="container mx-auto py-6 px-4 md:py-10 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-3 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Техник хэрэгслийн үзүүлэлтийг харьцуулах</h1>
          <p className="text-muted-foreground">
            Төхөөрөмжүүдийн техникийн үзүүлэлтийг харьцуулж, PC угсралтын туслах хэрэгсэл
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          {/* Custom tab navigation */}
          <div className="bg-slate-900 dark:bg-slate-950 rounded-full p-1 w-[300px] flex justify-between">
            <button
              onClick={() => setActiveTab("smartphones")}
              className={`flex items-center justify-center w-1/3 h-12 rounded-full transition-all ${
                activeTab === "smartphones" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Smartphone className="h-5 w-5" />
            </button>
            <button
              onClick={() => setActiveTab("processors")}
              className={`flex items-center justify-center w-1/3 h-12 rounded-full transition-all ${
                activeTab === "processors" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Cpu className="h-5 w-5" />
            </button>
            <button
              onClick={() => setActiveTab("pc-builder")}
              className={`flex items-center justify-center w-1/3 h-12 rounded-full transition-all ${
                activeTab === "pc-builder" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Laptop className="h-5 w-5" />
            </button>
          </div>

          {/* Tab content */}
          <div className="w-full">
            {activeTab === "smartphones" && <SmartphoneComparison />}
            {activeTab === "processors" && <ProcessorComparison />}
            {activeTab === "pc-builder" && <PcBuilder />}
          </div>
        </div>
      </div>
    </div>
  )
}

