'use client';

import { useSearchParams } from 'next/navigation';
import { Checkbox } from './ui/checkbox';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CategoryCheckbox({ category }) {
    const searchParams = useSearchParams();

    const categories = searchParams.getAll('c');

    const [isChecked, setIsChecked] = useState(
        categories.includes(category.slug),
    );
    const router = useRouter();

    useEffect(() => {
        const updateCheckedStatus = () => {
            const categories = searchParams.getAll('c');
            setIsChecked(categories.includes(category.slug));
        };

        updateCheckedStatus();
    }, [category.slug, searchParams]);

    const handleCheckboxChange = () => {
        const categories = searchParams.getAll('c');
        setIsChecked(!isChecked);

        const updatedCategories = isChecked
            ? categories.filter((slug) => slug !== category.slug)
            : [...categories, category.slug];

        const updatedSearchParams = new URLSearchParams(window.location.search);

        updatedSearchParams.delete('c');
        updatedCategories.forEach((slug) =>
            updatedSearchParams.append('c', slug),
        );

        router.replace(`?${updatedSearchParams.toString()}`);
    };

    return (
        <div>
            <div className="my-3 flex items-center space-x-2">
                <Checkbox
                    checked={isChecked}
                    onCheckedChange={handleCheckboxChange}
                    aria-label={category.slug}
                    name="category"
                    value={category.slug}
                    className="h-5 w-5"
                    aria-checked={true}
                    id={`category-${category.slug}`}
                />
                <label
                    htmlFor={`category-${category.slug}`}
                    className="cursor-pointer text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                >
                    {category.name}
                </label>
            </div>
        </div>
    );
}
