"use client"

import { useEffect, useState } from "react"

const lines = [
  "docker build -t vinner .",
  "git push origin main",
  "npm run deploy"
]

export default function TerminalMock() {
  const [typedLines, setTypedLines] = useState<string[]>(["", "", ""])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      const timeout = setTimeout(() => {
        setShowSuccess(true)
      }, 500)
      return () => clearTimeout(timeout)
    }

    const currentText = lines[currentLineIndex]
    if (currentCharIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setTypedLines(prev => {
          const next = [...prev]
          next[currentLineIndex] = currentText.slice(0, currentCharIndex + 1)
          return next
        })
        setCurrentCharIndex(prev => prev + 1)
      }, 50 + Math.random() * 30) // Human-like typing speed variation
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1)
        setCurrentCharIndex(0)
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [currentLineIndex, currentCharIndex])

  return (
    <div className="font-mono text-[10px] xl:text-xs text-[#1A1A1A]/60 dark:text-[#E8E4D9]/70 flex flex-col gap-1 select-none w-full text-left">
      {typedLines.map((line, idx) => {
        const isCurrent = idx === currentLineIndex
        
        // Only render the line if we've reached it
        if (idx > currentLineIndex && line === "") return null

        return (
          <span key={idx} className="whitespace-nowrap">
            <span className="text-[#4C4B40]/75 dark:text-[#E8E4D9]/50 font-semibold">$</span>{" "}
            {line}
            {isCurrent && !showSuccess && <span className="animate-pulse">▌</span>}
          </span>
        )
      })}
      {showSuccess && (
        <span className="text-[#15803D] dark:text-[#4ade80] font-bold whitespace-nowrap transition-opacity duration-300">
           ✔ Deployed to AWS (3.4s)<span className="animate-pulse">▌</span>
        </span>
      )}
    </div>
  )
}
