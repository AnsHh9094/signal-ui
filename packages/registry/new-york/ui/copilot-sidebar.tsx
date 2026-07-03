"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { 
  PanelRightClose, 
  PanelRightOpen, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  Terminal, 
  X,
  Code2
} from "lucide-react"

export interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export interface CopilotSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean
  initialMessages?: Message[]
  onSendMessage?: (message: string) => void
}

export function CopilotSidebar({
  defaultOpen = true,
  initialMessages = [],
  onSendMessage,
  className,
  ...props
}: CopilotSidebarProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Math.random().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date()
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    if (onSendMessage) {
      onSendMessage(inputValue)
    }

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: Math.random().toString(),
        role: "assistant",
        content: `I've analyzed your request: "${inputValue}". Let me know if you want me to write the TypeScript implementation or help you refactor the CSS variables.`,
        timestamp: new Date()
      }
      setMessages((prev) => [...prev, assistantMessage])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <div className={cn("relative flex h-full min-h-[500px]", className)} {...props}>
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 -left-12 z-20 h-8 w-8 rounded-l-lg rounded-r-none border-y border-l border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200"
      >
        {isOpen ? <PanelRightClose className="h-4 w-4" /> : <PanelRightOpen className="h-4 w-4" />}
      </Button>

      {/* Sidebar Panel */}
      <div
        className={cn(
          "w-80 border-l border-zinc-800 bg-zinc-950/90 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ease-in-out z-10 shadow-2xl h-full",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 w-0 pointer-events-none border-l-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-900">
          <div className="flex items-center space-x-2">
            <div className="h-5 w-5 rounded-md bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
            <span className="font-semibold text-zinc-200 text-sm">Signal Copilot</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-6 w-6 text-zinc-500 hover:text-zinc-300"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-transparent">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-4 space-y-3">
              <Bot className="h-8 w-8 text-purple-400 animate-bounce" />
              <div className="space-y-1">
                <p className="text-zinc-300 font-medium text-xs">How can I help you today?</p>
                <p className="text-zinc-600 text-[10px] max-w-xs">Ask questions, generate code snippets, or refactor layouts in real-time.</p>
              </div>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex gap-3 max-w-[85%] text-xs",
                  msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                )}
              >
                {/* Avatar */}
                <div
                  className={cn(
                    "h-6 w-6 rounded-full flex items-center justify-center shrink-0 border",
                    msg.role === "user" 
                      ? "bg-zinc-900 border-zinc-800 text-zinc-300" 
                      : "bg-purple-500/10 border-purple-500/20 text-purple-400"
                  )}
                >
                  {msg.role === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                </div>

                {/* Bubble */}
                <div
                  className={cn(
                    "rounded-xl p-3 leading-relaxed",
                    msg.role === "user"
                      ? "bg-purple-600 text-white rounded-tr-none"
                      : "bg-zinc-900 text-zinc-300 rounded-tl-none border border-zinc-800/80"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Prompt Input */}
        <div className="p-4 border-t border-zinc-900 bg-zinc-950 space-y-3">
          <div className="flex items-center justify-between text-[10px] text-zinc-500">
            <span className="flex items-center gap-1">
              <Terminal className="h-3 w-3" />
              Next.js Environment
            </span>
            <span className="font-mono text-purple-400 bg-purple-500/5 border border-purple-500/15 px-2 py-0.5 rounded-full">
              gpt-4o
            </span>
          </div>

          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask Copilot..."
              className="bg-zinc-900 border-zinc-800 focus-visible:ring-purple-500 placeholder-zinc-600 text-xs h-9 rounded-lg"
            />
            <Button 
              size="icon" 
              onClick={handleSend}
              className="bg-purple-600 hover:bg-purple-700 text-white shrink-0 h-9 w-9 rounded-lg"
            >
              <Send className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}
