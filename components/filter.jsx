import React from 'react';
import { Separator } from './ui/separator';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

export default function Filter({ categories }) {
    return (
        <>
            <h2 className="text-lg font-medium">Filter By</h2>
            <Separator className="my-2" />

            <div className="w-full rounded-md pt-5">
                <h3 className="font-medium">Categories</h3>
                {categories.data.map((category, index) => (
                    <div key={index}>
                        <div className="my-3 flex items-center space-x-2">
                            <Checkbox
                                aria-label={category.slug}
                                name="category"
                                className="h-5 w-5"
                                id={`category-${category.slug}`}
                            />
                            <label
                                htmlFor={`category-${category.slug}`}
                                className="cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                            >
                                {category.name}
                            </label>
                        </div>
                    </div>
                ))}
                <Button variant="link" className="px-0 py-0">
                    Show More
                </Button>
            </div>
            <Separator className="my-2" />

            <div className="w-full rounded-md pt-5">
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
                            className="cursor-pointer dark:text-gray-300"
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
                            className="cursor-pointer dark:text-gray-300"
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
                            className="cursor-pointer dark:text-gray-300"
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
                            className="cursor-pointer dark:text-gray-300"
                            htmlFor="200"
                        >
                            {'200.000 >'}{' '}
                        </Label>
                    </div>
                </RadioGroup>
            </div>
        </>
    );
}
