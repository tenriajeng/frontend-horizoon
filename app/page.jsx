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

export default async function Home() {
    const courses = await getCourses();

    return (
        <div className="md:container">
            <CourseCategories />
            <div className="mt-4 xs:mx-0 xs:p-0 md:mx-2 ">
                <div className="grid grid-cols-1  xs:mx-2 xs:mt-2 xs:grid-cols-2 xs:gap-2 sm:grid-cols-2 md:mx-0 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                    {courses.data.map((course) => (
                        <HoverCard key={course.id}>
                            <HoverCardTrigger asChild>
                                <CoursesCard course={course} />
                            </HoverCardTrigger>
                            <HoverCardContent className="w-96" side="left">
                                <div className="flex justify-between space-x-4">
                                    <div className="space-y-1">
                                        <Image
                                            priority
                                            loading="eager"
                                            width={400}
                                            height={400}
                                            src={course.thumbnail}
                                            alt={course.title}
                                            className="aspect-video rounded-lg border object-cover "
                                        />

                                        <h2 className="text-base font-medium">
                                            {course.title}
                                        </h2>
                                        <p className="text-justify text-sm dark:text-gray-400">
                                            {course.meta_description}
                                        </p>
                                        <div className="flex items-center pt-2">
                                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                                            <span className="text-xs text-muted-foreground">
                                                Joined December 2021
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
