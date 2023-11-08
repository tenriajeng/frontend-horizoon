import getCourses from '@/api/getCourses';
import CourseCategories from '@/components/course-categories';
import CoursesCard from '@/components/courses-card';

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card';
import { CalendarIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Loading from './loading';
import { Suspense } from 'react';

export default async function Home() {
    // await new Promise((resolve) => setTimeout(resolve, 10000));

    const courses = await getCourses();

    return (
        <Suspense fallback={<Loading />}>
            <div className="md:container">
                <CourseCategories />
                <div className="mt-4 xs:mx-0 xs:p-0 md:mx-2 ">
                    <div className="grid grid-cols-1  xs:mx-2 xs:mt-2 xs:grid-cols-2 xs:gap-2 sm:grid-cols-2 md:mx-0 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                        {courses.data.map((course, index) => (
                            <CoursesCard key={index} course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </Suspense>
    );
}
