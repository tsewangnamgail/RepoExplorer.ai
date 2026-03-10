import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { EXAMPLE_QUESTIONS } from "@/lib/types";

interface ExampleQuestionsProps {
  onSelect: (q: string) => void;
}

export function ExampleQuestions({ onSelect }: ExampleQuestionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="w-full max-w-xl space-y-3"
    >
      <p className="text-center text-xs font-medium text-muted-foreground">Try asking</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {EXAMPLE_QUESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            className="group flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-left text-xs text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
          >
            <MessageSquare className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/50 group-hover:text-primary" />
            <span>{q}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
