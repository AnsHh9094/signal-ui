"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface TokenMeterProps {
  promptTokens: number
  completionTokens: number
  maxTokens?: number
  className?: string
}

export function TokenMeter({
  promptTokens,
  completionTokens,
  maxTokens = 8192,
  className,
}: TokenMeterProps) {
  const totalTokens = promptTokens + completionTokens
  const promptPercentage = Math.min((promptTokens / maxTokens) * 100, 100)
  const completionPercentage = Math.min((completionTokens / maxTokens) * 100, 100)
  
  const isNearLimit = totalTokens > maxTokens * 0.9
  const isOverLimit = totalTokens >= maxTokens

  return (
    <div className={cn("flex items-center space-x-3 text-xs text-zinc-500", className)}>
      <div className="flex flex-col items-end">
        <span className={cn(isOverLimit ? "text-red-500 font-medium" : isNearLimit ? "text-amber-500" : "")}>
          {totalTokens.toLocaleString()} / {maxTokens.toLocaleString()}
        </span>
      </div>
      
      <div className="relative h-1.5 w-24 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
        {/* Prompt tokens segment (Blue) */}
        <div 
          className="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${promptPercentage}%` }}
        />
        {/* Completion tokens segment (Purple) */}
        <div 
          className="absolute top-0 h-full bg-purple-500 transition-all duration-300"
          style={{ 
            left: `${promptPercentage}%`,
            width: `${completionPercentage}%` 
          }}
        />
      </div>
    </div>
  )
}
