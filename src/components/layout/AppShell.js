 "use client";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function AppShell({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="app-shell">
      <div className="mobile-header">
        <button className="icon-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <strong>PROJECT-48</strong>
      </div>
      <div className={mobileOpen ? "sidebar-wrap mobile-open" : "sidebar-wrap"}><Sidebar /></div>
      {mobileOpen && <button className="mobile-scrim" onClick={() => setMobileOpen(false)} aria-label="Close navigation" />}
      <main className="main-area">
        <Topbar />
        <div className="page-content">{children}</div>
      </main>
    </div>
  );
}
