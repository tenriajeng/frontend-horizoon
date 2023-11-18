import { Skeleton } from '../ui/skeleton';
import LoadingCoursesCard from './courses-card';

export default async function LoadingHomeCourses() {
    return (
        <>
            {Array.from({ length: 4 }, (_, index) => (
                <div key={index} className="mb-4">
                    <div className="mb-2 flex items-end justify-between">
                        <Skeleton className="h-7 w-2/12" />
                        <Skeleton className="h-5 w-1/12" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <LoadingCoursesCard numCards={4} />
                    </div>
                </div>
            ))}
        </>
    );
}
