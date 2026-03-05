import Link from 'next/link';

export default function Login() {
    return (
        <main className="flex-grow flex items-center justify-center p-4 py-12 auth-gradient">

            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] w-full max-w-[480px] border border-slate-100 flex flex-col items-center relative z-10">

                {/* Logo area */}
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-primary mb-6 animate-pulse" style={{ animationDuration: '3s' }}>
                    <span className="material-symbols-outlined text-3xl">home_app_logo</span>
                </div>

                {/* Headers */}
                <div className="text-center mb-10 w-full">
                    <h1 className="text-[32px] font-bold tracking-tight text-slate-900 mb-2">Welcome Back</h1>
                    <p className="text-slate-500 text-[15px]">Sign in to continue your essential shopping.</p>
                </div>

                {/* Form */}
                <form className="w-full space-y-5" action="/">
                    <div className="space-y-2 group">
                        <label className="block text-[13px] font-semibold text-slate-900 px-1">Email address</label>
                        <div className="relative flex items-center">
                            <span className="material-symbols-outlined absolute left-4 text-slate-400 group-focus-within:text-primary transition-colors text-lg">mail</span>
                            <input type="email" className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" placeholder="hello@example.com" required />
                        </div>
                    </div>

                    <div className="space-y-2 group">
                        <div className="flex items-center justify-between px-1">
                            <label className="block text-[13px] font-semibold text-slate-900">Password</label>
                            <Link href="#" className="text-[13px] font-semibold text-primary hover:text-primary/80 transition-colors">Forgot Password?</Link>
                        </div>
                        <div className="relative flex items-center">
                            <span className="material-symbols-outlined absolute left-4 text-slate-400 group-focus-within:text-primary transition-colors text-lg">lock</span>
                            <input type="password" className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 tracking-widest" placeholder="••••••••" required />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-primary hover:bg-[#de5121] text-white font-semibold rounded-2xl py-4 transition-all shadow-[0_8px_20px_rgb(238,95,43,0.2)] hover:shadow-[0_8px_25px_rgb(238,95,43,0.3)] hover:-translate-y-0.5 mt-8 flex items-center justify-center gap-2">
                        Sign In
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                </form>

                <p className="mt-10 text-[14px] text-slate-500 text-center">
                    Don't have an account? <Link href="#" className="font-bold text-primary hover:underline">Sign up</Link>
                </p>

            </div>
        </main>
    );
}
