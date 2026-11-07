import AppShell from "@/components/layout/AppShell";
import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ModulePage() {
  return (
    <AppShell>
      <div className="module-page">
        <div className="eyebrow"><span className="eyebrow-dot" /> PROJECT-48 WORKSPACE</div>
        <div className="module-title-row">
          <div><h1>Application Explorer</h1><p>Explore services, dependencies, components and application architecture.</p></div>
          <span className="module-status">Planned module</span>
        </div>
        <section className="module-placeholder">
          <div className="module-placeholder-icon"><Construction size={22} /></div>
          <h2>This workspace is ready for implementation</h2>
          <p>The shared application shell and navigation are in place. This module will be developed as part of the Project-48 frontend roadmap.</p>
          <Link href="/" className="module-back"><ArrowLeft size={14} /> Back to dashboard</Link>
        </section>
      </div>
    </AppShell>
  );
}
