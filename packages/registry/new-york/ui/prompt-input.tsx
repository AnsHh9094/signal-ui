"use client"

import React, { useRef, useState } from "react"
import TextareaAutosize, { TextareaAutosizeProps } from "react-textarea-autosize"
import { Mic, Paperclip, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/registry/new-york/ui/tooltip"

interface PromptInputProps extends Omit<TextareaAutosizeProps, "onChange"> {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  onAttach?: () => void
  onVoice?: () => void
  isLoading?: boolean
}

export function PromptInput({
  value,
  onChange,
  onSubmit,
  onAttach,
  onVoice,
  isLoading,
  className,
  placeholder = "Ask anything...",
  ...props
}: PromptInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (value.trim()) {
        onSubmit()
      }
    }
  }

  return (
    <div
      className={cn(
        "relative flex w-full flex-col rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm transition-colors dark:border-zinc-800 dark:bg-zinc-950",
        isFocused ? "ring-2 ring-zinc-200 dark:ring-zinc-800" : "",
        className
      )}
    >
      <TextareaAutosize
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        minRows={1}
        maxRows={8}
        placeholder={placeholder}
        className="w-full resize-none bg-transparent px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 focus-visible:outline-none dark:text-zinc-100 dark:placeholder:text-zinc-400"
        {...props}
      />
      
      <div className="mt-2 flex items-center justify-between pl-1 pr-1">
        <div className="flex items-center space-x-2">
          {onAttach && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                    <Paperclip className="h-4 w-4" />
                    <span className="sr-only">Attach file</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Attach file</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          {onVoice && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                    <Mic className="h-4 w-4" />
                    <span className="sr-only">Use voice</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Use voice</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        
        <Button
          onClick={onSubmit}
          disabled={!value.trim() || isLoading}
          size="icon"
          className="h-8 w-8 rounded-full transition-opacity disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </div>
  )
}
