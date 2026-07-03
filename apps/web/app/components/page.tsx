import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/registry/new-york/ui/card";
import { componentsData } from "@/lib/components-data";

export default function ComponentsPage() {
  return (
    <div className="space-y-8 max-w-5xl py-6 animate-in fade-in duration-700">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Components</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Beautifully designed, motion-rich components that you can copy and paste into your apps.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {componentsData.map((component, index) => (
          <Link 
            href={`/components/${component.slug}`} 
            key={component.slug}
            className="group"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-muted/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/5 hover:border-cyan-500/30 animate-in slide-in-from-bottom-4 fade-in fill-mode-both">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-base group-hover:text-cyan-400 transition-colors">{component.name}</CardTitle>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-mono bg-muted/50 px-2 py-0.5 rounded-full">
                    {component.category}
                  </span>
                </div>
                <CardDescription className="text-sm line-clamp-2">
                  {component.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
