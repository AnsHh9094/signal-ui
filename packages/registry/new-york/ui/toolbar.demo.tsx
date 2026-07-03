"use client"

import * as React from "react"
import { Bold, Italic, Strikethrough } from "lucide-react"

import {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from "./toolbar"

export function ToolbarDefault() {
  return (
    <Toolbar className="w-fit">
      <ToolbarToggleGroup type="multiple">
        <ToolbarToggleItem value="bold" aria-label="Bold">
          <Bold className="h-4 w-4" />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="italic" aria-label="Italic">
          <Italic className="h-4 w-4" />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="strikethrough" aria-label="Strike through">
          <Strikethrough className="h-4 w-4" />
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarButton>Share</ToolbarButton>
    </Toolbar>
  )
}
