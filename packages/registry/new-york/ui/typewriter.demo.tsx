import { Typewriter } from "@/registry/new-york/ui/typewriter"

export function TypewriterDefault() {
  return (
    <div className="flex min-h-[200px] items-center justify-center p-10 text-center font-mono">
      <Typewriter 
        text={[
          "print('Hello World')",
          "npm run build",
          "git commit -m 'Initial commit'",
          "Ship it! 🚀"
        ]}
        className="text-xl md:text-3xl text-primary"
      />
    </div>
  )
}
