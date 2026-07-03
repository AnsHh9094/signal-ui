"use client"

import React from "react"
import { Wrench, Loader2, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToolCallCardProps {
  toolName: string
  args: Record<string, any>
  status?: "calling" | "success" | "error"
  result?: any
  className?: string
}

export function ToolCallCard({
  toolName,
  args,
  status = "success",
  result,
  className
}: ToolCallCardProps) {
  return (
    <div className={cn("flex flex-col w-full max-w-sm rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden", className)}>
      <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-2.5">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Wrench className="h-3.5 w-3.5 text-muted-foreground" />
          <span>{toolName}</span>
        </div>
        <div>
          {status === "calling" && <Loader2 className="h-3.5 w-3.5 animate-spin text-blue-500" />}
          {status === "success" && <Check className="h-3.5 w-3.5 text-emerald-500" />}
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div className="space-y-1.5">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Arguments</span>
          <pre className="rounded-md bg-zinc-950 p-3 text-[13px] text-zinc-50 overflow-x-auto">
            <code>{JSON.stringify(args, null, 2)}</code>
          </pre>
        </div>

        {result && status === "success" && (
          <div className="space-y-1.5">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Result</span>
            <pre className="rounded-md bg-zinc-50 dark:bg-zinc-900 border p-3 text-[13px] overflow-x-auto max-h-[120px] overflow-y-auto">
              <code>{typeof result === 'string' ? result : JSON.stringify(result, null, 2)}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
