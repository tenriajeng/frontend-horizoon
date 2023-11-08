import CourseCategories from '@/components/course-categories';
import Courses from '@/components/courses';

export default async function Home() {
    return (
        <div className="md:container">
            <CourseCategories />
            <div className="mt-4 xs:mx-0 xs:p-0 md:mx-2 ">
                <div className="grid grid-cols-1  xs:mx-2 xs:mt-2 xs:grid-cols-2 xs:gap-2 sm:grid-cols-2 md:mx-0 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                    <Courses />
                </div>
            </div>
        </div>
    );
}
