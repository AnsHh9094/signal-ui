"use client"

import React from "react"
import { CopilotSidebar } from "./copilot-sidebar"

export function CopilotSidebarDefault() {
  const initialDummyMessages = [
    {
      id: "1",
      role: "assistant" as const,
      content: "Hi! I'm your coding Copilot. I can help write components or solve configuration errors. Ask me anything!",
      timestamp: new Date()
    },
    {
      id: "2",
      role: "user" as const,
      content: "How do I add a glow effect using class-variance-authority?",
      timestamp: new Date()
    },
    {
      id: "3",
      role: "assistant" as const,
      content: "You can define a glowing variant by adding shadows or border glow styles. In Tailwind v4, use border-purple-500/30 and shadow-[0_0_20px_rgba(168,85,247,0.15)] in your CVA variant setup.",
      timestamp: new Date()
    }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-zinc-800 bg-zinc-950/20 overflow-hidden flex h-[500px]">
      {/* Mock Code Editor Container */}
      <div className="flex-1 p-6 font-mono text-xs text-zinc-500 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-[10px] text-zinc-600 border-b border-zinc-900 pb-2 mb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
            <span className="ml-2 font-sans">app/page.tsx</span>
          </div>
          <div><span className="text-zinc-600">1</span> <span className="text-purple-400">import</span> {"{"} Button {"}"} <span className="text-purple-400">from</span> <span className="text-emerald-400">"@/components/ui/button"</span></div>
          <div><span className="text-zinc-600">2</span> </div>
          <div><span className="text-zinc-600">3</span> <span className="text-purple-400">export default function</span> <span className="text-blue-400">Home</span>() {"{"}</div>
          <div><span className="text-zinc-600">4</span>   <span className="text-purple-400">return</span> (</div>
          <div><span className="text-zinc-600">5</span>     &lt;<span className="text-blue-400">div</span> <span className="text-amber-400">className</span>=<span className="text-emerald-400">"flex p-8 justify-center"</span>&gt;</div>
          <div><span className="text-zinc-600">6</span>       &lt;<span className="text-blue-400">Button</span> <span className="text-amber-400">variant</span>=<span className="text-emerald-400">"outline"</span>&gt;</div>
          <div><span className="text-zinc-600">7</span>         Start Building
          <span className="inline-block w-1.5 h-3.5 ml-1 bg-purple-500 animate-[pulse_0.8s_infinite]" /></div>
          <div><span className="text-zinc-600">8</span>       &lt;/<span className="text-blue-400">Button</span>&gt;</div>
          <div><span className="text-zinc-600">9</span>     &lt;/<span className="text-blue-400">div</span>&gt;</div>
          <div><span className="text-zinc-600">10</span>  )</div>
          <div><span className="text-zinc-600">11</span> {"}"}</div>
        </div>

        <div className="text-[10px] text-zinc-600 border-t border-zinc-900 pt-3">
          Click the sidebar panel toggler on the right to close or open Copilot.
        </div>
      </div>

      {/* Copilot Sidebar Panel */}
      <CopilotSidebar 
        defaultOpen={true} 
        initialMessages={initialDummyMessages}
      />
    </div>
  )
}
