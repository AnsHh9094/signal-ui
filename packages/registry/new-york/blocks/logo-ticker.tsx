"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface LogoTickerProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number // speed in seconds
}

export function LogoTicker({ className, speed = 25, ...props }: LogoTickerProps) {
  const logos = [
    {
      name: "Acme Corp",
      logo: (
        <svg className="h-7 w-auto text-zinc-400 hover:text-zinc-200 transition-colors duration-300" viewBox="0 0 120 30" fill="currentColor">
          <path d="M15 5 L25 22 L5 22 Z M35 7 h6v16h-6z M45 15 a5 5 0 0 1 10 0 a5 5 0 0 1 -10 0 M60 23 V7 h4 l8 9 V7 h5 v16 h-4 l-8 -9 v9 z M85 7 h10 v4 h-6 v2 h5 v4 h-5 v2 h6 v4 h-10 z" />
        </svg>
      )
    },
    {
      name: "Globex",
      logo: (
        <svg className="h-7 w-auto text-zinc-400 hover:text-zinc-200 transition-colors duration-300" viewBox="0 0 120 30" fill="currentColor">
          <circle cx="15" cy="15" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M15 6 v18 M6 15 h18 M15 15 L22 22 M15 15 L8 8 M35 7 h5 v12 a4 4 0 0 0 8 0 V7 h5 v12 a9 9 0 0 1 -18 0 z M60 7 h5 v12 h8 v4 h-13 z M78 7 h12 v4 h-7 v2 h6 v4 h-6 v2 h7 v4 h-12 z M95 7 L102 15 L95 23 h6 L105 17 L109 23 h6 L109 15 L115 7 h-6 L105 13 L101 7 z" />
        </svg>
      )
    },
    {
      name: "Initech",
      logo: (
        <svg className="h-7 w-auto text-zinc-400 hover:text-zinc-200 transition-colors duration-300" viewBox="0 0 120 30" fill="currentColor">
          <path d="M5 23 V7 h6 v16 z M15 7 L23 18 V7 h5 v16 h-4 L21 12 v11 h-6 z M35 7 h5 v16 h-5 z M45 7 h12 v4 h-4 v12 h-5 V11 h-3 z M62 7 h10 v4 h-6 v2 h5 v4 h-5 v2 h6 v4 h-10 z M77 15 a5 5 0 0 1 10 0 a5 5 0 0 1 -10 0 M92 7 h5 v6 a5 5 0 0 1 10 0 V7 h5 v12 a9 9 0 0 1 -18 0 z" />
        </svg>
      )
    },
    {
      name: "Umbrella",
      logo: (
        <svg className="h-7 w-auto text-zinc-400 hover:text-zinc-200 transition-colors duration-300" viewBox="0 0 120 30" fill="currentColor">
          <path d="M15 5 c7 0 10 4 10 9 h-20 c0 -5 3 -9 10 -9 z M15 14 v11 h-2 v-11 z M25 7 L32 15 L25 23 h6 L35 17 L39 23 h6 L39 15 L45 7 h-6 L35 13 L31 7 z M50 15 a5 5 0 0 1 10 0 a5 5 0 0 1 -10 0 M65 23 V7 h4 l8 9 V7 h5 v16 h-4 l-8 -9 v9 z M85 7 h10 v4 h-6 v2 h5 v4 h-5 v2 h6 v4 h-10 z M100 7 h5 v12 h8 v4 h-13 z" />
        </svg>
      )
    },
    {
      name: "Stark Ind",
      logo: (
        <svg className="h-7 w-auto text-zinc-400 hover:text-zinc-200 transition-colors duration-300" viewBox="0 0 120 30" fill="currentColor">
          <path d="M5 7 h14 v4 h-9 v2 h7 v4 h-7 v4 h9 v3 h-14 z M23 7 h10 v4 h-7 v12 h-3 z M38 7 L45 23 h5 L57 7 h-6 L47 16 L43 7 z M62 23 V7 h4 l8 9 V7 h5 v16 h-4 l-8 -9 v9 z M85 7 h10 v4 h-6 v2 h5 v4 h-5 v2 h6 v4 h-10 z M100 15 a5 5 0 0 1 10 0 a5 5 0 0 1 -10 0" />
        </svg>
      )
    }
  ]

  return (
    <section className={cn("w-full py-12 bg-zinc-950/20 border-y border-zinc-900/60 overflow-hidden relative", className)} {...props}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-ticker {
          animation: ticker ${speed}s linear infinite;
        }
      `}} />
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
          Trusted by the world's most innovative teams
        </p>
      </div>

      <div className="relative flex w-full">
        {/* Left Gradient Fade */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right Gradient Fade */}
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-logo-ticker whitespace-nowrap">
          {/* First set of logos */}
          <div className="flex shrink-0 items-center justify-around gap-16 md:gap-24 px-8 md:px-12">
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
                {logo.logo}
              </div>
            ))}
          </div>

          {/* Duplicated set of logos for seamless looping */}
          <div className="flex shrink-0 items-center justify-around gap-16 md:gap-24 px-8 md:px-12">
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
                {logo.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
