import getCourseDetail from '@/api/getCourseDetail';
import CourseDescription from '@/components/course-description';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon, LockClosedIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

export default async function Page({ params }) {
    const { slug } = params;
    const course = await getCourseDetail(slug);
    const lessons = [
        {
            id: 1,
            title: 'Introduction to Programming',
            description: 'Learn the basics of programming and coding.',
            duration: '1 hour',
        },
        {
            id: 2,
            title: 'Data Structures and Algorithms',
            description: 'Explore fundamental data structures and algorithms.',
            duration: '2 hours',
        },
        {
            id: 3,
            title: 'Web Development Fundamentals',
            description: 'Get started with web development and HTML/CSS.',
            duration: '1.5 hours',
        },
        {
            id: 4,
            title: 'JavaScript Programming',
            description: 'Learn JavaScript for web development.',
            duration: '2 hours',
        },
        {
            id: 5,
            title: 'React.js Basics',
            description: 'Introduction to the React.js library.',
            duration: '2.5 hours',
        },
        {
            id: 6,
            title: 'Node.js Fundamentals',
            description: 'Explore server-side JavaScript with Node.js.',
            duration: '2 hours',
        },
        {
            id: 7,
            title: 'Databases and SQL',
            description: 'Learn about databases and SQL queries.',
            duration: '2.5 hours',
        },
        {
            id: 8,
            title: 'RESTful APIs',
            description: 'Building RESTful APIs for web applications.',
            duration: '2 hours',
        },
        {
            id: 9,
            title: 'Version Control with Git',
            description: 'Master version control with Git and GitHub.',
            duration: '1.5 hours',
        },
        {
            id: 10,
            title: 'Deployment and Hosting',
            description: 'Deploy your web applications and host them online.',
            duration: '1 hour',
        },
    ];

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
                                <p className="dark:text-gray-200 xs:text-sm xs:leading-8 md:text-base md:leading-7">
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
                                    <Button className="me-2 rounded-full">
                                        Learn Now
                                        <ChevronRightIcon className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center md:mx-2">
                            {/* <video
                            controls={true}
                            playsInline={true}
                            autoPlay={true}
                            muted
                        >
                            <source
                                src="https://sejawat.s3.ap-southeast-1.amazonaws.com/sejawat/post_video/8852d62265879343d8d6f5c151d26a49/JPA_Feed.mp4"
                                type="video/mp4"
                            />
                            Download the
                            <a href="https://sejawat.s3.ap-southeast-1.amazonaws.com/sejawat/post_video/8852d62265879343d8d6f5c151d26a49/JPA_Feed.mp4">
                                MP4
                            </a>
                            video.
                        </video> */}
                            <Image
                                // priority
                                // loading="eager"
                                width={1200}
                                height={1200}
                                src={course.thumbnail}
                                alt=" Membangun Toko Online Dipelajaran kali ini, kita akan"
                                className="aspect-video border object-cover md:rounded-2xl "
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 md:container">
                <div className="grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    <div className="md:col-span-3 lg:col-span-2">
                        <div className="mx-2 flex justify-between xs:px-2 md:px-0">
                            <h2 className="text-xl font-medium">
                                Lessons in This Class
                            </h2>
                            <span className="font-medium">8 Lessons (44m)</span>
                        </div>
                        <div className="mx-2 xs:px-2 md:px-0">
                            {lessons.map((lesson) => (
                                <div
                                    key={lesson.id}
                                    className="my-2 flex cursor-pointer justify-between rounded-sm border p-2 text-sm text-gray-600 hover:bg-slate-900 hover:text-white dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-950"
                                >
                                    <div className="flex items-center gap-2">
                                        <LockClosedIcon />
                                        <h3>{lesson.title}</h3>
                                    </div>
                                    <span>{lesson.duration}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mx-2 mt-4 xs:px-2 md:px-0">
                            <CourseDescription body={course.body} />
                        </div>
                    </div>
                    <div className="sticky top-20 h-72">
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
