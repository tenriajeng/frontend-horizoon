import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <div>
            <div className="md:container">
                <div className="xs:mx-0 xs:mt-2 xs:p-0 md:mt-4">
                    <div className="grid grid-cols-1 xs:grid-cols-1 xs:gap-0 sm:grid-cols-1 md:grid-cols-1 md:gap-5 lg:grid-cols-2">
                        <div className="mx-0 flex items-center xs:mb-4 xs:px-2 md:mb-0">
                            <div className="w-11/12">
                                <Skeleton className="mb-5 w-10/12 py-5" />
                                <Skeleton className="mb-2 w-11/12 py-3" />
                                <Skeleton className="mb-2 w-full py-3" />
                                <Skeleton className="mb-2 w-10/12 py-3" />
                                <Skeleton className="mb-5 w-8/12 py-3" />
                                <div className="mb-3 flex space-x-2">
                                    <Skeleton className="mb-2 w-3/12 rounded-full py-4" />
                                    <Skeleton className="mb-2 w-3/12 rounded-full py-4" />
                                    <Skeleton className="mb-2 w-3/12 rounded-full py-4" />
                                </div>
                                <Skeleton className="rounded-full py-5 xs:mb-5 xs:w-4/12 md:mb-0 md:w-2/12" />
                            </div>
                        </div>
                        <Skeleton className="h-80 w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
