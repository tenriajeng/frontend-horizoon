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
        <div className="grid grid-cols-1 gap-2 xs:mx-2 xs:mt-2 xs:grid-cols-4 sm:grid-cols-4 md:mt-6 md:grid-cols-4 lg:grid-cols-8">
            {courseCategories.map((category, index) => (
                <Button
                    key={index}
                    className="dark:hover-bg-gray-800 transform bg-gray-100 text-xs text-black transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 dark:bg-gray-900 dark:text-white xs:py-8 md:py-10 lg:w-full"
                >
                    {category}
                </Button>
            ))}
        </div>
    );
};

export default CourseCategories;
