import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import formatPrice from '@/lib/moneyFormat';

const CoursesCard = React.memo(({ course }) => {
    return (
        <div>
            <Link href={`/explore/${course.slug}`} prefetch>
                <Image
                    width={400}
                    height={225}
                    src={course.thumbnail}
                    alt={course.title}
                    loading="eager"
                    priority
                    className="aspect-video rounded-lg border object-cover"
                />
            </Link>
            <div className="mt-2">
                <Link href={`/explore/${course.slug}`}>
                    <h2 className="line-clamp-1 text-base font-semibold hover:underline xs:text-sm">
                        {course.title}
                    </h2>
                </Link>
                <span className="mt-1 line-clamp-2 text-gray-600 dark:text-gray-300 xs:text-xs sm:text-sm">
                    {course.meta_description}
                </span>
                <div className="mt-1 flex items-center justify-between text-sm">
                    <span className="font-semibold">
                        {course.price < 1 ? 'Free' : formatPrice(course.price)}
                    </span>
                </div>
            </div>
        </div>
    );
});

CoursesCard.displayName = 'CoursesCard';

export default CoursesCard;
