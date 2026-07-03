import * as React from "react"
import { Badge } from "./badge"

export function BadgeDefault() {
  return <Badge>Badge</Badge>
}

export function BadgeSecondary() {
  return <Badge variant="secondary">Secondary</Badge>
}

export function BadgeDestructive() {
  return <Badge variant="destructive">Destructive</Badge>
}

export function BadgeOutline() {
  return <Badge variant="outline">Outline</Badge>
}
