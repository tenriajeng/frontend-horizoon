'use client';
import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function PaginationButton({
    setPage,
    keyValue,
    label,
    page,
    disabled,
    ariaLabel,
}) {
    const router = useRouter();

    const handleClick = () => {
        if (!disabled) {
            setPage(page);
            const currentParams = new URLSearchParams(window.location.search);
            currentParams.set('page', page);
            const newUrl = `${
                window.location.pathname
            }?${currentParams.toString()}`;

            router.push(newUrl, { scroll: false });
        }
    };

    return (
        <Button
            key={keyValue}
            variant="outline"
            disabled={disabled}
            className={`p-1 xs:h-8 xs:w-8 xs:rounded-md xs:text-xs sm:h-10 sm:w-10 lg:rounded-lg`}
            aria-label={ariaLabel || `Go to page ${page}`}
            onClick={handleClick}
        >
            {label}
        </Button>
    );
}
