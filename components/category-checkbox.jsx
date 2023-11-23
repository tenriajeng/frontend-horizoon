'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CategoryCheckbox({ category }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        const params = new URLSearchParams(searchParams);

        if (params.has('page')) {
            params.delete('page');
        }
        if (isChecked) {
            params.delete('c', category.slug);
        } else {
            params.append('c', category.slug);
        }

        router.push(pathname + '?' + params.toString());

        setIsChecked(!isChecked);

        // redirect(pathname + '?' + params.toString());
    };

    useEffect(() => {
        setIsChecked(searchParams.getAll('c').includes(category.slug));
    }, [searchParams, category.slug]);

    return (
        <div>
            <div className="my-3 flex items-center space-x-2">
                <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={isChecked}
                    aria-label={category.slug}
                    name="category"
                    value={category.slug}
                    className="peer h-[19px] w-[19px] rounded-sm border p-1"
                    id={`category-${category.slug}`}
                />
                <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300">
                    {category.name}
                </label>
            </div>
        </div>
    );
}
