"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/new-york/ui/card"
import { Button } from "@/registry/new-york/ui/button"
import { BorderGlow } from "@/registry/new-york/ui/border-glow"
import { Check } from "lucide-react"

export interface PricingBentoProps extends React.HTMLAttributes<HTMLDivElement> {}

export function PricingBento({ className, ...props }: PricingBentoProps) {
  return (
    <section className={cn("w-full py-24 bg-background", className)} {...props}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Starter Plan */}
          <Card className="bg-card/50 backdrop-blur-sm border-muted">
            <CardHeader>
              <CardTitle className="text-xl">Starter</CardTitle>
              <CardDescription>Perfect for side projects and hobbyists.</CardDescription>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                $0
                <span className="ml-1 text-xl font-medium text-muted-foreground">/mo</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-500" /> Up to 3 projects
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-500" /> Basic analytics
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-500" /> Community support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Pro Plan (Highlighted) */}
          <BorderGlow 
            glowColor="rgba(168, 85, 247, 0.6)" 
            className="md:-mt-8 md:mb-8"
            borderRadius="0.75rem"
          >
            <Card className="border-purple-500/30 bg-card shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent pointer-events-none" />
              <div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-purple-400">Pro</CardTitle>
                    <span className="px-3 py-1 text-xs font-semibold tracking-wider text-purple-400 bg-purple-500/10 rounded-full uppercase">
                      Most Popular
                    </span>
                  </div>
                  <CardDescription>For professional developers and teams.</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                    $29
                    <span className="ml-1 text-xl font-medium text-muted-foreground">/mo</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-foreground">
                    <li className="flex items-center gap-3 font-medium">
                      <Check className="h-4 w-4 text-purple-500" /> Unlimited projects
                    </li>
                    <li className="flex items-center gap-3 font-medium">
                      <Check className="h-4 w-4 text-purple-500" /> Advanced analytics
                    </li>
                    <li className="flex items-center gap-3 font-medium">
                      <Check className="h-4 w-4 text-purple-500" /> Priority email support
                    </li>
                    <li className="flex items-center gap-3 font-medium">
                      <Check className="h-4 w-4 text-purple-500" /> Custom domains
                    </li>
                    <li className="flex items-center gap-3 font-medium">
                      <Check className="h-4 w-4 text-purple-500" /> Team collaboration
                    </li>
                  </ul>
                </CardContent>
              </div>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0">
                  Upgrade to Pro
                </Button>
              </CardFooter>
            </Card>
          </BorderGlow>

          {/* Enterprise Plan */}
          <Card className="bg-card/50 backdrop-blur-sm border-muted">
            <CardHeader>
              <CardTitle className="text-xl">Enterprise</CardTitle>
              <CardDescription>For large scale organizations.</CardDescription>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                $99
                <span className="ml-1 text-xl font-medium text-muted-foreground">/mo</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-500" /> Everything in Pro
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-500" /> SSO / SAML
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-500" /> Dedicated success manager
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-500" /> 99.99% Uptime SLA
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
