'use client';

import { MagnifyingGlassIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import ModeToggle from './mode-toggle';
import { AccountDropdown } from './account-dropdown';
import { DialogLogin } from './dialog-login';
import { DialogSignUp } from './dialog-sign-up';
import Link from 'next/link';
import { Button } from './ui/button';

function Navigation() {
    return (
        <nav className="sticky top-0 z-20 flex justify-center border-b border-gray-400 border-opacity-20 bg-gray-100 bg-opacity-70 py-4 backdrop-blur-md dark:bg-slate-950 dark:bg-opacity-70 dark:backdrop-blur-md">
            <div className="xs:container-fluid flex items-center justify-between md:container xs:mx-2 xs:w-full md:mx-0">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white md:mx-2">
                    <Link href={'/'}>HORIZOON</Link>
                </h1>

                <div className="flex items-center space-x-2 ">
                    <button className="relative inline-flex h-9 w-full items-center justify-start rounded-md border border-input bg-transparent bg-white px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-900 xs:hidden sm:pr-12 md:inline-flex md:w-40 lg:w-64">
                        <span className="hidden lg:inline-flex">
                            Find Your Courses...
                        </span>
                        <span className="inline-flex lg:hidden">Search...</span>
                        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </button>
                    <Button size="sm" variant="outline" className="md:hidden">
                        <MagnifyingGlassIcon className="h-5 w-5 " />
                    </Button>
                    <ModeToggle />
                    <DialogLogin />
                    <DialogSignUp />
                    {/* <div className="aspect-square">
                        <AccountDropdown />
                    </div> */}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
