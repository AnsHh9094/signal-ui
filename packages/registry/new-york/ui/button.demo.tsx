import * as React from "react"
import { Button } from "./button"

export function ButtonDefault() {
  return <Button>Button</Button>
}

export function ButtonSecondary() {
  return <Button variant="secondary">Secondary</Button>
}

export function ButtonDestructive() {
  return <Button variant="destructive">Destructive</Button>
}

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>
}
