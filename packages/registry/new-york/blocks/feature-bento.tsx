"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { SpotlightCard } from "@/registry/new-york/ui/spotlight-card"
import { 
  Sparkles, 
  TrendingUp, 
  Globe, 
  Code2, 
  ShieldCheck, 
  Zap,
  ArrowRight
} from "lucide-react"

export interface FeatureBentoProps extends React.HTMLAttributes<HTMLDivElement> {}

export function FeatureBento({ className, ...props }: FeatureBentoProps) {
  return (
    <section className={cn("w-full py-24 bg-background overflow-hidden", className)} {...props}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 mr-1 animate-pulse" />
            Core Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/75 bg-clip-text text-transparent">
            Everything you need to scale
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A high-performance infrastructure designed for the next generation of software products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1: AI Automation (Double-Width) */}
          <SpotlightCard 
            spotlightColor="rgba(168, 85, 247, 0.15)"
            className="md:col-span-2 flex flex-col justify-between min-h-[320px] group border-zinc-800/80 bg-zinc-950/50 backdrop-blur-sm"
          >
            <div className="space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Zap className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-purple-400 transition-colors">
                  AI-Powered Automation
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  Leverage advanced neural models to automatically classify, process, and optimize incoming data streams in real-time. Zero configuration required.
                </p>
              </div>
            </div>

            {/* Visual element representing AI workflow */}
            <div className="mt-8 rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 font-mono text-xs text-zinc-400 overflow-hidden relative">
              <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-zinc-950/40 to-transparent pointer-events-none" />
              <div className="flex items-center gap-2 text-purple-400 mb-2 border-b border-zinc-800 pb-2">
                <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                <span>agent-trace.log</span>
              </div>
              <div className="space-y-1.5">
                <div><span className="text-zinc-600">[15:32:01]</span> <span className="text-blue-400">INFO:</span> Listening on port 8080...</div>
                <div><span className="text-zinc-600">[15:32:04]</span> <span className="text-purple-400">ACTION:</span> Invoking analyzer-v4 model</div>
                <div className="pl-4 text-zinc-500">Confidence: 99.4% | Tokens: 420 | Status: Completed</div>
                <div><span className="text-zinc-600">[15:32:05]</span> <span className="text-emerald-400">SUCCESS:</span> Pipeline synchronized successfully.</div>
              </div>
            </div>
          </SpotlightCard>

          {/* Feature 2: Advanced Analytics */}
          <SpotlightCard 
            spotlightColor="rgba(59, 130, 246, 0.15)"
            className="flex flex-col justify-between min-h-[320px] group border-zinc-800/80 bg-zinc-950/50 backdrop-blur-sm"
          >
            <div className="space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-blue-400 transition-colors">
                  Real-time Analytics
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Track every event, action, and system metric as they happen. Build interactive, data-rich workspaces in seconds.
                </p>
              </div>
            </div>

            {/* Visual element representing charts */}
            <div className="mt-8 flex items-end gap-2 h-20 px-2 justify-between">
              {[40, 25, 60, 45, 80, 55, 95, 70].map((height, i) => (
                <div key={i} className="w-full bg-zinc-800 rounded-t-sm relative group/bar overflow-hidden">
                  <div 
                    style={{ height: `${height}%` }}
                    className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 transition-all duration-500 group-hover/bar:brightness-125"
                  />
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Feature 3: Global Edge Network */}
          <SpotlightCard 
            spotlightColor="rgba(16, 185, 129, 0.15)"
            className="flex flex-col justify-between min-h-[320px] group border-zinc-800/80 bg-zinc-950/50 backdrop-blur-sm"
          >
            <div className="space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Globe className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  Global Edge CDN
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ultra-low latency delivery from edge servers in over 150 regions worldwide. Keep your assets close to users.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-2 border border-zinc-800/60 rounded-lg p-3 bg-zinc-900/30">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">US-East (N. Virginia)</span>
                <span className="text-emerald-400 font-mono">11ms</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">EU-West (Frankfurt)</span>
                <span className="text-emerald-400 font-mono">18ms</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">AP-East (Hong Kong)</span>
                <span className="text-emerald-400 font-mono">24ms</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Feature 4: Developer First API */}
          <SpotlightCard 
            spotlightColor="rgba(245, 158, 11, 0.15)"
            className="flex flex-col justify-between min-h-[320px] group border-zinc-800/80 bg-zinc-950/50 backdrop-blur-sm"
          >
            <div className="space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Code2 className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-amber-400 transition-colors">
                  Developer Friendly
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Intuitive TypeScript client, comprehensive OpenAPI docs, and single-line imports to kickstart development.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 font-mono text-[10px] text-zinc-400 overflow-x-auto">
              <span className="text-purple-400">import</span> {"{"} SignalClient {"}"} <span className="text-purple-400">from</span> <span className="text-emerald-400">"@signal/sdk"</span>
              <br />
              <span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-blue-400">SignalClient</span>()
              <br />
              <span className="text-purple-400">await</span> client.trigger(<span className="text-emerald-400">"deploy"</span>)
            </div>
          </SpotlightCard>

          {/* Feature 5: Security */}
          <SpotlightCard 
            spotlightColor="rgba(239, 68, 68, 0.15)"
            className="flex flex-col justify-between min-h-[320px] group border-zinc-800/80 bg-zinc-950/50 backdrop-blur-sm"
          >
            <div className="space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-red-400 transition-colors">
                  Secure by Default
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Built-in DDoS protection, end-to-end data encryption, and standard SOC2 Type II compliance audits.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-around gap-2 text-xs border border-dashed border-zinc-800 rounded-lg p-3 text-muted-foreground bg-zinc-900/10">
              <div className="flex flex-col items-center">
                <span className="text-zinc-200 font-bold">SOC2</span>
                <span>Certified</span>
              </div>
              <div className="h-8 w-px bg-zinc-800" />
              <div className="flex flex-col items-center">
                <span className="text-zinc-200 font-bold">ISO</span>
                <span>27001</span>
              </div>
              <div className="h-8 w-px bg-zinc-800" />
              <div className="flex flex-col items-center">
                <span className="text-zinc-200 font-bold">GDPR</span>
                <span>Compliant</span>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
