import React from 'react';

const bundles = [
  {
    id: 'BNDL-001',
    name: 'The Sofia Old Money Set',
    aesthetic: 'Old Money Prep',
    pieces: ['Cream Tailored Blazer', 'Pleated Midi Skirt', 'Leather Bag'],
    price: '₹14,868',
    units: 440,
    revenue: '₹65,41,920',
    returnRate: '9.5%'
  },
  {
    id: 'BNDL-002',
    name: 'Off-Duty Model Everyday Fit',
    aesthetic: 'Clean Girl Minimalist',
    pieces: ['Ribbed Baby Tee', 'Wide-Leg Linen Trousers', 'Gold Hoops'],
    price: '₹10,178',
    units: 610,
    revenue: '₹62,08,275',
    returnRate: '11.2%'
  },
  {
    id: 'BNDL-003',
    name: 'Royal Heritage Handloom Set',
    aesthetic: 'Trads (Heritage)',
    pieces: ['Chanderi Silk Kurta', 'Straight Trousers', 'Organza Dupatta'],
    price: '₹13,718',
    units: 420,
    revenue: '₹57,61,350',
    returnRate: '8.8%'
  }
];

export default function BundleTable({ selectedSegment }) {
  const filteredBundles = selectedSegment === 'All'
    ? bundles
    : bundles.filter(b => b.aesthetic.toLowerCase().includes(selectedSegment.toLowerCase()));

  return (
    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
      <h3 className="text-base font-semibold text-white mb-1">Top Performing Curated Outfit Bundles</h3>
      <p className="text-xs text-slate-400 mb-6">Complete ready-to-shop outfit performance across launch aesthetics</p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-800/50 text-slate-400 uppercase text-xs">
            <tr>
              <th className="p-3">Bundle Name</th>
              <th className="p-3">Aesthetic</th>
              <th className="p-3">Included Pieces</th>
              <th className="p-3">Price (INR)</th>
              <th className="p-3">Units Sold</th>
              <th className="p-3">Total Revenue</th>
              <th className="p-3">Return Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300">
            {filteredBundles.map((b) => (
              <tr key={b.id} className="hover:bg-slate-800/30">
                <td className="p-3 font-medium text-white">{b.name}</td>
                <td className="p-3"><span className="px-2.5 py-1 bg-slate-800 rounded-full text-xs text-rose-400">{b.aesthetic}</span></td>
                <td className="p-3 text-xs text-slate-400">{b.pieces.join(', ')}</td>
                <td className="p-3 font-semibold text-white">{b.price}</td>
                <td className="p-3">{b.units}</td>
                <td className="p-3 font-semibold text-emerald-400">{b.revenue}</td>
                <td className="p-3 text-xs text-emerald-400">{b.returnRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
