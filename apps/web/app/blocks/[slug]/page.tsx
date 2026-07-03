import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { codeToHtml } from "shiki";
import { blocksDemoMap } from "../demo-map";
import { blocksData } from "@/lib/blocks-data";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york/ui/tabs";
import { CopyButton } from "@/components/copy-button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function BlockPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const DemoComponent = blocksDemoMap[slug];
  const blockData = blocksData.find((b) => b.slug === slug);

  if (!DemoComponent || !blockData) {
    notFound();
  }

  // Find source code
  const sourcePath = path.join(process.cwd(), "..", "..", "packages", "registry", "new-york", "blocks", `${slug}.tsx`);
  let sourceCode = "";
  try {
    sourceCode = fs.readFileSync(sourcePath, "utf-8");
  } catch (error) {
    sourceCode = `// Error loading source for ${slug}\n// ${sourcePath}`;
  }

  const htmlCode = await codeToHtml(sourceCode, {
    lang: "tsx",
    theme: "github-dark",
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <div className="border-b bg-muted/20">
        <div className="container mx-auto px-4 md:px-8 py-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <Link href="/blocks" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to blocks
          </Link>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight">{blockData.name}</h1>
              <span className="text-xs uppercase tracking-wider text-purple-400 font-mono bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
                {blockData.category}
              </span>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">{blockData.description}</p>
          </div>
        </div>
      </div>

      {/* Main content - Edge to edge preview */}
      <div className="flex-1 w-full animate-in fade-in duration-700 delay-150 fill-mode-both">
        <Tabs defaultValue="preview" className="w-full">
          <div className="border-b">
            <div className="container mx-auto px-4 md:px-8">
              <TabsList className="mb-0 h-12 bg-transparent border-none p-0 rounded-none w-full justify-start gap-6">
                <TabsTrigger 
                  value="preview" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger 
                  value="code" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0"
                >
                  Code
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          <TabsContent value="preview" className="m-0 border-none p-0 outline-none w-full">
            <div className="w-full relative min-h-[60vh] flex flex-col">
              <DemoComponent />
            </div>
          </TabsContent>
          
          <TabsContent value="code" className="m-0 border-none p-0 outline-none">
            <div className="container mx-auto px-4 md:px-8 py-8">
              <div className="flex flex-col sm:flex-row sm:h-14 items-start sm:items-center justify-between rounded-lg border bg-muted/30 px-4 py-3 sm:py-0 text-sm text-muted-foreground backdrop-blur-sm gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-purple-500 text-xs font-bold">1</div>
                  <span className="font-mono text-foreground/80">npx shadcn add https://signalui.dev/r/{slug}</span>
                </div>
                <CopyButton value={`npx shadcn add https://signalui.dev/r/${slug}`} className="self-end sm:self-auto bg-background hover:bg-muted shadow-sm border" />
              </div>

              <div className="rounded-xl border overflow-hidden bg-[#0d1117] relative shadow-lg">
                 <div className="absolute top-4 right-4 z-10">
                    <CopyButton value={sourceCode} className="bg-background/20 hover:bg-background/40" />
                 </div>
                 <div className="p-4 text-sm overflow-x-auto max-h-[800px]" dangerouslySetInnerHTML={{ __html: htmlCode }} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
