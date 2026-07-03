import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

export function AvatarDefault() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
