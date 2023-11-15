import CourseCategories from '@/components/course-categories';
import Courses from '@/components/courses';

export default async function Home() {
    return (
        <div className="md:container">
            <CourseCategories />
            <div className="mt-4 xs:mx-0 xs:p-0 md:mx-2 ">
                <Courses />
            </div>
        </div>
    );
}
