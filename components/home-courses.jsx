import getCategories from '@/service/category/getCategory';
import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import dynamic from 'next/dynamic';

const CourseSnapScroll = dynamic(() => import('./course-snap-scroll'));

export default async function HomeCourses() {
    const perPage = 3;
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
                            href={`/explore?c=${category.slug}`}
                            className="z-10 flex items-center justify-between text-sm dark:text-white"
                        >
                            View All
                            <ChevronRightIcon className="h-4 w-4" />
                        </Link>
                    </div>
                    <CourseSnapScroll courses={category.courses} />
                </div>
            ))}
        </>
    );
}
