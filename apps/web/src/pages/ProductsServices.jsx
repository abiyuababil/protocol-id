import React from 'react';
import { Link } from 'react-router-dom';

const ProductsServices = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root font-public">
            {/* TopNavBar */}
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e5e7eb] dark:border-b-gray-800 bg-white/90 dark:bg-[#101622]/90 backdrop-blur-md px-4 py-3 md:px-10 font-display">
                <div className="flex items-center gap-4 text-[#111318] dark:text-white">
                    <div className="size-8 text-primary">
                        <span className="material-symbols-outlined !text-[32px]">analytics</span>
                    </div>
                    <Link to="/" className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Protocol ID</Link>
                </div>
                <div className="hidden lg:flex flex-1 justify-end gap-8">
                    <nav className="flex items-center gap-6 xl:gap-9">
                        <Link className="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/">Beranda</Link>
                        <Link className="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/about">Tentang Kami</Link>
                        <Link className="text-primary text-sm font-bold leading-normal hover:text-primary transition-colors" to="/products">Layanan & Data</Link>
                    </nav>
                    <div className="flex gap-3">
                        <Link to="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent border border-gray-200 dark:border-gray-700 text-[#111318] dark:text-white text-sm font-bold leading-normal hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <span className="truncate">Masuk</span>
                        </Link>
                        <Link to="/register" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:bg-blue-700 transition-colors shadow-sm">
                            <span className="truncate">Daftar</span>
                        </Link>
                    </div>
                </div>
                {/* Mobile Menu Icon (Placeholder) */}
                <button className="lg:hidden text-[#111318] dark:text-white">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </header>

            {/* HeroSection */}
            <div className="@container">
                <div className="@[480px]:p-4 bg-white dark:bg-background-dark">
                    <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 relative overflow-hidden"
                        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCl93TVx2d7h0Kuj4_45RlJonz1ZcwmvkXc-gvLQEQPFH7bs3nuvct1J0NcHyKK6w-9lQX93StoxdEGE2I1sWTaVGwzUoYOSEAyoMMG84sqMIJfDd7ikI7D3UADmgiEtSKiyrRcEDTQN6a14Ph808PBLBJ_i6j_6iQKUH5UYuTDwg2BYZfJHnXrivbNt7viu_GJMq9qnctJiYOfSBM681ErGV_kQJUWIxxT4u_AZS7tZmk1X8ajsL-RSEv2r4yXhZZbXOf4J7rZOUKc")' }}>
                        <div className="flex flex-col gap-3 text-center max-w-[800px] z-10">
                            <span className="text-blue-300 font-bold tracking-widest text-sm uppercase">Produk & Layanan</span>
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                                Solusi Pemenangan Pemilu Terintegrasi
                            </h1>
                            <h2 className="text-gray-200 text-base font-normal leading-normal @[480px]:text-lg max-w-[600px] mx-auto font-body">
                                Paket konsultasi komprehensif berbasis big data untuk setiap tingkatan pemilihan di Indonesia, mulai dari DPRD hingga Eksekutif.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="layout-container flex h-full grow flex-col py-10 px-4 md:px-20 lg:px-40 bg-background-light dark:bg-background-dark">
                {/* Section Header: Legislatif */}
                <div className="flex flex-col max-w-[960px] mx-auto w-full mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="material-symbols-outlined text-protocol-primary text-3xl">account_balance</span>
                        <h2 className="text-[#111318] dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em]">Protocol Legislatif (Pileg)</h2>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 font-body">Strategi pemenangan kursi parlemen dengan pendekatan data dapil yang presisi.</p>
                </div>

                {/* Legislative Cards Grid */}
                <div className="flex flex-col max-w-[1200px] mx-auto w-full mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1: DPR RI */}
                        <div className="flex flex-1 flex-col gap-6 rounded-xl border border-solid border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1A202C] p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col gap-2">
                                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-protocol-primary mb-2">
                                    <span className="material-symbols-outlined text-2xl">flag</span>
                                </div>
                                <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight">Protocol PEMILU DPR RI</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-body">Untuk calon anggota legislatif pusat yang membutuhkan jangkauan nasional.</p>
                            </div>
                            <div className="flex flex-col gap-3 mt-auto">
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Strategi Kampanye Nasional</span>
                                </div>
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Analisis Dapil Pusat</span>
                                </div>
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Branding Tokoh Nasional</span>
                                </div>
                            </div>
                            <button className="w-full cursor-pointer flex items-center justify-center rounded-lg h-10 px-4 bg-[#f0f2f4] dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-[#111318] dark:text-white text-sm font-bold transition-colors">
                                Pelajari Lebih Lanjut
                            </button>
                        </div>

                        {/* Card 2: DPRD Provinsi */}
                        <div className="flex flex-1 flex-col gap-6 rounded-xl border border-solid border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1A202C] p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col gap-2">
                                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-protocol-primary mb-2">
                                    <span className="material-symbols-outlined text-2xl">domain</span>
                                </div>
                                <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight">Protocol DPRD Provinsi</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-body">Optimalisasi suara untuk kursi legislatif tingkat provinsi.</p>
                            </div>
                            <div className="flex flex-col gap-3 mt-auto">
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Analisis Tingkat I</span>
                                </div>
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Pemetaan Isu Regional</span>
                                </div>
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Manajemen Saksi Wilayah</span>
                                </div>
                            </div>
                            <button className="w-full cursor-pointer flex items-center justify-center rounded-lg h-10 px-4 bg-[#f0f2f4] dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-[#111318] dark:text-white text-sm font-bold transition-colors">
                                Pelajari Lebih Lanjut
                            </button>
                        </div>

                        {/* Card 3: DPRD Kab/Kota */}
                        <div className="flex flex-1 flex-col gap-6 rounded-xl border border-solid border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1A202C] p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col gap-2">
                                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-protocol-primary mb-2">
                                    <span className="material-symbols-outlined text-2xl">location_city</span>
                                </div>
                                <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight">Protocol DPRD Kab/Kota</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-body">Penguasaan basis suara mikro untuk legislatif tingkat II.</p>
                            </div>
                            <div className="flex flex-col gap-3 mt-auto">
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Micro-targeting Kecamatan</span>
                                </div>
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Aplikasi Door-to-door</span>
                                </div>
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Mobilisasi Akar Rumput</span>
                                </div>
                            </div>
                            <button className="w-full cursor-pointer flex items-center justify-center rounded-lg h-10 px-4 bg-[#f0f2f4] dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-[#111318] dark:text-white text-sm font-bold transition-colors">
                                Pelajari Lebih Lanjut
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section Header: Eksekutif */}
                <div className="flex flex-col max-w-[960px] mx-auto w-full mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="material-symbols-outlined text-protocol-primary text-3xl">how_to_vote</span>
                        <h2 className="text-[#111318] dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em]">Protocol Eksekutif (Pilkada)</h2>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 font-body">Layanan konsultasi premium untuk calon kepala daerah.</p>
                </div>

                {/* Executive Cards Grid */}
                <div className="flex flex-col max-w-[1200px] mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:w-2/3 lg:mx-auto gap-6">
                        {/* Card 4: PILKADA Provinsi */}
                        <div className="flex flex-1 flex-col gap-6 rounded-xl border border-solid border-protocol-primary/30 bg-white dark:bg-[#1A202C] p-6 shadow-md relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-[120px] text-protocol-primary">person_celebrate</span>
                            </div>
                            <div className="flex flex-col gap-2 z-10">
                                <div className="w-12 h-12 rounded-full bg-protocol-primary flex items-center justify-center text-white mb-2">
                                    <span className="material-symbols-outlined text-2xl">person_celebrate</span>
                                </div>
                                <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight">Protocol PILKADA Provinsi</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-body">Paket strategis untuk Pemenangan Gubernur & Wakil Gubernur.</p>
                            </div>
                            <div className="flex flex-col gap-3 mt-auto z-10">
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Survei Elektabilitas Mendalam</span>
                                </div>
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Manajemen Koalisi Partai</span>
                                </div>
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Branding Kandidat Premium</span>
                                </div>
                            </div>
                            <button className="w-full cursor-pointer flex items-center justify-center rounded-lg h-10 px-4 bg-protocol-primary hover:bg-blue-700 text-white text-sm font-bold transition-colors z-10 shadow-lg shadow-blue-500/30">
                                Konsultasi Sekarang
                            </button>
                        </div>

                        {/* Card 5: PILKADA Kab/Kota */}
                        <div className="flex flex-1 flex-col gap-6 rounded-xl border border-solid border-protocol-primary/30 bg-white dark:bg-[#1A202C] p-6 shadow-md relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-[120px] text-protocol-primary">groups</span>
                            </div>
                            <div className="flex flex-col gap-2 z-10">
                                <div className="w-12 h-12 rounded-full bg-protocol-primary flex items-center justify-center text-white mb-2">
                                    <span className="material-symbols-outlined text-2xl">groups</span>
                                </div>
                                <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight">Protocol PILKADA Kab/Kota</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-body">Paket strategis untuk Pemenangan Bupati/Walikota.</p>
                            </div>
                            <div className="flex flex-col gap-3 mt-auto z-10">
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Penguasaan Tokoh Lokal</span>
                                </div>
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Mobilisasi Massa Terukur</span>
                                </div>
                                <div className="flex gap-3 items-center text-[#111318] dark:text-gray-200 text-sm">
                                    <span className="material-symbols-outlined text-protocol-primary text-[20px]">check_circle</span>
                                    <span className="font-body">Pengamanan Suara TPS</span>
                                </div>
                            </div>
                            <button className="w-full cursor-pointer flex items-center justify-center rounded-lg h-10 px-4 bg-protocol-primary hover:bg-blue-700 text-white text-sm font-bold transition-colors z-10 shadow-lg shadow-blue-500/30">
                                Konsultasi Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Section */}
            <div className="px-4 md:px-40 py-10 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
                <div className="flex flex-col gap-10 max-w-[960px] mx-auto">
                    <div className="flex flex-col gap-4 text-center items-center">
                        <h1 className="text-[#111318] dark:text-white tracking-light text-[32px] font-bold leading-tight max-w-[720px]">
                            Keunggulan Layanan Protocol ID
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal max-w-[720px] font-body">
                            Setiap paket layanan kami mencakup akses ke teknologi dan tim ahli terbaik.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-1 gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-background-light dark:bg-[#151b26] p-6 flex-col items-center text-center">
                            <div className="text-protocol-primary">
                                <span className="material-symbols-outlined text-4xl">database</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">Data Historis Lengkap</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal font-body">Akses data pemilu terdahulu yang lengkap dan akurat hingga tingkat TPS.</p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-background-light dark:bg-[#151b26] p-6 flex-col items-center text-center">
                            <div className="text-protocol-primary">
                                <span className="material-symbols-outlined text-4xl">psychology</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">Konsultasi Pakar</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal font-body">Pendampingan langsung oleh konsultan politik berpengalaman nasional.</p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-background-light dark:bg-[#151b26] p-6 flex-col items-center text-center">
                            <div className="text-protocol-primary">
                                <span className="material-symbols-outlined text-4xl">monitoring</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">Real-time Monitoring</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal font-body">Pantau pergerakan suara, isu, dan relawan secara real-time melalui dashboard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-background-dark text-white py-12 px-4 md:px-40">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-10">
                    <div className="flex flex-col gap-4 max-w-sm">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-2xl text-protocol-primary">analytics</span>
                            <h3 className="text-xl font-bold">Protocol ID</h3>
                        </div>
                        <p className="text-gray-400 text-sm font-body">Platform konsultan politik berbasis data terdepan di Indonesia. Membantu memenangkan masa depan dengan strategi yang terukur.</p>
                    </div>
                    <div className="flex gap-16 flex-wrap">
                        <div className="flex flex-col gap-3">
                            <h4 class="font-bold text-white">Layanan</h4>
                            <a class="text-gray-400 hover:text-white text-sm font-body" href="#">Legislatif</a>
                            <a class="text-gray-400 hover:text-white text-sm font-body" href="#">Eksekutif</a>
                            <a class="text-gray-400 hover:text-white text-sm font-body" href="#">Data Center</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="font-bold text-white">Perusahaan</h4>
                            <a class="text-gray-400 hover:text-white text-sm font-body" href="#">Tentang Kami</a>
                            <a class="text-gray-400 hover:text-white text-sm font-body" href="#">Karir</a>
                            <a className="text-gray-400 hover:text-white text-sm font-body" href="#">Kontak</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="font-bold text-white">Bantuan</h4>
                            <a class="text-gray-400 hover:text-white text-sm font-body" href="#">Pusat Bantuan</a>
                            <a class="text-gray-400 hover:text-white text-sm font-body" href="#">Syarat & Ketentuan</a>
                            <a class="text-gray-400 hover:text-white text-sm font-body" href="#">Privasi</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm font-body">
                    © 2024 Protocol Political Consulting. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default ProductsServices;
