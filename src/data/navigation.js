import {
  LayoutDashboard, Boxes, Network, Workflow, Sparkles, Orbit, Braces,
  Siren, ArrowLeftRight, FlaskConical, Activity, Database, ShieldCheck,
  Users, FileText, Settings, ChevronDown
} from "lucide-react";

export const navigation = [
  { label: "Overview", items: [{ label: "Dashboard", href: "/", icon: LayoutDashboard }] },
  { label: "Engineering", items: [
    { label: "Applications", href: "/applications", icon: Boxes },
    { label: "Application Explorer", href: "/explorer", icon: Network },
    { label: "Visual Builder", href: "/builder", icon: Workflow },
    { label: "AI Engineering", href: "/ai-assistant", icon: Sparkles },
    { label: "Application Digital Twin", href: "/digital-twin", icon: Orbit },
    { label: "API Marketplace", href: "/api-marketplace", icon: Braces }
  ]},
  { label: "Operations", items: [
    { label: "Incident Intelligence", href: "/incidents", icon: Siren },
    { label: "Migration & Portability", href: "/modernization", icon: ArrowLeftRight },
    { label: "Testing & Quality", href: "/testing", icon: FlaskConical },
    { label: "Observability", href: "/observability", icon: Activity },
    { label: "Database Intelligence", href: "/database", icon: Database }
  ]},
  { label: "Organization", items: [
    { label: "Governance", href: "/governance", icon: ShieldCheck },
    { label: "Collaboration", href: "/collaboration", icon: Users },
    { label: "Reports & Docs", href: "/reports", icon: FileText },
    { label: "Settings", href: "/settings", icon: Settings }
  ]}
];
