'use client';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { AccountDropdown } from './account-dropdown';
import { DialogLogin } from './dialog-login';
import { DialogSignUp } from './dialog-sign-up';
import Link from 'next/link';
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserData } from '@/redux/action/authAction';
import { getAuthToken } from '@/lib/authUtils';
import { IoCartOutline } from 'react-icons/io5';

function Navigation() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            console.log('isAuthenticated', isAuthenticated);
            const token = getAuthToken();
            dispatch(fetchUserData(token));
        }
    }, [dispatch, isAuthenticated]);

    return (
        <header className="sticky top-0 z-20 flex justify-center border-b border-gray-400 border-opacity-20 bg-opacity-70 bg-gradient-to-r from-white/90 via-white/90 to-white/90 py-4 backdrop-blur-sm dark:bg-opacity-70 dark:bg-gradient-to-r dark:from-slate-950/80 dark:via-slate-950/80 dark:to-black/80 dark:backdrop-blur-md">
            <nav className="xs:container-fluid flex items-center justify-between md:container xs:mx-2 xs:w-full md:mx-0">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white md:mx-2">
                    <Link href={'/'}>HORIZOON</Link>
                </h1>

                <div className="flex items-center space-x-2 md:mx-2">
                    <button className="relative inline-flex h-9 w-full items-center justify-start rounded-md border border-input bg-transparent bg-white px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-900 xs:hidden sm:pr-12 md:inline-flex md:w-40 lg:w-64">
                        <span className="hidden lg:inline-flex">
                            Find Your Courses...
                        </span>
                        <span className="inline-flex lg:hidden">Search...</span>
                        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </button>
                    <div className="relative">
                        <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border bg-slate-950 hover:bg-slate-800">
                            <IoCartOutline className="h-6 w-6" />
                        </div>
                        <span className="absolute right-0 top-0 -mr-1 -mt-2 flex h-4 items-center justify-center rounded-full border bg-white px-[2px] text-xs font-bold text-slate-900">
                            99
                        </span>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-md border hover:bg-slate-800 md:hidden">
                        <MagnifyingGlassIcon className="h-6 w-6 " />
                    </div>
                    {isAuthenticated ? (
                        <div className="aspect-square">
                            <AccountDropdown />
                        </div>
                    ) : (
                        <>
                            <DialogLogin>
                                <Button variant="outline" size="sm">
                                    Log in
                                </Button>
                            </DialogLogin>
                            <DialogSignUp />
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
