import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  FolderOpen,
  FileText,
  FileCode2,
  FileJson,
  FileType,
  ChevronRight,
  BookOpen,
  Settings,
} from "lucide-react";
import type { FileTreeNode } from "@/lib/types";

function getFileIcon(name: string) {
  const lower = name.toLowerCase();
  if (lower === "readme.md") return <BookOpen className="h-3.5 w-3.5 text-success" />;
  if (lower.endsWith(".json")) return <FileJson className="h-3.5 w-3.5 text-warning" />;
  if (lower.endsWith(".ts") || lower.endsWith(".tsx")) return <FileCode2 className="h-3.5 w-3.5 text-primary" />;
  if (lower.endsWith(".js") || lower.endsWith(".jsx")) return <FileCode2 className="h-3.5 w-3.5" style={{ color: "hsl(50, 90%, 50%)" }} />;
  if (lower.endsWith(".css") || lower.endsWith(".scss")) return <FileType className="h-3.5 w-3.5" style={{ color: "hsl(200, 80%, 55%)" }} />;
  if (lower.startsWith(".") || lower.includes("config")) return <Settings className="h-3.5 w-3.5 text-muted-foreground" />;
  return <FileText className="h-3.5 w-3.5 text-muted-foreground" />;
}

function TreeNode({ node, depth = 0 }: { node: FileTreeNode; depth?: number }) {
  const [open, setOpen] = useState(depth < 1);
  const isDir = node.type === "dir";

  return (
    <div>
      <button
        onClick={() => isDir && setOpen(!open)}
        className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs transition-colors hover:bg-secondary ${
          isDir ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
        }`}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {isDir && (
          <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.15 }}>
            <ChevronRight className="h-3 w-3 text-muted-foreground" />
          </motion.div>
        )}
        {isDir ? (
          open ? (
            <FolderOpen className="h-3.5 w-3.5 text-primary" />
          ) : (
            <Folder className="h-3.5 w-3.5 text-primary/70" />
          )
        ) : (
          getFileIcon(node.name)
        )}
        <span className={isDir ? "" : "font-mono"}>{node.name}</span>
      </button>

      <AnimatePresence>
        {isDir && open && node.children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {node.children.map((child) => (
              <TreeNode key={child.path} node={child} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FileTree({ tree }: { tree: FileTreeNode[] }) {
  return (
    <div className="space-y-0.5">
      {tree.map((node) => (
        <TreeNode key={node.path} node={node} />
      ))}
    </div>
  );
}
