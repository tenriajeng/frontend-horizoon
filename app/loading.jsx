import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <div className="md:container">
            <div className="grid grid-cols-1 xs:mx-2 xs:mt-2 xs:grid-cols-4 xs:gap-2 sm:grid-cols-4 md:mt-4 md:grid-cols-4 md:gap-5 lg:grid-cols-8">
                <Skeleton className="w-full xs:py-6 md:py-9" />
                <Skeleton className="w-full xs:py-6 md:py-9" />
                <Skeleton className="w-full xs:py-6 md:py-9" />
                <Skeleton className="w-full xs:py-6 md:py-9" />
                <Skeleton className="w-full xs:py-6 md:py-9" />
                <Skeleton className="w-full xs:py-6 md:py-9" />
                <Skeleton className="w-full xs:py-6 md:py-9" />
                <Skeleton className="w-full xs:py-6 md:py-9" />
            </div>
            <div className="mt-4 xs:mx-0 xs:p-0 md:mx-2 ">
                <div className="grid grid-cols-1 xs:mx-2 xs:mt-2 xs:grid-cols-2 xs:gap-2 sm:grid-cols-2 md:mx-0 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                </div>
            </div>
        </div>
    );
}
