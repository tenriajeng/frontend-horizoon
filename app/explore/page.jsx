'use server';

import getCategories from '@/api/category/getCategory';
import Courses from '@/components/courses';
import Filter from '@/components/filter';
import LoadingCoursesCard from '@/components/loading/courses-card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MixerVerticalIcon } from '@radix-ui/react-icons';
import { Suspense } from 'react';

export default async function Page({ searchParams }) {
    const categories = await getCategories();
    const checkedCategories = searchParams.c;

    return (
        <div className="relative md:container">
            <div className="mt-4 xs:mx-2 xs:mb-5 xs:mt-2 xs:p-0 md:mx-2 md:mb-10">
                <div className="grid gap-5 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                    <div className="xs:hidden lg:block">
                        <Filter categories={categories} />
                    </div>
                    <div className="xs:col-span-2 md:col-span-4 lg:col-span-3">
                        <div className="flex items-center justify-between">
                            <h2 className="mb-2 text-xl font-medium">
                                Explore
                            </h2>
                            <Sheet>
                                <SheetTrigger
                                    aria-label="Open filters"
                                    size="sm"
                                    className="mb-2 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:hidden"
                                >
                                    <MixerVerticalIcon className="mr-2" />
                                    Filter
                                </SheetTrigger>
                                <SheetContent
                                    side={'left'}
                                    className="w-[350px] p-2 sm:w-[350px]"
                                >
                                    <Filter categories={categories} />
                                </SheetContent>
                            </Sheet>
                        </div>
                        <div className="grid xs:grid-cols-2 xs:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-3">
                            <Suspense fallback={<LoadingCoursesCard />}>
                                <Courses page={searchParams.page} />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
