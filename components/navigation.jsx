import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Account } from './account';
import Carts from './carts';
import ModeToggle from './mode-toggle';

function Navigation() {
    return (
        <header className="sticky top-0 z-20 flex justify-center border-b border-gray-400 border-opacity-20 bg-opacity-80 bg-gradient-to-r from-white/80 via-white/80 to-white/80 py-4 shadow-lg backdrop-blur-sm dark:bg-opacity-70 dark:bg-gradient-to-r dark:from-slate-950/80 dark:via-slate-950/80 dark:to-black/80 dark:backdrop-blur-md">
            <nav className="xs:container-fluid flex items-center justify-between md:container xs:mx-2 xs:w-full md:mx-0">
                <Link
                    href={'/'}
                    className="text-2xl font-bold text-slate-900 dark:text-white md:mx-2"
                >
                    HORIZOON
                </Link>

                <div className="flex items-center space-x-2 md:mx-2">
                    <button className="ransition-colors relative inline-flex h-9 w-full items-center justify-start rounded-lg border  border-input bg-white/50 px-4 py-2 text-sm font-medium  text-gray-600 hover:bg-white hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-900 xs:hidden sm:pr-12 md:inline-flex md:w-40 lg:w-64">
                        <span className="hidden lg:inline-flex">
                            Find Your Courses...
                        </span>
                        <span className="inline-flex lg:hidden">Search...</span>
                        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </button>
                    <Carts />
                    <ModeToggle />
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-slate-800 dark:bg-slate-950 md:hidden">
                        <MagnifyingGlassIcon className="h-6 w-6 " />
                    </div>
                    <Account />
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
