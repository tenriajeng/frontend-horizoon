import getMaterialDetail from '@/api/material/getMaterial';
import CourseDescription from '@/components/course-description';
import HorizoonVideo from '@/components/horizoon-video';
import Materials from '@/components/materials';
import SideNavMaterials from '@/components/side-nav-materials';
import { Separator } from '@/components/ui/separator';

export default async function Page({ params }) {
    const { slug, number } = params;
    const material = await getMaterialDetail(slug, number);

    return (
        <>
            <div className="md:container">
                <div className="mt-4 xs:mx-0 xs:p-0 md:mx-2 ">
                    <div className="grid grid-cols-1 xs:mx-2 xs:mt-2 xs:grid-cols-1 xs:gap-2 sm:grid-cols-1 md:mx-0 md:grid-cols-1 md:gap-5 lg:grid-cols-3">
                        <div className="mb-4 lg:col-span-2">
                            <div>
                                <HorizoonVideo url={material.content} />
                            </div>
                            <div className="mt-2 lg:hidden">
                                <SideNavMaterials
                                    number={params.number}
                                    course={material.course}
                                />
                            </div>
                            <div className="mt-2 rounded-lg border border-slate-700 p-4">
                                <div>
                                    <h1 className="xs:text-lg xs:font-semibold lg:text-2xl lg:font-bold">
                                        {material.title}
                                    </h1>
                                </div>
                                <Separator className="bg-slate-700 xs:my-2 md:my-4" />
                                <div className="mb-4">
                                    <CourseDescription body={material.body} />
                                </div>
                            </div>
                        </div>
                        <div className="sticky top-20 h-screen max-h-screen overflow-auto pr-1 xs:hidden lg:inline">
                            <div className="mb-2 rounded-lg border p-2">
                                <h2 className="text-lg font-semibold">
                                    {material.course.title}
                                </h2>
                                <span className="text-sm text-gray-400">
                                    {material.course.materials.length} Lesson
                                </span>
                            </div>

                            <div>
                                <Materials
                                    active={params.number}
                                    course={material.course.slug}
                                    materials={material.course.materials}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
