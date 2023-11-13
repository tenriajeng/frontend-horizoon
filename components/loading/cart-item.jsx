import { Skeleton } from '../ui/skeleton';

export default function CartItemLoading() {
    return (
        <div className="grid w-full gap-3 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            <div className="">
                <Skeleton className="h-full w-full rounded-lg border sm:aspect-video" />
            </div>
            <div className="flex flex-col justify-center xs:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-3">
                <Skeleton className="h-8 w-full rounded-lg" />
                <div className="my-2 flex space-x-2">
                    <Skeleton className="h-6 w-3/12 rounded-full" />
                    <Skeleton className="h-6 w-3/12 rounded-full" />
                    <Skeleton className="h-6 w-3/12 rounded-full" />
                </div>
                <Skeleton className="h-8 w-4/12 rounded-lg" />
            </div>
        </div>
    );
}
