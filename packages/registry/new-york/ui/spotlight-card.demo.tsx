import { SpotlightCard } from "@/registry/new-york/ui/spotlight-card"
import { MonitorSmartphone, Zap, Shield } from "lucide-react"

export function SpotlightCardDefault() {
  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center bg-zinc-950 p-10 md:flex-row gap-6 rounded-xl">
      <SpotlightCard className="flex w-full max-w-sm flex-col items-center text-center">
        <div className="mb-4 rounded-full bg-zinc-900 p-3 ring-1 ring-zinc-800">
          <MonitorSmartphone className="h-6 w-6 text-zinc-400" />
        </div>
        <h3 className="mb-2 text-lg font-medium text-zinc-100">Responsive</h3>
        <p className="text-sm text-zinc-400">
          Looks great on any screen size. Move your mouse around to see the spotlight effect.
        </p>
      </SpotlightCard>
      
      <SpotlightCard 
        className="flex w-full max-w-sm flex-col items-center text-center"
        spotlightColor="rgba(56, 189, 248, 0.15)" // Light blue
      >
        <div className="mb-4 rounded-full bg-zinc-900 p-3 ring-1 ring-zinc-800">
          <Zap className="h-6 w-6 text-sky-400" />
        </div>
        <h3 className="mb-2 text-lg font-medium text-zinc-100">Fast</h3>
        <p className="text-sm text-zinc-400">
          Built for speed and performance. Interactive hover effects that don't compromise performance.
        </p>
      </SpotlightCard>
    </div>
  )
}
