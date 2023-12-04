import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bottom-0 z-20 mt-auto flex w-full justify-center border-gray-400 border-opacity-20 bg-opacity-80 bg-gradient-to-r from-white/80 via-white/80 to-white/80 py-4 shadow-lg backdrop-blur-sm dark:bg-opacity-70 dark:bg-gradient-to-r dark:from-slate-950/80 dark:via-slate-950/80 dark:to-black/80 dark:backdrop-blur-md">
            <div className="xs:container-fluid flex items-center justify-between md:container xs:mx-2 xs:w-full md:mx-0">
                <span className="mx-2 text-sm text-gray-800 dark:text-gray-300">
                    © {currentYear}{' '}
                    <strong className="dark:text-white">HORIZOON. </strong>
                    All rights reserved.
                </span>
                <div className="space-x-4">
                    <Link
                        className="text-sm dark:text-gray-400"
                        href={'/about'}
                    >
                        About
                    </Link>
                    <Link
                        className="text-sm dark:text-gray-400"
                        href={'/contact'}
                    >
                        Contact
                    </Link>
                    <Link
                        className="text-sm dark:text-gray-400"
                        href={'/support'}
                    >
                        Support
                    </Link>
                </div>
            </div>
        </div>
    );
}
