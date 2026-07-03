import { Particles } from "@/registry/new-york/ui/particles"

export function ParticlesDefault() {
  return (
    <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-950 p-10">
      <div className="z-10 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
          Particles Canvas
        </h2>
        <p className="mt-4 text-zinc-400">
          A lightweight, interactive particle background.
        </p>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        staticity={40}
      />
    </div>
  )
}
