'use client';
import { CheckIcon, LockClosedIcon, PlayIcon } from '@radix-ui/react-icons';
import PopoverLockedAccess from './popover-locked-access';
import { LinkMaterial } from './link-material';
import useSWR from 'swr'; // Import useSWR hook
import getCourseDetail from '@/service/getCourseDetail';
import LoadingMaterials from './loading/materials';

export default function Materials({ authToken, course, active }) {
    const { data: courseDetail, error } = useSWR(
        `/api/getCourseDetail/${course.slug}`,
        () => getCourseDetail(course.slug),
    );

    if (error) {
        console.error('Failed to fetch course detail:', error);
        return <div>Error loading data</div>;
    }

    if (!courseDetail) {
        return <LoadingMaterials numbers={10} />;
    }

    return (
        <>
            {courseDetail.materials.map((material, index) => {
                const isAuthenticated = authToken !== null;
                const isPurchase = course.is_purchased;
                const isFreeAccess = material.is_free;
                const isComplete = material.is_complete;

                const renderLabel = () => {
                    if (isComplete) return <CheckIcon />;
                    if (isFreeAccess) return 'Free';
                    if (isPurchase) return <PlayIcon />;
                    return <LockClosedIcon />;
                };

                const renderContent = () =>
                    isAuthenticated && (isPurchase || isFreeAccess) ? (
                        <LinkMaterial
                            course={course}
                            material={material}
                            index={index}
                            isActive={active}
                            label={renderLabel()}
                        />
                    ) : (
                        <PopoverLockedAccess
                            material={material}
                            index={index}
                        />
                    );

                return <div key={material.id}>{renderContent()}</div>;
            })}
        </>
    );
}
