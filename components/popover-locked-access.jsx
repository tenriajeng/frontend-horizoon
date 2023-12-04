import { LockClosedIcon } from '@radix-ui/react-icons';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import ButtonDirectCheckout from './button-direct-checkout';

export default async function PopoverLockedAccess({
    course,
    material,
    index,
    isAuthenticated,
}) {
    const message = {
        purchase:
            'Ready for success? Call us today to unlock premium courses and start your journey to greatness! 🌟',
        claim: 'Hey there! Something special awaits! Dial now to claim your free course and embark on an exciting learning adventure! 🎉',
        sign: "🚀 Welcome to success! Sign up or sign in to access amazing courses. Your journey to greatness begins here. Don't miss out!",
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div
                    role="button"
                    className="mb-2 flex cursor-pointer items-center justify-between rounded-md border p-2 text-sm text-gray-600 hover:bg-slate-900 hover:text-white dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-950"
                >
                    <div className="flex w-full items-center gap-2 ">
                        <span className="font-bold">{index + 1}.</span>
                        <h3 className="line-clamp-1 text-left">
                            {material.title}
                        </h3>
                    </div>
                    <span>
                        <LockClosedIcon />
                    </span>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-[350px] rounded-xl bg-slate-950/70 text-center backdrop-blur-lg">
                <h3 className="mx-3 text-center text-base font-semibold text-white">
                    Unlock exclusive courses!
                </h3>
                <p className="mb-2 mt-1 text-center text-sm text-slate-200">
                    {!isAuthenticated
                        ? message['sign']
                        : course.price <= 0
                        ? message['claim']
                        : message['purchase']}
                </p>
                {isAuthenticated && (
                    <ButtonDirectCheckout course={course} size={'xs'} />
                )}
            </PopoverContent>
        </Popover>
    );
}
