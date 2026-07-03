"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/new-york/ui/card"
import { Button } from "@/registry/new-york/ui/button"
import { BorderGlow } from "@/registry/new-york/ui/border-glow"
import { Check, Sparkles } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center py-24 bg-background overflow-hidden relative">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-5xl z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-1 text-xs font-semibold text-purple-400">
            <Sparkles className="h-3 w-3 mr-1 animate-pulse" />
            Pricing Plans
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Simple, fair pricing
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
            Get started with our generous free tier, or upgrade to unlock advanced blocks and templates.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Free Tier */}
          <Card className="border-zinc-800 bg-zinc-950/40 backdrop-blur-sm flex flex-col justify-between p-2 shadow-xl hover:border-zinc-700/80 transition-all duration-300">
            <CardHeader className="p-6">
              <CardTitle className="text-2xl font-bold text-zinc-100">Free Tier</CardTitle>
              <CardDescription className="text-zinc-500 text-sm mt-1">
                Perfect for standard SaaS products and developers getting started.
              </CardDescription>
              <div className="mt-6 flex items-baseline text-5xl font-extrabold text-zinc-100">
                $0
                <span className="ml-1 text-xl font-medium text-zinc-500 font-sans">/ forever</span>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1">
              <ul className="space-y-4 text-sm text-zinc-400">
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>MIT Open Source License</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>50+ Core UI Components</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Basic Text & Border Effects</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Standard community support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="p-6">
              <Button variant="outline" className="w-full rounded-full border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-900 transition-colors h-11">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Tier (Glow highlighted) */}
          <BorderGlow 
            glowColor="rgba(168, 85, 247, 0.45)" 
            borderRadius="0.875rem"
            className="h-full flex"
          >
            <Card className="border-purple-500/30 bg-zinc-950/60 shadow-2xl relative overflow-hidden flex flex-col justify-between p-2 h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent pointer-events-none" />
              <CardHeader className="p-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-purple-400">Pro Tier</CardTitle>
                  <span className="px-3 py-1 text-[10px] font-semibold tracking-wider text-purple-400 bg-purple-500/10 rounded-full uppercase border border-purple-500/20">
                    Coming Soon
                  </span>
                </div>
                <CardDescription className="text-zinc-500 text-sm mt-1">
                  For creators building production-ready AI applications.
                </CardDescription>
                <div className="mt-6 flex items-baseline text-5xl font-extrabold text-zinc-100">
                  $49
                  <span className="ml-1 text-xl font-medium text-zinc-500 font-sans">/ lifetime</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-1">
                <ul className="space-y-4 text-sm text-zinc-300">
                  <li className="flex items-center gap-3 font-medium">
                    <Check className="h-4 w-4 text-purple-500 shrink-0" />
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <Check className="h-4 w-4 text-purple-500 shrink-0" />
                    <span>12+ Flagship AI Components</span>
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <Check className="h-4 w-4 text-purple-500 shrink-0" />
                    <span>7+ Premium Marketing Blocks</span>
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <Check className="h-4 w-4 text-purple-500 shrink-0" />
                    <span>Pre-configured AI workspace templates</span>
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <Check className="h-4 w-4 text-purple-500 shrink-0" />
                    <span>Priority email support & updates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="p-6">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 rounded-full h-11 transition-all">
                  Notify Me
                </Button>
              </CardFooter>
            </Card>
          </BorderGlow>

        </div>

      </div>
    </div>
  )
}
