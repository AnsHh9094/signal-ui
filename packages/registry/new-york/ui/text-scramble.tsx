"use client"

import React, { useEffect, useState } from "react"

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"

interface TextScrambleProps {
  text: string
  className?: string
  scrambleOnMount?: boolean
  scrambleOnHover?: boolean
  duration?: number
}

export function TextScramble({
  text,
  className,
  scrambleOnMount = true,
  scrambleOnHover = true,
  duration = 800,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)

  const scramble = () => {
    if (isScrambling) return
    setIsScrambling(true)
    
    let iteration = 0
    const maxIterations = 20
    const intervalTime = duration / maxIterations

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            if (char === " ") return " "
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
          })
          .join("")
      )

      if (iteration >= text.length) {
        clearInterval(interval)
        setDisplayText(text)
        setIsScrambling(false)
      }

      iteration += text.length / maxIterations
    }, intervalTime)
  }

  useEffect(() => {
    if (scrambleOnMount) {
      scramble()
    }
  }, [scrambleOnMount])

  return (
    <span
      className={className}
      onMouseEnter={scrambleOnHover ? scramble : undefined}
    >
      {displayText}
    </span>
  )
}
