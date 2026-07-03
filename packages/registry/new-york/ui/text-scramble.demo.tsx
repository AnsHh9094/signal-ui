import { TextScramble } from "@/registry/new-york/ui/text-scramble"

export function TextScrambleDefault() {
  return (
    <div className="flex min-h-[200px] items-center justify-center p-10 text-center">
      <TextScramble 
        text="Hover me to scramble this text!" 
        className="text-2xl font-bold tracking-tight md:text-4xl cursor-default"
      />
    </div>
  )
}
