'use client';

import {
    redirect,
    usePathname,
    useRouter,
    useSearchParams,
} from 'next/navigation';
import { Checkbox } from './ui/checkbox';
import { useState } from 'react';

export default function CategoryCheckbox({ category }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const categories = searchParams.getAll('c');
    const [isChecked, setIsChecked] = useState(
        categories.includes(category.slug),
    );

    const handleCheckboxChange = () => {
        const params = new URLSearchParams(searchParams);
        const page = params.get('page');
        params.delete('page', page);

        if (isChecked) {
            params.delete('c', category.slug);
        } else {
            params.append('c', category.slug);
        }

        router.push(pathname + '?' + params.toString());

        setIsChecked(!isChecked);

        redirect(pathname + '?' + params.toString());
    };

    return (
        <div>
            <div className="my-3 flex items-center space-x-2">
                <Checkbox
                    onClick={handleCheckboxChange}
                    checked={isChecked}
                    aria-label={category.slug}
                    name="category"
                    value={category.slug}
                    className="h-5 w-5"
                    aria-checked={true}
                    id={`category-${category.slug}`}
                />
                <label
                    // htmlFor={`category-${category.slug}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                >
                    {category.name}
                </label>
            </div>
        </div>
    );
}
