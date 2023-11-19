import Carousel from '@/components/carousel';
import CourseCategories from '@/components/course-categories';
import HomeCourses from '@/components/home-courses';
import LoadingCourseCategories from '@/components/loading/course-categories';
import LoadingCoursesCard from '@/components/loading/courses-card';
import LoadingHomeCourses from '@/components/loading/home-courses';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function Home() {
    return (
        <>
            <Carousel />
            <div className="md:container">
                <div className="grid grid-cols-1 xs:mx-2 xs:mt-2 xs:grid-cols-4 xs:gap-2 sm:grid-cols-4 md:mt-4 md:grid-cols-4 md:gap-5 lg:grid-cols-8">
                    <Suspense fallback={<LoadingCourseCategories />}>
                        <CourseCategories />
                    </Suspense>
                </div>
                <div className="mt-4 xs:mx-0 xs:p-0 md:mx-2 ">
                    <div className="xs:mx-2 xs:mb-5 xs:mt-2 md:mx-0 md:mb-10">
                        <Suspense fallback={<LoadingHomeCourses />}>
                            <HomeCourses />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}
