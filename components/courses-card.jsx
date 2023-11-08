import Image from 'next/image';
import Link from 'next/link';
import AddToCartButton from './add-to-cart-button';

function CoursesCard({ course }) {
    return (
        <div key={course.id}>
            <Image
                width={800}
                height={800}
                src={course.thumbnail}
                alt={course.title}
                priority
                loading="eager"
                className="aspect-video rounded-lg border object-cover "
            />
            <div className="mt-2">
                <Link href={`/courses/${course.slug}`}>
                    <h2 className="line-clamp-1 text-base font-medium hover:underline xs:text-sm">
                        {course.title}
                    </h2>
                </Link>
                <span className="mt-1 line-clamp-2 text-sm dark:text-gray-400">
                    {course.meta_description}
                </span>
                <div className="mt-1 flex items-center justify-between text-sm">
                    IDR{' '}
                    {` ${Number(course.price).toLocaleString('id-ID', {
                        maximumFractionDigits: 3,
                    })}`}
                    <AddToCartButton slug={course.slug} />
                </div>
            </div>
        </div>
    );
}

export default CoursesCard;
