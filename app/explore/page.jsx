import Courses from '@/components/courses';
import Filter from '@/components/filter';
import SelectedFilter from '@/components/selected-filter';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MixerVerticalIcon } from '@radix-ui/react-icons';

export default async function Page() {
    return (
        <div className="relative md:container">
            <div className="mt-4 xs:mx-2 xs:mb-5 xs:mt-2 xs:p-0 md:mx-2 md:mb-10">
                <div className="grid gap-5 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                    <div className="xs:hidden lg:block">
                        <Filter />
                    </div>
                    <div className="xs:col-span-2 md:col-span-4 lg:col-span-3">
                        <div className="flex items-center justify-between">
                            <h1 className="mb-2 text-xl font-medium">
                                Explore
                            </h1>
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
                                    className="w-[350px] overflow-y-auto p-2 sm:w-[350px] "
                                >
                                    <Filter />
                                </SheetContent>
                            </Sheet>
                        </div>
                        <div className="flex flex-wrap">
                            <SelectedFilter />
                        </div>
                        <div className="grid xs:grid-cols-2 xs:gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3">
                            <Courses />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
