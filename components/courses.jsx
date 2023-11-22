'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import getCourses from '@/api/getCourses';
import CoursesCard from './courses-card';
import Pagination from './pagination';
import LoadingCoursesCard from './loading/courses-card';

const Courses = () => {
    const [courses, setCourses] = useState();
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [categories, setCategories] = useState([]);

    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            try {
                const response = await getCourses(page, 12, categories);
                setCourses(response);
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, [page, categories, searchParams]);

    return (
        <>
            {!loading ? (
                courses?.data.map((item, index) => (
                    <CoursesCard key={index} course={item} />
                ))
            ) : (
                <LoadingCoursesCard numCards={12} />
            )}

            {!loading && (
                <Pagination
                    setPage={setPage}
                    pagination={courses?.pagination}
                />
            )}
        </>
    );
};

export default Courses;
