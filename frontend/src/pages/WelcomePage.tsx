import { motion } from "framer-motion";
import { GitBranch, Code2, FolderTree, MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: MessageSquare,
    title: "AI-Powered Chat",
    description: "Ask natural language questions about any codebase and get intelligent answers.",
  },
  {
    icon: FolderTree,
    title: "Repository Structure",
    description: "Visualize project architecture with an interactive file tree explorer.",
  },
  {
    icon: Code2,
    title: "Code Analysis",
    description: "Get syntax-highlighted code snippets and detailed explanations.",
  },
  {
    icon: Sparkles,
    title: "Smart Insights",
    description: "Understand patterns, dependencies, and architecture at a glance.",
  },
];

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-4 py-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20"
        >
          <GitBranch className="h-10 w-10 text-primary" />
        </motion.div>

        <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          RepoExplorer<span className="text-primary">.ai</span>
        </h1>
        <p className="mx-auto max-w-lg text-base text-muted-foreground sm:text-lg">
          Explore any GitHub repository with the power of AI. Understand codebases faster than ever.
        </p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          onClick={() => navigate("/explore")}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110 active:scale-[0.98]"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      </motion.div>

      {/* Features Grid */}
      <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            className="group rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <feature.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-1 text-sm font-semibold text-foreground">{feature.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
