import Hero from '@/components/hero';
import LoadingHomeCourses from '@/components/loading/home-courses';
import dynamic from 'next/dynamic';

const HomeCourses = dynamic(() => import('@/components/home-courses'), {
    loading: () => <LoadingHomeCourses />,
});

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
                        <HomeCourses />
                    </div>
                </div>
            </div>
        </>
    );
}
