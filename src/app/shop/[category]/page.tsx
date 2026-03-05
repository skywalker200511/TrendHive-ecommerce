import Header from '@/components/Header';
import Footer from '@/components/Footer';
import connectToDatabase from '@/lib/mongodb';
import ProductModel from '@/models/Product';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ShopSidebar from '@/components/ShopSidebar';
import ShopSort from '@/components/ShopSort';

const categoryMap: Record<string, string> = {
    'cleaning-supplies': 'Cleaning Supplies',
    'kitchen-dining': 'Kitchen & Dining',
    'bath-body': 'Bath & Body',
    'storage-org': 'Storage & Org'
};

const categoryLinks = [
    { name: 'All Essentials', href: '/shop', slug: 'all' },
    { name: 'Cleaning Supplies', href: '/shop/cleaning-supplies', slug: 'cleaning-supplies' },
    { name: 'Kitchen & Dining', href: '/shop/kitchen-dining', slug: 'kitchen-dining' },
    { name: 'Bath & Body', href: '/shop/bath-body', slug: 'bath-body' },
    { name: 'Storage & Org', href: '/shop/storage-org', slug: 'storage-org' }
];

export default async function CategoryPage({
    params,
    searchParams
}: {
    params: Promise<{ category: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedParams = await params;
    const categorySlug = resolvedParams.category;
    const actualCategoryName = categoryMap[categorySlug];

    if (!actualCategoryName) {
        notFound();
    }

    const resolvedSearchParams = await searchParams || {};
    const maxPrice = resolvedSearchParams.maxPrice ? Number(resolvedSearchParams.maxPrice) : null;
    const sortParam = resolvedSearchParams.sort as string || 'featured';

    await connectToDatabase();

    // Query builder
    const query: any = { category: actualCategoryName };
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
    const filteredProducts = productsDocs.map(doc => ({
        ...doc,
        _id: doc._id?.toString(),
    }));


    return (
        <>
            <Header />

            <div className="flex-grow max-w-[1400px] w-full mx-auto px-4 md:px-10 py-10 flex flex-col md:flex-row gap-10">

                {/* Sidebar Filters */}
                <ShopSidebar currentCategorySlug={categorySlug} />

                {/* Product Grid */}
                <main className="flex-grow flex flex-col">
                    <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900  font-display mb-2">{actualCategoryName}</h1>
                            <p className="text-slate-500 text-lg">Browse our collection of {actualCategoryName.toLowerCase()}.</p>
                        </div>
                        <ShopSort />
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {filteredProducts.map((product) => (
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
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center bg-slate-50 rounded-3xl border border-slate-100 mb-12">
                            <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">inventory_2</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
                            <p className="text-slate-500 max-w-md">We're currently restocking our {actualCategoryName.toLowerCase()}. Check back soon!</p>
                        </div>
                    )}
                </main>
            </div>

            <Footer />
        </>
    );
}
