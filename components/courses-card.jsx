import Image from 'next/image';
import Link from 'next/link';
import ButtonCardCourse from './button-card-course';

function CoursesCard({ course }) {
    return (
        <div>
            <Image
                width={400}
                height={400}
                src={course.thumbnail}
                alt={course.title}
                priority
                loading="eager"
                className="aspect-video rounded-lg border object-cover "
            />
            <div className="mt-2">
                <Link href={`/courses/${course.slug}`}>
                    <h2 className="line-clamp-1 text-base font-semibold hover:underline xs:text-sm">
                        {course.title}
                    </h2>
                </Link>
                <span className="mt-1 line-clamp-2 text-gray-600 dark:text-gray-400  xs:text-xs sm:text-sm">
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
}

export default CoursesCard;
