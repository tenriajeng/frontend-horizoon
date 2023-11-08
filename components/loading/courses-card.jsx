import React from 'react';
import { Skeleton } from '../ui/skeleton';

export default function LoadingCoursesCard() {
    const numCards = 12;

    const cards = Array.from({ length: numCards }, (_, index) => (
        <div key={index}>
            <div>
                <Skeleton className="aspect-video w-full rounded-lg" />
                <div className="mt-2">
                    <Skeleton className="mb-2 w-11/12 md:py-3" />
                    <Skeleton className="mb-2 w-full md:py-2" />
                    <Skeleton className="mb-2 w-10/12 md:py-2" />
                    <div className="mt-1 flex items-center justify-between text-sm">
                        <Skeleton className="mb-2 w-5/12 py-4" />
                        <Skeleton className="mb-2 w-3/12 py-4" />
                    </div>
                </div>
            </div>
        </div>
    ));

    return <>{cards}</>;
}
