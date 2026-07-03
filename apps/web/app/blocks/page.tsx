import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/registry/new-york/ui/card";
import { blocksData } from "@/lib/blocks-data";

export default function BlocksPage() {
  return (
    <div className="space-y-8 max-w-5xl py-6 mx-auto px-4 md:px-8 animate-in fade-in duration-700">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Marketing Blocks</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Large, drop-in sections designed for modern landing pages. Copy and paste to build faster.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blocksData.map((block, index) => (
          <Link 
            href={`/blocks/${block.slug}`} 
            key={block.slug}
            className="group"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-muted/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5 hover:border-purple-500/30 animate-in slide-in-from-bottom-4 fade-in fill-mode-both">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-base group-hover:text-purple-400 transition-colors">{block.name}</CardTitle>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-mono bg-muted/50 px-2 py-0.5 rounded-full">
                    {block.category}
                  </span>
                </div>
                <CardDescription className="text-sm line-clamp-2">
                  {block.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
