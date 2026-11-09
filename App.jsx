import React, { useState } from 'react';
import { 
  TrendingUp, ShoppingBag, DollarSign, RefreshCw, Users, Sparkles, 
  Layers, BarChart2, Download, BookOpen
} from 'lucide-react';
import StatCard from './components/StatCard';
import ChartSection from './components/ChartSection';
import BundleTable from './components/BundleTable';
import PitchDeck from './components/PitchDeck';

const executiveMetrics = [
  { label: 'Total Net Revenue', value: '₹3,87,01,050', change: '+24.5%', isPos: true, icon: DollarSign, sub: 'Across 3 launch segments' },
  { label: 'Bundle AOV', value: '₹12,610', change: '+119%', isPos: true, icon: ShoppingBag, sub: 'vs. ₹5,750 single item baseline' },
  { label: 'Platform Conversion Rate', value: '3.25%', change: '+1.45%', isPos: true, icon: TrendingUp, sub: 'Powered by Pinterest visual traffic' },
  { label: 'Avg Items Per Order (IPO)', value: '3.6 Items', change: '+2.2', isPos: true, icon: Layers, sub: 'Multi-piece bundle adoption' },
  { label: 'Return Rate Efficiency', value: '14.2%', change: '-8.3%', isPos: true, icon: RefreshCw, sub: 'vs 22.5% traditional e-comm' },
  { label: 'Customer Acquisition Cost', value: '₹1,610', change: '-42%', isPos: true, icon: Users, sub: 'Organic Pin viral amplification' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSegment, setSelectedSegment] = useState('All');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-xl">
              <Sparkles className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">PinStyle Analytics & Pitch Dashboard</h1>
              <p className="text-slate-400 text-sm">Pinterest-Inspired Outfit Curation Platform | Business Intelligence</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select 
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-lg px-3 py-2 outline-none focus:border-rose-500"
          >
            <option value="All">All Segments (Clean Girl, Trads, Old Money)</option>
            <option value="Clean Girl">Clean Girl Minimalist</option>
            <option value="Old Money">Old Money Prep</option>
            <option value="Trads">Trads (Heritage)</option>
          </select>
        </div>
      </header>

      <div className="flex border-b border-slate-800 mb-8 gap-8">
        {[
          { id: 'overview', label: 'Executive Dashboard', icon: BarChart2 },
          { id: 'bundles', label: 'Bundle Performance', icon: ShoppingBag },
          { id: 'pitch', label: 'Professor Pitch Brief', icon: BookOpen },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 pb-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-rose-500 text-rose-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {executiveMetrics.map((metric, idx) => (
              <StatCard key={idx} metric={metric} />
            ))}
          </div>
          <ChartSection selectedSegment={selectedSegment} />
        </div>
      )}

      {activeTab === 'bundles' && (
        <div className="space-y-8">
          <BundleTable selectedSegment={selectedSegment} />
        </div>
      )}

      {activeTab === 'pitch' && (
        <PitchDeck />
      )}
    </div>
  );
}
