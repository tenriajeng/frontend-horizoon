import getCourses from '@/api/getCourses';
import CoursesCard from './courses-card';
import LoadingCoursesCard from './loading/courses-card';
import { Suspense } from 'react';

const Courses = async () => {
    const courses = await getCourses();

    return (
        <Suspense fallback={<LoadingCoursesCard />}>
            <div className="grid grid-cols-1 xs:mx-2 xs:mt-2 xs:grid-cols-2 xs:gap-2 sm:grid-cols-2 md:mx-0 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                {courses.data.map((item, index) => (
                    <CoursesCard key={index} course={item} />
                ))}
            </div>
        </Suspense>
    );
};

export default Courses;
