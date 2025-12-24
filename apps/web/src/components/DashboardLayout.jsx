import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DashboardLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const menuItems = [
        { icon: 'dashboard', label: 'Dashboard', path: '/dashboard' },
        { icon: 'map', label: 'Peta Politik', path: '/data-pemilu' },
        { icon: 'analytics', label: 'Analisis', path: '#' },
        { icon: 'groups', label: 'Tim Saya', path: '#' },
        { icon: 'settings', label: 'Pengaturan', path: '#' },
    ];

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="flex h-screen bg-background-light dark:bg-background-dark font-display">
            {/* Sidebar */}
            <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#101622] text-white flex flex-col transition-all duration-300 hidden md:flex`}>
                {/* Logo */}
                <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-800">
                    <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">analytics</span>
                    </div>
                    {sidebarOpen && (
                        <span className="font-bold text-lg">Protocol ID</span>
                    )}
                </div>

                {/* Menu */}
                <nav className="flex-1 py-6 px-3">
                    <ul className="flex flex-col gap-1">
                        {menuItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path
                                            ? 'bg-primary text-white'
                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                        }`}
                                >
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                    {sidebarOpen && <span className="font-medium">{item.label}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* User Section */}
                <div className="border-t border-gray-800 p-4">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">person</span>
                        </div>
                        {sidebarOpen && (
                            <div className="flex-1">
                                <p className="text-sm font-medium text-white">{user?.name || 'User'}</p>
                                <p className="text-xs text-gray-500 truncate">{user?.email || 'user@example.com'}</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="bg-white dark:bg-[#151c2b] border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
                    {/* Left: Toggle + Breadcrumb */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="hidden md:flex size-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <h1 className="text-lg font-bold text-[#111318] dark:text-white">
                            {menuItems.find(i => i.path === location.pathname)?.label || 'Dashboard'}
                        </h1>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-3">
                        <button className="size-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors text-sm font-medium"
                        >
                            <span className="material-symbols-outlined text-lg">logout</span>
                            Keluar
                        </button>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-6 bg-background-light dark:bg-background-dark">
                    {children}
                </main>
            </div>

            {/* Mobile Bottom Nav */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-[#151c2b] border-t border-gray-200 dark:border-gray-800 flex justify-around py-2 z-50">
                {menuItems.slice(0, 4).map((item) => (
                    <Link
                        key={item.label}
                        to={item.path}
                        className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg ${location.pathname === item.path
                                ? 'text-primary'
                                : 'text-gray-400'
                            }`}
                    >
                        <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                        <span className="text-xs">{item.label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default DashboardLayout;
