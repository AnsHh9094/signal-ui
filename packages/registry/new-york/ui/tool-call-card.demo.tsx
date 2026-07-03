import { ToolCallCard } from "@/registry/new-york/ui/tool-call-card"

export function ToolCallCardDefault() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full gap-6 bg-zinc-50 dark:bg-zinc-950 p-6 rounded-xl">
      <ToolCallCard 
        toolName="get_weather"
        status="calling"
        args={{
          location: "San Francisco, CA",
          unit: "celsius"
        }}
      />
      <ToolCallCard 
        toolName="execute_sql"
        status="success"
        args={{
          query: "SELECT COUNT(*) FROM users WHERE active = true"
        }}
        result={{
          rows: [{ count: 14205 }],
          executionTimeMs: 42
        }}
      />
    </div>
  )
}
