import { Star, GitFork, Clock, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import type { RepoInfo } from "@/lib/types";

function formatNumber(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toString();
}

export function RepoOverview({ repo }: { repo: RepoInfo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-border bg-card p-5"
    >
      <div className="mb-4">
        <h2 className="font-mono text-sm font-semibold text-foreground">{repo.fullName}</h2>
        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{repo.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Stat icon={<Code2 className="h-3.5 w-3.5" />} label="Language" value={repo.language} />
        <Stat icon={<Star className="h-3.5 w-3.5" />} label="Stars" value={formatNumber(repo.stars)} />
        <Stat icon={<GitFork className="h-3.5 w-3.5" />} label="Forks" value={formatNumber(repo.forks)} />
        <Stat
          icon={<Clock className="h-3.5 w-3.5" />}
          label="Updated"
          value={new Date(repo.updatedAt).toLocaleDateString()}
        />
      </div>
    </motion.div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-surface p-2.5">
      <div className="text-primary">{icon}</div>
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-xs font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}
