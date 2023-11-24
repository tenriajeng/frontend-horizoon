import Hero from '@/components/hero';
import HomeCourses from '@/components/home-courses';
import LoadingHomeCourses from '@/components/loading/home-courses';
import { Suspense } from 'react';

export default async function Home() {
    return (
        <>
            <div className="md:container">
                <div className="mt-4 xs:mx-0 xs:p-0 md:mx-2 ">
                    <div className="xs:mx-2 xs:mb-5 xs:mt-2 md:mx-0 md:mb-10">
                        <Hero />
                    </div>
                </div>
                <div className="mt-4 xs:mx-0 xs:p-0 md:mx-2">
                    <div className="xs:mx-2 xs:mb-5 xs:mt-2 md:mx-0 md:mb-10">
                        <Suspense fallback={<LoadingHomeCourses />}>
                            <HomeCourses />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}
