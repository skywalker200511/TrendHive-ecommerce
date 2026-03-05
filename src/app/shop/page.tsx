import Header from '@/components/Header';
import Footer from '@/components/Footer';
import connectToDatabase from '@/lib/mongodb';
import ProductModel from '@/models/Product';
import Link from 'next/link';
import ShopSidebar from '@/components/ShopSidebar';
import ShopSort from '@/components/ShopSort';
import { Suspense } from 'react';

export default async function Shop({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const resolvedSearchParams = await searchParams || {};
    const maxPrice = resolvedSearchParams.maxPrice ? Number(resolvedSearchParams.maxPrice) : null;
    const sortParam = resolvedSearchParams.sort as string || 'featured';

    await connectToDatabase();

    // Query builder
    const query: any = {};
    if (maxPrice && maxPrice < 50) {
        query.price = { $lte: maxPrice };
    }

    // Sort builder
    let sortObj: any = { isBestseller: -1, createdAt: -1 }; // featured default
    if (sortParam === 'price-asc') sortObj = { price: 1 };
    if (sortParam === 'price-desc') sortObj = { price: -1 };
    if (sortParam === 'newest') sortObj = { createdAt: -1 };

    const productsDocs = await ProductModel.find(query).sort(sortObj).lean();

    // Map _id to string for React serialization
    const products = productsDocs.map(doc => ({
        ...doc,
        _id: doc._id?.toString(),
    }));

    return (
        <>
            <Header />

            <div className="flex-grow max-w-[1400px] w-full mx-auto px-4 md:px-10 py-10 flex flex-col md:flex-row gap-10">

                {/* Sidebar Filters */}
                <Suspense fallback={<div className="w-full md:w-64 flex-shrink-0" />}>
                    <ShopSidebar currentCategorySlug="all" />
                </Suspense>

                {/* Product Grid */}
                <main className="flex-grow flex flex-col">
                    <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900  font-display mb-2">Household Essentials</h1>
                            <p className="text-slate-500 text-lg">Fresh, clean, and friendly products for your everyday home needs.</p>
                        </div>
                        <Suspense fallback={<div className="h-10" />}>
                            <ShopSort />
                        </Suspense>
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
