const legendItems = [
  { label: "Entry Point", color: "bg-primary/20 border-primary" },
  { label: "Core Module", color: "bg-accent/20 border-accent" },
  { label: "Component", color: "bg-[hsl(var(--success)/0.2)] border-[hsl(var(--success))]" },
  { label: "Utility", color: "bg-[hsl(var(--warning)/0.2)] border-[hsl(var(--warning))]" },
  { label: "API / External", color: "bg-[hsl(280,60%,55%,0.15)] border-[hsl(280,60%,55%)]" },
];

export function InsightLegend() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-card/60 px-4 py-2.5 text-xs">
      <span className="font-medium text-muted-foreground">Legend:</span>
      {legendItems.map((item) => (
        <div key={item.label} className="flex items-center gap-1.5">
          <div className={`h-3 w-3 rounded border ${item.color}`} />
          <span className="text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
