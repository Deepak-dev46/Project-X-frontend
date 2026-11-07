 "use client";

import AppShell from "@/components/layout/AppShell";
import MetricCard from "./MetricCard";
import ActivityFeed from "./ActivityFeed";
import HealthChart from "./HealthChart";
import {
  Boxes, Activity, GitPullRequest, ShieldCheck, ArrowUpRight, Plus,
  ChevronRight, MoreHorizontal, Clock3, CheckCircle2, CircleAlert,
  Sparkles, ExternalLink
} from "lucide-react";

const applications = [
  { name: "Customer Portal", code: "APP-001", type: "Web application", environment: "Production", health: "Healthy", uptime: "99.98%", initials: "CP", tone: "lavender" },
  { name: "Payment Service", code: "APP-002", type: "Microservice", environment: "Production", health: "Healthy", uptime: "99.95%", initials: "PS", tone: "mint" },
  { name: "Identity Service", code: "APP-003", type: "API service", environment: "Staging", health: "Monitoring", uptime: "99.91%", initials: "IS", tone: "peach" },
  { name: "Order Processing", code: "APP-004", type: "Event-driven service", environment: "Production", health: "At risk", uptime: "98.72%", initials: "OP", tone: "blue" }
];

export default function Dashboard() {
  return (
    <AppShell>
      <div className="dashboard">
        <section className="welcome-row">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> PLATFORM OVERVIEW</div>
            <h1>Good morning, Deepak <span className="wave">✦</span></h1>
            <p className="welcome-subtitle">Here&apos;s what&apos;s happening across your engineering workspace.</p>
          </div>
          <div className="welcome-actions">
            <button className="secondary-button"><Clock3 size={15} /> Last 7 days <ChevronRight size={14} /></button>
            <button className="primary-button"><Plus size={16} /> New application</button>
          </div>
        </section>

        <section className="hero-banner">
          <div className="hero-copy">
            <div className="hero-kicker"><Sparkles size={14} /> ENGINEERING INTELLIGENCE</div>
            <h2>Build, operate and evolve<br />your applications with clarity.</h2>
            <p>One workspace for your application lifecycle — from architecture to production intelligence.</p>
            <button className="hero-button">Explore engineering insights <ArrowUpRight size={15} /></button>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="hero-core"><span>P</span><small>48</small></div>
            <div className="orbit-node node-one"><Boxes size={17} /></div>
            <div className="orbit-node node-two"><Activity size={17} /></div>
            <div className="orbit-node node-three"><GitPullRequest size={17} /></div>
            <div className="orbit-node node-four"><ShieldCheck size={17} /></div>
          </div>
          <div className="hero-glow" />
        </section>

        <section className="metrics-grid">
          <MetricCard title="Total applications" value="24" change="+12.5%" detail="Compared to last month" icon={Boxes} tone="violet" />
          <MetricCard title="System availability" value="99.96%" change="+0.8%" detail="Across production services" icon={Activity} tone="green" />
          <MetricCard title="Active deployments" value="18" change="+4.2%" detail="12 successful this week" icon={GitPullRequest} tone="blue" />
          <MetricCard title="Security score" value="94/100" change="+2.4%" detail="Platform security posture" icon={ShieldCheck} tone="orange" />
        </section>

        <section className="dashboard-grid">
          <article className="panel health-panel">
            <div className="panel-header">
              <div><h3>Engineering activity</h3><p>Deployment and incident trends</p></div>
              <button className="icon-button"><MoreHorizontal size={19} /></button>
            </div>
            <div className="chart-summary"><strong>142</strong><span>deployments this week</span><span className="trend-pill"><ArrowUpRight size={12} /> 18.6%</span></div>
            <HealthChart />
          </article>

          <article className="panel activity-panel">
            <div className="panel-header">
              <div><h3>Recent activity</h3><p>Latest events from your workspace</p></div>
              <button className="text-link">View all <ArrowUpRight size={13} /></button>
            </div>
            <ActivityFeed />
          </article>
        </section>

        <section className="panel applications-panel">
          <div className="panel-header applications-heading">
            <div><h3>Applications</h3><p>Monitor the health of your application portfolio</p></div>
            <button className="text-link">View all applications <ArrowUpRight size={13} /></button>
          </div>
          <div className="table-scroll">
            <table className="applications-table">
              <thead><tr><th>APPLICATION</th><th>TYPE</th><th>ENVIRONMENT</th><th>HEALTH</th><th>UPTIME</th><th /></tr></thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.code}>
                    <td><div className="app-name-cell"><span className={`app-avatar ${app.tone}`}>{app.initials}</span><span><strong>{app.name}</strong><small>{app.code}</small></span></div></td>
                    <td>{app.type}</td>
                    <td><span className="environment-dot" />{app.environment}</td>
                    <td><span className={`health-status ${app.health === "Healthy" ? "healthy" : app.health === "At risk" ? "risk" : "monitoring"}`}><i />{app.health}</span></td>
                    <td className="uptime-cell">{app.uptime}</td>
                    <td><button className="row-action" aria-label={`Open ${app.name}`}><ChevronRight size={17} /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-footer"><span>Showing 4 of 24 applications</span><button className="text-link">Open application portfolio <ExternalLink size={12} /></button></div>
        </section>

        <section className="bottom-grid">
          <article className="insight-card">
            <div className="insight-icon"><Sparkles size={18} /></div>
            <div><span className="insight-label">AI ENGINEERING INSIGHT</span><h3>Improve service reliability</h3><p>We identified 3 services with recurring latency patterns. Review the recommendations to improve response times.</p><button className="text-link">Review recommendations <ArrowUpRight size={13} /></button></div>
          </article>
          <article className="status-card">
            <div className="panel-header"><div><h3>Platform status</h3><p>Core platform services</p></div><span className="status-live"><i /> All operational</span></div>
            <div className="service-status"><span>API Gateway</span><strong><CheckCircle2 size={14} /> Operational</strong></div>
            <div className="service-status"><span>Application Runtime</span><strong><CheckCircle2 size={14} /> Operational</strong></div>
            <div className="service-status"><span>Event Processing</span><strong className="service-warning"><CircleAlert size={14} /> Degraded</strong></div>
          </article>
        </section>

        <footer className="dashboard-footer"><span>PROJECT-48 · Engineering Platform</span><span>Platform overview <b>•</b> Updated just now</span></footer>
      </div>
    </AppShell>
  );
}
