import getCourseDetail from '@/api/getCourseDetail';
import CourseDescription from '@/components/course-description';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon, LockClosedIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

export default async function Page({ params }) {
    const course = await getCourseDetail(params);
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
                <div className="xs:mx-0 xs:mt-2 xs:p-0 md:mt-10">
                    <div className="grid grid-cols-1 xs:grid-cols-1 xs:gap-0 sm:grid-cols-1 md:grid-cols-1 md:gap-5 lg:grid-cols-2">
                        <div className="flex items-center xs:px-2 xs:py-3 md:p-8">
                            <div>
                                <h1 className="py-4 font-semibold leading-8 xs:text-xl lg:text-3xl">
                                    Watercolour Pastels For Beginners: An
                                    Introduction To Neocolor II Aquarelle
                                    Pastels.
                                </h1>
                                <p className="dark:text-gray-300 xs:text-sm xs:leading-8 md:text-base md:leading-8">
                                    Unlock the enchanting world of watercolor
                                    pastels with our comprehensive course,
                                    Watercolour Pastels For Beginners: An
                                    Introduction To Neocolor II Aquarelle
                                    Pastels. Whether you re an art enthusiast
                                    seeking a new medium to explore or a
                                    complete novice eager to embark on a
                                    creative journey, this course is your
                                    gateway to the vibrant and versatile realm
                                    of Neocolor II Aquarelle Pastels.
                                </p>
                                <div className="xs:mt-4 md:mt-6">
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
                                <div className="xs:mt-4 md:mt-6">
                                    <Button className="me-2 rounded-full">
                                        Learn Now
                                        <ChevronRightIcon className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center xs:mt-4 lg:p-8">
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
                                width={1200}
                                height={1200}
                                src="https://horizoon.s3.ap-southeast-1.amazonaws.com/background/4.jpg"
                                alt=" Membangun Toko Online Dipelajaran kali ini, kita akan"
                                className="aspect-video border object-cover md:rounded-2xl "
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 md:container">
                <div className="grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    <div className="md:col-span-3 lg:col-span-2">
                        <div className="flex justify-between xs:px-2 md:mx-8 md:px-0">
                            <h4 className="text-xl font-medium">
                                Lessons in This Class
                            </h4>
                            <span className="font-medium">8 Lessons (44m)</span>
                        </div>
                        <div className="xs:px-2 md:mx-8 md:px-0">
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
                        <div className="mt-4 xs:px-2  md:mx-8 md:px-0">
                            <CourseDescription />
                        </div>
                    </div>
                    <div className="sticky top-20 h-72 xs:px-2">
                        <div className="flex h-full flex-col items-center justify-center rounded-lg bg-gray-900 p-4 text-white dark:bg-gray-900 dark:text-white md:mx-8 md:px-0">
                            <h1 className="mb-3 text-center text-2xl font-bold">
                                You re Almost In
                            </h1>
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