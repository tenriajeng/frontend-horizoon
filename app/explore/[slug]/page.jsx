import getCourseDetail from '@/api/getCourseDetail';
import CourseDescription from '@/components/course-description';
import LoadingMaterials from '@/components/loading/materials';
import Materials from '@/components/materials';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Page({ params }) {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const { slug } = params;
    const course = await getCourseDetail(slug);

    return (
        <div>
            <div className="md:container">
                <div className="xs:mx-0 xs:mt-2 xs:p-0 md:mt-4">
                    <div className="grid grid-cols-1 xs:grid-cols-1 xs:gap-0 sm:grid-cols-1 md:grid-cols-1 md:gap-5 lg:grid-cols-2">
                        <div className="flex items-center xs:px-2  ">
                            <div>
                                <h1 className="pb-4 font-semibold leading-8 xs:text-xl lg:text-3xl">
                                    {course.title}
                                </h1>
                                <p className="line-clamp-4 leading-7 dark:text-gray-200 xs:text-sm md:text-base md:leading-8">
                                    {course.meta_description}
                                </p>
                                <div className="mt-4">
                                    <Badge
                                        variant="secondary"
                                        className="mb-2 me-2 px-2 py-1 text-xs font-normal"
                                    >
                                        Art Supplies and Tools
                                    </Badge>
                                    <Badge
                                        variant="secondary"
                                        className="mb-2 me-2 px-2 py-1 text-xs font-normal"
                                    >
                                        Techniques and Skills
                                    </Badge>
                                    <Badge
                                        variant="secondary"
                                        className="mb-2 me-2 px-2 py-1 text-xs font-normal"
                                    >
                                        Projects and Creative Expression
                                    </Badge>
                                </div>
                                <div className="mb-0 xs:mb-6 xs:mt-4 md:mt-4">
                                    {course.is_purchased ? (
                                        <Link
                                            href={`/explore/${course.slug}/learn/1`}
                                        >
                                            <Button className="me-2 rounded-full">
                                                Learn Now
                                                <ChevronRightIcon className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Button className="me-2 rounded-full">
                                            Learn Now
                                            <ChevronRightIcon className="ml-2 h-4 w-4" />
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center md:mx-2">
                            <Image
                                priority
                                loading="eager"
                                width={1200}
                                height={1200}
                                src={course.thumbnail}
                                alt={course.title}
                                className="aspect-video border object-cover md:rounded-2xl "
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 md:container">
                <div className="grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-5">
                    <div className="md:col-span-3 lg:col-span-3">
                        <div className="mb-2 flex justify-between xs:px-2 md:mx-2 md:px-0">
                            <h2 className="text-xl font-semibold">
                                Lessons in This Class
                            </h2>
                            <span className="font-semibold">
                                {course.materials.length} Lessons
                            </span>
                        </div>
                        <div className="xs:px-2 md:mx-2 md:px-0">
                            <Suspense
                                fallback={<LoadingMaterials numbers={10} />}
                            >
                                <Materials
                                    course={course}
                                    materials={course.materials}
                                />
                            </Suspense>
                        </div>
                        <div className="mt-4 xs:px-2 md:mx-2 md:px-0">
                            <CourseDescription body={course.body} />
                        </div>
                    </div>
                    <div className="sticky top-20 h-72 lg:col-span-2">
                        <div className="mx-2 flex h-full flex-col items-center justify-center rounded-lg bg-gray-900 p-4 text-white dark:bg-gray-900 dark:text-white md:px-0">
                            <h2 className="mb-3 text-center text-2xl font-bold">
                                You re Almost In
                            </h2>
                            <p className="mb-6 w-10/12 text-center">
                                Get complete, unlimited access to this classes!
                                —with just one more step.
                            </p>
                            <Button variant="secondary">Start Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}