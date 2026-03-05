import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="mt-auto border-t border-solid border-slate-200  bg-white  py-16 px-6 md:px-10">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-12">
                <div className="flex flex-col gap-6 max-w-sm">
                    <Link href="/" className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-3xl">home_app_logo</span>
                        <span className="text-slate-900  font-black text-2xl tracking-tight font-display">TrendHive</span>
                    </Link>
                    <p className="text-base text-slate-500  leading-relaxed">
                        Making everyday chores a little brighter with sustainably sourced, beautiful essentials crafted for the modern home.
                    </p>
                </div>
                <div className="flex flex-wrap gap-12 sm:gap-24">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg text-slate-900 ">Shop</h4>
                        <Link className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="/shop">Cleaning</Link>
                        <Link className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="/shop">Kitchen</Link>
                        <Link className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="/shop">Bath</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg text-slate-900 ">Company</h4>
                        <Link className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Our Story</Link>
                        <Link className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Sustainability</Link>
                        <Link className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-slate-200  flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-400">© 2024 TrendHive. Built with Next.js.</p>
                <div className="flex gap-4">
                    <Link href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">share</span></Link>
                </div>
            </div>
        </footer>
    );
}
