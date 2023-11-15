import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { ActivityLogIcon } from '@radix-ui/react-icons';
import Materials from './materials';
import { Separator } from './ui/separator';

export default function SideNavMaterials({ active, course, materials }) {
    return (
        <Sheet>
            <SheetTrigger>
                <span
                    size="sm"
                    className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:hidden"
                    variant="outline"
                >
                    <ActivityLogIcon className="mr-2" />
                    Open Playlist
                </span>
            </SheetTrigger>
            <SheetContent side={'left'} className="w-[350px] p-2 sm:w-[350px]">
                <h2 className="text-left text-lg font-semibold">
                    {course.title}
                </h2>
                <span className="mb-2 block text-left text-sm text-gray-400">
                    {course.materials.length} Lesson
                </span>
                <Separator className="mb-2 bg-slate-700" />
                <Materials
                    active={active}
                    course={course}
                    materials={materials}
                />
            </SheetContent>
        </Sheet>
    );
}
