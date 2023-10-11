import { Button } from './ui/button';

const CourseCategories = ({ categories }) => {
    return (
        <div className="overflow-x-auto xs:mt-2 md:mt-6 xs:mx-2 md:mx-12">
            <div className="flex xs:space-x-2 md:space-x-4">
                {categories.map((category, index) => (
                    <Button
                        key={index}
                        className="xs:px-10 xs:py-8 md:px-14 md:py-10 text-xs text-black bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-gray-900 dark:text-white transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        {category}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default CourseCategories;
