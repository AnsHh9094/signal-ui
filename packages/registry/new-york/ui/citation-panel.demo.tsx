"use client"

import React from "react"
import { CitationPanel, Citation } from "./citation-panel"

export function CitationPanelDefault() {
  const dummyCitations: Citation[] = [
    {
      index: 1,
      title: "Understanding Next.js 15 App Router Optimizations",
      url: "https://nextjs.org/blog/next-15",
      relevanceScore: 96,
      snippet: "Next.js 15 introduces dynamic runtime optimizations and compiler improvements. Layout rendering speeds have been reduced by 15% on average through eager compilation and static caching updates."
    },
    {
      index: 2,
      title: "Tailwind CSS v4.0 Release Notes and Custom Configuration",
      url: "https://tailwindcss.com/blog/v4",
      relevanceScore: 88,
      snippet: "Tailwind CSS v4 features a brand new rust compiler engine, absolute native CSS variable tokens instead of tailwind.config.ts, and a fully declarative theme API via the @theme CSS directive."
    },
    {
      index: 3,
      title: "Shadcn UI Registry JSON File Specification v0.9",
      url: "https://ui.shadcn.com/docs/registry",
      relevanceScore: 72,
      snippet: "The registry file lists items (components, hooks, or themes) as JSON records. Using the shadcn CLI, clients can fetch components by URL. Dependencies and registryDependencies are installed automatically."
    }
  ]

  return (
    <div className="w-full flex justify-center p-4">
      <CitationPanel citations={dummyCitations} />
    </div>
  )
}
