"use client"

import * as React from "react"
import { ChevronDown, Loader2, CheckCircle2 } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york/ui/accordion"

interface AgentReasoningTraceProps {
  title?: string
  status?: "running" | "completed" | "error"
  duration?: string
  steps: string[]
  className?: string
}

export function AgentReasoningTrace({
  title = "Agent reasoning",
  status = "completed",
  duration = "2.4s",
  steps,
  className,
}: AgentReasoningTraceProps) {
  return (
    <Accordion type="single" collapsible className={cn("w-full max-w-xl", className)}>
      <AccordionItem value="reasoning" className="border-none bg-zinc-50 dark:bg-zinc-900/50 rounded-lg px-4">
        <AccordionTrigger className="hover:no-underline py-3">
          <div className="flex items-center space-x-3 text-sm">
            {status === "running" ? (
              <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
            ) : status === "completed" ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            ) : (
              <div className="h-4 w-4 rounded-full bg-red-500" />
            )}
            <span className="font-medium">{title}</span>
            {status === "completed" && (
              <span className="text-xs text-muted-foreground font-normal bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded-md">
                {duration}
              </span>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <div className="relative pl-6 before:absolute before:left-[11px] before:top-1 before:bottom-1 before:w-[2px] before:bg-zinc-200 dark:before:bg-zinc-800">
            {steps.map((step, index) => (
              <div key={index} className="relative mb-4 last:mb-0">
                <div className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-50 bg-zinc-300 dark:border-zinc-900 dark:bg-zinc-700" />
                <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
