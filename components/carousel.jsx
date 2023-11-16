'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import getCourses from '@/api/getCourses';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import 'swiper/css';

export default function Carousel() {
    const [isLoading, setIsLoading] = useState(true);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [courses, setCourses] = useState([]);

    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.activeIndex);
    };

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
            <div className="relative">
                <Swiper
                    loop={false}
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
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                >
                    {!isLoading &&
                        courses.data.map((course, index) => (
                            <SwiperSlide key={index} className="relative">
                                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black to-transparent opacity-80 md:via-transparent"></div>
                                <div className="bg-blue absolute z-10 flex h-full transform items-center text-left text-white xs:pb-0 md:pb-10">
                                    <div className="md:container">
                                        <div className="mt-4 xs:mx-2 xs:p-0 md:mx-2 md:w-8/12 lg:mx-2 lg:w-7/12 lg:px-3">
                                            <h1 className="pb-4 font-semibold leading-8 xs:text-lg lg:text-4xl">
                                                {course.title}
                                            </h1>
                                            <p className="line-clamp-4 leading-7 dark:text-gray-200  xs:text-sm md:text-base md:leading-8">
                                                {course.meta_description}
                                            </p>
                                            <div className="mt-4 xs:hidden md:block">
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
                                                        <Button className="me-2 rounded-full xs:h-8 xs:text-xs md:h-10 md:text-base">
                                                            Learn Now
                                                            <ChevronRightIcon className="ml-2 h-4 w-4" />
                                                        </Button>
                                                    </Link>
                                                ) : (
                                                    <Button className="me-2 rounded-full xs:h-8 xs:text-xs md:h-10 md:text-base">
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
                                        priority={true}
                                        loading="eager"
                                        className="block h-full w-full object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>

                <div className="absolute bottom-0 right-0 z-10 flex h-full w-full items-end justify-end text-white xs:pb-4 lg:pb-10">
                    <div className="flex justify-end md:container xs:mx-2 xs:w-full md:mx-0 lg:px-6">
                        <div className="mt-4 xs:mx-0 xs:w-2/3 xs:p-0 md:mx-2 md:w-1/2  lg:mx-2 lg:w-1/3 lg:pr-3">
                            <Swiper
                                onSwiper={(swiper) => setThumbsSwiper(swiper)}
                                loop={false}
                                spaceBetween={12}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="thumbs mt-3 w-full p-2"
                            >
                                {!isLoading &&
                                    courses.data.map((course, index) => (
                                        <SwiperSlide key={index}>
                                            <button className="flex items-center justify-center overflow-hidden border border-white/50 duration-300 ease-in-out xs:rounded-md lg:rounded-lg">
                                                <Image
                                                    width={300}
                                                    height={300}
                                                    src={course.thumbnail}
                                                    alt={course.title}
                                                    priority={true}
                                                    loading="eager"
                                                    className={`w-full object-cover ${
                                                        activeSlide == index
                                                            ? 'opacity-100'
                                                            : 'opacity-50'
                                                    }  hover:opacity-100`}
                                                />
                                            </button>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
