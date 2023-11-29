import { BellIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';
import NumberNotification from './number-notification';
import { getAuthToken } from '@/lib/authUtils';

export default async function Notification() {
    const isAuthenticated = await getAuthToken();
    return (
        isAuthenticated && (
            <div className="relative">
                <Link
                    href={'/notification'}
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border bg-white/50 hover:bg-white dark:bg-slate-950 dark:hover:bg-slate-800"
                >
                    <span className="sr-only">View Notification</span>
                    <BellIcon className="h-6 w-6" />
                </Link>
                <NumberNotification />
            </div>
        )
    );
}
