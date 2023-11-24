'use client';

import { useEffect, useRef } from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import DialogSearch from './dialog-search';
import { useSearchParams } from 'next/navigation';

export default function Search() {
    const buttonRef = useRef(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const handleKeyDown = (event) => {
            const isCmdOrCtrlPressed = event.metaKey || event.ctrlKey;

            if (isCmdOrCtrlPressed && event.key === 'k') {
                if (buttonRef.current) {
                    buttonRef.current.click();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <DialogSearch>
                <button
                    ref={buttonRef}
                    className="ransition-colors relative inline-flex h-9 w-full items-center justify-start rounded-lg border  border-input bg-white/50 px-4 py-2 text-sm font-medium  text-gray-600 hover:bg-white hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-900 dark:text-gray-100 xs:hidden sm:pr-12 md:inline-flex md:w-40 lg:w-64"
                >
                    <span className="hidden lg:inline-flex">
                        {searchParams.has('q')
                            ? searchParams.get('q')
                            : 'Find Your Courses...'}
                    </span>
                    <span className="inline-flex lg:hidden">Search...</span>
                    <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </button>
            </DialogSearch>
            <DialogSearch>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-slate-800 dark:bg-slate-950 md:hidden">
                    <MagnifyingGlassIcon className="h-6 w-6 " />
                </div>
            </DialogSearch>
        </>
    );
}
