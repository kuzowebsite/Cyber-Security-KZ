"use client"

import { useEffect } from "react"

export default function GoogleSearch() {
  useEffect(() => {
    // Load Google Custom Search script
    const script = document.createElement("script")
    script.src = "https://cse.google.com/cse.js?cx=b6c9bcace10fe4982"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup on unmount
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
      <div className="gcse-search"></div>
    </div>
  )
}
