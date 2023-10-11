import { Button } from './ui/button';

const CourseCategories = () => {
    const courseCategories = [
        'Web Development',
        'Data Science',
        'Design',
        'Marketing',
        'Business',
        'Mobile App Development',
        'Machine Learning',
        'Photography',
    ];

    return (
        <div className="grid grid-cols-1 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 xs:gap-2 md:gap-4 xs:mt-2 md:mt-6 xs:mx-2 md:mx-12">
            {courseCategories.map((category, index) => (
                <Button
                    key={index}
                    className="lg:w-full xs:py-8 md:py-10 text-xs text-black bg-gray-100 hover:bg-gray-200 dark:hover-bg-gray-800 dark:bg-gray-900 dark:text-white transition duration-300 ease-in-out transform hover:scale-105"
                >
                    {category}
                </Button>
            ))}
        </div>
    );
};

export default CourseCategories;
