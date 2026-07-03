"use client"

import React, { useMemo } from "react"
import { cn } from "@/lib/utils"

export interface DiffViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  oldValue: string
  newValue: string
  viewMode?: "unified" | "split"
  fileName?: string
}

interface DiffLine {
  type: "added" | "removed" | "unchanged"
  value: string
  oldLine?: number
  newLine?: number
}

function computeLineDiff(oldStr: string, newStr: string): DiffLine[] {
  const oldLines = oldStr.split("\n")
  const newLines = newStr.split("\n")
  
  // O(N*M) LCS algorithm
  const dp: number[][] = Array(oldLines.length + 1)
    .fill(0)
    .map(() => Array(newLines.length + 1).fill(0))

  for (let i = 1; i <= oldLines.length; i++) {
    for (let j = 1; j <= newLines.length; j++) {
      if (oldLines[i - 1] === newLines[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  const result: DiffLine[] = []
  let i = oldLines.length
  let j = newLines.length

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldLines[i - 1] === newLines[j - 1]) {
      result.unshift({ type: "unchanged", value: oldLines[i - 1], oldLine: i, newLine: j })
      i--
      j--
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({ type: "added", value: newLines[j - 1], newLine: j })
      j--
    } else {
      result.unshift({ type: "removed", value: oldLines[i - 1], oldLine: i })
      i--
    }
  }

  return result
}

export function DiffViewer({
  oldValue,
  newValue,
  viewMode = "unified",
  fileName,
  className,
  ...props
}: DiffViewerProps) {
  const diffs = useMemo(() => computeLineDiff(oldValue, newValue), [oldValue, newValue])

  // Split rendering helper
  const splitRows = useMemo(() => {
    if (viewMode !== "split") return []
    
    const rows: { left: DiffLine | null; right: DiffLine | null }[] = []
    let l = 0
    let r = 0

    const leftSide = diffs.filter(d => d.type === "removed" || d.type === "unchanged")
    const rightSide = diffs.filter(d => d.type === "added" || d.type === "unchanged")

    while (l < leftSide.length || r < rightSide.length) {
      const leftItem = leftSide[l] || null
      const rightItem = rightSide[r] || null

      if (leftItem && rightItem && leftItem.value === rightItem.value && leftItem.type === "unchanged") {
        rows.push({ left: leftItem, right: rightItem })
        l++
        r++
      } else if (leftItem && leftItem.type === "removed") {
        // Find if we have matching additions next to group side-by-side
        const rightPeek = rightSide[r]
        if (rightPeek && rightPeek.type === "added" && (!leftSide[l + 1] || leftSide[l + 1].type !== "removed")) {
          rows.push({ left: leftItem, right: rightPeek })
          l++
          r++
        } else {
          rows.push({ left: leftItem, right: null })
          l++
        }
      } else if (rightItem && rightItem.type === "added") {
        rows.push({ left: null, right: rightItem })
        r++
      } else {
        // Fallback progress
        if (leftItem) {
          rows.push({ left: leftItem, right: null })
          l++
        } else if (rightItem) {
          rows.push({ left: null, right: rightItem })
          r++
        }
      }
    }

    return rows
  }, [diffs, viewMode])

  return (
    <div
      className={cn(
        "w-full rounded-xl border border-zinc-800 bg-[#09090b] overflow-hidden text-xs md:text-sm font-mono shadow-2xl text-zinc-300",
        className
      )}
      {...props}
    >
      {/* Diff Header */}
      {fileName && (
        <div className="flex items-center justify-between border-b border-zinc-900 bg-zinc-950/80 px-4 py-2.5">
          <span className="font-semibold text-zinc-400">{fileName}</span>
          <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-sans">
            <span className="text-emerald-500">+{diffs.filter(d => d.type === "added").length}</span>
            <span>/</span>
            <span className="text-rose-500">-{diffs.filter(d => d.type === "removed").length}</span>
          </div>
        </div>
      )}

      {viewMode === "unified" ? (
        /* Unified View */
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {diffs.map((line, idx) => {
                const isAdded = line.type === "added"
                const isRemoved = line.type === "removed"
                
                return (
                  <tr
                    key={idx}
                    className={cn(
                      "group hover:bg-zinc-900/30 transition-colors leading-relaxed",
                      isAdded && "bg-emerald-950/20 text-emerald-400",
                      isRemoved && "bg-rose-950/20 text-rose-400"
                    )}
                  >
                    {/* Line numbers */}
                    <td className="w-10 select-none text-right pr-3 text-zinc-600 border-r border-zinc-900 bg-zinc-950/20 text-[10px] py-0.5">
                      {line.oldLine || ""}
                    </td>
                    <td className="w-10 select-none text-right pr-3 text-zinc-600 border-r border-zinc-900 bg-zinc-950/20 text-[10px] py-0.5">
                      {line.newLine || ""}
                    </td>
                    {/* Symbol */}
                    <td className="w-6 select-none text-center font-bold text-zinc-600 py-0.5">
                      {isAdded ? "+" : isRemoved ? "-" : " "}
                    </td>
                    {/* Code */}
                    <td className="px-4 whitespace-pre py-0.5 break-all">
                      {line.value}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        /* Split View */
        <div className="overflow-x-auto">
          <div className="grid grid-cols-2 divide-x divide-zinc-900">
            {/* Left Side (Old) */}
            <div className="w-full">
              <table className="w-full border-collapse">
                <tbody>
                  {splitRows.map((row, idx) => {
                    const left = row.left
                    const isRemoved = left?.type === "removed"
                    
                    return (
                      <tr
                        key={`left-${idx}`}
                        className={cn(
                          "group hover:bg-zinc-900/30 transition-colors leading-relaxed min-h-[20px]",
                          isRemoved ? "bg-rose-950/20 text-rose-400" : !left ? "bg-zinc-900/10 opacity-30 select-none pointer-events-none" : ""
                        )}
                      >
                        <td className="w-10 select-none text-right pr-3 text-zinc-600 border-r border-zinc-900 bg-zinc-950/20 text-[10px] py-0.5">
                          {left?.oldLine || ""}
                        </td>
                        <td className="w-6 select-none text-center font-bold text-zinc-600 py-0.5">
                          {isRemoved ? "-" : " "}
                        </td>
                        <td className="px-4 whitespace-pre py-0.5">
                          {left?.value || ""}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Right Side (New) */}
            <div className="w-full">
              <table className="w-full border-collapse">
                <tbody>
                  {splitRows.map((row, idx) => {
                    const right = row.right
                    const isAdded = right?.type === "added"
                    
                    return (
                      <tr
                        key={`right-${idx}`}
                        className={cn(
                          "group hover:bg-zinc-900/30 transition-colors leading-relaxed min-h-[20px]",
                          isAdded ? "bg-emerald-950/20 text-emerald-400" : !right ? "bg-zinc-900/10 opacity-30 select-none pointer-events-none" : ""
                        )}
                      >
                        <td className="w-10 select-none text-right pr-3 text-zinc-600 border-r border-zinc-900 bg-zinc-950/20 text-[10px] py-0.5">
                          {right?.newLine || ""}
                        </td>
                        <td className="w-6 select-none text-center font-bold text-zinc-600 py-0.5">
                          {isAdded ? "+" : " "}
                        </td>
                        <td className="px-4 whitespace-pre py-0.5">
                          {right?.value || ""}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
