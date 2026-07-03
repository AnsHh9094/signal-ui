"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/registry/new-york/ui/carousel"
import { Card, CardContent } from "@/registry/new-york/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york/ui/avatar"

export interface TestimonialCarouselProps extends React.HTMLAttributes<HTMLDivElement> {}

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Frontend Engineer at Vercel",
    avatar: "https://i.pravatar.cc/150?u=alex",
    content: "Signal UI has completely transformed how we build marketing pages. The motion-native approach means our sites feel incredibly premium with zero extra effort. Highly recommended."
  },
  {
    name: "Sarah Chen",
    role: "Design Engineer at Stripe",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    content: "I've tried every component library out there. What sets Signal UI apart is the attention to detail. The animations are buttery smooth and the AI product kit is a game changer."
  },
  {
    name: "Marcus Johnson",
    role: "Founder at Agentic AI",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    content: "We were able to ship our AI copilot interface in a weekend thanks to the AI components. The Agent Reasoning Trace is exactly what we needed to build trust with our users."
  },
  {
    name: "Emily Davis",
    role: "Lead Designer at Figma",
    avatar: "https://i.pravatar.cc/150?u=emily",
    content: "Finally, a component library that doesn't look like every other Bootstrap or Tailwind template. The dark mode default and subtle glows give it a truly distinctive, modern aesthetic."
  },
  {
    name: "David Kim",
    role: "Indie Hacker",
    avatar: "https://i.pravatar.cc/150?u=david",
    content: "The shadcn CLI compatibility makes it a breeze to install. I just run the command and the beautifully animated components are right there in my codebase, ready to tweak."
  }
]

export function TestimonialCarousel({ className, ...props }: TestimonialCarouselProps) {
  return (
    <section className={cn("w-full py-24 bg-background overflow-hidden relative", className)} {...props}>
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute left-0 inset-y-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Loved by developers</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            See what people are saying about building with Signal UI.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12 md:px-16 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full bg-card/40 backdrop-blur-md border-muted/50 hover:bg-card/60 transition-colors">
                      <CardContent className="flex flex-col h-full p-6">
                        <div className="flex-1 mb-6">
                          {/* Quote icon */}
                          <svg className="h-6 w-6 text-muted-foreground/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                          <p className="text-sm md:text-base leading-relaxed text-foreground/90 italic">
                            "{testimonial.content}"
                          </p>
                        </div>
                        <div className="flex items-center gap-4 mt-auto">
                          <Avatar className="h-10 w-10 border border-muted/50">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold">{testimonial.name}</span>
                            <span className="text-xs text-muted-foreground">{testimonial.role}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-8 border-muted/50 bg-background/50 backdrop-blur hover:bg-accent hover:text-accent-foreground" />
            <CarouselNext className="right-0 md:-right-8 border-muted/50 bg-background/50 backdrop-blur hover:bg-accent hover:text-accent-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
