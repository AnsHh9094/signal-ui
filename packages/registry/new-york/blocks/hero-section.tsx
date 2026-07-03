"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { AnimatedGradientText } from "@/registry/new-york/ui/animated-gradient-text"
import { Particles } from "@/registry/new-york/ui/particles"
import { Button } from "@/registry/new-york/ui/button"
import { ChevronRight } from "lucide-react"

export interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  badgeText?: string
  titleLine1?: string
  titleLine2?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
}

export function HeroSection({
  className,
  badgeText = "Introducing Signal UI Pro",
  titleLine1 = "Build beautiful",
  titleLine2 = "AI products faster.",
  description = "A curated, motion-native UI component library for building modern SaaS and AI applications. Copy, paste, and ship.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "View Components",
  ...props
}: HeroSectionProps) {
  return (
    <section 
      className={cn(
        "relative w-full overflow-hidden bg-background py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center",
        className
      )}
      {...props}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        color="#8B5CF6"
      />
      
      <div className="z-10 flex flex-col items-center gap-6 px-4 md:px-8 max-w-4xl">
        <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400 backdrop-blur-sm transition-colors hover:bg-purple-500/20 cursor-pointer">
          <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2 animate-pulse"></span>
          {badgeText}
          <ChevronRight className="ml-1 h-3 w-3" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
          <span className="block text-foreground">{titleLine1}</span>
          <AnimatedGradientText className="block mt-2" colors={["#60A5FA", "#A78BFA", "#F472B6", "#60A5FA"]}>
            {titleLine2}
          </AnimatedGradientText>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mt-4 leading-relaxed font-light">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto rounded-full text-base h-12 px-8 bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-transform duration-300">
            {primaryButtonText}
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base h-12 px-8 border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300">
            {secondaryButtonText}
          </Button>
        </div>
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
