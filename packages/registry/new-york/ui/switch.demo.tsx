import * as React from "react"
import { Label } from "./label"
import { Switch } from "./switch"

export function SwitchDefault() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
