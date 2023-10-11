import getCourses from '@/api/getCourses';
import CourseCategories from '@/components/course-categories';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

export default async function Home() {
    const courses = await getCourses();

    return (
        <>
            <CourseCategories />
            <div className="course-list xs:mx-2 md:mx-12 xs:mt-2 md:mt-6">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-2 md:gap-5">
                    {courses.data.map((course) => (
                        <div key={course.id} className="course-item rounded-md">
                            <Image
                                width={400}
                                height={400}
                                src={course.image}
                                alt={course.name}
                                className="aspect-square rounded-md object-cover"
                            />
                            <Progress
                                className="h-1 mt-2"
                                value={Math.floor(Math.random() * 101)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
