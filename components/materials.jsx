import { LockClosedIcon, PlayIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export default function Materials({ course, materials, active }) {
    const buttonStyle =
        'mb-2 flex cursor-pointer items-center justify-between rounded-md border p-2 text-sm hover:bg-slate-900 hover:text-white dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-950';

    return (
        <>
            {materials.map((material, index) => (
                <div key={material.id}>
                    {material.is_free ? (
                        <Link
                            href={`/courses/${course}/learn/${index + 1}`}
                            className={`${buttonStyle} ${
                                active == index + 1
                                    ? 'dark:bg-white dark:text-gray-950'
                                    : 'text-gray-600'
                            }`}
                        >
                            <div className="flex items-center gap-2 ">
                                <span className="font-bold">{index + 1}.</span>
                                <h3 className="line-clamp-1 text-left">
                                    {material.title}
                                </h3>
                            </div>
                            <span>
                                {material.is_free ? (
                                    <PlayIcon />
                                ) : (
                                    <LockClosedIcon />
                                )}
                            </span>
                        </Link>
                    ) : (
                        <Popover>
                            <PopoverTrigger className="w-full">
                                <div
                                    className={`${buttonStyle} ${
                                        active == index + 1
                                            ? 'dark:bg-white dark:text-gray-950'
                                            : 'text-gray-600'
                                    }`}
                                >
                                    <div className="flex items-center gap-2 ">
                                        <span className="font-bold">
                                            {index + 1}.
                                        </span>
                                        <h3 className="line-clamp-1 text-left">
                                            {material.title}
                                        </h3>
                                    </div>
                                    <span>
                                        {material.is_free ? (
                                            <PlayIcon />
                                        ) : (
                                            <LockClosedIcon />
                                        )}
                                    </span>
                                </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-[350px] rounded-xl bg-slate-950/70 backdrop-blur-lg">
                                <h3 className="mx-3 text-center text-base font-semibold text-white">
                                    Join us and unlock this course!
                                </h3>
                                <p className="mt-1 text-center text-sm text-slate-200">
                                    {`Sign up or sign in now to access our amazing
                                    course. Your journey to success starts here.
                                    Don't miss out!`}
                                </p>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>
            ))}
        </>
    );
}
