import React from 'react';
import { Skeleton } from '../ui/skeleton';

export default function LoadingMaterials({ numbers }) {
    return (
        <div>
            {Array.from({ length: numbers }, (_, index) => (
                <Skeleton
                    key={index}
                    className={'mb-2 h-9 w-full rounded-md'}
                />
            ))}
        </div>
    );
}
