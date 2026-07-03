"use client"

import React, { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export interface StreamingTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  speed?: number // delay between characters in ms
  cursorClassName?: string
  streaming?: boolean
  onComplete?: () => void
}

export function StreamingText({
  text,
  speed = 30,
  cursorClassName,
  streaming = true,
  onComplete,
  className,
  ...props
}: StreamingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isDone, setIsDone] = useState(!streaming)
  const textIndex = useRef(0)

  useEffect(() => {
    if (!streaming) {
      setDisplayedText(text)
      setIsDone(true)
      return
    }

    setDisplayedText("")
    setIsDone(false)
    textIndex.current = 0

    const interval = setInterval(() => {
      if (textIndex.current < text.length) {
        setDisplayedText((prev) => prev + text.charAt(textIndex.current))
        textIndex.current += 1
      } else {
        clearInterval(interval)
        setIsDone(true)
        if (onComplete) {
          onComplete()
        }
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, streaming, onComplete])

  return (
    <div
      className={cn(
        "font-sans text-sm md:text-base leading-relaxed text-zinc-300 font-light whitespace-pre-wrap select-text",
        className
      )}
      {...props}
    >
      {displayedText}
      {!isDone && (
        <span
          className={cn(
            "inline-block w-1.5 h-4 ml-1 translate-y-0.5 bg-purple-500 animate-[pulse_0.8s_infinite] shrink-0",
            cursorClassName
          )}
        />
      )}
    </div>
  )
}
