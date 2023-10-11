import { Button } from './ui/button';

const CourseCategories = ({ categories }) => {
    return (
        <div className="overflow-x-auto mt-6 mx-12">
            <div className="flex space-x-4">
                {categories.map((category, index) => (
                    <Button
                        key={index}
                        className="px-14 py-10 text-xs text-black bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-gray-900 dark:text-white transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        {category}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default CourseCategories;
