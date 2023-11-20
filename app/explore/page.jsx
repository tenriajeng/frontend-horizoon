'use server';

import getCategories from '@/api/category/getCategory';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';

export default async function Page({ searchParams }) {
    const categories = await getCategories(6);

    return (
        <div className="relative md:container">
            <div
                className="absolute inset-x-0 -right-96 -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-indigo-800 to-sky-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mt-4 xs:mx-2 xs:mb-5 xs:mt-2 xs:p-0 md:mx-2 md:mb-10">
                <div className="grid grid-cols-4 gap-5">
                    <div className="col-span-4 mt-2">
                        <h1 className="text-2xl font-semibold">Explore</h1>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Filter By</h3>
                        <div className="w-full rounded-md pt-5">
                            <h4 className="font-medium">Categories</h4>
                            {categories.data.map((category, index) => (
                                <div key={index}>
                                    <div className="my-3 flex items-center space-x-2">
                                        <Checkbox
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
                            <h4 className="font-medium">Price</h4>
                            <RadioGroup defaultValue="comfortable">
                                <div className="mb-1 mt-3 flex items-center space-x-2">
                                    <RadioGroupItem
                                        className="h-5 w-5"
                                        value="free"
                                        id="free"
                                    />
                                    <Label
                                        className="cursor-pointer"
                                        htmlFor="free"
                                    >
                                        Free
                                    </Label>
                                </div>
                                <div className="mb-1 flex items-center space-x-2">
                                    <RadioGroupItem
                                        className="h-5 w-5"
                                        value="0-100000"
                                        id="0-100"
                                    />
                                    <Label
                                        className="cursor-pointer"
                                        htmlFor="0-100"
                                    >
                                        IDR 0 - 100.000
                                    </Label>
                                </div>
                                <div className="mb-1 flex items-center space-x-2">
                                    <RadioGroupItem
                                        className="h-5 w-5"
                                        value="100000-200000"
                                        id="100-200"
                                    />
                                    <Label
                                        className="cursor-pointer"
                                        htmlFor="100-200"
                                    >
                                        IDR 100.000 - 200.000
                                    </Label>
                                </div>
                                <div className="mb-1 flex items-center space-x-2">
                                    <RadioGroupItem
                                        className="h-5 w-5"
                                        value="200000"
                                        id="200"
                                    />
                                    <Label
                                        className="cursor-pointer"
                                        htmlFor="200"
                                    >
                                        {'200.000 >'}{' '}
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="col-span-3 flex aspect-video items-center justify-center border">
                        <h2>{searchParams.c}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
