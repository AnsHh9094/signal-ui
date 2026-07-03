"use client"

import React, { useState, useEffect } from "react"
import { MultiAgentBoard, Agent } from "./multi-agent-board"
import { Button } from "./button"
import { Play, RotateCcw } from "lucide-react"

export function MultiAgentBoardDefault() {
  const initialAgents: Agent[] = [
    {
      id: "agent-1",
      name: "Architect-AI",
      role: "Planner & Orchestrator",
      task: "Parse user requirements and map workspace file structure.",
      status: "done"
    },
    {
      id: "agent-2",
      name: "Coder-Agent",
      role: "Code Generator",
      task: "Build the MultiAgentBoard component in packages/registry/ui.",
      status: "executing",
      progress: 65
    },
    {
      id: "agent-3",
      name: "Reviewer-Llama",
      role: "Linter & Reviewer",
      task: "Verify component props and type definitions.",
      status: "thinking"
    },
    {
      id: "agent-4",
      name: "Deploy-Bot",
      role: "Vercel Deployer",
      task: "Optimize bundles and publish demo showcase endpoint.",
      status: "idle"
    }
  ]

  const [agents, setAgents] = useState<Agent[]>(initialAgents)
  const [isRunning, setIsRunning] = useState(false)

  // Simulation steps
  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setAgents((prev) => {
        return prev.map((agent) => {
          if (agent.id === "agent-2") {
            // progress Coder
            if (agent.progress && agent.progress < 100) {
              const nextProgress = agent.progress + 15
              return { 
                ...agent, 
                progress: nextProgress >= 100 ? 100 : nextProgress,
                status: nextProgress >= 100 ? "done" : "executing",
                task: nextProgress >= 100 ? "Completed code generation." : agent.task
              }
            }
          }
          if (agent.id === "agent-3" && prev.find(a => a.id === "agent-2")?.status === "done") {
            // Once Coder is done, move Reviewer to executing
            if (agent.status === "thinking") {
              return { ...agent, status: "executing", progress: 10, task: "Lining up TypeScript interfaces..." }
            } else if (agent.status === "executing" && typeof agent.progress === "number" && agent.progress < 100) {
              const nextProgress = agent.progress + 30
              return { 
                ...agent, 
                progress: nextProgress >= 100 ? 100 : nextProgress,
                status: nextProgress >= 100 ? "done" : "executing",
                task: nextProgress >= 100 ? "Lints passed. Component approved." : agent.task
              }
            }
          }
          if (agent.id === "agent-4" && prev.find(a => a.id === "agent-3")?.status === "done") {
            // Once Reviewer is done, move Deployer to executing
            if (agent.status === "idle") {
              return { ...agent, status: "thinking", task: "Starting Vercel build command..." }
            } else if (agent.status === "thinking") {
              return { ...agent, status: "executing", progress: 20, task: "Publishing static pages..." }
            } else if (agent.status === "executing" && typeof agent.progress === "number" && agent.progress < 100) {
              const nextProgress = agent.progress + 40
              return { 
                ...agent, 
                progress: nextProgress >= 100 ? 100 : nextProgress,
                status: nextProgress >= 100 ? "done" : "executing",
                task: nextProgress >= 100 ? "Deployment live at signalui.dev!" : agent.task
              }
            }
          }
          return agent
        })
      })
    }, 1500)

    // Stop simulation when Deployer is done
    if (agents.find(a => a.id === "agent-4")?.status === "done") {
      setIsRunning(false)
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isRunning, agents])

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleReset = () => {
    setIsRunning(false)
    setAgents(initialAgents)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-xs text-zinc-500">
          Click "Run Simulation" to watch the workflow advance between agents.
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleReset}
            className="border-zinc-800 hover:bg-zinc-900 rounded-lg text-xs"
          >
            <RotateCcw className="h-3.5 w-3.5 mr-1" />
            Reset Board
          </Button>
          <Button
            size="sm"
            onClick={handleStart}
            disabled={isRunning || agents.find(a => a.id === "agent-4")?.status === "done"}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs"
          >
            <Play className="h-3.5 w-3.5 mr-1" />
            Run Simulation
          </Button>
        </div>
      </div>

      <MultiAgentBoard agents={agents} />
    </div>
  )
}
