'use client';

import getCourses from '@/api/getCourses';
import CoursesCard from './courses-card';
import Pagination from './pagination';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const Courses = () => {
    const [courses, setCourses] = useState();
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const [page, setPage] = useState(parseInt(searchParams.get('page')) || 1);

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            const response = await getCourses(page);
            setCourses(response);
            setLoading(false);
        }
        fetchData();
    }, [page]);

    return (
        <>
            {!loading &&
                courses.data.map((item, index) => (
                    <CoursesCard key={index} course={item} />
                ))}

            {!loading && (
                <Pagination setPage={setPage} pagination={courses.pagination} />
            )}
        </>
    );
};

export default Courses;
