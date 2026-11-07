 "use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { day: "Mon", deployments: 18, incidents: 5 },
  { day: "Tue", deployments: 25, incidents: 3 },
  { day: "Wed", deployments: 21, incidents: 7 },
  { day: "Thu", deployments: 32, incidents: 4 },
  { day: "Fri", deployments: 28, incidents: 2 },
  { day: "Sat", deployments: 36, incidents: 3 },
  { day: "Sun", deployments: 31, incidents: 1 }
];

export default function HealthChart() {
  return (
    <div className="chart-wrap">
      <div className="chart-legend">
        <span><i className="legend-dot violet-dot" /> Deployments</span>
        <span><i className="legend-dot pink-dot" /> Incidents</span>
      </div>
      <ResponsiveContainer width="100%" height={235}>
        <AreaChart data={data} margin={{ top: 10, right: 5, left: -22, bottom: 0 }}>
          <defs>
            <linearGradient id="deployFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.18} />
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="incidentFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EC4899" stopOpacity={0.13} />
              <stop offset="95%" stopColor="#EC4899" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#F1F0F5" vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#9293A2", fontSize: 12 }} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9293A2", fontSize: 11 }} />
          <Tooltip contentStyle={{ border: "1px solid #ECEAF2", borderRadius: 12, boxShadow: "0 8px 24px #24164A12" }} />
          <Area type="monotone" dataKey="deployments" stroke="#8055E8" strokeWidth={2.5} fill="url(#deployFill)" />
          <Area type="monotone" dataKey="incidents" stroke="#E879B5" strokeWidth={2} fill="url(#incidentFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
