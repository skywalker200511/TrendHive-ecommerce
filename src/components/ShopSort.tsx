'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function ShopSort() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentSort = searchParams.get('sort') || 'featured';

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSort = e.target.value;
        const params = new URLSearchParams(searchParams.toString());

        if (newSort === 'featured') {
            params.delete('sort');
        } else {
            params.set('sort', newSort);
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500 font-medium">Sort by:</span>
            <div className="relative">
                <select
                    value={currentSort}
                    onChange={handleSortChange}
                    className="appearance-none bg-white border border-slate-200 rounded-lg py-2 pl-4 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-action/20 focus:border-action cursor-pointer"
                >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest Arrivals</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                    <span className="material-symbols-outlined text-lg">expand_more</span>
                </div>
            </div>
        </div>
    );
}
