import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root font-display">
            {/* Top Navigation Bar - Standardized */}
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
                        <Link className="text-primary text-sm font-bold leading-normal hover:text-primary transition-colors" to="/about">Tentang Kami</Link>
                        <Link className="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/products">Layanan & Data</Link>
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

            <main className="flex flex-col w-full">
                {/* Hero Section */}
                <section className="relative w-full min-h-[480px] flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: 'linear-gradient(rgba(16, 22, 34, 0.7) 0%, rgba(16, 22, 34, 0.85) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAW3NQx5ZRMZa519Kbq9lHNsINha9A8vppDT6l58Zrnfpf7ks813cJQtx1X-Zq9HE9Fa1z8UoynOdfvSoWmZqp0TgV35LE6NcmlNLgU0ps7HdY7whjqnppXbEr32cUyJJTJIvW5Uf5cGDZi0Swaf3PzQKVLHk-5Kf6MXK8JYJjLCreGUDwQllTJ9jSTatn4hM5hDkeAgsjJfDXVxqWMH5Zm9V1neAMX1OOi-tkuRaYfI3Q18CdbMcTlcm3nbc7fQ1EnC7-LC8ze6ruI")' }}>
                    <div className="container mx-auto px-4 md:px-10 text-center max-w-4xl z-10">
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
                            Profil Lengkap Protocol ID
                        </h1>
                        <h2 className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                            Mitra Strategis Pemenangan Pemilu Anda. Kami hadir dengan integritas tinggi untuk memberikan solusi pemenangan berbasis data dan pengalaman nyata di lapangan.
                        </h2>
                    </div>
                </section>

                {/* Company Overview Section */}
                <section className="py-16 md:py-24 bg-white dark:bg-background-dark">
                    <div className="container mx-auto px-4 md:px-10">
                        <div className="flex flex-col gap-4 text-center mb-12">
                            <h2 className="text-[#111318] dark:text-white text-3xl md:text-4xl font-bold tracking-tight">Filosofi & Komitmen</h2>
                            <p className="text-[#616f89] dark:text-[#9aa2b1] text-lg max-w-2xl mx-auto">
                                Kami bekerja dengan prinsip profesionalisme tinggi dan model kemitraan yang transparan.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Card 1 */}
                            <div className="group flex flex-col gap-4 p-6 rounded-xl bg-background-light dark:bg-[#1a202c] border border-transparent hover:bg-white dark:hover:bg-[#1e2532] hover:border-primary hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors duration-300">
                                    <span className="material-symbols-outlined text-3xl">track_changes</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 text-[#111318] dark:text-white group-hover:text-primary transition-colors duration-300">Misi Kami</h3>
                                    <p className="text-sm text-[#616f89] dark:text-[#9aa2b1] leading-relaxed">
                                        Memberikan strategi pemenangan yang terukur, efektif, dan berbasis data akurat untuk setiap kandidat.
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="group flex flex-col gap-4 p-6 rounded-xl bg-background-light dark:bg-[#1a202c] border border-transparent hover:bg-white dark:hover:bg-[#1e2532] hover:border-primary hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors duration-300">
                                    <span className="material-symbols-outlined text-3xl">handshake</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 text-[#111318] dark:text-white group-hover:text-primary transition-colors duration-300">Komitmen</h3>
                                    <p className="text-sm text-[#616f89] dark:text-[#9aa2b1] leading-relaxed">
                                        Berdedikasi penuh untuk kesuksesan klien kami dengan pendampingan intensif dari awal hingga akhir.
                                    </p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="group flex flex-col gap-4 p-6 rounded-xl bg-background-light dark:bg-[#1a202c] border border-transparent hover:bg-white dark:hover:bg-[#1e2532] hover:border-primary hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors duration-300">
                                    <span className="material-symbols-outlined text-3xl">payments</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 text-[#111318] dark:text-white group-hover:text-primary transition-colors duration-300">Pembayaran Berbasis Kinerja</h3>
                                    <p className="text-sm text-[#616f89] dark:text-[#9aa2b1] leading-relaxed">
                                        Kami hanya dibayar jika target kinerja tercapai. Model ini menjamin akuntabilitas dan hasil nyata.
                                    </p>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="group flex flex-col gap-4 p-6 rounded-xl bg-background-light dark:bg-[#1a202c] border border-transparent hover:bg-white dark:hover:bg-[#1e2532] hover:border-primary hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors duration-300">
                                    <span className="material-symbols-outlined text-3xl">verified_user</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 text-[#111318] dark:text-white group-hover:text-primary transition-colors duration-300">Kekuatan Inti</h3>
                                    <p className="text-sm text-[#616f89] dark:text-[#9aa2b1] leading-relaxed">
                                        Gabungan data analitik canggih, pengalaman lapangan puluhan tahun, dan jaringan luas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Strengths Section */}
                <section className="py-16 bg-background-light dark:bg-[#0d121c]">
                    <div className="container mx-auto px-4 md:px-10">
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <div className="w-full md:w-1/3 sticky top-24">
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[#111318] dark:text-white">Kekuatan Utama Kami</h2>
                                <p className="text-[#616f89] dark:text-[#9aa2b1] mb-8 leading-relaxed">
                                    Protocol ID dibangun di atas pilar-pilar kompetensi yang solid. Keunggulan kami adalah jaminan kemenangan Anda.
                                </p>
                                <button className="hidden md:inline-flex h-12 px-6 bg-primary text-white font-bold rounded-lg items-center gap-2 hover:bg-primary/90 transition-colors">
                                    <span>Hubungi Kami</span>
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Strength Item */}
                                <div className="bg-white dark:bg-[#1a202c] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="material-symbols-outlined text-primary">school</span>
                                        <h3 className="font-bold text-lg text-[#111318] dark:text-white">Electoral Knowledge</h3>
                                    </div>
                                    <p className="text-sm text-[#616f89] dark:text-[#9aa2b1]">Pemahaman mendalam tentang sistem pemilu, regulasi, dan dinamika politik Indonesia.</p>
                                </div>
                                {/* Strength Item */}
                                <div className="bg-white dark:bg-[#1a202c] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="material-symbols-outlined text-primary">history_edu</span>
                                        <h3 className="font-bold text-lg text-[#111318] dark:text-white">Experience</h3>
                                    </div>
                                    <p className="text-sm text-[#616f89] dark:text-[#9aa2b1]">Rekam jejak panjang dalam mendampingi berbagai kandidat dari tingkat daerah hingga nasional.</p>
                                </div>
                                {/* Strength Item */}
                                <div className="bg-white dark:bg-[#1a202c] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="material-symbols-outlined text-primary">psychology</span>
                                        <h3 className="font-bold text-lg text-[#111318] dark:text-white">Skills</h3>
                                    </div>
                                    <p className="text-sm text-[#616f89] dark:text-[#9aa2b1]">Keahlian teknis dalam survei, branding politik, manajemen isu, dan penggalangan suara.</p>
                                </div>
                                {/* Strength Item */}
                                <div className="bg-white dark:bg-[#1a202c] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="material-symbols-outlined text-primary">diversity_3</span>
                                        <h3 className="font-bold text-lg text-[#111318] dark:text-white">Socio-Political Culture</h3>
                                    </div>
                                    <p className="text-sm text-[#616f89] dark:text-[#9aa2b1]">Sensitivitas tinggi terhadap budaya lokal dan pendekatan sosiologis pemilih Indonesia.</p>
                                </div>
                                {/* Strength Item */}
                                <div className="bg-white dark:bg-[#1a202c] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="material-symbols-outlined text-primary">gavel</span>
                                        <h3 className="font-bold text-lg text-[#111318] dark:text-white">Integrity</h3>
                                    </div>
                                    <p className="text-sm text-[#616f89] dark:text-[#9aa2b1]">Menjunjung tinggi etika politik dan kerahasiaan data klien sebagai prioritas utama.</p>
                                </div>
                                {/* Strength Item */}
                                <div className="bg-white dark:bg-[#1a202c] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="material-symbols-outlined text-primary">hub</span>
                                        <h3 className="font-bold text-lg text-[#111318] dark:text-white">Network</h3>
                                    </div>
                                    <p className="text-sm text-[#616f89] dark:text-[#9aa2b1]">Jaringan luas yang mencakup tokoh masyarakat, media, dan simpul-simpul pemilih strategis.</p>
                                </div>
                            </div>
                            <button className="md:hidden w-full h-12 bg-primary text-white font-bold rounded-lg">Hubungi Kami</button>
                        </div>
                    </div>
                </section>

                {/* Personnel Structure Section */}
                <section className="py-16 bg-white dark:bg-background-dark border-y border-[#f0f2f4] dark:border-[#222]">
                    <div className="container mx-auto px-4 md:px-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4 text-[#111318] dark:text-white">Struktur Personil</h2>
                            <p className="text-[#616f89] dark:text-[#9aa2b1]">Organisasi yang ramping dan efisien untuk eksekusi yang cepat.</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            {/* Org Chart Visualization */}
                            <div className="flex flex-col items-center">
                                {/* Top Level - Program Director */}
                                <div className="z-10 bg-white dark:bg-[#1a202c] border-2 border-primary rounded-xl p-4 w-64 text-center shadow-lg">
                                    <h4 className="font-bold text-primary">Program Director</h4>
                                    <p className="text-xs text-[#616f89] dark:text-[#9aa2b1]">Kepemimpinan Strategis</p>
                                </div>

                                {/* Vertical line from Director */}
                                <div className="w-0.5 h-8 bg-primary"></div>

                                {/* Horizontal connecting line */}
                                <div className="flex items-start w-full md:w-[80%]">
                                    {/* Left branch */}
                                    <div className="flex-1 flex flex-col items-center">
                                        <div className="w-full h-0.5 bg-primary"></div>
                                        <div className="w-0.5 h-8 bg-primary"></div>
                                        <div className="bg-background-light dark:bg-[#1a202c] border border-gray-200 dark:border-gray-700 rounded-lg p-3 w-full max-w-[180px] text-center">
                                            <h4 className="font-bold text-sm text-[#111318] dark:text-white">Branch Director</h4>
                                            <p className="text-xs text-[#616f89] dark:text-[#9aa2b1]">Koordinasi Wilayah</p>
                                        </div>
                                    </div>

                                    {/* Center branch */}
                                    <div className="flex-1 flex flex-col items-center">
                                        <div className="w-full h-0.5 bg-primary"></div>
                                        <div className="w-0.5 h-8 bg-primary"></div>
                                        <div className="bg-background-light dark:bg-[#1a202c] border border-gray-200 dark:border-gray-700 rounded-lg p-3 w-full max-w-[180px] text-center">
                                            <h4 className="font-bold text-sm text-[#111318] dark:text-white">Stakeholder</h4>
                                            <p className="text-xs text-[#616f89] dark:text-[#9aa2b1]">Mitra & Hubungan Luar</p>
                                        </div>
                                    </div>

                                    {/* Right branch */}
                                    <div className="flex-1 flex flex-col items-center">
                                        <div className="w-full h-0.5 bg-primary"></div>
                                        <div className="w-0.5 h-8 bg-primary"></div>
                                        <div className="bg-background-light dark:bg-[#1a202c] border border-gray-200 dark:border-gray-700 rounded-lg p-3 w-full max-w-[180px] text-center">
                                            <h4 className="font-bold text-sm text-[#111318] dark:text-white">Team Support</h4>
                                            <p className="text-xs text-[#616f89] dark:text-[#9aa2b1]">Administrasi & Logistik</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Profiles Section */}
                <section className="py-16 md:py-24 bg-background-light dark:bg-[#0d121c]">
                    <div className="container mx-auto px-4 md:px-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-[#111318] dark:text-white">Personil</h2>
                            <p className="text-[#616f89] dark:text-[#9aa2b1] max-w-2xl mx-auto">
                                Dipimpin oleh para profesional berpengalaman dengan rekam jejak sukses di berbagai kontestasi politik.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Profile Card 1 */}
                            <div className="bg-white dark:bg-[#1a202c] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="h-64 overflow-hidden bg-gray-200 relative">
                                    <img alt="Portrait of Alexander Kolaai Narwadan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://www.gravatar.com/avatar/00000000000000000000000000000001?d=mp&f=y&s=400" />
                                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="font-bold text-xl">Alexander Kolaai Narwadan</h3>
                                        <p className="text-sm text-gray-300">Political Analyst</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-[#616f89] dark:text-[#9aa2b1] text-sm leading-relaxed mb-4">
                                        Ahli strategi dengan pengalaman 15 tahun dalam pemetaan politik wilayah timur Indonesia. Spesialisasi dalam analisis perilaku pemilih dan segmentasi demografis.
                                    </p>
                                    <div className="flex gap-2">
                                        <Link className="text-primary hover:text-primary/80 text-sm font-medium" to="#">Lihat Profil Lengkap</Link>
                                    </div>
                                </div>
                            </div>
                            {/* Profile Card 2 */}
                            <div className="bg-white dark:bg-[#1a202c] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="h-64 overflow-hidden bg-gray-200 relative">
                                    <img alt="Portrait of Suhardi Soud" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://www.gravatar.com/avatar/00000000000000000000000000000002?d=mp&f=y&s=400" />
                                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="font-bold text-xl">Suhardi Soud</h3>
                                        <p className="text-sm text-gray-300">Campaign Manager</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-[#616f89] dark:text-[#9aa2b1] text-sm leading-relaxed mb-4">
                                        Mantan komisioner KPU daerah yang beralih menjadi konsultan. Memiliki pemahaman teknis regulasi yang mendalam dan manajemen saksi yang teruji.
                                    </p>
                                    <div className="flex gap-2">
                                        <Link className="text-primary hover:text-primary/80 text-sm font-medium" to="#">Lihat Profil Lengkap</Link>
                                    </div>
                                </div>
                            </div>
                            {/* Profile Card 3 */}
                            <div className="bg-white dark:bg-[#1a202c] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="h-64 overflow-hidden bg-gray-200 relative">
                                    <img alt="Portrait of Winsi Kuhu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://www.gravatar.com/avatar/00000000000000000000000000000003?d=mp&f=y&s=400" />
                                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="font-bold text-xl">Winsi Kuhu</h3>
                                        <p className="text-sm text-gray-300">Public Relations Lead</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-[#616f89] dark:text-[#9aa2b1] text-sm leading-relaxed mb-4">
                                        Pakar komunikasi publik dan media handling. Berpengalaman dalam membangun citra positif kandidat dan pengelolaan krisis isu selama masa kampanye.
                                    </p>
                                    <div className="flex gap-2">
                                        <Link className="text-primary hover:text-primary/80 text-sm font-medium" to="#">Lihat Profil Lengkap</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Programs Section */}
                <section className="py-16 bg-white dark:bg-background-dark">
                    <div className="container mx-auto px-4 md:px-10">
                        <div className="bg-primary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl font-bold mb-4">Program Layanan & Unduhan Data</h2>
                                    <p className="text-white/80 max-w-2xl mx-auto">
                                        Akses data historis dan panduan strategi untuk setiap tingkatan pemilihan. Daftar sekarang untuk mendapatkan akses unduhan gratis.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 max-w-3xl mx-auto">
                                    {/* Program List Item */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 hover:bg-white/20 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-white text-primary p-2 rounded-md">
                                                <span className="material-symbols-outlined">flag</span>
                                            </div>
                                            <span className="font-bold text-lg">PEMILU NASIONAL DPR RI</span>
                                        </div>
                                        <button className="w-full md:w-auto px-5 py-2.5 bg-white text-primary text-sm font-bold rounded shadow-sm hover:bg-gray-100 transition-colors whitespace-nowrap">
                                            Registrasi Untuk Unduhan Gratis
                                        </button>
                                    </div>
                                    {/* Program List Item */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 hover:bg-white/20 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-white text-primary p-2 rounded-md">
                                                <span className="material-symbols-outlined">location_city</span>
                                            </div>
                                            <span className="font-bold text-lg">PEMILU DAERAH DPRD PROVINSI</span>
                                        </div>
                                        <button className="w-full md:w-auto px-5 py-2.5 bg-white text-primary text-sm font-bold rounded shadow-sm hover:bg-gray-100 transition-colors whitespace-nowrap">
                                            Registrasi Untuk Unduhan Gratis
                                        </button>
                                    </div>
                                    {/* Program List Item */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 hover:bg-white/20 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-white text-primary p-2 rounded-md">
                                                <span className="material-symbols-outlined">apartment</span>
                                            </div>
                                            <span className="font-bold text-lg">KABUPATEN - KOTA</span>
                                        </div>
                                        <button className="w-full md:w-auto px-5 py-2.5 bg-white text-primary text-sm font-bold rounded shadow-sm hover:bg-gray-100 transition-colors whitespace-nowrap">
                                            Registrasi Untuk Unduhan Gratis
                                        </button>
                                    </div>
                                    {/* Program List Item */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 hover:bg-white/20 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-white text-primary p-2 rounded-md">
                                                <span className="material-symbols-outlined">how_to_vote</span>
                                            </div>
                                            <span className="font-bold text-lg">PILKADA PROVINSI</span>
                                        </div>
                                        <button className="w-full md:w-auto px-5 py-2.5 bg-white text-primary text-sm font-bold rounded shadow-sm hover:bg-gray-100 transition-colors whitespace-nowrap">
                                            Registrasi Untuk Unduhan Gratis
                                        </button>
                                    </div>
                                    {/* Program List Item */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 hover:bg-white/20 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-white text-primary p-2 rounded-md">
                                                <span className="material-symbols-outlined">ballot</span>
                                            </div>
                                            <span className="font-bold text-lg">PILKADA KABUPATEN - KOTA</span>
                                        </div>
                                        <button className="w-full md:w-auto px-5 py-2.5 bg-white text-primary text-sm font-bold rounded shadow-sm hover:bg-gray-100 transition-colors whitespace-nowrap">
                                            Registrasi Untuk Unduhan Gratis
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Simple Footer */}
            <footer className="bg-white dark:bg-[#111318] border-t border-[#f0f2f4] dark:border-[#222] py-8">
                <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-[#616f89] dark:text-[#9aa2b1]">
                        © 2024 Protocol ID. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <Link className="text-sm text-[#616f89] dark:text-[#9aa2b1] hover:text-primary" to="#">Privacy Policy</Link>
                        <Link className="text-sm text-[#616f89] dark:text-[#9aa2b1] hover:text-primary" to="#">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AboutUs;
