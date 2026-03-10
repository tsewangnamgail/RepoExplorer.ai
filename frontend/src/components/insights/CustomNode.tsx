import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { motion } from "framer-motion";
import { Folder, FileCode, Cpu, Zap, Database, Layout, Globe, Server } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  folder: Folder,
  file: FileCode,
  module: Cpu,
  function: Zap,
  database: Database,
  layout: Layout,
  api: Globe,
  server: Server,
};

type CustomNodeData = {
  label: string;
  description?: string;
  icon?: string;
  category?: "entry" | "core" | "component" | "util" | "config" | "api" | "default";
};

const categoryStyles: Record<string, string> = {
  entry: "border-primary bg-primary/10 text-primary",
  core: "border-accent bg-accent/10 text-accent",
  component: "border-[hsl(var(--success))] bg-[hsl(var(--success)/0.1)] text-[hsl(var(--success))]",
  util: "border-[hsl(var(--warning))] bg-[hsl(var(--warning)/0.1)] text-[hsl(var(--warning))]",
  config: "border-muted-foreground bg-muted text-muted-foreground",
  api: "border-[hsl(280,60%,55%)] bg-[hsl(280,60%,55%,0.1)] text-[hsl(280,60%,55%)]",
  default: "border-border bg-card text-foreground",
};

function CustomNode({ data }: NodeProps) {
  const nodeData = data as unknown as CustomNodeData;
  const Icon = iconMap[nodeData.icon || "file"] || FileCode;
  const style = categoryStyles[nodeData.category || "default"];

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`rounded-xl border-2 px-4 py-3 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl ${style}`}
      style={{ minWidth: 160 }}
    >
      <Handle type="target" position={Position.Top} className="!h-2 !w-2 !border-2 !border-background !bg-primary" />
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background/50">
          <Icon className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <div className="truncate text-xs font-semibold">{nodeData.label}</div>
          {nodeData.description && (
            <div className="truncate text-[10px] opacity-70">{nodeData.description}</div>
          )}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="!h-2 !w-2 !border-2 !border-background !bg-primary" />
    </motion.div>
  );
}

export default memo(CustomNode);
