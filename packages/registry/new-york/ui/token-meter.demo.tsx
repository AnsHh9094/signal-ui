import { TokenMeter } from "@/registry/new-york/ui/token-meter"

export function TokenMeterDefault() {
  return (
    <div className="flex min-h-[200px] w-full flex-col items-center justify-center space-y-6 bg-zinc-50 p-10 dark:bg-zinc-900 rounded-xl">
      <div className="flex flex-col space-y-2 rounded-lg border bg-white p-4 dark:bg-zinc-950">
        <span className="text-sm font-medium">Standard Usage</span>
        <TokenMeter promptTokens={1240} completionTokens={842} maxTokens={8192} />
      </div>
      
      <div className="flex flex-col space-y-2 rounded-lg border bg-white p-4 dark:bg-zinc-950">
        <span className="text-sm font-medium">Near Limit Warning</span>
        <TokenMeter promptTokens={6500} completionTokens={1100} maxTokens={8192} />
      </div>
    </div>
  )
}
