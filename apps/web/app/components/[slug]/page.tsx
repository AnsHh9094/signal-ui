import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { codeToHtml } from "shiki";
import { demoMap } from "./demo-map";
import { componentsData } from "@/lib/components-data";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/new-york/ui/table";
import { CopyButton } from "@/components/copy-button";

export default async function ComponentPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const DemoComponent = demoMap[slug];
  const componentData = componentsData.find((c) => c.slug === slug);

  if (!DemoComponent || !componentData) {
    notFound();
  }

  // Find source code
  const sourcePath = path.join(process.cwd(), "..", "..", "packages", "registry", "new-york", "ui", `${slug}.tsx`);
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
    <div className="space-y-12 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{componentData.name}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">{componentData.description}</p>
      </div>
      
      <Tabs defaultValue="preview" className="w-full relative">
        <TabsList className="mb-4 bg-muted/50 border">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="m-0 border-none p-0 outline-none">
          <div className="min-h-[400px] w-full rounded-xl border bg-card/40 backdrop-blur-sm shadow-sm flex items-center justify-center p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="z-10 relative w-full flex justify-center">
              <DemoComponent />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="code" className="m-0 border-none p-0 outline-none relative">
          <div className="rounded-xl border overflow-hidden bg-[#0d1117] relative shadow-lg">
             <div className="absolute top-4 right-4 z-10">
                <CopyButton value={sourceCode} className="bg-background/20 hover:bg-background/40" />
             </div>
             <div className="p-4 text-sm overflow-x-auto max-h-[600px]" dangerouslySetInnerHTML={{ __html: htmlCode }} />
          </div>
        </TabsContent>
      </Tabs>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
        <div className="flex flex-col sm:flex-row sm:h-14 items-start sm:items-center justify-between rounded-lg border bg-muted/30 px-4 py-3 sm:py-0 text-sm text-muted-foreground backdrop-blur-sm gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-500 text-xs font-bold">1</div>
            <span className="font-mono text-foreground/80">npx shadcn add https://signalui.dev/r/{slug}</span>
          </div>
          <CopyButton value={`npx shadcn add https://signalui.dev/r/${slug}`} className="self-end sm:self-auto bg-background hover:bg-muted shadow-sm border" />
        </div>
      </div>

      {componentData.props.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Props</h2>
          <div className="rounded-xl border bg-card/30 backdrop-blur-sm overflow-hidden shadow-sm">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead className="w-[150px] font-semibold">Prop</TableHead>
                  <TableHead className="font-semibold">Type</TableHead>
                  <TableHead className="font-semibold">Default</TableHead>
                  <TableHead className="font-semibold">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {componentData.props.map((prop) => (
                  <TableRow key={prop.name} className="hover:bg-muted/30">
                    <TableCell className="font-mono text-cyan-400 font-medium">{prop.name}</TableCell>
                    <TableCell>
                      <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                        {prop.type}
                      </code>
                    </TableCell>
                    <TableCell>
                      {prop.default !== "undefined" ? (
                        <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                          {prop.default}
                        </code>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground leading-relaxed">{prop.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}
