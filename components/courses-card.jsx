import React from 'react';
import { Card } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

function CoursesCard({ course }) {
    return (
        <Card key={course.id} className="rounded-lg p-3 shadow-md">
            <Image
                width={400}
                height={400}
                src={course.image}
                alt={course.name}
                className="aspect-square rounded-md border object-cover "
            />
            <div className="mt-2">
                <Link href={`courses/${course.slug}`}>
                    <h2 className="line-clamp-1 text-base font-medium hover:underline xs:text-sm">
                        {course.name}
                    </h2>
                </Link>
                <span className="mt-2 line-clamp-2 text-xs dark:text-gray-400">
                    {course.meta_description}
                </span>
                <div className="mt-2 flex items-center justify-between">
                    <p className="text-base xs:text-sm">
                        IDR
                        {` ${course.price.toLocaleString('id-ID')}`}
                    </p>
                    <Button
                        variant="outline"
                        size="sm"
                        className="xs:hidden md:block"
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
        </Card>
    );
}

export default CoursesCard;
