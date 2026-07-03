import * as React from "react"
import { RouteTracker } from "./route-tracker"

export function RouteTrackerDefault() {
  return (
    <div className="flex items-center justify-center p-8 bg-zinc-950 rounded-2xl border border-zinc-800">
      <RouteTracker />
    </div>
  )
}
