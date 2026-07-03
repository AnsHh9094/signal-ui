"use client"

import React, { useState } from "react"
import { DiffViewer } from "./diff-viewer"
import { Button } from "./button"
import { Sparkles } from "lucide-react"

export function DiffViewerDefault() {
  const [viewMode, setViewMode] = useState<"unified" | "split">("split")

  const originalCode = `import React from "react"
import { cn } from "@/lib/utils"

export function UserProfile() {
  return (
    <div className="profile">
      <h1>Welcome back, Dev!</h1>
      <p>Configure your settings below.</p>
    </div>
  )
}`

  const modifiedCode = `import React from "react"
import { cn } from "@/lib/utils"

export interface ProfileProps {
  name: string
}

export function UserProfile({ name = "Dev" }: ProfileProps) {
  return (
    <div className="profile bg-zinc-950 p-4 border rounded-xl">
      <h1 className="text-xl font-bold">Welcome back, {name}!</h1>
      <p className="text-muted-foreground text-sm">Configure your settings below.</p>
      <button className="mt-2 text-xs">Edit</button>
    </div>
  )
}`

  return (
    <div className="w-full max-w-4xl mx-auto p-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-md space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-4">
        <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-purple-400" />
          Diff Viewer
        </h4>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant={viewMode === "split" ? "default" : "outline"}
            onClick={() => setViewMode("split")}
            className="rounded-lg text-xs"
          >
            Split View
          </Button>
          <Button
            size="sm"
            variant={viewMode === "unified" ? "default" : "outline"}
            onClick={() => setViewMode("unified")}
            className="rounded-lg text-xs"
          >
            Unified View
          </Button>
        </div>
      </div>

      <DiffViewer 
        oldValue={originalCode} 
        newValue={modifiedCode} 
        viewMode={viewMode}
        fileName="components/user-profile.tsx"
      />
    </div>
  )
}
