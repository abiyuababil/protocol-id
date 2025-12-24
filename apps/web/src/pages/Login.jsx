import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Email dan kata sandi wajib diisi');
            return;
        }

        // Mock login - any email/password will work
        const success = login(email, password);
        if (success) {
            navigate('/dashboard');
        }
    };

    return (
        <div className="flex min-h-screen w-full flex-row overflow-hidden font-display bg-background-light dark:bg-background-dark text-[#111318] dark:text-white">
            {/* Left Section: Form */}
            <div className="flex w-full flex-col justify-center bg-white px-6 py-12 dark:bg-background-dark lg:w-1/2 lg:px-20 xl:px-32">
                {/* Logo Mobile/Desktop */}
                <Link to="/" className="mb-10 flex items-center gap-3 w-fit">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined !text-[24px]">analytics</span>
                    </div>
                    <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-[#111318] dark:text-white">Protocol ID</h2>
                </Link>

                {/* Headlines */}
                <div className="mb-8">
                    <h1 className="mb-2 text-3xl font-bold leading-tight tracking-tight text-[#111318] dark:text-white lg:text-4xl">Masuk ke Akun Anda</h1>
                    <p className="text-base font-normal leading-normal text-[#616f89] dark:text-gray-400">
                        Akses data pemilu historis dan layanan konsultan politik terbaik di Indonesia.
                    </p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                        {error}
                    </div>
                )}

                {/* Demo Notice */}
                <div className="mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm">
                    <strong>Demo Mode:</strong> Gunakan email dan password apapun untuk masuk.
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
                    {/* Email Field */}
                    <div className="flex w-full flex-col gap-2">
                        <label className="text-base font-medium leading-normal text-[#111318] dark:text-white" htmlFor="email">Email atau Nama Pengguna</label>
                        <input
                            className="form-input h-14 w-full rounded-lg border border-[#dbdfe6] bg-white px-[15px] text-base font-normal leading-normal text-[#111318] placeholder:text-[#616f89] focus:border-primary focus:outline-0 focus:ring-0 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                            id="email"
                            placeholder="nama@partai.id"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password Field */}
                    <div className="flex w-full flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <label className="text-base font-medium leading-normal text-[#111318] dark:text-white" htmlFor="password">Kata Sandi</label>
                            <Link className="text-sm font-medium text-primary hover:text-primary-hover hover:underline" to="#">Lupa Kata Sandi?</Link>
                        </div>
                        <div className="relative flex w-full items-center">
                            <input
                                className="form-input h-14 w-full rounded-lg border border-[#dbdfe6] bg-white pl-[15px] pr-12 text-base font-normal leading-normal text-[#111318] placeholder:text-[#616f89] focus:border-primary focus:outline-0 focus:ring-0 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                                id="password"
                                placeholder="Masukkan kata sandi"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className="absolute right-0 flex h-full w-12 items-center justify-center text-[#616f89] hover:text-[#111318] dark:text-gray-400 dark:hover:text-white"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                                    {showPassword ? 'visibility' : 'visibility_off'}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button className="mt-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-primary px-4 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-primary-hover focus:ring-4 focus:ring-primary/20" type="submit">
                        Masuk
                    </button>

                    {/* Divider */}
                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-[#dbdfe6] dark:border-gray-700"></div>
                        <span className="mx-4 flex-shrink text-sm text-[#616f89] dark:text-gray-500">atau</span>
                        <div className="flex-grow border-t border-[#dbdfe6] dark:border-gray-700"></div>
                    </div>

                    {/* Social Login */}
                    <button className="flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-[#dbdfe6] bg-white px-4 text-base font-medium leading-normal text-[#111318] transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700" type="button">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"></path>
                            <path d="M3.15302 7.3455L6.43852 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z" fill="#FF3D00"></path>
                            <path d="M12 22C14.666 22 17.054 20.9455 18.841 19.2945L15.6515 16.7915C14.6495 17.5655 13.3935 18 12 18C9.3565 18 7.1195 16.299 6.29 13.9725L3.0185 16.5085C4.6905 19.7895 8.053 22 12 22Z" fill="#4CAF50"></path>
                            <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.257 15.108 16.546 16.076 15.6515 16.7915L18.841 19.2945C20.726 17.5615 21.9055 14.992 21.9055 12C21.9055 11.3295 21.8365 10.675 21.8055 10.0415Z" fill="#1976D2"></path>
                        </svg>
                        <span>Masuk dengan Google</span>
                    </button>
                </form>

                {/* Footer Link */}
                <p className="mt-8 text-center text-sm font-normal text-[#616f89] dark:text-gray-400">
                    Belum punya akun?
                    <Link className="font-bold text-primary hover:underline ml-1" to="/register">Daftar sekarang</Link>
                </p>
            </div>

            {/* Right Section: Image/Visual */}
            <div className="relative hidden lg:block lg:w-1/2">
                <img alt="Visualization of political data network" className="absolute inset-0 h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoG69LU71Y_4xeXniJi_yh2v90lxKtPPHLxbsXB_CAAhr2ERUs-OtGspVdL-qaiMUf41XnURPlUUdXF6qHM_1gbrclp3R-3HXR5GVmjhZZn-odScLkbBSCPtem9qy9o06wI_M-aB5-scZUC4dx7BfqVo1Xh-o7UQFE-0FR3xyMWo1lR2VMkc_-qrcYhwY3W0V-RLqEIAw8Vm9y9FpCGHF7-2RkoE5Nljc-3edIp6mGZv4leqIxDLWWZw8xOR18_7r7AH5e7s60k8ui" />
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-12 text-white xl:p-20">
                    <div className="mb-6 rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-sm w-fit">
                        <span className="text-sm font-semibold tracking-wide text-white">#1 Platform Politik Indonesia</span>
                    </div>
                    <blockquote className="mb-6 max-w-lg">
                        <p className="text-2xl font-bold leading-tight md:text-3xl">
                            "Keputusan strategis dimulai dengan data yang akurat. Protocol ID membantu kami memenangkan hati rakyat."
                        </p>
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <span className="text-sm font-bold">Bambang S.</span>
                            <span className="text-xs text-white/80">Konsultan Strategi Kampanye</span>
                        </div>
                        <div className="h-8 w-px bg-white/30"></div>
                        <div className="flex gap-1 text-white">
                            <span className="material-symbols-outlined text-[18px]">star</span>
                            <span className="material-symbols-outlined text-[18px]">star</span>
                            <span className="material-symbols-outlined text-[18px]">star</span>
                            <span className="material-symbols-outlined text-[18px]">star</span>
                            <span className="material-symbols-outlined text-[18px]">star</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
