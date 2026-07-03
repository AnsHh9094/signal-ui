"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { FileText, ExternalLink, ChevronDown, ChevronUp, Link as LinkIcon } from "lucide-react"

export interface Citation {
  index: number
  title: string
  url?: string
  relevanceScore: number // 0-100
  snippet: string
}

export interface CitationPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  citations: Citation[]
  title?: string
}

export function CitationPanel({
  citations,
  title = "Sources & Citations",
  className,
  ...props
}: CitationPanelProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div
      className={cn(
        "w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-950 p-4 space-y-4 shadow-xl",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
        <h4 className="font-semibold text-zinc-200 text-sm flex items-center gap-2">
          <FileText className="h-4 w-4 text-purple-400" />
          {title}
        </h4>
        <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded-full">
          {citations.length} sources
        </span>
      </div>

      <div className="space-y-2.5 overflow-y-auto max-h-[400px] pr-1">
        {citations.map((cite) => {
          const isExpanded = expandedIndex === cite.index
          // Relevance score styling
          const getScoreColor = (score: number) => {
            if (score >= 90) return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
            if (score >= 70) return "text-purple-400 bg-purple-500/10 border-purple-500/20"
            return "text-zinc-400 bg-zinc-900 border-zinc-800"
          }

          return (
            <div
              key={cite.index}
              className="rounded-lg border border-zinc-900 bg-zinc-950/40 hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-200 overflow-hidden"
            >
              <div
                onClick={() => toggleExpand(cite.index)}
                className="flex items-start justify-between p-3 cursor-pointer select-none gap-3"
              >
                <div className="flex items-start gap-2.5">
                  {/* Circle number */}
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                    {cite.index}
                  </span>
                  <div className="space-y-1">
                    <h5 className="font-medium text-zinc-200 text-xs leading-tight line-clamp-2">
                      {cite.title}
                    </h5>
                    {cite.url && (
                      <a
                        href={cite.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] text-purple-400 hover:underline hover:text-purple-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <LinkIcon className="h-2.5 w-2.5" />
                        {new URL(cite.url).hostname}
                        <ExternalLink className="h-2 w-2" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className={cn("text-[9px] font-mono px-2 py-0.5 rounded-full border", getScoreColor(cite.relevanceScore))}>
                    {cite.relevanceScore}%
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="h-3.5 w-3.5 text-zinc-500" />
                  ) : (
                    <ChevronDown className="h-3.5 w-3.5 text-zinc-500" />
                  )}
                </div>
              </div>

              {isExpanded && (
                <div className="px-3 pb-3 pt-1 text-xs text-zinc-400 border-t border-zinc-900/60 leading-relaxed font-light bg-zinc-900/5 animate-in fade-in duration-300">
                  {cite.snippet}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
