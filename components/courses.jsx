import getCourses from '@/api/getCourses';
import CoursesCard from './courses-card';
import { Suspense } from 'react';
import LoadingCoursesCard from './loading/courses-card';

export default async function Courses({}) {
    const courses = await getCourses();

    return (
        <Suspense fallback={<LoadingCoursesCard />}>
            {courses.data.map((course, index) => (
                <CoursesCard key={index} course={course} />
            ))}
        </Suspense>
    );
}
