import { Suspense } from 'react';
import getMaterialDetail from '@/service/material/getMaterial';
import CourseDescription from '@/components/course-description';
import HorizoonVideo from '@/components/horizoon-video';
import Materials from '@/components/materials';
import SideNavMaterials from '@/components/side-nav-materials';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getAuthToken } from '@/lib/authUtils';
import LoadingMaterials from '@/components/loading/materials';

export default async function Page({ params }) {
    const { slug, number } = params;
    const material = await getMaterialDetail(slug, number);
    const authToken = await getAuthToken();

    if (!material.success) {
        redirect('/');
    }

    return (
        <>
            <div className="md:container">
                <div className="mt-4 xs:mx-0 xs:p-0 md:mx-2 ">
                    <div className="grid grid-cols-1 xs:mx-2 xs:mt-2 xs:grid-cols-1 xs:gap-2 sm:grid-cols-1 md:mx-0 md:grid-cols-1 md:gap-5 lg:grid-cols-3">
                        <div className="mb-4 lg:col-span-2">
                            <div>
                                <HorizoonVideo url={material.data.content} />
                            </div>
                            <div className="mt-2 lg:hidden">
                                <SideNavMaterials
                                    active={params.number}
                                    course={material.data.course}
                                    materials={material.data.course.materials}
                                />
                            </div>
                            <div className="mt-2 rounded-lg border p-4">
                                <div>
                                    <h1 className="xs:text-lg xs:font-semibold lg:text-xl lg:font-bold">
                                        {material.data.title}
                                    </h1>
                                </div>
                                <Separator className=" xs:my-2 md:my-4" />
                                <div className="mb-4">
                                    <CourseDescription
                                        body={material.data.body}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sticky top-20 h-screen max-h-screen overflow-auto pr-1 xs:hidden lg:inline">
                            <div className="mb-2 rounded-lg border p-2">
                                <Link
                                    href={`/explore/${material.data.course.slug}`}
                                >
                                    <h2 className="text-lg font-semibold hover:underline">
                                        {material.data.course.title}
                                    </h2>
                                </Link>
                                <span className="text-sm text-slate-800 dark:text-gray-400">
                                    {material.data.course.materials.length}{' '}
                                    Lesson
                                </span>
                            </div>

                            <div>
                                <Materials
                                    authToken={authToken}
                                    active={params.number}
                                    course={material.data.course}
                                    materials={material.data.course.materials}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
