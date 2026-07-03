"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface BorderGlowProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  borderRadius?: string
  borderWidth?: number
  duration?: number
}

export function BorderGlow({
  children,
  className,
  glowColor = "rgba(59, 130, 246, 0.5)", // blue-500 with opacity
  borderRadius = "12px",
  borderWidth = 2,
  duration = 4,
}: BorderGlowProps) {
  return (
    <div
      className={cn("relative group", className)}
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--border-radius": borderRadius,
          "--glow-color": glowColor,
          "--duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin-gradient {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `
      }} />
      <div 
        className="absolute inset-0 z-0 overflow-hidden" 
        style={{ borderRadius: "var(--border-radius)" }}
      >
        <div 
          className="absolute left-1/2 top-1/2 aspect-square w-[200%] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `conic-gradient(from 0deg, transparent 0 340deg, var(--glow-color) 360deg)`,
            animation: "spin-gradient var(--duration) linear infinite",
          }}
        />
      </div>
      <div 
        className="absolute inset-[var(--border-width)] z-10 rounded-[calc(var(--border-radius)-var(--border-width))] bg-background"
      />
      <div className="relative z-20">
        {children}
      </div>
    </div>
  )
}
