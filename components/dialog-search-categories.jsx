'use client';

import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';
import getCategories from '@/api/category/getCategory';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { DialogClose } from '@radix-ui/react-dialog';

export default function DialogSearchCategories({ children }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchInput, setSearchInput] = useState('');
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [checkedCategories, setCheckedCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCategories(1000);
                setCategories(response.data);

                const categoryParams = searchParams.getAll('c');

                setCheckedCategories(categoryParams);
                setFilteredCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchParams]);

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
        const filtered = categories.filter((category) =>
            category.name
                .toLowerCase()
                .includes(event.target.value.toLowerCase()),
        );
        setFilteredCategories(filtered);
    };

    const handleCategoryCheckboxChange = (categorySlug) => {
        setCheckedCategories((prevCheckedCategories) =>
            prevCheckedCategories.includes(categorySlug)
                ? prevCheckedCategories.filter((slug) => slug !== categorySlug)
                : [...prevCheckedCategories, categorySlug],
        );
    };

    const applyCategories = () => {
        const params = new URLSearchParams(searchParams);
        params.delete('c');
        checkedCategories.forEach((categorySlug) =>
            params.append('c', categorySlug),
        );
        router.replace(pathname + '?' + params.toString());
    };

    const clearCheckedCategories = () => {
        setCheckedCategories([]);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                    <DialogTitle>Categories</DialogTitle>
                </DialogHeader>
                <Input
                    placeholder="Search category"
                    className="mt-5 h-10 w-full rounded-md border p-2 text-base"
                    onChange={handleSearchInputChange}
                />

                <div className="grid max-h-[400px] gap-4 overflow-y-scroll p-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {!loading &&
                        filteredCategories.map((category) => (
                            <div
                                key={category.slug}
                                className="flex h-14 items-center space-x-2"
                            >
                                <input
                                    type="checkbox"
                                    id={`category-${category.slug}`}
                                    className="peer h-[19px] w-[19px] rounded-sm border p-1"
                                    checked={checkedCategories.includes(
                                        category.slug,
                                    )}
                                    onChange={() =>
                                        handleCategoryCheckboxChange(
                                            category.slug,
                                        )
                                    }
                                />
                                <label className="text-sm font-medium dark:text-gray-200">
                                    {category.name}
                                </label>
                            </div>
                        ))}
                </div>

                <DialogFooter className="sm:justify-end">
                    <Button
                        size="sm"
                        variant="secondary"
                        onClick={clearCheckedCategories}
                    >
                        Clear
                    </Button>
                    <DialogClose asChild>
                        <Button
                            type="button"
                            size="sm"
                            onClick={applyCategories}
                        >
                            Apply
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
