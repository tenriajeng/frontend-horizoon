import Checkout from '@/components/checkout';
import CoursesCartCard from '@/components/courses-cart-card';

export const metadata = {
    title: 'Page Title',
};

export default function Page() {
    return (
        <>
            <section className="md:container">
                <div className="xs:mx-0 xs:mt-2 xs:p-0 md:mt-4">
                    <div className="grid grid-cols-1 xs:grid-cols-1 xs:gap-0 sm:grid-cols-1 md:grid-cols-1 md:gap-5 lg:grid-cols-2">
                        <div className="flex items-center xs:px-2">
                            <div>
                                <h1 className="font-semibold leading-8 xs:text-xl lg:text-2xl">
                                    Shopping Cart
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:container">
                <div className="mt-4 xs:mx-0 xs:mt-2  xs:p-0">
                    <div className="grid grid-cols-1 xs:grid-cols-1 xs:gap-0 sm:grid-cols-1 md:grid-cols-1 md:gap-5 lg:grid-cols-3">
                        <div className="px-2 lg:col-span-2">
                            <CoursesCartCard />
                        </div>
                        <div className="lg:col-span-1">
                            <Checkout />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
