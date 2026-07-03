import { AnimatedGradientText } from "@/registry/new-york/ui/animated-gradient-text"

export function AnimatedGradientTextDefault() {
  return (
    <div className="flex min-h-[200px] items-center justify-center p-10 text-center bg-zinc-950 rounded-xl">
      <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
        Ship your product{" "}
        <AnimatedGradientText 
          colors={["#00c6ff", "#0072ff", "#00c6ff"]}
          animationDuration="4s"
        >
          faster.
        </AnimatedGradientText>
      </h1>
    </div>
  )
}
