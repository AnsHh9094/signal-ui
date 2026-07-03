"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface VoiceWaveformProps extends React.HTMLAttributes<HTMLDivElement> {
  isListening?: boolean
  isSpeaking?: boolean
  barsCount?: number
  color?: string
}

export function VoiceWaveform({
  isListening = false,
  isSpeaking = false,
  barsCount = 15,
  color = "rgb(168, 85, 247)", // Default purple-500
  className,
  ...props
}: VoiceWaveformProps) {
  // Generate bar indexes
  const bars = Array.from({ length: barsCount })

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1 h-24 w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 relative overflow-hidden",
        className
      )}
      {...props}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes speak {
          0%, 100% { transform: scaleY(0.15); }
          50% { transform: scaleY(1); }
        }
        @keyframes listen {
          0%, 100% { transform: scaleY(0.1); }
          50% { transform: scaleY(0.35); }
        }
        .waveform-bar-speak {
          animation: speak 1.2s ease-in-out infinite;
        }
        .waveform-bar-listen {
          animation: listen 1s ease-in-out infinite;
        }
      `}} />

      <div className="flex items-center justify-center gap-1.5 h-16 w-full px-4">
        {bars.map((_, index) => {
          // Determine custom animation delay and duration for organic look
          const delay = `${(index % 5) * 0.15}s`
          const duration = `${0.8 + (index % 4) * 0.2}s`
          
          let stateClass = ""
          let style: React.CSSProperties = {
            backgroundColor: color,
            transformOrigin: "center",
          }

          if (isSpeaking) {
            stateClass = "waveform-bar-speak"
            style.animationDelay = delay
            style.animationDuration = duration
          } else if (isListening) {
            stateClass = "waveform-bar-listen"
            style.animationDelay = delay
            style.animationDuration = "0.8s"
          } else {
            // Idle state: very small static height
            style.transform = "scaleY(0.08)"
          }

          return (
            <div
              key={index}
              className={cn(
                "w-1 md:w-1.5 h-12 rounded-full transition-transform duration-300",
                stateClass
              )}
              style={style}
            />
          )
        })}
      </div>
    </div>
  )
}
