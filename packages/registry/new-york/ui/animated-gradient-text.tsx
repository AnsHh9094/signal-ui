import React from "react"
import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  animationDuration?: string
}

export function AnimatedGradientText({
  children,
  className,
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationDuration = "3s",
}: AnimatedGradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "200% auto",
    animation: `shimmer ${animationDuration} linear infinite`,
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: -200% center; }
        }
      `}} />
      <span
        style={gradientStyle}
        className={cn(
          "bg-clip-text text-transparent",
          className
        )}
      >
        {children}
      </span>
    </>
  )
}
