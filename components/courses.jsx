'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import getCourses from '@/api/getCourses';
import CoursesCard from './courses-card';
import Pagination from './pagination';
import LoadingCoursesCard from './loading/courses-card';

const Courses = () => {
    const searchParams = useSearchParams();

    const getConfigFromSearchParams = () => ({
        page: parseInt(searchParams.get('page')) || 1,
        perPage: parseInt(12),
        categories: searchParams.getAll('c') || [],
        keyword: searchParams.get('q') || '',
        minPrice: parseInt(searchParams.get('min-price')) || null,
        maxPrice: parseInt(searchParams.get('max-price')) || null,
    });

    const config = getConfigFromSearchParams();

    const fetcher = async (url) => {
        try {
            const response = await getCourses(
                config.page,
                config.perPage,
                config.categories,
                config.keyword,
                config.minPrice,
                config.maxPrice,
            );
            return response;
        } catch (error) {
            console.error('Error fetching courses:', error);
            throw error;
        }
    };

    const key = JSON.stringify(config);

    const {
        data: courses,
        error,
        isValidating: loading,
    } = useSWR(key, fetcher, {
        revalidateOnFocus: false,
    });

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
