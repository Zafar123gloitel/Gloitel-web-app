import Link from "next/link";

const engineeringPages = [
  { href: "/engineering/ai-engineering", label: "AI Engineering" },
  { href: "/engineering/frontend-engineering", label: "Frontend Engineering" },
  { href: "/engineering/backend-engineering", label: "Backend Engineering" },
  { href: "/engineering/mobile-engineering", label: "Mobile Engineering" },
  {
    href: "/engineering/full-stack-engineering",
    label: "Full Stack Engineering",
  },
  { href: "/engineering/devops-cloud", label: "DevOps & Cloud" },
  { href: "/engineering/qa-engineering", label: "QA Engineering" },
  { href: "/engineering/iot-engineering", label: "IoT Engineering" },
  { href: "/engineering/business-analysis", label: "Business Analysis" },
];

export default function EngineeringPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Engineering</h1>
      <p>Available engineering pages:</p>
      <ul>
        {engineeringPages.map((page) => (
          <li key={page.href}>
            <Link href={page.href}>{page.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
