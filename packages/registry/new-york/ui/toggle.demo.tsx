import * as React from "react"
import { Bold } from "lucide-react"

import { Toggle } from "./toggle"

export function ToggleDefault() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}
