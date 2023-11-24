'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CategoryCheckbox({ category }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (category) => {
        const params = new URLSearchParams(searchParams);

        if (params.has('page')) {
            params.delete('page');
        }

        const categorySlugs = params.getAll('c');

        if (isChecked) {
            params.delete('c', category);
        } else if (!categorySlugs.includes(category)) {
            params.append('c', category);
        }

        router.push(`${pathname}?${params.toString()}`);
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        setIsChecked(searchParams.getAll('c').includes(category.slug));
    }, [searchParams, category.slug]);

    return (
        <div>
            <label className="my-2 flex h-9 cursor-pointer items-center space-x-2 rounded-md border px-2 hover:bg-gray-200 dark:border-gray-700 dark:hover:border-white dark:hover:bg-slate-700 xs:w-full dark:xs:bg-slate-950 lg:w-10/12 dark:lg:bg-slate-900 ">
                <input
                    onChange={() => handleCheckboxChange(category.slug)}
                    type="checkbox"
                    checked={isChecked}
                    aria-label={category.slug}
                    name="category"
                    value={category.slug}
                    className="peer h-4 w-4 rounded-sm border p-1"
                    id={`category-${category.slug}`}
                />
                <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
                    {category.name}
                </label>
            </label>
        </div>
    );
}
