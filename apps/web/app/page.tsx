import Link from "next/link";
import { Button } from "@/registry/new-york/ui/button";
import { CopyButton } from "@/components/copy-button";

import { AvatarDefault } from "@/registry/new-york/ui/avatar.demo";
import { DialogDefault } from "@/registry/new-york/ui/dialog.demo";
import { DropdownMenuDefault } from "@/registry/new-york/ui/dropdown-menu.demo";
import { ToastDefault } from "@/registry/new-york/ui/toast.demo";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background selection:bg-primary/20 overflow-hidden">
      {/* Animated Mesh / Grain Background Texture */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_var(--tw-gradient-stops))] from-cyan-900/20 via-background to-background animate-pulse duration-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <main className="relative z-10 flex flex-1 flex-col px-4 lg:px-8 mx-auto w-full max-w-screen-2xl">
        {/* Asymmetric Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-20 lg:pt-32 pb-20">
          
          <div className="flex flex-col items-start text-left space-y-8 max-w-2xl lg:w-1/2">
            <div className="inline-flex items-center rounded-full border border-cyan-500/30 px-3 py-1 text-sm text-cyan-500 shadow-sm bg-cyan-500/10 backdrop-blur-sm transition-all hover:bg-cyan-500/20 cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              Signal UI is now in beta
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Motion-Native UI for <br className="hidden sm:block" />
              <span className="bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 bg-clip-text text-transparent">
                AI Products
              </span>
            </h1>
            
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              50+ accessible, animated React components. One command to install. Built on Radix, styled with Tailwind.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/components" className="w-full sm:w-auto">
                <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-blue-500/20 w-full sm:w-auto transition-transform hover:scale-105">
                  Browse Components
                </Button>
              </Link>
              <div className="flex h-12 w-full sm:w-auto items-center justify-between rounded-md border bg-muted/40 pl-4 pr-1 text-sm text-muted-foreground backdrop-blur-sm group hover:border-border transition-colors">
                <span className="font-mono text-zinc-300 mr-4">npx shadcn add https://signalui.dev/r</span>
                <CopyButton value="npx shadcn add https://signalui.dev/r" />
              </div>
            </div>
          </div>

          {/* Interactive Component Showcase (Right Side) */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in zoom-in-95 duration-1000">
            <div className="rounded-xl border bg-card/40 backdrop-blur-md p-6 shadow-2xl flex flex-col items-center justify-center h-48 hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group">
               <AvatarDefault />
               <span className="text-sm text-muted-foreground mt-4 opacity-0 group-hover:opacity-100 transition-opacity">Avatar</span>
            </div>
            <div className="rounded-xl border bg-card/40 backdrop-blur-md p-6 shadow-2xl flex items-center justify-center h-48 hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300 group">
               <div className="scale-90 group-hover:scale-100 transition-transform">
                 <DialogDefault />
               </div>
            </div>
            <div className="rounded-xl border bg-card/40 backdrop-blur-md p-6 shadow-2xl flex items-center justify-center h-48 hover:shadow-violet-500/10 hover:border-violet-500/30 transition-all duration-300 group">
               <div className="scale-90 group-hover:scale-100 transition-transform">
                 <DropdownMenuDefault />
               </div>
            </div>
            <div className="rounded-xl border bg-card/40 backdrop-blur-md p-6 shadow-2xl flex flex-col justify-center h-48 hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group relative overflow-hidden">
               <div className="absolute -right-4 -bottom-4 scale-75 opacity-70 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                 <ToastDefault />
               </div>
               <span className="text-sm font-medium absolute top-4 left-4 text-muted-foreground">Feedback</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-24 space-y-8 border-t border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Built for modern product teams</h2>
            <p className="text-muted-foreground mt-2">Everything you need to build stunning interfaces.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group rounded-xl border bg-card/20 p-6 hover:bg-card/40 transition-colors shadow-sm hover:shadow-md">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">shadcn CLI Compatible</h3>
              <p className="text-sm text-muted-foreground">Installs seamlessly using the standard shadcn ecosystem. No lock-in.</p>
            </div>
            <div className="group rounded-xl border bg-card/20 p-6 hover:bg-card/40 transition-colors shadow-sm hover:shadow-md">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">Motion Tokens</h3>
              <p className="text-sm text-muted-foreground">Physics-based CSS variables for durations and easings out of the box.</p>
            </div>
            <div className="group rounded-xl border bg-card/20 p-6 hover:bg-card/40 transition-colors shadow-sm hover:shadow-md">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-violet-400 transition-colors">Dark Mode First</h3>
              <p className="text-sm text-muted-foreground">Curated HSL color palettes optimized for sleek dark-themed dashboards.</p>
            </div>
            <div className="group rounded-xl border bg-card/20 p-6 hover:bg-card/40 transition-colors shadow-sm hover:shadow-md">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">Radix Accessible</h3>
              <p className="text-sm text-muted-foreground">Keyboard navigation, screen readers, and focus management built-in.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
