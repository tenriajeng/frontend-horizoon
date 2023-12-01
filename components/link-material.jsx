import Link from 'next/link';
import React from 'react';

export const LinkMaterial = ({ course, material, index, isActive, label }) => {
    const buttonStyle =
        'mb-2 flex cursor-pointer items-center justify-between rounded-md border p-2 text-sm hover:bg-slate-900 hover:text-white dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-950';
    const active = isActive == index + 1;

    return (
        <Link
            href={`/explore/${course.slug}/learn/${index + 1}`}
            className={`${buttonStyle} ${
                active
                    ? 'bg-black text-white dark:bg-white dark:text-gray-950'
                    : 'text-gray-600'
            }`}
            replace={true}
        >
            <div className="flex items-center gap-2 ">
                <span className="font-bold">{index + 1}.</span>
                <h3 className="line-clamp-1 text-left">{material.title}</h3>
            </div>
            <span className="text-xs font-light">{label}</span>
        </Link>
    );
};
