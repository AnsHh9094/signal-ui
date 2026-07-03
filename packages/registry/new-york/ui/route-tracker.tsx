"use client"

import React, { useRef, useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Plane, ArrowLeftRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface RouteTrackerProps {
  className?: string
  fromCode?: string
  fromCity?: string
  fromTime?: string
  toCode?: string
  toCity?: string
  toTime?: string
  eta?: string
  etaLabel?: string
  countdown?: string
  duration?: string
  initialProgress?: number // 0 to 100
}

export function RouteTracker({
  className,
  fromCode = "YYZ",
  fromCity = "Toronto",
  fromTime = "MON, 6:14 PM",
  toCode = "HND",
  toCity = "Tokyo",
  toTime = "TUE, 7:14 AM",
  eta = "2:15 PM",
  etaLabel = "Tokyo Time",
  countdown = "DINNER IN 2:34H",
  duration = "-7H 01M",
  initialProgress = 35,
}: RouteTrackerProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(initialProgress)
  const x = useMotionValue(0)

  // Drag handler to update progress percentage
  const handleDrag = () => {
    if (!trackRef.current) return
    const trackWidth = trackRef.current.clientWidth
    const currentX = x.get()
    const newProgress = Math.min(Math.max((currentX / (trackWidth - 56)) * 100, 0), 100)
    setProgress(Math.round(newProgress))
  }

  // Calculate width of progress bar based on handle position
  const handleX = useMotionValue(0)
  React.useEffect(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.clientWidth
      x.set((progress / 100) * (trackWidth - 56))
    }
  }, [progress])

  return (
    <div
      className={cn(
        "w-full max-w-md rounded-[28px] border border-zinc-800/80 bg-zinc-950/90 p-6 text-zinc-100 shadow-2xl backdrop-blur-xl relative overflow-hidden select-none",
        className
      )}
    >
      {/* Subtle Dot Matrix Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f23_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      {/* Main Info Row */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className="space-y-4">
          {/* Dotted-style LED Route Display */}
          <div className="flex items-center gap-3">
            <span className="text-4xl font-black tracking-wider text-zinc-100 font-mono drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              {fromCode}
            </span>
            <span className="text-xl text-amber-500 font-bold">→</span>
            <span className="text-4xl font-black tracking-wider text-zinc-100 font-mono drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              {toCode}
            </span>
          </div>

          {/* Time & City Details */}
          <div className="flex gap-8">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-zinc-200">{fromCity}</p>
              <p className="text-xs text-zinc-500 font-medium">{fromTime}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-zinc-200">{toCity}</p>
              <p className="text-xs text-zinc-500 font-medium">{toTime}</p>
            </div>
          </div>
        </div>

        {/* ETA Widget Card */}
        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-4 min-w-[140px] space-y-1.5 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-300">ETA {eta}</span>
            <button className="text-zinc-500 hover:text-zinc-300 transition-colors p-0.5 rounded-full hover:bg-zinc-800">
              <ArrowLeftRight className="h-3 w-3" />
            </button>
          </div>
          <p className="text-[10px] text-zinc-500 font-medium">{etaLabel}</p>
          <p className="text-xs font-bold text-orange-500 tracking-wide pt-1">
            {countdown}
          </p>
        </div>
      </div>

      {/* Interactive Progress Slider Track */}
      <div className="space-y-2 relative z-10">
        <div
          ref={trackRef}
          className="relative w-full h-14 bg-zinc-900/80 rounded-full border border-zinc-800/40 p-1 flex items-center overflow-hidden"
        >
          {/* Filled Progress Area with Ambient Glow */}
          <motion.div
            style={{ width: useTransform(x, (value) => value + 28) }}
            className="absolute left-1 top-1 bottom-1 bg-gradient-to-r from-lime-500/10 to-lime-500/20 rounded-full pointer-events-none"
          />
          <motion.div
            style={{ width: useTransform(x, (value) => value + 28) }}
            className="absolute left-1 top-1 bottom-1 bg-lime-500/30 rounded-full blur-md pointer-events-none"
          />

          {/* Draggable Airplane Slider Handle */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: trackRef.current ? trackRef.current.clientWidth - 56 : 300 }}
            dragElastic={0}
            dragMomentum={false}
            onDrag={handleDrag}
            style={{ x }}
            className="relative z-20 h-12 w-12 rounded-full bg-gradient-to-b from-lime-400 to-lime-500 shadow-[0_4px_20px_rgba(163,230,53,0.4)] border border-lime-300/40 flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-105 transition-transform"
          >
            <Plane className="h-5 w-5 text-zinc-950 fill-zinc-950 rotate-90" />
          </motion.div>

          {/* Remaining duration display */}
          <div className="absolute right-6 text-xs font-mono font-bold text-zinc-500 pointer-events-none select-none">
            {duration}
          </div>
        </div>

        {/* Progress Percentage Display */}
        <div className="flex justify-between px-2 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
          <span>Progress</span>
          <span className="text-lime-500">{progress}% Completed</span>
        </div>
      </div>
    </div>
  )
}
