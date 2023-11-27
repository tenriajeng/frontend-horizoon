import Link from 'next/link';

export default function Footer() {
    return (
        <div className="bottom-0 z-20 mt-auto flex w-full justify-center border-gray-400 border-opacity-20 bg-opacity-80 bg-gradient-to-r from-white/80 via-white/80 to-white/80 py-4 shadow-lg backdrop-blur-sm dark:bg-opacity-70 dark:bg-gradient-to-r dark:from-slate-950/80 dark:via-slate-950/80 dark:to-black/80 dark:backdrop-blur-md">
            <div className="xs:container-fluid flex items-center justify-center md:container xs:mx-2 xs:w-full md:mx-0">
                <Link
                    href={'/'}
                    className="text-2xl font-bold text-slate-900 dark:text-white md:mx-2"
                >
                    HORIZOON
                </Link>
            </div>
        </div>
    );
}
