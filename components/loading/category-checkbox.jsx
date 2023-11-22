import React from 'react';
import { Skeleton } from '../ui/skeleton';

export default function LoadingCategoryCheckbox() {
    return (
        <>
            <Skeleton className="my-2 h-6 w-10/12" />
            <Skeleton className="my-2 h-6 w-5/12" />
            <Skeleton className="my-2 h-6 w-7/12" />
            <Skeleton className="my-2 h-6 w-8/12" />
            <Skeleton className="my-2 h-6 w-6/12" />
            <Skeleton className="my-2 h-6 w-9/12" />
            <Skeleton className="my-2 h-6 w-10/12" />
            <Skeleton className="my-2 h-6 w-5/12" />
        </>
    );
}
