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
        <div className="grid grid-cols-1 xs:mx-2 xs:mt-2 xs:grid-cols-4 xs:gap-2 sm:grid-cols-4 md:mt-6 md:grid-cols-4 md:gap-5 lg:grid-cols-8">
            {courseCategories.map((category, index) => (
                <Button
                    key={index}
                    className="transform border bg-slate-100 text-xs text-black transition duration-300 ease-in-out hover:scale-105 hover:bg-slate-200 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900 xs:py-8 md:py-10 lg:w-full"
                >
                    {category}
                </Button>
            ))}
        </div>
    );
};

export default CourseCategories;
