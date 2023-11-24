'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import getCourses from '@/api/getCourses';
import CoursesCard from './courses-card';
import Pagination from './pagination';
import LoadingCoursesCard from './loading/courses-card';

const Courses = () => {
    const searchParams = useSearchParams();
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(parseInt(searchParams.get('page')) || 1);
    const [categories, setCategories] = useState(
        searchParams.getAll('c') || [],
    );
    const [keyword, setKeyword] = useState(searchParams.get('q') || '');

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            try {
                const response = await getCourses(
                    page,
                    12,
                    categories,
                    keyword,
                );
                console.log(response);

                setCourses(response);
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, [page, categories, keyword]);

    useEffect(() => {
        setPage(parseInt(searchParams.get('page')) || 1);
        setKeyword(searchParams.get('q'));
        setCategories(searchParams.getAll('c') || []);
    }, [searchParams]);

    return (
        <>
            {!loading && courses.success ? (
                courses?.data.map((item, index) => (
                    <CoursesCard key={index} course={item} />
                ))
            ) : !loading ? (
                <div className="relative col-span-4 flex h-screen w-full items-center justify-center">
                    <span className="absolute xs:top-0 md:top-10">
                        No courses found. Please try again with different
                        criteria.
                    </span>
                </div>
            ) : (
                <LoadingCoursesCard numCards={12} />
            )}

            {!loading && courses.success && (
                <Pagination
                    setPage={setPage}
                    pagination={courses?.pagination}
                />
            )}
        </>
    );
};

export default Courses;
