import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch } from "lucide-react";
import { RepoUrlInput } from "@/components/RepoUrlInput";
import { ExampleQuestions } from "@/components/ExampleQuestions";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { TypingIndicator } from "@/components/TypingIndicator";
import { RepoOverview } from "@/components/RepoOverview";
import { ChatHistory } from "@/components/ChatHistory";
import type { ChatMessage as ChatMessageType } from "@/lib/types";
import { MOCK_REPO_INFO } from "@/lib/types";

const MOCK_RESPONSE = `This repository is a **React-based UI library** that provides a comprehensive set of components for building modern web applications.

## Key Architecture

The project follows a **component-driven architecture** with the following structure:

\`\`\`typescript
// Entry point
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);
\`\`\`

### Main Patterns Used:
- **Compound Components** for complex UI elements
- **Render Props** for flexible rendering
- **Custom Hooks** for reusable logic

The codebase is well-organized with clear separation of concerns.`;

export default function HomePage() {
  const [repoLoaded, setRepoLoaded] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleRepoSubmit = (url: string) => {
    setRepoLoaded(true);
    setMessages([]);
  };

  const handleSend = (content: string) => {
    const userMsg: ChatMessageType = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: ChatMessageType = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: MOCK_RESPONSE,
        sourceFiles: ["src/App.tsx", "src/main.tsx", "package.json"],
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 2000);
  };

  if (!repoLoaded) {
    return (
      <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <GitBranch className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
            Explore any GitHub repo with AI
          </h1>
          <p className="text-sm text-muted-foreground">
            Paste a repository URL and ask questions about the codebase
          </p>
        </motion.div>

        <RepoUrlInput onSubmit={handleRepoSubmit} />

        <div className="mt-10">
          <ExampleQuestions onSelect={(q) => { handleRepoSubmit("https://github.com/facebook/react"); setTimeout(() => handleSend(q), 300); }} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-3.5rem)]">
      {/* Sidebar */}
      <aside className="hidden w-72 shrink-0 space-y-4 overflow-y-auto border-r border-border bg-card/50 p-4 lg:block">
        <RepoUrlInput onSubmit={handleRepoSubmit} compact />
        <RepoOverview repo={MOCK_REPO_INFO} />
        <ChatHistory />
      </aside>

      {/* Chat area */}
      <main className="flex flex-1 flex-col">
        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <AnimatePresence>
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
            </AnimatePresence>
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <ChatInput onSend={handleSend} disabled={isTyping} />
        </div>
      </main>
    </div>
  );
}
