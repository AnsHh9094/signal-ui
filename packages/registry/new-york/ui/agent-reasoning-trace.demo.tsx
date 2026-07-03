import { AgentReasoningTrace } from "@/registry/new-york/ui/agent-reasoning-trace"

export function AgentReasoningTraceDefault() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] w-full gap-6 bg-white dark:bg-zinc-950 p-6 rounded-xl">
      <AgentReasoningTrace 
        status="running"
        title="Analyzing document structure..."
        steps={[
          "Identified 4 main sections in the PDF.",
          "Extracting tables from section 2...",
        ]}
      />
      <AgentReasoningTrace 
        status="completed"
        title="Generated financial summary"
        duration="4.2s"
        steps={[
          "Extracted Q3 revenue data ($42.5M).",
          "Calculated year-over-year growth (14%).",
          "Identified key risk factors from the MD&A section.",
          "Synthesized findings into a 3-paragraph summary."
        ]}
      />
    </div>
  )
}
