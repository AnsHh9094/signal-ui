"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Sparkles, Brain, Cpu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"

type Model = {
  id: string
  name: string
  provider: "OpenAI" | "Anthropic" | "Google" | "Meta"
  description: string
  icon: React.ReactNode
}

const models: Model[] = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    provider: "OpenAI",
    description: "Most capable model, great for complex tasks.",
    icon: <Brain className="h-4 w-4 text-emerald-500" />
  },
  {
    id: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    description: "Fastest model, excellent at coding and logic.",
    icon: <Sparkles className="h-4 w-4 text-amber-500" />
  },
  {
    id: "gemini-1.5-pro",
    name: "Gemini 1.5 Pro",
    provider: "Google",
    description: "Massive context window, great for analysis.",
    icon: <Cpu className="h-4 w-4 text-blue-500" />
  }
]

export function ModelPicker() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("gpt-4o")

  const selectedModel = models.find((m) => m.id === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[280px] justify-between px-3"
        >
          {selectedModel ? (
            <div className="flex items-center space-x-2 truncate">
              {selectedModel.icon}
              <span className="font-medium">{selectedModel.name}</span>
            </div>
          ) : (
            "Select model..."
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search models..." />
          <CommandList>
            <CommandEmpty>No model found.</CommandEmpty>
            <CommandGroup>
              {models.map((model) => (
                <CommandItem
                  key={model.id}
                  value={model.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue)
                    setOpen(false)
                  }}
                  className="flex items-start py-3"
                >
                  <div className="mr-2 mt-0.5 flex-shrink-0">{model.icon}</div>
                  <div className="flex flex-col">
                    <span className="font-medium">{model.name}</span>
                    <span className="text-xs text-muted-foreground">{model.description}</span>
                  </div>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4 mt-2",
                      value === model.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
