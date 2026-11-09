import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function StatCard({ metric }) {
  const Icon = metric.icon;
  return (
    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <span className="text-slate-400 text-sm font-medium">{metric.label}</span>
        <div className="p-2 bg-slate-800/60 rounded-lg">
          <Icon className="w-5 h-5 text-rose-400" />
        </div>
      </div>
      <div className="flex items-baseline justify-between mb-1">
        <div className="text-2xl font-bold text-white tracking-tight">{metric.value}</div>
        <div className={`flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${
          metric.isPos ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400'
        }`}>
          {metric.isPos ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
          {metric.change}
        </div>
      </div>
      <p className="text-xs text-slate-500">{metric.sub}</p>
    </div>
  );
}
