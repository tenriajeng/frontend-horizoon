import getCourses from '@/api/getCourses';
import CourseCategories from '@/components/course-categories';
import Image from 'next/image';

const courseCategories = [
    'Web Development',
    'Data Science',
    'Design',
    'Marketing',
    'Business',
    'Mobile App Development',
    'Machine Learning',
    'Photography',
    'Finance',
    'Artificial Intelligence',
    'Programming Languages',
    'Health and Fitness',
    'Cooking',
    'Music',
    'Mathematics',
    'History',
    'Science',
    'Psychology',
    'Language Learning',
    'Self-Improvement',
];

export default async function Home() {
    const courses = await getCourses();

    return (
        <>
            <CourseCategories categories={courseCategories} />
            <div className="course-list xs:mx-2 md:mx-12 xs:mt-2 md:mt-6">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-2 md:gap-4">
                    {courses.data.map((course) => (
                        <div key={course.id} className="course-item rounded-md">
                            <Image
                                width={400}
                                height={400}
                                src={course.image}
                                alt={course.name}
                                className="aspect-square rounded-md object-cover"
                            />
                            <h2 className="xs:text-sm md:text-lg font-medium mt-2 truncate">
                                {course.name}
                            </h2>
                            <p className="text-xs text-gray-600">
                                Instructor: {course.organizer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
