import { LockClosedIcon, PlayIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export default function Materials({ course, materials }) {
    return (
        <>
            {materials.map((material, index) => (
                <>
                    {material.is_free ? (
                        <Link
                            href={`/courses/${course}/${material.slug}`}
                            key={material.id}
                            className="my-2 flex cursor-pointer items-center justify-between rounded-sm border p-2 text-sm text-gray-600 hover:bg-slate-900 hover:text-white dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-950"
                        >
                            <div className="flex items-center gap-2 ">
                                <span className="font-bold">{index + 1}.</span>
                                <h3>{material.title}</h3>
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
                        <Popover key={material.id}>
                            <PopoverTrigger className="w-full">
                                <div className="my-2 flex cursor-pointer items-center justify-between rounded-sm border p-2 text-sm text-gray-600 hover:bg-slate-900 hover:text-white dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-950">
                                    <div className="flex items-center gap-2 ">
                                        <span className="font-bold">
                                            {index + 1}.
                                        </span>
                                        <h3 className="text-left">
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
                            <PopoverContent className="w-[360px] rounded-xl bg-transparent/70 backdrop-blur-lg">
                                <h3 className="text-center text-lg font-semibold text-white">
                                    Join us to unlock this course!
                                </h3>
                                <p className="mt-1 text-center text-sm text-slate-300">
                                    {`Sign up or sign in now to access our amazing
                                    course. Your journey to success starts here.
                                    Don't miss out!`}
                                </p>
                            </PopoverContent>
                        </Popover>
                    )}
                </>
            ))}
        </>
    );
}
