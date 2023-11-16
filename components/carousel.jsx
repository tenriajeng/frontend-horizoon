'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import getCourses from '@/api/getCourses';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';
import { ChevronRightIcon } from '@radix-ui/react-icons';

export default function Carousel() {
    const [isLoading, setIsLoading] = useState(true);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        const fetchCartData = async () => {
            try {
                const coursesData = await getCourses(20, 4);
                setCourses(coursesData);
            } catch (error) {
                console.error('Error while fetching carts:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCartData();
    }, []);

    return (
        <section>
            <div className="">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={false}
                    thumbs={{
                        swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed
                                ? thumbsSwiper
                                : null,
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="w-full xs:aspect-video lg:h-[600px]"
                >
                    {!isLoading &&
                        courses.data.map((course, index) => (
                            <SwiperSlide key={index} className="relative">
                                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black via-transparent to-transparent opacity-100"></div>
                                <div className="absolute z-10 flex h-full transform items-center text-left text-white">
                                    <div className="container mx-6 w-6/12">
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
                                                    Projects and Creative
                                                    Expression
                                                </Badge>
                                            </div>
                                            <div className="mb-0 xs:mb-6 xs:mt-4 md:mt-4">
                                                {course.is_purchased ? (
                                                    <Link
                                                        href={`/courses/${course.slug}/learn/1`}
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
                                </div>
                                <div className="flex h-full w-full items-center justify-center">
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="block h-full w-full object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>

                <div className="lg:container xs:px-2 lg:px-11">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={12}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="thumbs mt-3 w-full p-0"
                    >
                        {!isLoading &&
                            courses.data.map((course, index) => (
                                <SwiperSlide key={index}>
                                    <button className="flex items-center justify-center overflow-hidden dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-950 dark:to-black xs:rounded-md  lg:rounded-lg">
                                        <Image
                                            width={1000}
                                            height={1000}
                                            src={course.thumbnail}
                                            alt={course.title}
                                            className="block aspect-video w-full object-cover"
                                        />
                                    </button>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
