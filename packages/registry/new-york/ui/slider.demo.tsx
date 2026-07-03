import * as React from "react"
import { Slider } from "./slider"

export function SliderDefault() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className="w-[60%]"
    />
  )
}
