import React from 'react';
import { Skeleton } from '../ui/skeleton';

export default function LoadingCoursesCard({ numCards = 8 }) {
    const cards = Array.from({ length: numCards }, (_, index) => (
        <div key={index}>
            <div>
                <Skeleton className="aspect-video w-full rounded-lg" />
                <div className="mt-2">
                    <Skeleton className="w-11/12 rounded-full xs:mb-1 xs:py-2 md:py-2" />
                    <Skeleton className="w-full rounded-full xs:mb-1 xs:py-1 md:py-2" />
                    <Skeleton className="w-10/12 rounded-full xs:mb-1 xs:py-1 md:py-2" />
                    <div className="mt-1 flex items-center justify-between text-sm">
                        <Skeleton className="mb-1 w-5/12 rounded-full py-2" />
                    </div>
                </div>
            </div>
        </div>
    ));

    return <>{cards}</>;
}
