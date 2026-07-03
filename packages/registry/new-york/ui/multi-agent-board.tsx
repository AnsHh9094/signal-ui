"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { 
  Bot, 
  CheckCircle2, 
  Loader2, 
  Play, 
  AlertCircle,
  HelpCircle,
  Cpu,
  RefreshCw
} from "lucide-react"

export type AgentStatus = "idle" | "thinking" | "executing" | "done" | "error"

export interface Agent {
  id: string
  name: string
  role: string
  task?: string
  status: AgentStatus
  progress?: number // 0-100
}

export interface MultiAgentBoardProps extends React.HTMLAttributes<HTMLDivElement> {
  agents: Agent[]
  boardTitle?: string
}

export function MultiAgentBoard({
  agents,
  boardTitle = "Active Agent Swarm",
  className,
  ...props
}: MultiAgentBoardProps) {

  const getStatusIcon = (status: AgentStatus) => {
    switch (status) {
      case "thinking":
        return <Loader2 className="h-4 w-4 text-amber-400 animate-spin" />
      case "executing":
        return <RefreshCw className="h-4 w-4 text-purple-400 animate-[spin_3s_linear_infinite]" />
      case "done":
        return <CheckCircle2 className="h-4 w-4 text-emerald-400" />
      case "error":
        return <AlertCircle className="h-4 w-4 text-rose-500" />
      default:
        return <HelpCircle className="h-4 w-4 text-zinc-600" />
    }
  }

  const getStatusStyle = (status: AgentStatus) => {
    switch (status) {
      case "thinking":
        return "border-amber-500/20 bg-amber-500/5 text-amber-400"
      case "executing":
        return "border-purple-500/20 bg-purple-500/5 text-purple-400"
      case "done":
        return "border-emerald-500/20 bg-emerald-500/5 text-emerald-400"
      case "error":
        return "border-rose-500/20 bg-rose-500/5 text-rose-400"
      default:
        return "border-zinc-800 bg-zinc-900/40 text-zinc-500"
    }
  }

  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-6 shadow-2xl",
        className
      )}
      {...props}
    >
      {/* Board Header */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
        <div className="flex items-center space-x-2.5">
          <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center">
            <Cpu className="h-3.5 w-3.5 text-white" />
          </div>
          <h3 className="font-bold text-zinc-100 text-sm">{boardTitle}</h3>
        </div>
        <span className="text-[10px] uppercase font-mono tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
          Orchestrated
        </span>
      </div>

      {/* Grid of Agent Lanes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {(["idle", "thinking", "executing", "done"] as const).map((columnKey) => {
          const filteredAgents = agents.filter(
            (agent) => 
              agent.status === columnKey || 
              (columnKey === "idle" && agent.status === "error") // group errors under idle or execute
          )

          return (
            <div 
              key={columnKey} 
              className="flex flex-col rounded-xl border border-zinc-900/60 bg-zinc-950/40 p-3 space-y-3 min-h-[220px]"
            >
              {/* Column Title */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  {columnKey}
                </span>
                <span className="text-[10px] font-mono text-zinc-600">
                  {filteredAgents.length}
                </span>
              </div>

              {/* Agent Cards */}
              <div className="space-y-2.5 flex-1 overflow-y-auto max-h-[300px] pr-0.5">
                {filteredAgents.map((agent) => (
                  <div
                    key={agent.id}
                    className={cn(
                      "rounded-lg border p-3 space-y-3 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/2",
                      agent.status === "executing" 
                        ? "border-purple-500/30 bg-purple-500/5 shadow-inner" 
                        : "border-zinc-900 bg-zinc-950/60"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                          <Bot className="h-3.5 w-3.5 text-zinc-400" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-zinc-200 leading-tight">
                            {agent.name}
                          </h4>
                          <span className="text-[9px] text-zinc-500 leading-none">
                            {agent.role}
                          </span>
                        </div>
                      </div>
                      
                      {/* Status dot/icon */}
                      <span className={cn("p-1 rounded-full border shrink-0", getStatusStyle(agent.status))}>
                        {getStatusIcon(agent.status)}
                      </span>
                    </div>

                    {agent.task && (
                      <div className="bg-zinc-900/40 rounded p-2 text-[10px] leading-relaxed text-zinc-400 border border-zinc-900/50">
                        {agent.task}
                      </div>
                    )}

                    {agent.status === "executing" && typeof agent.progress === "number" && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-[8px] text-purple-400">
                          <span>Executing...</span>
                          <span>{agent.progress}%</span>
                        </div>
                        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-purple-500 transition-all duration-300"
                            style={{ width: `${agent.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}
