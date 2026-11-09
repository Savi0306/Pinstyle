import React from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export default function PitchDeck() {
  return (
    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 space-y-6">
      <div className="flex items-center gap-3">
        <BookOpen className="w-6 h-6 text-rose-400" />
        <h3 className="text-lg font-bold text-white">Academic Pitch Brief for Professor Presentation</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            1. Core Business Value
          </div>
          <p className="text-xs text-slate-300">
            Removes friction between visual discovery (Pinterest) and transaction. Customers purchase complete looks instead of searching for individual pieces across multiple retailers.
          </p>
        </div>

        <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            2. Financial Lever (AOV Expansion)
          </div>
          <p className="text-xs text-slate-300">
            Multi-piece bundles expand Average Order Value to <strong>₹12,610</strong> (vs standard standalone e-commerce baseline of ₹5,750), significantly lowering Customer Acquisition Cost ratio.
          </p>
        </div>

        <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            3. Inventory Risk Mitigation
          </div>
          <p className="text-xs text-slate-300">
            Capsule matrix styling shares staple SKUs across different looks, reducing total inventory carrying costs while maintaining high outfit variety.
          </p>
        </div>
      </div>
    </div>
  );
}
