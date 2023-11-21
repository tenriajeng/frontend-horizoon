import getCourses from '@/api/getCourses';
import CoursesCard from './courses-card';
import Pagination from './pagination';

const Courses = async ({ page }) => {
    const courses = await getCourses(page);

    return (
        <>
            {courses.data.map((item, index) => (
                <CoursesCard key={index} course={item} />
            ))}
            <Pagination pagination={courses.pagination} />
        </>
    );
};

export default Courses;
