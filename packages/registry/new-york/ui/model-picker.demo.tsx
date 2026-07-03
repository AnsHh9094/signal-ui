import { ModelPicker } from "@/registry/new-york/ui/model-picker"

export function ModelPickerDefault() {
  return (
    <div className="flex min-h-[350px] w-full items-start justify-center bg-zinc-50 p-10 pt-20 dark:bg-zinc-900 rounded-xl">
      <ModelPicker />
    </div>
  )
}
