import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden font-display">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e5e7eb] dark:border-b-gray-800 bg-white/90 dark:bg-[#101622]/90 backdrop-blur-md px-4 py-3 md:px-10">
        <div className="flex items-center gap-4 text-[#111318] dark:text-white">
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined !text-[32px]">analytics</span>
          </div>
          <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Protocol ID</h2>
        </div>
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-6 xl:gap-9">
            <Link className="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/">Beranda</Link>
            <Link className="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/about">Tentang Kami</Link>
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
      {/* Main Layout Container */}
      <main className="flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-12 md:py-20 lg:py-24">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="flex flex-col gap-6 flex-1 text-center lg:text-left items-center lg:items-start">
              <div className="flex flex-col gap-4">
                <span className="w-fit bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                  Solusi #1 Politik Indonesia
                </span>
                <h1 className="text-[#111318] dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
                  Menangkan Pemilu dengan <span className="text-primary">Data Akurat</span>
                </h1>
                <h2 className="text-gray-600 dark:text-gray-300 text-base md:text-lg font-normal leading-relaxed max-w-[600px]">
                  Platform analisis politik terlengkap untuk kandidat dan partai di Indonesia. Dapatkan wawasan mendalam, peta historis, dan prediksi AI untuk strategi pemenangan.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link to="/register" className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 w-full sm:w-auto">
                  Mulai Analisis
                </Link>
                <Link to="/products" className="flex items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#111318] dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto">
                  Pelajari Fitur
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                <span className="material-symbols-outlined text-[18px] text-green-600">check_circle</span>
                <span>Data terupdate Pemilu 2024</span>
              </div>
            </div>
            {/* Hero Image */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                {/* Dashboard Mockup Image */}
                <img alt="Dashboard analytics visualization showing graphs and data points on a screen" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS1Wl3d_yWjeW_tzYEWptgRzvXVJTN-W_lD_n9ap7p9lFvCEshDkDNLJlFnCBUS4q0JyR6kDFD_65U_0nUoNx8Zsu16Zja4UB9vCbXx9aVzoPLj6CR_kSRFGKIJZFLWSHzoO4d2RY15v9r9XIlJkX3_CEVbDfM4Jx_1lxXPKXQXzm4uanMx0RWnqB87Qe0QXyRYIySvXT19lBOq3KWJFFwuQDpHOS1E2SNqk4yP0WyWN5hYS0THnBNnGLQ2F3OsBb0dMAvWpatVLyX" />
                {/* Overlay UI Elements for realism */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur p-4 rounded-lg shadow-lg flex items-center justify-between border border-gray-100 dark:border-gray-700">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Elektabilitas Nasional</p>
                    <p className="text-lg font-bold text-[#111318] dark:text-white">45.2% <span className="text-green-500 text-sm font-normal">▲ 2.1%</span></p>
                  </div>
                  <div className="h-8 w-24 bg-blue-100 dark:bg-blue-900/50 rounded flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">show_chart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Map Section (Data Preview) */}
        <section className="w-full bg-white dark:bg-[#101622] border-y border-gray-100 dark:border-gray-800 py-16">
          <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
              <div className="flex flex-col gap-2 max-w-[600px]">
                <h2 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight tracking-tight">
                  Jelajahi Peta Politik 2024
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Visualisasi data persebaran suara hingga tingkat Kabupaten/Kota.
                </p>
              </div>
              <a className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">
                Lihat Peta Lengkap <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            {/* Interactive Map Container Mockup */}
            <div className="relative w-full aspect-video md:aspect-[21/9] bg-blue-50 dark:bg-[#0c111a] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden group">
              {/* Background Map Image */}
              <img alt="Map of Indonesia showing islands and provinces" className="w-full h-full object-cover opacity-80 mix-blend-multiply dark:mix-blend-luminosity hover:scale-105 transition-transform duration-[20s]" data-location="Indonesia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuCMy69jPNC3AF33d-Hy-gmR08nLBi9HBDvw-fxIBngluzrXFS5MRKUTg4yYCTp5PfnkZP8e08imt3dYkRfeEIGLgCNE2fZmOfGgnO3GJpO12i8msxivR9VQpTInuArKpwfWia6R8zYfH2YSqqR3ECaZMWVlBIy1oyDTuEpRULhBNcNhy_RYDVdVvqmqG2iofyIFSOZ8ED_5wYKMpCDfgOj0Br3_cMgPJexRVsEf-6sdYg3_9HudMBZepRuwmhyLYZ0qj4UTYGG9nS" />
              {/* Floating Data Points (Decoration) */}
              <div className="absolute top-[30%] left-[20%] size-3 bg-primary rounded-full animate-ping"></div>
              <div className="absolute top-[30%] left-[20%] size-3 bg-primary rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute top-[60%] left-[55%] size-3 bg-red-500 rounded-full animate-ping delay-700"></div>
              <div className="absolute top-[60%] left-[55%] size-3 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute top-[45%] left-[80%] size-3 bg-yellow-500 rounded-full animate-ping delay-300"></div>
              <div className="absolute top-[45%] left-[80%] size-3 bg-yellow-500 rounded-full border-2 border-white shadow-lg"></div>
              {/* Tooltip Mockup */}
              <div className="absolute top-[20%] left-[22%] bg-white dark:bg-gray-800 p-3 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 hidden md:block">
                <h4 className="font-bold text-sm text-[#111318] dark:text-white">Jawa Barat</h4>
                <p className="text-xs text-gray-500">DPT: 35.7 Juta</p>
                <div className="mt-2 w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[65%] bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-16 md:py-24">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-[#111318] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight max-w-[720px]">
                Layanan & Data Unggulan
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg font-normal max-w-[720px]">
                Solusi komprehensif untuk kebutuhan kampanye politik modern berbasis data.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="group flex flex-col gap-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 md:p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="size-14 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[32px]">monitoring</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight">Analisis Elektabilitas</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Pemantauan real-time sentimen publik, popularitas, dan tren elektabilitas kandidat dari berbagai sumber survei terpercaya.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="group flex flex-col gap-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 md:p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="size-14 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[32px]">map</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight">Peta Suara Historis</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Akses data hasil pemilu 2014 dan 2019 hingga tingkat TPS untuk memetakan basis kekuatan dan daerah rawan.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="group flex flex-col gap-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 md:p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="size-14 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[32px]">psychology</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight">Strategi Kampanye AI</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Dapatkan rekomendasi taktis berbasis kecerdasan buatan untuk efisiensi biaya dan efektivitas pesan kampanye.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Stats / Trust Section */}
        <section className="w-full bg-primary py-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-[1280px] mx-auto px-4 md:px-10 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="text-3xl font-bold">Data Terpercaya</h2>
                <p className="text-blue-100">Sumber data resmi KPU & Lembaga Survei</p>
              </div>
              <div className="flex gap-10 flex-wrap justify-center">
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-4xl font-black">38</span>
                  <span className="text-sm font-medium text-blue-200 uppercase tracking-wider">Provinsi</span>
                </div>
                <div className="w-px bg-blue-400/50 hidden md:block"></div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-4xl font-black">514</span>
                  <span className="text-sm font-medium text-blue-200 uppercase tracking-wider">Kab/Kota</span>
                </div>
                <div className="w-px bg-blue-400/50 hidden md:block"></div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-4xl font-black">204M+</span>
                  <span className="text-sm font-medium text-blue-200 uppercase tracking-wider">Data Pemilih</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Teaser */}
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-16 md:py-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">
                Investasi Kemenangan
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                Pilih paket langganan yang sesuai dengan skala kampanye Anda, mulai dari Caleg DPRD hingga Pilpres.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Basic Plan */}
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 flex flex-col gap-6">
                <div>
                  <h3 className="text-lg font-bold text-[#111318] dark:text-white">Basic</h3>
                  <p className="text-sm text-gray-500">Untuk Tim Kecil / DPRD II</p>
                </div>
                <div className="text-3xl font-black text-[#111318] dark:text-white">
                  Rp 5jt <span className="text-sm font-normal text-gray-500">/bulan</span>
                </div>
                <Link to="/register" className="flex items-center justify-center w-full py-2.5 rounded-lg border border-primary text-primary font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  Pilih Paket
                </Link>
                <ul className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Akses Data Dapil</li>
                  <li className="flex items-center gap-2"><span class="material-symbols-outlined text-green-500 text-lg">check</span> Peta Historis 2019</li>
                  <li className="flex items-center gap-2"><span class="material-symbols-outlined text-green-500 text-lg">check</span> Export PDF Basic</li>
                </ul>
              </div>
              {/* Pro Plan (Highlight) */}
              <div className="rounded-xl border-2 border-primary bg-white dark:bg-[#151c2b] p-6 flex flex-col gap-6 relative shadow-2xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  PALING POPULER
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111318] dark:text-white">Professional</h3>
                  <p className="text-sm text-gray-500">Untuk DPR RI / Kepala Daerah</p>
                </div>
                <div className="text-3xl font-black text-[#111318] dark:text-white">
                  Rp 15jt <span className="text-sm font-normal text-gray-500">/bulan</span>
                </div>
                <Link to="/register" className="flex items-center justify-center w-full py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-blue-700 transition-colors">
                  Pilih Paket
                </Link>
                <ul className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Semua Fitur Basic</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Analisis Sentimen AI</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Dashboard Real-time</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> 5 Akun Team</li>
                </ul>
              </div>
              {/* Enterprise Plan */}
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 flex flex-col gap-6">
                <div>
                  <h3 className="text-lg font-bold text-[#111318] dark:text-white">Enterprise</h3>
                  <p className="text-sm text-gray-500">Partai & Konsultan Besar</p>
                </div>
                <div className="text-3xl font-black text-[#111318] dark:text-white">
                  Kontak Kami
                </div>
                <Link to="/register" className="flex items-center justify-center w-full py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-[#111318] dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Hubungi Sales
                </Link>
                <ul className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Custom Integrasi API</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Dedicated Server</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Konsultasi Strategis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Trust / Clients */}
        <section className="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
          <div className="max-w-[1280px] mx-auto px-4 text-center flex flex-col gap-6">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Dipercaya oleh Kandidat & Partai</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
              {/* Placeholder Logos */}
              <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
                <span className="material-symbols-outlined">diversity_3</span> PARTAI A
              </div>
              <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
                <span className="material-symbols-outlined">flag</span> KOALISI MAJU
              </div>
              <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
                <span className="material-symbols-outlined">how_to_vote</span> INSTITUTE DATA
              </div>
              <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
                <span className="material-symbols-outlined">campaign</span> TIM SUKSES
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full bg-white dark:bg-[#101622] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="flex flex-col gap-4 max-w-sm">
              <div className="flex items-center gap-2 text-[#111318] dark:text-white">
                <span className="material-symbols-outlined text-primary">analytics</span>
                <h2 className="text-lg font-bold">Protocol ID</h2>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Membantu kandidat dan partai politik Indonesia mengambil keputusan berbasis data untuk masa depan bangsa.
              </p>
              <div className="flex gap-4 mt-2">
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">call</span></a>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 md:gap-20">
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-[#111318] dark:text-white">Perusahaan</h4>
                <a className="text-sm text-gray-500 hover:text-primary" href="#">Tentang Kami</a>
                <a className="text-sm text-gray-500 hover:text-primary" href="#">Karir</a>
                <a className="text-sm text-gray-500 hover:text-primary" href="#">Blog</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-[#111318] dark:text-white">Layanan</h4>
                <a className="text-sm text-gray-500 hover:text-primary" href="#">Data Pemilu</a>
                <a className="text-sm text-gray-500 hover:text-primary" href="#">Konsultasi AI</a>
                <a className="text-sm text-gray-500 hover:text-primary" href="#">Survei Lapangan</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-[#111318] dark:text-white">Dukungan</h4>
                <a className="text-sm text-gray-500 hover:text-primary" href="#">Pusat Bantuan</a>
                <a className="text-sm text-gray-500 hover:text-primary" href="#">Kebijakan Privasi</a>
                <a className="text-sm text-gray-500 hover:text-primary" href="#">Syarat & Ketentuan</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 Protocol ID. All rights reserved.</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
