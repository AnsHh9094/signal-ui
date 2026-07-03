"use client"

import React, { useState } from "react"
import { VoiceWaveform } from "./voice-waveform"
import { Button } from "./button"
import { Mic, Volume2, Square, Sparkles } from "lucide-react"

export function VoiceWaveformDefault() {
  const [status, setStatus] = useState<"idle" | "listening" | "speaking">("speaking")
  const [colorMode, setColorMode] = useState<"purple" | "cyan" | "rose">("purple")

  const handleToggle = (state: "idle" | "listening" | "speaking") => {
    setStatus(state)
  }

  const getColor = () => {
    if (colorMode === "cyan") return "rgb(6, 182, 212)"
    if (colorMode === "rose") return "rgb(244, 63, 94)"
    return "rgb(168, 85, 247)" // default purple
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-md space-y-6 flex flex-col items-center">
      <div className="flex items-center gap-2 border-b border-zinc-900 pb-3 w-full justify-between">
        <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-purple-400" />
          Voice Visualizer
        </h4>
        <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-500 bg-zinc-900 px-2.5 py-0.5 rounded-full border border-zinc-800">
          {status}
        </span>
      </div>

      <VoiceWaveform 
        isListening={status === "listening"}
        isSpeaking={status === "speaking"}
        color={getColor()}
        barsCount={20}
        className="h-28 border-zinc-800/80 bg-zinc-950"
      />

      <div className="flex flex-col gap-4 w-full">
        {/* State Selection */}
        <div className="grid grid-cols-3 gap-2 w-full">
          <Button
            size="sm"
            variant={status === "idle" ? "default" : "outline"}
            onClick={() => handleToggle("idle")}
            className="rounded-lg text-xs gap-1.5"
          >
            <Square className="h-3.5 w-3.5" />
            Mute (Idle)
          </Button>
          <Button
            size="sm"
            variant={status === "listening" ? "default" : "outline"}
            onClick={() => handleToggle("listening")}
            className="rounded-lg text-xs gap-1.5"
          >
            <Mic className="h-3.5 w-3.5" />
            Listen
          </Button>
          <Button
            size="sm"
            variant={status === "speaking" ? "default" : "outline"}
            onClick={() => handleToggle("speaking")}
            className="rounded-lg text-xs gap-1.5"
          >
            <Volume2 className="h-3.5 w-3.5" />
            Speak
          </Button>
        </div>

        {/* Color Selection */}
        <div className="flex items-center justify-between border-t border-zinc-900 pt-3">
          <span className="text-xs text-zinc-500">Theme</span>
          <div className="flex items-center gap-2">
            {(["purple", "cyan", "rose"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setColorMode(c)}
                className={`h-4 w-4 rounded-full border transition-all ${
                  c === "purple" ? "bg-purple-500" : c === "cyan" ? "bg-cyan-500" : "bg-rose-500"
                } ${colorMode === c ? "ring-2 ring-purple-400 ring-offset-2 ring-offset-zinc-950" : "opacity-60"}`}
                aria-label={`Select ${c} color`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
