import getCategories from '@/api/category/getCategory';
import React from 'react';
import CoursesCard from './courses-card';
import Link from 'next/link';
import Image from 'next/image';

export default async function HomeCourses() {
    const categories = await getCategories();

    return (
        <>
            {categories.data.map((category, index) => (
                <div key={index} className="mb-4">
                    <div className="flex">
                        <h2 className="text-xl font-semibold">
                            {category.name}
                        </h2>
                    </div>
                    <div className="scrollbar-hidden no-scrollbar flex  snap-x overflow-x-scroll">
                        <div className="flex flex-nowrap">
                            {category.courses.map((course, i) => (
                                <div
                                    key={i}
                                    className="inline-block snap-center pr-3"
                                >
                                    <div className="h-auto max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out xs:w-60 md:w-72 ">
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
