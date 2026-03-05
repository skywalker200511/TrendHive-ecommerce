'use client';

import Link from 'next/link';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const categoryLinks = [
    { name: 'All Essentials', href: '/shop', slug: 'all' },
    { name: 'Cleaning Supplies', href: '/shop/cleaning-supplies', slug: 'cleaning-supplies' },
    { name: 'Kitchen & Dining', href: '/shop/kitchen-dining', slug: 'kitchen-dining' },
    { name: 'Bath & Body', href: '/shop/bath-body', slug: 'bath-body' },
    { name: 'Storage & Org', href: '/shop/storage-org', slug: 'storage-org' }
];

export default function ShopSidebar({ currentCategorySlug = 'all' }: { currentCategorySlug?: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Internal state for smooth dragging before pushing to URL
    const initialMaxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : 50;
    const [maxPrice, setMaxPrice] = useState(initialMaxPrice);

    // Sync state if URL changes externally
    useEffect(() => {
        const urlPrice = searchParams.get('maxPrice');
        if (urlPrice) {
            setMaxPrice(Number(urlPrice));
        } else {
            setMaxPrice(50); // Default max
        }
    }, [searchParams]);

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(e.target.value));
    };

    const handlePriceSubmit = () => {
        const params = new URLSearchParams(searchParams.toString());
        if (maxPrice === 50) {
            params.delete('maxPrice');
        } else {
            params.set('maxPrice', maxPrice.toString());
        }
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
                <div>
                    <h3 className="font-bold text-lg mb-4 text-slate-900">Categories</h3>
                    <ul className="space-y-3">
                        {categoryLinks.map((cat) => (
                            <li key={cat.name}>
                                <Link href={cat.href} className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="radio"
                                        readOnly
                                        checked={cat.slug === currentCategorySlug}
                                        className="form-radio text-action border-slate-300 focus:ring-action w-5 h-5 cursor-pointer"
                                    />
                                    <span className={`transition-colors ${cat.slug === currentCategorySlug ? 'text-action font-bold' : 'text-slate-700 group-hover:text-slate-900'}`}>{cat.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-4 text-slate-900">Max Price: ${maxPrice === 50 ? '50+' : maxPrice}</h3>
                    <div className="px-2">
                        <input
                            type="range"
                            min="1"
                            max="50"
                            value={maxPrice}
                            onChange={handlePriceChange}
                            onMouseUp={handlePriceSubmit}
                            onTouchEnd={handlePriceSubmit}
                            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-action"
                        />
                        <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                            <span>$1</span>
                            <span>$50+</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
