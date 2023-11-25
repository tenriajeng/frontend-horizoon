import Hero from '@/components/hero';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const HomeCourses = dynamic(() => import('@/components/home-courses'));
const LoadingHomeCourses = dynamic(() =>
    import('@/components/loading/home-courses'),
);

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
