import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

export default function PaginationButton({ keyValue, label, page, disabled }) {
    return (
        <Link key={keyValue} scroll={false} href={`/?page=${page}`}>
            <Button
                variant="outline"
                disabled={disabled}
                className={`p-1 xs:h-8 xs:w-8 xs:rounded-md xs:text-xs sm:h-10 sm:w-10 lg:rounded-lg`}
            >
                {label}
            </Button>
        </Link>
    );
}
