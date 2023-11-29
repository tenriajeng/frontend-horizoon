'use client';

import getCourses from '@/service/getCourses';
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CoursesCard from './courses-card';
import LoadingCoursesCard from './loading/courses-card';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        try {
            const response = await getCourses(page);

            if (response.success) {
                setCourses([...courses, ...response.data]);
                setHasMore(response.pagination.has_next);
            }

            if (!response.success) {
                setHasMore(false);
            }

            setPage(page + 1);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <InfiniteScroll
            className="grid grid-cols-1 xs:mx-2 xs:mt-2 xs:grid-cols-2 xs:gap-2 sm:grid-cols-2 md:mx-0 md:grid-cols-3 md:gap-5 lg:grid-cols-4"
            dataLength={courses.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<LoadingCoursesCard />}
            endMessage={
                <div className="mb-10 h-5 text-center font-bold xs:col-span-2 xs:gap-2 sm:col-span-2 md:col-span-3 md:mx-0 md:gap-5 lg:col-span-4">
                    No more data
                </div>
            }
        >
            {courses.map((item, index) => (
                <CoursesCard key={index} course={item} />
            ))}
        </InfiniteScroll>
    );
};

export default Courses;
