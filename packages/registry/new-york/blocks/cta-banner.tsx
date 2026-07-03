"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import { AnimatedGradientText } from "@/registry/new-york/ui/animated-gradient-text"
import { ArrowRight, Sparkles } from "lucide-react"

export interface CTABannerProps extends React.HTMLAttributes<HTMLDivElement> {
  headline?: string
  gradientText?: string
  subtitle?: string
  primaryCta?: string
  secondaryCta?: string
}

export function CTABanner({
  className,
  headline = "Ready to transform your development?",
  gradientText = "Start building with Signal UI.",
  subtitle = "Join thousands of developers building fast, beautiful, motion-native AI products today. No credit card required.",
  primaryCta = "Get Started For Free",
  secondaryCta = "Schedule Demo",
  ...props
}: CTABannerProps) {
  return (
    <section className={cn("w-full py-24 bg-background relative overflow-hidden flex justify-center px-4 md:px-6", className)} {...props}>
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Glass Panel */}
      <div className="w-full max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-md px-8 py-16 md:py-24 text-center flex flex-col items-center gap-6 relative overflow-hidden shadow-2xl">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-1 text-xs font-semibold text-purple-400 backdrop-blur-sm z-10">
          <Sparkles className="h-3.5 w-3.5 mr-1 text-purple-400" />
          Deploy in minutes
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl leading-[1.1] z-10">
          <span className="block text-zinc-100">{headline}</span>
          <AnimatedGradientText className="block mt-2" colors={["#A78BFA", "#F472B6", "#60A5FA", "#A78BFA"]}>
            {gradientText}
          </AnimatedGradientText>
        </h2>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl font-light leading-relaxed z-10">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto z-10">
          <Button size="lg" className="w-full sm:w-auto rounded-full px-8 bg-zinc-50 text-zinc-950 hover:bg-zinc-200 transition-all duration-300 font-medium group">
            {primaryCta}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 border-zinc-800 bg-zinc-950/50 backdrop-blur-sm text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 transition-all duration-300">
            {secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  )
}
