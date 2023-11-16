import React from 'react';
import { Skeleton } from '../ui/skeleton';

export default function LoadingPagination() {
    return (
        <div className="mx-2 flex items-center justify-center xs:my-4 md:my-8">
            <nav className="flex space-x-1" aria-label="Pagination">
                <Skeleton className="xs:h-8 xs:w-8 md:h-10 md:w-10" />
                <Skeleton className="xs:h-8 xs:w-8 md:h-10 md:w-10" />
                <Skeleton className="xs:h-8 xs:w-8 md:h-10 md:w-10" />
                <Skeleton className="xs:h-8 xs:w-8 md:h-10 md:w-10" />
                <Skeleton className="xs:h-8 xs:w-8 md:h-10 md:w-10" />
                <Skeleton className="xs:h-8 xs:w-8 md:h-10 md:w-10" />
                <Skeleton className="xs:h-8 xs:w-8 md:h-10 md:w-10" />
                <Skeleton className="xs:h-8 xs:w-8 md:h-10 md:w-10" />
                <Skeleton className="xs:h-8 xs:w-8 md:h-10 md:w-10" />
            </nav>
        </div>
    );
}
