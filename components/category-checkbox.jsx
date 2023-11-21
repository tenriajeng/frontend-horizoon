'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Checkbox } from './ui/checkbox';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CategoryCheckbox({ category }) {
    // const searchParams = useSearchParams();

    // const categories = searchParams.getAll('c');

    const [isChecked, setIsChecked] = useState(false);
    // const router = useRouter();

    // useEffect(() => {
    //     const updateCheckedStatus = () => {
    //         const categories = searchParams.getAll('c');
    //         setIsChecked(categories.includes(category.slug));
    //     };

    //     updateCheckedStatus();
    // }, [category.slug, searchParams]);

    // const handleCheckboxChange = () => {
    //     const categories = searchParams.getAll('c');
    //     setIsChecked(!isChecked);

    //     const updatedCategories = isChecked
    //         ? categories.filter((slug) => slug !== category.slug)
    //         : [...categories, category.slug];

    //     const updatedSearchParams = new URLSearchParams(searchParams);

    //     updatedSearchParams.delete('c');
    //     updatedCategories.forEach((slug) =>
    //         updatedSearchParams.append('c', slug),
    //     );

    //     router.replace(`?${updatedSearchParams.toString()}`);
    // };

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.append(name, value);

            return params.toString();
        },
        [searchParams],
    );

    const handleCheckboxChange = () => {
        router.push(pathname + '?' + createQueryString('c', category.slug));
        setIsChecked(!isChecked);
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
                <Link
                    href={
                        // <pathname>?sort=desc
                        pathname + '?' + createQueryString('c', category.slug)
                    }
                    htmlFor={`category-${category.slug}`}
                    className="cursor-pointer text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                >
                    {category.name}
                </Link>
            </div>
        </div>
    );
}
