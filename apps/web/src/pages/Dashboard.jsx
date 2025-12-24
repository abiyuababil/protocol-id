import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();

    const stats = [
        { label: 'Total Dapil', value: '12', icon: 'location_on', change: '+2', color: 'blue' },
        { label: 'Data Pemilih', value: '2.4M', icon: 'people', change: '+12%', color: 'green' },
        { label: 'Survei Aktif', value: '5', icon: 'poll', change: '3 baru', color: 'purple' },
        { label: 'Elektabilitas', value: '45.2%', icon: 'trending_up', change: '+2.1%', color: 'orange' },
    ];

    const recentActivities = [
        { action: 'Data pemilih Jawa Barat diperbarui', time: '2 jam lalu', icon: 'update' },
        { action: 'Laporan Survei Q4 tersedia', time: '5 jam lalu', icon: 'description' },
        { action: 'Tim menambahkan 3 anggota baru', time: '1 hari lalu', icon: 'group_add' },
        { action: 'Analisis sentimen selesai', time: '2 hari lalu', icon: 'psychology' },
    ];

    return (
        <DashboardLayout>
            <div className="max-w-7xl mx-auto">
                {/* Welcome Header */}
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#111318] dark:text-white mb-2">
                        Selamat Datang, {user?.name || 'User'}! 👋
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Berikut ringkasan data dan aktivitas terbaru Anda.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white dark:bg-[#151c2b] rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`size-12 rounded-lg flex items-center justify-center ${stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' :
                                        stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' :
                                            stat.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600' :
                                                'bg-orange-100 dark:bg-orange-900/30 text-orange-600'
                                    }`}>
                                    <span className="material-symbols-outlined">{stat.icon}</span>
                                </div>
                                <span className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                    {stat.change}
                                </span>
                            </div>
                            <p className="text-2xl font-bold text-[#111318] dark:text-white mb-1">{stat.value}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Activity */}
                    <div className="lg:col-span-2 bg-white dark:bg-[#151c2b] rounded-xl border border-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="font-bold text-[#111318] dark:text-white">Aktivitas Terbaru</h2>
                            <Link to="#" className="text-sm text-primary hover:underline">Lihat Semua</Link>
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-gray-800">
                            {recentActivities.map((activity, index) => (
                                <div key={index} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-lg">{activity.icon}</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-[#111318] dark:text-white">{activity.action}</p>
                                        <p className="text-xs text-gray-500">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white dark:bg-[#151c2b] rounded-xl border border-gray-200 dark:border-gray-800">
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="font-bold text-[#111318] dark:text-white">Aksi Cepat</h2>
                        </div>
                        <div className="p-4 flex flex-col gap-3">
                            <Link
                                to="/data-pemilu"
                                className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 text-primary transition-colors"
                            >
                                <span className="material-symbols-outlined">map</span>
                                <span className="font-medium">Lihat Peta Politik</span>
                            </Link>
                            <button className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-[#111318] dark:text-white transition-colors">
                                <span className="material-symbols-outlined">add_chart</span>
                                <span className="font-medium">Buat Analisis Baru</span>
                            </button>
                            <button className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-[#111318] dark:text-white transition-colors">
                                <span className="material-symbols-outlined">download</span>
                                <span className="font-medium">Export Data</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
