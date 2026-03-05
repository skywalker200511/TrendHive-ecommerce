import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200  bg-white/95  backdrop-blur-sm px-6 md:px-10 py-4 shadow-sm transition-all duration-300">
            <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-4 text-primary group">
                    <div className="size-6 transform group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl">home_app_logo</span>
                    </div>
                    <h2 className="text-slate-900  text-xl font-bold leading-tight tracking-[-0.015em] font-display">TrendHive</h2>
                </Link>
                <nav className="hidden md:flex items-center gap-9">
                    <Link className="text-slate-700  hover:text-primary transition-colors text-sm font-medium leading-normal" href="/">Home</Link>
                    <Link className="text-slate-700  hover:text-primary transition-colors text-sm font-medium leading-normal" href="/shop">Shop</Link>
                    <Link className="text-slate-700  hover:text-primary transition-colors text-sm font-medium leading-normal" href="/contact">Contact</Link>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64 relative group">
                    <div className="flex w-full flex-1 items-stretch rounded-full h-full bg-slate-100  border border-transparent group-focus-within:border-primary/30 transition-colors">
                        <div className="text-slate-500 flex items-center justify-center pl-4 rounded-l-full">
                            <span className="material-symbols-outlined text-xl">search</span>
                        </div>
                        <input className="form-input w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full text-slate-900  focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-slate-500 px-4 pl-2 text-sm font-normal leading-normal" placeholder="Search essentials..." defaultValue="" />
                    </div>
                </label>
                <div className="flex gap-2">
                    <Link href="/shop" className="flex size-10 items-center justify-center rounded-full bg-slate-100  text-slate-700  hover:bg-slate-200 transition-all transform hover:scale-105" aria-label="Cart">
                        <span className="material-symbols-outlined text-xl">shopping_cart</span>
                    </Link>
                    <Link href="/login" className="flex size-10 items-center justify-center rounded-full bg-slate-100  text-slate-700  hover:bg-slate-200 transition-all transform hover:scale-105" aria-label="Login">
                        <span className="material-symbols-outlined text-xl">person</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
