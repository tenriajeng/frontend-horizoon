import { Suspense } from 'react';
import LoadingCourseCategories from './loading/course-categories';

const CourseCategories = () => {
    const courseCategories = [
        'Artificial Intelligence',
        'Cybersecurity',
        'Blockchain',
        'Game Development',
        'UI/UX Design',
        'Digital Marketing',
        'Finance',
        'Language Learning',
    ];

    return (
        <Suspense fallback={<LoadingCourseCategories />}>
            <div className="grid grid-cols-1 xs:mx-2 xs:mt-2 xs:grid-cols-4 xs:gap-2 sm:grid-cols-4 md:mt-4 md:grid-cols-4 md:gap-5 lg:grid-cols-8">
                {courseCategories.map((category, index) => (
                    <div
                        key={index}
                        className="flex transform cursor-pointer items-center justify-center rounded-lg border bg-white px-2 text-xs text-black transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-50  dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900 xs:py-4 md:py-7 lg:w-full"
                    >
                        <span className="text-center">{category}</span>
                    </div>
                ))}
            </div>
        </Suspense>
    );
};

export default CourseCategories;
