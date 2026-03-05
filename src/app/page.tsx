import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Background Layers Removed */}

      <Header />

      {/* Main Content (Home) */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 md:px-10 py-8 flex flex-col gap-12">

        {/* Hero Section */}
        <section className="@container animate-fade-in-up">
          <div className="flex min-h-[500px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-3xl items-center justify-center p-8 text-center relative overflow-hidden shadow-xl" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url("https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}>
            <div className="relative z-10 flex flex-col gap-5 max-w-2xl transform transition-transform hover:scale-[1.02] duration-500">
              <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.02em] drop-shadow-lg font-display">
                Simple Essentials.<br />Beautiful Living.
              </h1>
              <p className="text-white/95 text-xl font-medium leading-relaxed drop-shadow-md">
                Clean, friendly household products designed to make every chore a little brighter.
              </p>
              <div className="mt-6 flex justify-center gap-4 flex-wrap">
                <Link href="/shop" className="flex min-w-[140px] items-center justify-center rounded-full h-14 px-8 bg-primary hover:bg-primary/90 text-white text-lg font-bold shadow-[0_8px_30px_rgb(238,95,43,0.3)] transition-all hover:-translate-y-1">
                  Shop Collection
                </Link>
                <Link href="/contact" className="flex min-w-[140px] items-center justify-center rounded-full h-14 px-8 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 text-lg font-bold transition-all hover:-translate-y-1">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="flex flex-col gap-8 mt-4">
          <div className="flex items-center justify-between border-b border-slate-200  pb-4">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-slate-800  font-display">Shop by Category</h2>
            <Link className="text-primary font-bold hover:underline text-base flex items-center gap-1" href="/shop">
              View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Link href="/shop" className="group relative flex flex-col gap-3 rounded-2xl justify-end p-6 aspect-[4/5] bg-cover bg-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md" style={{ backgroundImage: 'url("/cleaning_custom.png")' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <p className="relative z-10 text-white text-2xl font-bold leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform font-display">Cleaning</p>
              <span className="relative z-10 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 delay-75">12 items</span>
            </Link>
            <Link href="/shop" className="group relative flex flex-col gap-3 rounded-2xl justify-end p-6 aspect-[4/5] bg-cover bg-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <p className="relative z-10 text-white text-2xl font-bold leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform font-display">Laundry</p>
              <span className="relative z-10 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 delay-75">8 items</span>
            </Link>
            <Link href="/shop" className="group relative flex flex-col gap-3 rounded-2xl justify-end p-6 aspect-[4/5] bg-cover bg-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md" style={{ backgroundImage: 'url("/kitchen_custom.png")' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <p className="relative z-10 text-white text-2xl font-bold leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform font-display">Kitchen</p>
              <span className="relative z-10 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 delay-75">24 items</span>
            </Link>
            <Link href="/shop" className="group relative flex flex-col gap-3 rounded-2xl justify-end p-6 aspect-[4/5] bg-cover bg-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <p className="relative z-10 text-white text-2xl font-bold leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform font-display">Bath</p>
              <span className="relative z-10 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 delay-75">15 items</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
