import Link from 'next/link';
import { LockClosedIcon, PlayIcon } from '@radix-ui/react-icons';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import PopoverLockedAccess from './popover-locked-access';

export default async function Materials({
    authToken,
    course,
    materials,
    active,
}) {
    // await new Promise((resolve) => setTimeout(resolve, 10000));

    const buttonStyle =
        'mb-2 flex cursor-pointer items-center justify-between rounded-md border p-2 text-sm hover:bg-slate-900 hover:text-white dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-950';
    const isPurchase = course.is_purchased;

    return (
        <>
            {materials.map((material, index) => (
                <div key={material.id}>
                    {authToken && (material.is_free || isPurchase) ? (
                        <Link
                            href={`/explore/${course.slug}/learn/${index + 1}`}
                            className={`${buttonStyle} ${
                                active == index + 1
                                    ? 'dark:bg-white dark:text-gray-950'
                                    : 'text-gray-600'
                            }`}
                        >
                            <div className="flex items-center gap-2 ">
                                <span className="font-bold">{index + 1}.</span>
                                <h3 className="line-clamp-1 text-left">
                                    {material.title}
                                </h3>
                            </div>
                            <span>
                                {material.is_free || isPurchase ? (
                                    <PlayIcon />
                                ) : (
                                    <LockClosedIcon />
                                )}
                            </span>
                        </Link>
                    ) : (
                        <PopoverLockedAccess>
                            <div
                                className={`${buttonStyle} ${
                                    active == index + 1
                                        ? 'dark:bg-white dark:text-gray-950'
                                        : 'text-gray-600'
                                }`}
                            >
                                <div className="flex w-full items-center gap-2 ">
                                    <span className="font-bold">
                                        {index + 1}.
                                    </span>
                                    <h3 className="line-clamp-1 text-left">
                                        {material.title}
                                    </h3>
                                </div>
                                <span>
                                    <LockClosedIcon />
                                </span>
                            </div>
                        </PopoverLockedAccess>
                    )}
                </div>
            ))}
        </>
    );
}
