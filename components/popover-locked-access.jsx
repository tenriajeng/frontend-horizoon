import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export default function PopoverLockedAccess({ children }) {
    return (
        <Popover>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent className="w-[350px] rounded-xl bg-slate-950/70 backdrop-blur-lg">
                <h3 className="mx-3 text-center text-base font-semibold text-white">
                    Join us and unlock this course!
                </h3>
                <p className="mt-1 text-center text-sm text-slate-200">
                    {`Sign up or sign in now to access our amazing
                                    course. Your journey to success starts here.
                                    Don't miss out!`}
                </p>
            </PopoverContent>
        </Popover>
    );
}
