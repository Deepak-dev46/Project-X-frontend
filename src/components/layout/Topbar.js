 "use client";

import { Bell, Search, Command, ChevronDown, Plus, Menu } from "lucide-react";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="breadcrumb"><span>Workspace</span><span className="crumb-slash">/</span><strong>Overview</strong></div>
      <div className="topbar-actions">
        <label className="search-box">
          <Search size={16} />
          <input placeholder="Search anything..." aria-label="Search anything" />
          <kbd>⌘ K</kbd>
        </label>
        <button className="icon-button notification-button" aria-label="Notifications">
          <Bell size={18} /><i />
        </button>
        <div className="topbar-divider" />
        <button className="help-button">Help center <ChevronDown size={14} /></button>
      </div>
    </header>
  );
}
