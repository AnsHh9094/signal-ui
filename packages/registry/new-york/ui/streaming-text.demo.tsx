"use client"

import React, { useState } from "react"
import { StreamingText } from "./streaming-text"
import { Button } from "./button"
import { Play, RotateCcw } from "lucide-react"

export function StreamingTextDefault() {
  const [triggerKey, setTriggerKey] = useState(0)
  const sampleText = `Hello! I am Signal UI's streaming text component. I simulate how modern AI models stream their answers token-by-token (or character-by-character) over the network. 

You can configure:
1. The speed of the output streams (currently 25ms per character)
2. Custom cursor styles and animations
3. Event triggers that fire once streaming completes

This makes it extremely easy to build premium, responsive chat experiences.`

  const handleRestart = () => {
    setTriggerKey((prev) => prev + 1)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-md space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Streaming Preview</h3>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={handleRestart}
          className="border-zinc-800 hover:bg-zinc-900 gap-2 rounded-lg"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Restart Stream
        </Button>
      </div>

      <div className="min-h-[160px] bg-zinc-950 rounded-xl p-4 border border-zinc-900">
        <StreamingText 
          key={triggerKey} 
          text={sampleText} 
          speed={25} 
        />
      </div>
    </div>
  )
}
