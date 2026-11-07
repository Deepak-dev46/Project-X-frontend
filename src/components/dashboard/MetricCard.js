import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function MetricCard({ title, value, change, positive = true, detail, icon: Icon, tone = "violet" }) {
  return (
    <article className="metric-card">
      <div className="metric-top">
        <span className="metric-label">{title}</span>
        <span className={`metric-icon ${tone}`}><Icon size={17} /></span>
      </div>
      <div className="metric-value-row">
        <strong className="metric-value">{value}</strong>
        <span className={`metric-change ${positive ? "positive" : "negative"}`}>
          {positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}{change}
        </span>
      </div>
      <p className="metric-detail">{detail}</p>
    </article>
  );
}
