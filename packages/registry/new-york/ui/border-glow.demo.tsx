import { BorderGlow } from "@/registry/new-york/ui/border-glow"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/new-york/ui/card"

export function BorderGlowDefault() {
  return (
    <div className="flex min-h-[300px] items-center justify-center p-10 bg-zinc-950 rounded-xl">
      <BorderGlow 
        className="w-full max-w-sm rounded-xl"
        glowColor="rgba(168, 85, 247, 0.8)" // purple-500
        duration={3}
      >
        <Card className="border-0 bg-transparent text-white">
          <CardHeader>
            <CardTitle>Animated Border</CardTitle>
            <CardDescription className="text-zinc-400">Hover over this card to see the glowing border effect.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-300">
              This effect uses a conic gradient and a simple CSS rotation animation to create a tracing glow along the border.
            </p>
          </CardContent>
        </Card>
      </BorderGlow>
    </div>
  )
}
