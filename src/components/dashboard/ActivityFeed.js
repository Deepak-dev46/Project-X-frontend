import { GitBranch, Rocket, ShieldCheck, AlertTriangle, CheckCircle2 } from "lucide-react";

const activities = [
  { icon: Rocket, tone: "purple", title: "Customer Portal deployed", meta: "Production · v2.8.1", time: "12 min ago", status: "Deployment successful" },
  { icon: GitBranch, tone: "blue", title: "Payment API updated", meta: "API Marketplace · payments-v3", time: "48 min ago", status: "3 endpoints changed" },
  { icon: ShieldCheck, tone: "green", title: "Security scan completed", meta: "Identity Service", time: "1 hr ago", status: "No critical vulnerabilities" },
  { icon: AlertTriangle, tone: "orange", title: "Latency threshold exceeded", meta: "Order Processing · Production", time: "2 hrs ago", status: "Incident #INC-2048 opened" }
];

export default function ActivityFeed() {
  return (
    <div className="activity-list">
      {activities.map((item, index) => {
        const Icon = item.icon;
        return (
          <div className="activity-item" key={item.title}>
            <div className={`activity-icon ${item.tone}`}><Icon size={16} /></div>
            <div className="activity-content">
              <strong>{item.title}</strong>
              <span>{item.meta}</span>
              <small>{item.status}</small>
            </div>
            <time>{item.time}</time>
          </div>
        );
      })}
    </div>
  );
}
