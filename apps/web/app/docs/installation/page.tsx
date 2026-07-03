"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york/ui/tabs"
import { CopyButton } from "@/components/copy-button"
import { Terminal, Check, ArrowRight, Sparkles, BookOpen, Layers } from "lucide-react"

export default function InstallationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 space-y-12 animate-in fade-in duration-700">
      
      {/* Header */}
      <div className="space-y-4 border-b border-zinc-900 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-semibold text-purple-400">
          <BookOpen className="h-3.5 w-3.5" />
          Documentation
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100">
          Installation Guide
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Get up and running with Signal UI in your Next.js project. We integrate directly with the shadcn CLI.
        </p>
      </div>

      {/* Grid Steps */}
      <div className="space-y-12 relative">
        <div className="absolute left-6 top-4 bottom-4 w-px bg-zinc-900 pointer-events-none hidden md:block" />

        {/* Step 1 */}
        <div className="relative md:pl-16 space-y-4 group">
          <div className="absolute left-0 top-1.5 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-purple-400 font-mono text-lg font-bold group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/5 transition-all duration-300">
            1
          </div>
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-100 flex items-center gap-3">
              <span className="md:hidden inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 text-sm font-bold mr-2">1</span>
              Initialize shadcn/ui
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-light">
              Signal UI components are designed to work seamlessly with the standard shadcn CLI structure. If you haven't already, initialize it in your Next.js project root:
            </p>
          </div>

          <div className="relative rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 font-mono text-sm text-zinc-300 shadow-inner flex items-center justify-between">
            <div className="flex items-center gap-3 overflow-x-auto pr-8">
              <Terminal className="h-4 w-4 text-purple-400 shrink-0" />
              <span>npx shadcn@latest init</span>
            </div>
            <CopyButton value="npx shadcn@latest init" className="bg-zinc-900 border hover:bg-zinc-800 shrink-0" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative md:pl-16 space-y-4 group">
          <div className="absolute left-0 top-1.5 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-purple-400 font-mono text-lg font-bold group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/5 transition-all duration-300">
            2
          </div>
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-100 flex items-center gap-3">
              <span className="md:hidden inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 text-sm font-bold mr-2">2</span>
              Install Peer Dependencies
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-light">
              Install the necessary utilities and animation primitives required for Signal UI components:
            </p>
          </div>

          <div className="w-full">
            <Tabs defaultValue="pnpm" className="w-full">
              <TabsList className="bg-zinc-950/80 border border-zinc-800 h-10 p-0.5 rounded-lg justify-start gap-1 w-full sm:w-auto">
                <TabsTrigger value="pnpm" className="rounded-md data-[state=active]:bg-zinc-900 data-[state=active]:text-purple-400 text-xs px-4 py-1.5">pnpm</TabsTrigger>
                <TabsTrigger value="npm" className="rounded-md data-[state=active]:bg-zinc-900 data-[state=active]:text-purple-400 text-xs px-4 py-1.5">npm</TabsTrigger>
                <TabsTrigger value="yarn" className="rounded-md data-[state=active]:bg-zinc-900 data-[state=active]:text-purple-400 text-xs px-4 py-1.5">yarn</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pnpm" className="m-0 mt-3">
                <div className="relative rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 font-mono text-sm text-zinc-300 shadow-inner flex items-center justify-between">
                  <span className="overflow-x-auto pr-8">pnpm add lucide-react class-variance-authority clsx tailwind-merge</span>
                  <CopyButton value="pnpm add lucide-react class-variance-authority clsx tailwind-merge" className="bg-zinc-900 border hover:bg-zinc-800 shrink-0" />
                </div>
              </TabsContent>
              
              <TabsContent value="npm" className="m-0 mt-3">
                <div className="relative rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 font-mono text-sm text-zinc-300 shadow-inner flex items-center justify-between">
                  <span className="overflow-x-auto pr-8">npm install lucide-react class-variance-authority clsx tailwind-merge</span>
                  <CopyButton value="npm install lucide-react class-variance-authority clsx tailwind-merge" className="bg-zinc-900 border hover:bg-zinc-800 shrink-0" />
                </div>
              </TabsContent>

              <TabsContent value="yarn" className="m-0 mt-3">
                <div className="relative rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 font-mono text-sm text-zinc-300 shadow-inner flex items-center justify-between">
                  <span className="overflow-x-auto pr-8">yarn add lucide-react class-variance-authority clsx tailwind-merge</span>
                  <CopyButton value="yarn add lucide-react class-variance-authority clsx tailwind-merge" className="bg-zinc-900 border hover:bg-zinc-800 shrink-0" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative md:pl-16 space-y-4 group">
          <div className="absolute left-0 top-1.5 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-purple-400 font-mono text-lg font-bold group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/5 transition-all duration-300">
            3
          </div>
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-100 flex items-center gap-3">
              <span className="md:hidden inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 text-sm font-bold mr-2">3</span>
              Add Components
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-light">
              Add any Signal UI component directly into your workspace. The CLI will resolve files, types, and register the files in your configured components path:
            </p>
          </div>

          <div className="relative rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 font-mono text-sm text-zinc-300 shadow-inner flex items-center justify-between">
            <div className="flex items-center gap-3 overflow-x-auto pr-8">
              <Terminal className="h-4 w-4 text-purple-400 shrink-0" />
              <span>npx shadcn@latest add https://signalui.dev/r/button</span>
            </div>
            <CopyButton value="npx shadcn@latest add https://signalui.dev/r/button" className="bg-zinc-900 border hover:bg-zinc-800 shrink-0" />
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative md:pl-16 space-y-4 group">
          <div className="absolute left-0 top-1.5 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-purple-400 font-mono text-lg font-bold group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/5 transition-all duration-300">
            4
          </div>
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-100 flex items-center gap-3">
              <span className="md:hidden inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 text-sm font-bold mr-2">4</span>
              Start Building
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-light">
              Import the component into your app or layout and let the motion-native structure bring your UI to life:
            </p>
          </div>

          <div className="relative rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 font-mono text-xs md:text-sm text-zinc-300 shadow-inner overflow-hidden">
            <div className="absolute top-4 right-4">
              <CopyButton 
                value={`import { Button } from "@/components/ui/button"\n\nexport default function Page() {\n  return (\n    <div className="p-12">\n      <Button>Signal UI Button</Button>\n    </div>\n  )\n}`} 
                className="bg-zinc-900 border hover:bg-zinc-800" 
              />
            </div>
            <pre className="overflow-x-auto pt-2">
{`import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="p-12">
      <Button>Signal UI Button</Button>
    </div>
  )
}`}
            </pre>
          </div>
        </div>

      </div>

      {/* Pro Badge Callout */}
      <div className="border border-zinc-800 bg-gradient-to-r from-purple-950/20 via-zinc-950 to-zinc-950 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 h-40 w-40 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs text-purple-400 font-semibold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
            <Sparkles className="h-3 w-3" />
            Signal UI Pro
          </div>
          <h3 className="text-lg md:text-xl font-bold text-zinc-100">Looking for ready-made sections?</h3>
          <p className="text-zinc-500 text-xs md:text-sm max-w-lg leading-relaxed">
            Skip building sections from scratch. Check out our high-quality marketing block templates, from heroes to full footers, and build high-converting landing pages.
          </p>
        </div>
        <a 
          href="/blocks" 
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 shrink-0 shadow-lg shadow-purple-500/10"
        >
          Explore Blocks
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

    </div>
  )
}
