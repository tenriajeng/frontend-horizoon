'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { DialogLogin } from './dialog-login';
import { useSelector } from 'react-redux';

function CoursesCard({ course }) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <div key={course.id}>
            <Image
                width={800}
                height={800}
                src={course.thumbnail}
                alt={course.title}
                className="aspect-video rounded-md border object-cover "
            />
            <div className="mt-2">
                <Link href={`courses/${course.slug}`}>
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
                    {isAuthenticated ? (
                        <Button
                            variant="outline"
                            size="sm"
                            className="xs:hidden md:block"
                        >
                            Add to cart
                        </Button>
                    ) : (
                        <DialogLogin>
                            <Button
                                variant="outline"
                                size="sm"
                                className="xs:hidden md:block"
                            >
                                Add to cart
                            </Button>
                        </DialogLogin>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CoursesCard;
