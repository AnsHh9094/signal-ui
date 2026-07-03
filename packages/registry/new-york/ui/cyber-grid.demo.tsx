import * as React from "react"
import { CyberGrid } from "./cyber-grid"

export function CyberGridDefault() {
  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-zinc-800 bg-black flex items-center justify-center">
      <CyberGrid className="absolute inset-0" />
      <div className="relative z-10 text-center space-y-2 pointer-events-none p-6">
        <h3 className="text-xl font-bold tracking-tight text-white">WebGL Grid Shader</h3>
        <p className="text-sm text-zinc-400 max-w-sm">
          Interactive background grid that warps around your cursor. Hover and move your mouse to test.
        </p>
      </div>
    </div>
  )
}
