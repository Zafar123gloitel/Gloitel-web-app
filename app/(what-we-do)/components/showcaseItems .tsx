import { Search, BriefcaseBusiness, BarChart3, Rocket } from "lucide-react";

export const showcaseItems = [
  {
    step: 1,
    title: "Discover",
    description: "Map workflows and identify value leakage.",
    icon: <Search className="h-6 w-6" />,
  },
  {
    step: 2,
    title: "Assess",
    description: "Evaluate readiness and implementation constraints.",
    icon: <BriefcaseBusiness className="h-6 w-6" />,
  },
  {
    step: 3,
    title: "Rank",
    description: "Prioritize use cases by value, feasibility, and ROI.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    step: 4,
    title: "Enable",
    description: "Define pilot scope and execution roadmap.",
    icon: <Rocket className="h-6 w-6" />,
  },
];
