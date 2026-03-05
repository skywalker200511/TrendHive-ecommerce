import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import Link from 'next/link';

export default function Shop() {
    return (
        <>
            <Header />

            <div className="flex-grow max-w-[1400px] w-full mx-auto px-4 md:px-10 py-10 flex flex-col md:flex-row gap-10">

                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="sticky top-28 space-y-8">
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-slate-900 ">Categories</h3>
                            <ul className="space-y-3">
                                {['All Essentials', 'Cleaning Supplies', 'Kitchen & Dining', 'Bath & Body', 'Storage & Org'].map((cat, i) => (
                                    <li key={cat}>
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input type="radio" name="category" defaultChecked={i === 0} className="form-radio text-action border-slate-300 focus:ring-action w-5 h-5 cursor-pointer" />
                                            <span className="text-slate-700  group-hover:text-slate-900 transition-colors">{cat}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4 text-slate-900 ">Price Range</h3>
                            <div className="px-2">
                                <div className="relative w-full h-1 bg-slate-200 rounded-full mb-4">
                                    <div className="absolute inset-y-0 left-0 w-1/2 bg-action rounded-full"></div>
                                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-action rounded-full shadow-sm"></div>
                                </div>
                                <div className="flex justify-between text-sm text-slate-500">
                                    <span>$0</span>
                                    <span>$50+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="flex-grow flex flex-col">
                    <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900  font-display mb-2">Household Essentials</h1>
                            <p className="text-slate-500 text-lg">Fresh, clean, and friendly products for your everyday home needs.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-slate-500 font-medium">Sort by:</span>
                            <div className="relative">
                                <select className="appearance-none bg-white border border-slate-200 rounded-lg py-2 pl-4 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-action/20 focus:border-action cursor-pointer">
                                    <option>Featured</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest Arrivals</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                                    <span className="material-symbols-outlined text-lg">expand_more</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
                                <div className="relative bg-slate-50 rounded-2xl aspect-square mb-5 flex items-center justify-center overflow-hidden">
                                    {product.isBestseller && <span className="absolute top-4 left-4 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full z-10">Bestseller</span>}
                                    {product.isNew && <span className="absolute top-4 left-4 bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full z-10">New</span>}

                                    {product.imageUrl ? (
                                        <img src={product.imageUrl} alt={product.name} className="w-2/3 h-2/3 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
                                    ) : (
                                        <div className="w-32 h-32 bg-slate-200/50 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                            <span className="material-symbols-outlined text-6xl text-slate-400">{product.icon}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-grow flex flex-col">
                                    <h3 className="font-bold text-lg text-slate-900 mb-1 leading-tight">{product.name}</h3>
                                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                                    <div className="flex items-center justify-between mt-auto pt-2">
                                        <span className="font-bold text-xl text-slate-900">${product.price.toFixed(2)}</span>
                                        <button className="bg-slate-100 hover:bg-action hover:text-white text-action w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                                            <span className="material-symbols-outlined">add</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-2 mt-auto">
                        <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-action text-white font-medium shadow-md">1</button>
                        <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors font-medium">2</button>
                        <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors font-medium">3</button>
                        <span className="text-slate-400 px-1">...</span>
                        <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors font-medium">8</button>
                        <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </main>
            </div>

            <Footer />
        </>
    );
}
