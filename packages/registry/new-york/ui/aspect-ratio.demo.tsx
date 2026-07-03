import { AspectRatio } from "./aspect-ratio"

export function AspectRatioDefault() {
  return (
    <div className="w-[300px] overflow-hidden rounded-md border shadow-sm">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  )
}
