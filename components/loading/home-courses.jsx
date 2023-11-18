import { Skeleton } from '../ui/skeleton';
import LoadingCoursesCard from './courses-card';

export default async function LoadingHomeCourses() {
    return (
        <>
            {Array.from({ length: 4 }, (_, index) => (
                <div key={index} className="mb-4">
                    <div className="mb-2 flex items-end justify-between">
                        <Skeleton className="h-7 xs:w-4/12 lg:w-2/12" />
                        <Skeleton className="h-5 xs:w-3/12 lg:w-1/12" />
                    </div>
                    <div className="grid gap-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <LoadingCoursesCard numCards={4} />
                    </div>
                </div>
            ))}
        </>
    );
}
