import Carousel from '@/components/carousel';
import CourseCategories from '@/components/course-categories';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const courses = [
    {
        id: 1,
        title: 'Course 1',
        instructor: 'John Doe',
    },
    {
        id: 2,
        title: 'Course 2',
        instructor: 'Jane Smith',
    },
    {
        id: 3,
        title: 'Course 3',
        instructor: 'Alice Johnson',
    },
    {
        id: 4,
        title: 'Course 4',
        instructor: 'Bob Brown',
    },
    {
        id: 5,
        title: 'Course 5',
        instructor: 'Eva White',
    },
    {
        id: 6,
        title: 'Course 6',
        instructor: 'David Black',
    },
    {
        id: 7,
        title: 'Course 7',
        instructor: 'Grace Adams',
    },
    {
        id: 8,
        title: 'Course 8',
        instructor: 'Frank Green',
    },
    {
        id: 9,
        title: 'Course 9',
        instructor: 'Helen Davis',
    },
    {
        id: 10,
        title: 'Course 10',
        instructor: 'James Wilson',
    },
    {
        id: 11,
        title: 'Course 11',
        instructor: 'Karen Clark',
    },
    {
        id: 12,
        title: 'Course 12',
        instructor: 'Liam Turner',
    },
    {
        id: 13,
        title: 'Course 13',
        instructor: 'Mia Mitchell',
    },
    {
        id: 14,
        title: 'Course 14',
        instructor: 'Noah Perez',
    },
    {
        id: 15,
        title: 'Course 15',
        instructor: 'Olivia King',
    },
    {
        id: 16,
        title: 'Course 16',
        instructor: 'Sophia Lewis',
    },
    {
        id: 17,
        title: 'Course 17',
        instructor: 'William Rodriguez',
    },
    {
        id: 18,
        title: 'Course 18',
        instructor: 'Zoe Hall',
    },
    {
        id: 19,
        title: 'Course 19',
        instructor: 'Lucas Scott',
    },
    {
        id: 20,
        title: 'Course 20',
        instructor: 'Ella Baker',
    },
    // Add more courses as needed
];

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

export default function Home() {
    return (
        <>
            <CourseCategories categories={courseCategories} />
            <div className="course-list mx-12 mt-6">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {courses.map((course) => (
                        <div key={course.id} className="course-item rounded-md">
                            <img
                                src="https://sejawat.s3.ap-southeast-1.amazonaws.com/sejawat/event/f6e018f699e7fec8ffe8f44aca2f748f/%5BWEBP%5D-18-Oktober.webp"
                                alt={course.title}
                                className="aspect-square rounded-md object-cover"
                            />
                            <h2 className="xs:text-base text-lg font-semibold mt-2">
                                {course.title}
                            </h2>
                            <p className="text-sm text-gray-600">
                                Instructor: {course.instructor}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
