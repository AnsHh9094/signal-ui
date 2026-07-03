"use client"

import React, { useState } from "react"
import { PromptInput } from "@/registry/new-york/ui/prompt-input"

export function PromptInputDefault() {
  const [value, setValue] = useState("")

  return (
    <div className="flex min-h-[300px] w-full items-center justify-center bg-zinc-50 p-10 dark:bg-zinc-900 rounded-xl">
      <div className="w-full max-w-2xl">
        <PromptInput
          value={value}
          onChange={setValue}
          onSubmit={() => {
            console.log("Submitted:", value)
            setValue("")
          }}
          onAttach={() => console.log("Attach clicked")}
          onVoice={() => console.log("Voice clicked")}
          placeholder="Message Signal AI..."
        />
      </div>
    </div>
  )
}
