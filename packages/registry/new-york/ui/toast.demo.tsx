"use client"
import * as React from "react"
import { Button } from "./button"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast"

export function ToastDefault() {
  const [open, setOpen] = React.useState(false)

  return (
    <ToastProvider>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Show Toast
      </Button>
      <Toast open={open} onOpenChange={setOpen}>
        <div className="grid gap-1">
          <ToastTitle>Scheduled: Catch up</ToastTitle>
          <ToastDescription>Friday, February 10, 2023 at 5:57 PM</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  )
}
