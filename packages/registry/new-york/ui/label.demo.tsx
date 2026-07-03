import * as React from "react"
import { Label } from "./label"

export function LabelDefault() {
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}
