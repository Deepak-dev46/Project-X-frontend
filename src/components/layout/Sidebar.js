 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { ChevronDown, Command, Plus } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/" className="brand">
        <span className="brand-mark">P<span>48</span></span>
        <span className="brand-copy"><strong>PROJECT-48</strong><small>ENGINEERING PLATFORM</small></span>
      </Link>

      <button className="workspace-switcher">
        <span className="workspace-avatar">N</span>
        <span className="workspace-copy"><strong>Nexa Workspace</strong><small>Enterprise plan</small></span>
        <ChevronDown size={15} />
      </button>

      <div className="sidebar-scroll">
        {navigation.map((group) => (
          <div className="nav-group" key={group.label}>
            <div className="nav-heading">{group.label}</div>
            {group.items.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link className={`nav-link ${active ? "active" : ""}`} href={item.href} key={item.href}>
                  <Icon size={17} strokeWidth={1.8} />
                  <span>{item.label}</span>
                  {active && <span className="active-indicator" />}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <div className="upgrade-icon"><Command size={16} /></div>
          <strong>Unlock more power</strong>
          <p>Explore advanced engineering capabilities.</p>
          <button className="upgrade-button">Explore platform <Plus size={14} /></button>
        </div>
        <div className="profile-row">
          <div className="profile-avatar">DP</div>
          <div className="profile-copy"><strong>Deepak P</strong><small>Platform Admin</small></div>
          <button className="icon-button" aria-label="Profile menu"><MoreDots /></button>
        </div>
      </div>
    </aside>
  );
}

function MoreDots() {
  return <span className="more-dots">•••</span>;
}
