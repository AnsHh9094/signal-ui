"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TypewriterProps {
  text: string | string[]
  className?: string
  cursorClassName?: string
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
  loop?: boolean
}

export function Typewriter({
  text,
  className,
  cursorClassName,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
  loop = true,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = Array.isArray(text) ? text : [text]

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const currentString = texts[currentIndex]

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentString.substring(0, displayText.length - 1))
        
        if (displayText.length === 0) {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
          
          if (!loop && currentIndex === texts.length - 1) {
            setCurrentIndex(currentIndex) // Stop at last text
          }
        }
      }, deletingSpeed)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentString.substring(0, displayText.length + 1))
        
        if (displayText.length === currentString.length) {
          if (loop || currentIndex < texts.length - 1) {
            timeout = setTimeout(() => setIsDeleting(true), delayBetweenTexts)
          }
        }
      }, typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, delayBetweenTexts, loop])

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span>{displayText}</span>
      <span 
        className={cn("ml-1 h-[1em] w-[2px] bg-foreground animate-pulse", cursorClassName)} 
      />
    </span>
  )
}
