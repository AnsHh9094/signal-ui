"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Copy, User, Bot } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york/ui/avatar"

interface ChatBubbleProps {
  role: "user" | "assistant"
  content: string
  avatarSrc?: string
  className?: string
  hideAvatar?: boolean
}

export function ChatBubble({
  role,
  content,
  avatarSrc,
  className,
  hideAvatar = false,
}: ChatBubbleProps) {
  const isUser = role === "user"

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
  }

  return (
    <div
      className={cn(
        "group flex w-full gap-4",
        isUser ? "flex-row-reverse" : "flex-row",
        className
      )}
    >
      {!hideAvatar && (
        <Avatar className="mt-0.5 h-8 w-8 shrink-0 select-none">
          {avatarSrc && <AvatarImage src={avatarSrc} alt={role} />}
          <AvatarFallback className={cn(
            isUser ? "bg-zinc-100 dark:bg-zinc-800" : "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
          )}>
            {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
          </AvatarFallback>
        </Avatar>
      )}

      <div className={cn("flex flex-col gap-2 max-w-[85%]", isUser ? "items-end" : "items-start")}>
        <div
          className={cn(
            "relative rounded-2xl px-5 py-3 text-sm",
            isUser
              ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
              : "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
          )}
        >
          <div className="prose prose-sm dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 break-words max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </div>

        
        {!isUser && (
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 text-zinc-500"
            onClick={handleCopy}
            title="Copy message"
          >
            <Copy className="h-3 w-3" />
            <span className="sr-only">Copy message</span>
          </Button>
        )}
      </div>
    </div>
  )
}
