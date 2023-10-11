'use client';

import { MagnifyingGlassIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import ModeToggle from './mode-toggle';

function Navigation() {
    return (
        <nav className="sticky top-0 z-20 p-4 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90 border-b border-opacity-20 border-gray-400 dark:bg-black">
            <div className="md:container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="text-xl font-semibold">Horizoon</div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="xs:hidden md:inline-flex inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
                        <span className="hidden lg:inline-flex">
                            Search courses...
                        </span>
                        <span className="inline-flex lg:hidden">Search...</span>
                        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </button>
                    <MagnifyingGlassIcon className="h-4 w-4 md:hidden" />
                    <ModeToggle />
                    <div className="aspect-square">
                        <Avatar>
                            <AvatarImage
                                src="https://sejawat.s3.ap-southeast-1.amazonaws.com/sejawat/avatars/4a8820cc6507849820d03deae55af243/adventurer.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>IT</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
