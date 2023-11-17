import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ButtonCardCourse from './button-card-course';

const CoursesCard = React.memo(({ course }) => {
    return (
        <div>
            <Link href={`/courses/${course.slug}`}>
                <Image
                    width={400}
                    height={400}
                    src={course.thumbnail}
                    alt={course.title}
                    loading="lazy" // Use lazy loading
                    className="aspect-video rounded-lg border object-cover"
                />
            </Link>
            <div className="mt-2">
                <Link href={`/courses/${course.slug}`}>
                    <h2 className="line-clamp-1 text-base font-semibold hover:underline xs:text-sm">
                        {course.title}
                    </h2>
                </Link>
                <span className="mt-1 line-clamp-2 text-gray-600 dark:text-gray-400 xs:text-xs sm:text-sm">
                    {course.meta_description}
                </span>
                <div className="mt-1 flex items-center justify-between text-sm">
                    IDR{' '}
                    {` ${Number(course.price).toLocaleString('id-ID', {
                        maximumFractionDigits: 3,
                    })}`}
                    <ButtonCardCourse course={course} />
                </div>
            </div>
        </div>
    );
});

CoursesCard.displayName = 'CoursesCard';

export default CoursesCard;
