import { RefreshCcw, Users, Wrench, Handshake, Zap } from "lucide-react";

export const ai_agents_designed = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Agentic Workflow Automation",
    icon: <RefreshCcw />,
    description:
      "Replace manual multi-step processes with agents that handle them end-to-end. Lead qualification, invoice processing, content moderation, compliance checks, research aggregation — automated with full audit trails.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Multi-Agent Systems",
    icon: <Users />,
    description:
      "Orchestrate teams of specialized agents working in parallel. One agent researches, another writes, another reviews. Each agent is optimized for a specific responsibility within the workflow. Complex tasks completed in minutes instead of hours.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Tool-Using Agents",
    icon: <Wrench />,
    description:
      "Agents integrated with your real business tools – CRMs, ERPs, databases, Slack, email, calendars, file systems. Seamlessly connecting data, workflows, and actions across your organization. They don't just generate text; they take action inside your systems.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Human-in-the-Loop Workflows",
    icon: <Handshake />,
    description:
      "Autonomous agents with configurable human oversight gates. The agent handles routine decisions; humans review exceptions. Designed for regulated industries and high-stakes workflows.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "AI-Powered Process Automation",
    icon: <Zap />,
    description:
      "Next-generation RPA where agents handle unstructured inputs that rule-based bots can't. Document processing, email triage, form filling, data entry – with understanding, not just pattern matching.",
  },
];