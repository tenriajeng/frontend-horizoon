'use client';

import React from 'react';
import { Separator } from './ui/separator';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import DialogSearchCategories from './dialog-search-categories';
import CategoryCheckbox from './category-checkbox';

export default function Filter({ categories }) {
    return (
        <>
            <h2 className="mb-2 text-lg font-medium">Filter</h2>
            <Separator className="my-2 lg:w-10/12" />

            <div>
                <div className="w-full">
                    <h3 className="font-medium">Categories</h3>
                    {categories.data.map((category, index) => (
                        <CategoryCheckbox key={index} category={category} />
                    ))}

                    <DialogSearchCategories>
                        <Button variant="link" className="px-0 py-0">
                            Show More
                        </Button>
                    </DialogSearchCategories>
                </div>
                <Separator className="my-2 lg:w-10/12" />

                <div className="w-full rounded-md pt-2">
                    <h3 className="font-medium">Price</h3>
                    <RadioGroup defaultValue="comfortable">
                        <div className="mb-1 mt-3 flex items-center space-x-2">
                            <RadioGroupItem
                                aria-label="free"
                                className="h-5 w-5"
                                value="free"
                                id="free"
                            />
                            <Label
                                className="cursor-pointer text-sm dark:text-gray-300"
                                htmlFor="free"
                            >
                                Free
                            </Label>
                        </div>
                        <div className="mb-1 flex items-center space-x-2">
                            <RadioGroupItem
                                aria-label="0-100000"
                                className="h-5 w-5"
                                value="0-100000"
                                id="0-100"
                            />
                            <Label
                                className="cursor-pointer text-sm dark:text-gray-300"
                                htmlFor="0-100"
                            >
                                IDR 0 - 100.000
                            </Label>
                        </div>
                        <div className="mb-1 flex items-center space-x-2">
                            <RadioGroupItem
                                aria-label="100000-200000"
                                className="h-5 w-5"
                                value="100000-200000"
                                id="100-200"
                            />
                            <Label
                                className="cursor-pointer text-sm dark:text-gray-300"
                                htmlFor="100-200"
                            >
                                IDR 100.000 - 200.000
                            </Label>
                        </div>
                        <div className="mb-1 flex items-center space-x-2">
                            <RadioGroupItem
                                aria-label="200000"
                                className="h-5 w-5"
                                value="200000"
                                id="200"
                            />
                            <Label
                                className="cursor-pointer text-sm dark:text-gray-300"
                                htmlFor="200"
                            >
                                {'200.000 >'}{' '}
                            </Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
        </>
    );
}
