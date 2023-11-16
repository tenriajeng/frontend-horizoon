'use client';

import getCourses from '@/api/getCourses';
import CoursesCard from './courses-card';
import LoadingCoursesCard from './loading/courses-card';
import { useEffect, useState } from 'react';
import Pagination from './pagination';
import { useSearchParams } from 'next/navigation';
import LoadingPagination from './loading/pagination';

const Courses = () => {
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const page = searchParams.get('page') || 1;
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        const fetchCartData = async () => {
            try {
                const coursesData = await getCourses(page);
                setCourses(coursesData);
            } catch (error) {
                console.error('Error while fetching carts:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCartData();
    }, [page]);

    return (
        <>
            <div className="grid grid-cols-1 xs:mx-2 xs:mb-5 xs:mt-2 xs:grid-cols-2 xs:gap-2 sm:grid-cols-2 md:mx-0 md:mb-10 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                {!isLoading ? (
                    courses.data.map((item, index) => (
                        <CoursesCard key={index} course={item} />
                    ))
                ) : (
                    <LoadingCoursesCard />
                )}
            </div>
            {!isLoading ? (
                <Pagination pagination={courses.pagination} />
            ) : (
                <LoadingPagination />
            )}
        </>
    );
};

export default Courses;
