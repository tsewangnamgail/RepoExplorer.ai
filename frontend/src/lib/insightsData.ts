import type { Node, Edge } from "@xyflow/react";
import { MarkerType } from "@xyflow/react";

const edgeDefaults = {
  animated: true,
  style: { stroke: "hsl(174, 72%, 50%)", strokeWidth: 2 },
  markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(174, 72%, 50%)" },
};

// ─── Architecture Diagram ────────────────────────────────────────
export const architectureNodes: Node[] = [
  { id: "entry", type: "custom", position: { x: 350, y: 0 }, data: { label: "main.tsx", description: "App entry point", icon: "file", category: "entry" } },
  { id: "app", type: "custom", position: { x: 350, y: 100 }, data: { label: "App.tsx", description: "Root component & routing", icon: "layout", category: "core" } },
  { id: "router", type: "custom", position: { x: 350, y: 200 }, data: { label: "React Router", description: "Route definitions", icon: "module", category: "core" } },
  { id: "welcome", type: "custom", position: { x: 50, y: 320 }, data: { label: "WelcomePage", description: "Landing page", icon: "layout", category: "component" } },
  { id: "explorer", type: "custom", position: { x: 250, y: 320 }, data: { label: "ExplorerPage", description: "Chat interface", icon: "layout", category: "component" } },
  { id: "structure", type: "custom", position: { x: 450, y: 320 }, data: { label: "StructurePage", description: "File tree view", icon: "folder", category: "component" } },
  { id: "insights", type: "custom", position: { x: 650, y: 320 }, data: { label: "InsightsPage", description: "Visualizations", icon: "module", category: "component" } },
  { id: "header", type: "custom", position: { x: 600, y: 100 }, data: { label: "AppHeader", description: "Navigation bar", icon: "layout", category: "component" } },
  { id: "chatinput", type: "custom", position: { x: 100, y: 450 }, data: { label: "ChatInput", description: "Message composer", icon: "file", category: "component" } },
  { id: "chatmsg", type: "custom", position: { x: 300, y: 450 }, data: { label: "ChatMessage", description: "Message renderer", icon: "file", category: "component" } },
  { id: "filetree", type: "custom", position: { x: 500, y: 450 }, data: { label: "FileTree", description: "Recursive tree", icon: "folder", category: "component" } },
  { id: "api", type: "custom", position: { x: 200, y: 570 }, data: { label: "FastAPI Backend", description: "AI & GitHub API", icon: "api", category: "api" } },
  { id: "hooks", type: "custom", position: { x: 700, y: 450 }, data: { label: "Custom Hooks", description: "useTheme, useMobile", icon: "function", category: "util" } },
  { id: "utils", type: "custom", position: { x: 700, y: 560 }, data: { label: "Utilities", description: "types, utils, theme", icon: "module", category: "util" } },
];

export const architectureEdges: Edge[] = [
  { id: "e-entry-app", source: "entry", target: "app", ...edgeDefaults },
  { id: "e-app-router", source: "app", target: "router", ...edgeDefaults },
  { id: "e-app-header", source: "app", target: "header", ...edgeDefaults },
  { id: "e-router-welcome", source: "router", target: "welcome", ...edgeDefaults },
  { id: "e-router-explorer", source: "router", target: "explorer", ...edgeDefaults },
  { id: "e-router-structure", source: "router", target: "structure", ...edgeDefaults },
  { id: "e-router-insights", source: "router", target: "insights", ...edgeDefaults },
  { id: "e-explorer-chatinput", source: "explorer", target: "chatinput", ...edgeDefaults },
  { id: "e-explorer-chatmsg", source: "explorer", target: "chatmsg", ...edgeDefaults },
  { id: "e-structure-filetree", source: "structure", target: "filetree", ...edgeDefaults },
  { id: "e-chatinput-api", source: "chatinput", target: "api", ...edgeDefaults },
  { id: "e-chatmsg-api", source: "chatmsg", target: "api", ...edgeDefaults },
  { id: "e-explorer-hooks", source: "explorer", target: "hooks", ...edgeDefaults },
  { id: "e-hooks-utils", source: "hooks", target: "utils", ...edgeDefaults },
];

// ─── File Dependency Graph ───────────────────────────────────────
export const dependencyNodes: Node[] = [
  { id: "d-main", type: "custom", position: { x: 350, y: 0 }, data: { label: "main.tsx", icon: "file", category: "entry" } },
  { id: "d-app", type: "custom", position: { x: 350, y: 100 }, data: { label: "App.tsx", icon: "file", category: "core" } },
  { id: "d-index", type: "custom", position: { x: 100, y: 220 }, data: { label: "Index.tsx", icon: "file", category: "component" } },
  { id: "d-structure", type: "custom", position: { x: 350, y: 220 }, data: { label: "StructurePage.tsx", icon: "file", category: "component" } },
  { id: "d-welcome", type: "custom", position: { x: 600, y: 220 }, data: { label: "WelcomePage.tsx", icon: "file", category: "component" } },
  { id: "d-chatmsg", type: "custom", position: { x: 0, y: 350 }, data: { label: "ChatMessage.tsx", icon: "file", category: "component" } },
  { id: "d-chatinput", type: "custom", position: { x: 200, y: 350 }, data: { label: "ChatInput.tsx", icon: "file", category: "component" } },
  { id: "d-filetree", type: "custom", position: { x: 400, y: 350 }, data: { label: "FileTree.tsx", icon: "file", category: "component" } },
  { id: "d-repoinput", type: "custom", position: { x: 150, y: 470 }, data: { label: "RepoUrlInput.tsx", icon: "file", category: "component" } },
  { id: "d-types", type: "custom", position: { x: 600, y: 350 }, data: { label: "types.ts", icon: "module", category: "util" } },
  { id: "d-utils", type: "custom", position: { x: 600, y: 460 }, data: { label: "utils.ts", icon: "module", category: "util" } },
  { id: "d-theme", type: "custom", position: { x: 400, y: 470 }, data: { label: "useTheme.ts", icon: "function", category: "util" } },
  { id: "d-header", type: "custom", position: { x: 600, y: 100 }, data: { label: "AppHeader.tsx", icon: "layout", category: "component" } },
];

export const dependencyEdges: Edge[] = [
  { id: "de-1", source: "d-main", target: "d-app", ...edgeDefaults },
  { id: "de-2", source: "d-app", target: "d-index", ...edgeDefaults },
  { id: "de-3", source: "d-app", target: "d-structure", ...edgeDefaults },
  { id: "de-4", source: "d-app", target: "d-welcome", ...edgeDefaults },
  { id: "de-5", source: "d-app", target: "d-header", ...edgeDefaults },
  { id: "de-6", source: "d-index", target: "d-chatmsg", ...edgeDefaults },
  { id: "de-7", source: "d-index", target: "d-chatinput", ...edgeDefaults },
  { id: "de-8", source: "d-index", target: "d-repoinput", ...edgeDefaults },
  { id: "de-9", source: "d-index", target: "d-types", ...edgeDefaults },
  { id: "de-10", source: "d-structure", target: "d-filetree", ...edgeDefaults },
  { id: "de-11", source: "d-structure", target: "d-types", ...edgeDefaults },
  { id: "de-12", source: "d-chatmsg", target: "d-types", ...edgeDefaults },
  { id: "de-13", source: "d-chatmsg", target: "d-utils", ...edgeDefaults },
  { id: "de-14", source: "d-header", target: "d-theme", ...edgeDefaults },
];

// ─── Function Call Graph ─────────────────────────────────────────
export const functionNodes: Node[] = [
  { id: "f-render", type: "custom", position: { x: 350, y: 0 }, data: { label: "render()", description: "ReactDOM render", icon: "function", category: "entry" } },
  { id: "f-app", type: "custom", position: { x: 350, y: 100 }, data: { label: "App()", description: "Root component", icon: "function", category: "core" } },
  { id: "f-homepage", type: "custom", position: { x: 150, y: 220 }, data: { label: "HomePage()", description: "Chat page logic", icon: "function", category: "component" } },
  { id: "f-handleSend", type: "custom", position: { x: 0, y: 340 }, data: { label: "handleSend()", description: "Send user message", icon: "function", category: "component" } },
  { id: "f-handleRepo", type: "custom", position: { x: 200, y: 340 }, data: { label: "handleRepoSubmit()", description: "Load repository", icon: "function", category: "component" } },
  { id: "f-setMessages", type: "custom", position: { x: 0, y: 460 }, data: { label: "setMessages()", description: "State update", icon: "function", category: "util" } },
  { id: "f-setTyping", type: "custom", position: { x: 200, y: 460 }, data: { label: "setIsTyping()", description: "Typing state", icon: "function", category: "util" } },
  { id: "f-useTheme", type: "custom", position: { x: 550, y: 220 }, data: { label: "useTheme()", description: "Theme hook", icon: "function", category: "util" } },
  { id: "f-toggle", type: "custom", position: { x: 550, y: 340 }, data: { label: "toggleTheme()", description: "Switch dark/light", icon: "function", category: "util" } },
  { id: "f-scrollInto", type: "custom", position: { x: 400, y: 460 }, data: { label: "scrollIntoView()", description: "Auto-scroll chat", icon: "function", category: "util" } },
  { id: "f-scrollEffect", type: "custom", position: { x: 400, y: 340 }, data: { label: "useEffect()", description: "Scroll on new msg", icon: "function", category: "core" } },
];

export const functionEdges: Edge[] = [
  { id: "fe-1", source: "f-render", target: "f-app", ...edgeDefaults },
  { id: "fe-2", source: "f-app", target: "f-homepage", ...edgeDefaults },
  { id: "fe-3", source: "f-app", target: "f-useTheme", ...edgeDefaults },
  { id: "fe-4", source: "f-homepage", target: "f-handleSend", ...edgeDefaults },
  { id: "fe-5", source: "f-homepage", target: "f-handleRepo", ...edgeDefaults },
  { id: "fe-6", source: "f-homepage", target: "f-scrollEffect", ...edgeDefaults },
  { id: "fe-7", source: "f-handleSend", target: "f-setMessages", ...edgeDefaults },
  { id: "fe-8", source: "f-handleSend", target: "f-setTyping", ...edgeDefaults },
  { id: "fe-9", source: "f-useTheme", target: "f-toggle", ...edgeDefaults },
  { id: "fe-10", source: "f-scrollEffect", target: "f-scrollInto", ...edgeDefaults },
];

// ─── Module Relationship ─────────────────────────────────────────
export const moduleNodes: Node[] = [
  { id: "m-pages", type: "custom", position: { x: 300, y: 0 }, data: { label: "Pages", description: "4 route pages", icon: "folder", category: "entry" } },
  { id: "m-components", type: "custom", position: { x: 100, y: 130 }, data: { label: "Components", description: "12 UI components", icon: "folder", category: "component" } },
  { id: "m-ui", type: "custom", position: { x: 500, y: 130 }, data: { label: "UI Library", description: "shadcn/ui primitives", icon: "folder", category: "core" } },
  { id: "m-hooks", type: "custom", position: { x: 100, y: 280 }, data: { label: "Hooks", description: "Custom React hooks", icon: "function", category: "util" } },
  { id: "m-lib", type: "custom", position: { x: 500, y: 280 }, data: { label: "Lib / Utils", description: "Types, utils, theme", icon: "module", category: "util" } },
  { id: "m-insights", type: "custom", position: { x: 300, y: 280 }, data: { label: "Insights", description: "Visualization components", icon: "module", category: "api" } },
  { id: "m-backend", type: "custom", position: { x: 300, y: 420 }, data: { label: "FastAPI Backend", description: "External API", icon: "api", category: "api" } },
];

export const moduleEdges: Edge[] = [
  { id: "me-1", source: "m-pages", target: "m-components", ...edgeDefaults },
  { id: "me-2", source: "m-pages", target: "m-ui", ...edgeDefaults },
  { id: "me-3", source: "m-pages", target: "m-insights", ...edgeDefaults },
  { id: "me-4", source: "m-components", target: "m-ui", ...edgeDefaults },
  { id: "me-5", source: "m-components", target: "m-hooks", ...edgeDefaults },
  { id: "me-6", source: "m-components", target: "m-lib", ...edgeDefaults },
  { id: "me-7", source: "m-insights", target: "m-ui", ...edgeDefaults },
  { id: "me-8", source: "m-insights", target: "m-lib", ...edgeDefaults },
  { id: "me-9", source: "m-components", target: "m-backend", ...edgeDefaults, label: "API calls" },
];

// ─── Code Flow ───────────────────────────────────────────────────
export const codeFlowNodes: Node[] = [
  { id: "cf-start", type: "custom", position: { x: 350, y: 0 }, data: { label: "index.html", description: "HTML entry", icon: "file", category: "entry" } },
  { id: "cf-main", type: "custom", position: { x: 350, y: 100 }, data: { label: "main.tsx", description: "createRoot()", icon: "file", category: "entry" } },
  { id: "cf-providers", type: "custom", position: { x: 350, y: 200 }, data: { label: "Providers", description: "QueryClient, Tooltip, Router", icon: "module", category: "core" } },
  { id: "cf-route", type: "custom", position: { x: 350, y: 300 }, data: { label: "Route Match", description: "URL → Component", icon: "module", category: "core" } },
  { id: "cf-page", type: "custom", position: { x: 150, y: 420 }, data: { label: "Page Render", description: "Component mounts", icon: "layout", category: "component" } },
  { id: "cf-state", type: "custom", position: { x: 350, y: 420 }, data: { label: "State Init", description: "useState, useEffect", icon: "function", category: "util" } },
  { id: "cf-interaction", type: "custom", position: { x: 550, y: 420 }, data: { label: "User Interaction", description: "Click, type, submit", icon: "function", category: "component" } },
  { id: "cf-handler", type: "custom", position: { x: 550, y: 540 }, data: { label: "Event Handler", description: "handleSend, etc.", icon: "function", category: "component" } },
  { id: "cf-api", type: "custom", position: { x: 350, y: 540 }, data: { label: "API Request", description: "fetch → FastAPI", icon: "api", category: "api" } },
  { id: "cf-update", type: "custom", position: { x: 150, y: 540 }, data: { label: "State Update", description: "Re-render cycle", icon: "function", category: "util" } },
  { id: "cf-dom", type: "custom", position: { x: 150, y: 650 }, data: { label: "DOM Update", description: "React reconciliation", icon: "layout", category: "core" } },
];

export const codeFlowEdges: Edge[] = [
  { id: "cfe-1", source: "cf-start", target: "cf-main", ...edgeDefaults },
  { id: "cfe-2", source: "cf-main", target: "cf-providers", ...edgeDefaults },
  { id: "cfe-3", source: "cf-providers", target: "cf-route", ...edgeDefaults },
  { id: "cfe-4", source: "cf-route", target: "cf-page", ...edgeDefaults },
  { id: "cfe-5", source: "cf-route", target: "cf-state", ...edgeDefaults },
  { id: "cfe-6", source: "cf-page", target: "cf-interaction", ...edgeDefaults },
  { id: "cfe-7", source: "cf-interaction", target: "cf-handler", ...edgeDefaults },
  { id: "cfe-8", source: "cf-handler", target: "cf-api", ...edgeDefaults },
  { id: "cfe-9", source: "cf-api", target: "cf-update", ...edgeDefaults },
  { id: "cfe-10", source: "cf-update", target: "cf-dom", ...edgeDefaults },
  { id: "cfe-11", source: "cf-state", target: "cf-update", ...edgeDefaults },
];
