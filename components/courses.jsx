'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import getCourses from '@/api/getCourses';
import CoursesCard from './courses-card';
import Pagination from './pagination';
import LoadingCoursesCard from './loading/courses-card';
import { useCallback } from 'react';

const Courses = () => {
    const searchParams = useSearchParams();
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);

    const getConfigFromSearchParams = useCallback(
        () => ({
            page: parseInt(searchParams.get('page')) || 1,
            perPage: parseInt(12),
            categories: searchParams.getAll('c') || [],
            keyword: searchParams.get('q') || '',
            minPrice: parseInt(searchParams.get('min-price')) || null,
            maxPrice: parseInt(searchParams.get('max-price')) || null,
        }),
        [searchParams],
    );

    const [config, setConfig] = useState(getConfigFromSearchParams());

    useEffect(() => {
        setConfig(getConfigFromSearchParams());
    }, [getConfigFromSearchParams, searchParams]);

    useEffect(() => {
        const fetchCoursesData = async () => {
            setLoading(true);
            try {
                const response = await getCourses(
                    config.page,
                    config.perPage,
                    config.categories,
                    config.keyword,
                    config.minPrice,
                    config.maxPrice,
                );

                setCourses(response);
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCoursesData();
    }, [config]);

    return (
        <>
            {!loading && courses?.success ? (
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

            {!loading && courses?.success && (
                <Pagination pagination={courses?.pagination} />
            )}
        </>
    );
};

export default Courses;
