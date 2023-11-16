import CourseCategories from '@/components/course-categories';
import Courses from '@/components/courses';
import LoadingCoursesCard from '@/components/loading/courses-card';
import { Suspense } from 'react';

export default async function Home() {
    return (
        <div className="md:container">
            <CourseCategories />
            <div className="mt-4 xs:mx-0 xs:p-0 md:mx-2 ">
                <div className="grid grid-cols-1 xs:mx-2 xs:mb-5 xs:mt-2 xs:grid-cols-2 xs:gap-2 sm:grid-cols-2 md:mx-0 md:mb-10 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                    <Suspense fallback={<LoadingCoursesCard />}>
                        <Courses />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
