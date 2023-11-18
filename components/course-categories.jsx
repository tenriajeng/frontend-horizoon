import getCategories from '@/api/category/getCategory';

const CourseCategories = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const categories = await getCategories();

    return (
        <>
            {categories.data.map((category, index) => (
                <div
                    key={index}
                    className="flex h-16 w-full transform cursor-pointer items-center justify-center rounded-lg border bg-white px-2 text-xs text-black transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-50 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900 xs:py-4 md:py-7 lg:w-full"
                >
                    <span className="text-center">{category.name}</span>
                </div>
            ))}
        </>
    );
};

export default CourseCategories;
