'use client';

import React, { useEffect, useState } from 'react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import DialogSearchCategories from './dialog-search-categories';
import CategoryCheckbox from './category-checkbox';
import getCategories from '@/api/category/getCategory';
import LoadingCategoryCheckbox from './loading/category-checkbox';
import PriceFilter from './price-filter';

export default function Filter() {
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            const response = await getCategories();
            setCategories(response);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <>
            <h2 className="mb-2 text-lg font-medium">Filter</h2>
            <Separator className="my-2 lg:w-10/12" />

            <div>
                <div className="w-full">
                    <h3 className="font-medium">Categories</h3>
                    {!loading ? (
                        categories.data.map((category, index) => (
                            <CategoryCheckbox key={index} category={category} />
                        ))
                    ) : (
                        <LoadingCategoryCheckbox />
                    )}

                    <DialogSearchCategories>
                        <Button variant="link" className="px-0 py-0">
                            Show More
                        </Button>
                    </DialogSearchCategories>
                </div>
                <Separator className="my-2 lg:w-10/12" />

                <div className="w-full rounded-md pt-2">
                    <h3 className="font-medium">Price</h3>
                    <PriceFilter />
                </div>
            </div>
        </>
    );
}
