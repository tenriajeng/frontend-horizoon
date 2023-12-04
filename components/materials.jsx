import { CheckIcon, LockClosedIcon, PlayIcon } from '@radix-ui/react-icons';
import PopoverLockedAccess from './popover-locked-access';
import { LinkMaterial } from './link-material';
import getCourseDetail from '@/service/getCourseDetail';
import LoadingMaterials from './loading/materials';
import { Suspense } from 'react';

export default async function Materials({ authToken, course, active }) {
    const courseDetail = await getCourseDetail(course.slug);

    return (
        <Suspense fallback={<LoadingMaterials />}>
            {courseDetail.materials.map((material, index) => {
                const isAuthenticated = authToken;
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
                    isAuthenticated && isFreeAccess ? (
                        <LinkMaterial
                            course={course}
                            material={material}
                            index={index}
                            isActive={active}
                            label={renderLabel()}
                        />
                    ) : (
                        <PopoverLockedAccess
                            course={course}
                            material={material}
                            index={index}
                            isAuthenticated={isAuthenticated}
                        />
                    );

                return <div key={material.id}>{renderContent()}</div>;
            })}
        </Suspense>
    );
}
