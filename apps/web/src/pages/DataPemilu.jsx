import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const DataPemilu = () => {
    const [selectedProvince, setSelectedProvince] = useState('all');
    const [selectedYear, setSelectedYear] = useState('2024');

    const provinces = [
        'Semua Provinsi', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'DKI Jakarta',
        'Sumatera Utara', 'Kalimantan Timur', 'Sulawesi Selatan', 'Bali'
    ];

    const electionData = [
        { province: 'Jawa Barat', dpt: '35.7 Juta', participation: '78.2%', trend: 'up' },
        { province: 'Jawa Tengah', dpt: '28.4 Juta', participation: '81.5%', trend: 'up' },
        { province: 'Jawa Timur', dpt: '31.2 Juta', participation: '76.8%', trend: 'down' },
        { province: 'DKI Jakarta', dpt: '8.1 Juta', participation: '72.4%', trend: 'up' },
        { province: 'Sumatera Utara', dpt: '10.3 Juta', participation: '74.1%', trend: 'stable' },
    ];

    const voteDistribution = [
        { party: 'Partai A', votes: 32, color: 'bg-red-500' },
        { party: 'Partai B', votes: 28, color: 'bg-blue-500' },
        { party: 'Partai C', votes: 18, color: 'bg-green-500' },
        { party: 'Partai D', votes: 12, color: 'bg-yellow-500' },
        { party: 'Lainnya', votes: 10, color: 'bg-gray-400' },
    ];

    return (
        <DashboardLayout>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#111318] dark:text-white mb-2">
                        Data Pemilu Indonesia
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Visualisasi dan analisis data pemilu dari seluruh Indonesia.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-6">
                    <select
                        value={selectedProvince}
                        onChange={(e) => setSelectedProvince(e.target.value)}
                        className="px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#151c2b] text-[#111318] dark:text-white focus:border-primary focus:ring-0 focus:outline-none"
                    >
                        {provinces.map((p) => (
                            <option key={p} value={p === 'Semua Provinsi' ? 'all' : p}>{p}</option>
                        ))}
                    </select>
                    <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#151c2b] text-[#111318] dark:text-white focus:border-primary focus:ring-0 focus:outline-none"
                    >
                        <option value="2024">Pemilu 2024</option>
                        <option value="2019">Pemilu 2019</option>
                        <option value="2014">Pemilu 2014</option>
                    </select>
                    <button className="px-4 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">filter_alt</span>
                        Terapkan Filter
                    </button>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Map Section */}
                    <div className="lg:col-span-2 bg-white dark:bg-[#151c2b] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                            <h2 className="font-bold text-[#111318] dark:text-white">Peta Sebaran Suara</h2>
                            <div className="flex items-center gap-2">
                                <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <span className="material-symbols-outlined text-gray-500">zoom_in</span>
                                </button>
                                <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <span className="material-symbols-outlined text-gray-500">zoom_out</span>
                                </button>
                            </div>
                        </div>
                        <div className="relative aspect-video bg-blue-50 dark:bg-[#0c111a] flex items-center justify-center">
                            {/* Simplified Indonesia Map SVG */}
                            <svg viewBox="0 0 800 400" className="w-full h-full p-4">
                                {/* Sumatera */}
                                <path d="M80,150 L120,100 L140,120 L160,100 L180,150 L170,180 L150,200 L120,220 L90,200 L70,170 Z"
                                    className="fill-blue-300 dark:fill-blue-800 stroke-white dark:stroke-gray-700 stroke-2 hover:fill-blue-400 cursor-pointer transition-colors" />
                                {/* Kalimantan */}
                                <path d="M280,100 L340,80 L380,100 L400,150 L380,200 L340,220 L300,200 L280,150 Z"
                                    className="fill-green-300 dark:fill-green-800 stroke-white dark:stroke-gray-700 stroke-2 hover:fill-green-400 cursor-pointer transition-colors" />
                                {/* Java */}
                                <path d="M200,280 L280,270 L340,275 L380,280 L360,300 L300,310 L240,305 L200,295 Z"
                                    className="fill-red-300 dark:fill-red-800 stroke-white dark:stroke-gray-700 stroke-2 hover:fill-red-400 cursor-pointer transition-colors" />
                                {/* Sulawesi */}
                                <path d="M450,120 L480,100 L510,130 L500,180 L520,200 L510,240 L480,220 L460,180 L440,150 Z"
                                    className="fill-yellow-300 dark:fill-yellow-800 stroke-white dark:stroke-gray-700 stroke-2 hover:fill-yellow-400 cursor-pointer transition-colors" />
                                {/* Papua */}
                                <path d="M600,140 L700,130 L750,150 L740,200 L700,220 L650,210 L620,180 L600,160 Z"
                                    className="fill-purple-300 dark:fill-purple-800 stroke-white dark:stroke-gray-700 stroke-2 hover:fill-purple-400 cursor-pointer transition-colors" />

                                {/* Data Points */}
                                <circle cx="130" cy="160" r="8" className="fill-primary animate-pulse" />
                                <circle cx="340" cy="150" r="8" className="fill-primary animate-pulse" />
                                <circle cx="290" cy="285" r="10" className="fill-primary animate-pulse" />
                                <circle cx="480" cy="170" r="6" className="fill-primary animate-pulse" />
                                <circle cx="680" cy="170" r="6" className="fill-primary animate-pulse" />
                            </svg>

                            {/* Legend */}
                            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur p-3 rounded-lg text-xs">
                                <p className="font-bold mb-2 text-[#111318] dark:text-white">Tingkat Partisipasi</p>
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-400 rounded"></span> Tinggi</span>
                                    <span className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-400 rounded"></span> Sedang</span>
                                    <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-400 rounded"></span> Rendah</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vote Distribution Chart */}
                    <div className="bg-white dark:bg-[#151c2b] rounded-xl border border-gray-200 dark:border-gray-800">
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="font-bold text-[#111318] dark:text-white">Distribusi Suara</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col gap-4">
                                {voteDistribution.map((item) => (
                                    <div key={item.party}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium text-[#111318] dark:text-white">{item.party}</span>
                                            <span className="text-sm text-gray-500">{item.votes}%</span>
                                        </div>
                                        <div className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${item.color} rounded-full transition-all duration-500`}
                                                style={{ width: `${item.votes}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Table */}
                <div className="bg-white dark:bg-[#151c2b] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                        <h2 className="font-bold text-[#111318] dark:text-white">Data Per Provinsi</h2>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <span className="material-symbols-outlined text-lg">download</span>
                            Export
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-800/50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Provinsi</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">DPT</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Partisipasi</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Trend</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                {electionData.map((row) => (
                                    <tr key={row.province} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium text-[#111318] dark:text-white">{row.province}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{row.dpt}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{row.participation}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1 text-sm font-medium ${row.trend === 'up' ? 'text-green-600' :
                                                    row.trend === 'down' ? 'text-red-600' : 'text-gray-500'
                                                }`}>
                                                <span className="material-symbols-outlined text-lg">
                                                    {row.trend === 'up' ? 'trending_up' : row.trend === 'down' ? 'trending_down' : 'trending_flat'}
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default DataPemilu;
