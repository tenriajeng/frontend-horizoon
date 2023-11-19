import getCategories from '@/api/category/getCategory';
import React from 'react';
import CoursesCard from './courses-card';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRightIcon } from '@radix-ui/react-icons';

export default async function HomeCourses() {
    // await new Promise((resolve) => setTimeout(resolve, 10000));
    const perPage = 4;
    const categories = await getCategories(perPage);

    return (
        <>
            {categories.data.map((category, index) => (
                <div key={index} className="mb-8">
                    <div className="mb-2 flex items-end justify-between">
                        <h2 className="font-semibold xs:text-lg xs:font-medium md:text-xl">
                            {category.name}
                        </h2>

                        <Link
                            href={'/'}
                            className="flex items-center justify-between text-sm dark:text-white"
                        >
                            View All
                            <ChevronRightIcon className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="scrollbar-hidden no-scrollbar flex snap-x snap-mandatory overflow-x-scroll">
                        <div className="flex flex-nowrap">
                            {category.courses.map((course, i) => (
                                <div key={i} className="snap-center pr-3">
                                    <div className="h-auto max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out xs:w-40 md:w-72 ">
                                        <CoursesCard key={i} course={course} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
