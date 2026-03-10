import { History, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const MOCK_HISTORY = [
  { id: "1", title: "React architecture overview", date: "2 hours ago" },
  { id: "2", title: "Authentication flow analysis", date: "Yesterday" },
  { id: "3", title: "Database schema review", date: "3 days ago" },
];

export function ChatHistory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="rounded-xl border border-border bg-card p-5"
    >
      <div className="mb-3 flex items-center gap-2">
        <History className="h-4 w-4 text-primary" />
        <h3 className="text-xs font-semibold text-foreground">Recent Chats</h3>
      </div>
      <div className="space-y-1">
        {MOCK_HISTORY.map((item) => (
          <button
            key={item.id}
            className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left transition-colors hover:bg-secondary"
          >
            <MessageSquare className="h-3 w-3 shrink-0 text-muted-foreground" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs text-foreground">{item.title}</p>
              <p className="text-[10px] text-muted-foreground">{item.date}</p>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
