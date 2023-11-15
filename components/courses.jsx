import getCourses from '@/api/getCourses';
import CoursesCard from './courses-card';
import LoadingCoursesCard from './loading/courses-card';
import { Suspense } from 'react';
import Pagination from './pagination';

const Courses = async () => {
    const courses = await getCourses(67);

    return (
        <>
            <div className="mb-10 grid grid-cols-1 xs:mx-2 xs:mt-2 xs:grid-cols-2 xs:gap-2 sm:grid-cols-2 md:mx-0 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                <Suspense fallback={<LoadingCoursesCard />}>
                    {courses.data.map((item, index) => (
                        <CoursesCard key={index} course={item} />
                    ))}
                </Suspense>
            </div>
            <Pagination pagination={courses.pagination} />
        </>
    );
};

export default Courses;
