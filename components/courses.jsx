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
            {!isLoading ? (
                courses.data.map((item, index) => (
                    <CoursesCard key={index} course={item} />
                ))
            ) : (
                <LoadingCoursesCard />
            )}
            {!isLoading && <Pagination pagination={courses.pagination} />}
        </>
    );
};

export default Courses;
