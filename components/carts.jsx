import { IoCartOutline } from 'react-icons/io5';
import Link from 'next/link';
import { getAuthToken } from '@/lib/authUtils';
import NumberCarts from './number-carts';
export default async function Carts() {
    const isAuthenticated = await getAuthToken();

    return (
        isAuthenticated && (
            <div className="relative">
                <Link
                    href={'/carts'}
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border bg-white/50 hover:bg-white dark:bg-slate-950 dark:hover:bg-slate-800"
                >
                    <span className="sr-only">View Shopping Cart</span>
                    <IoCartOutline className="h-6 w-6" />
                </Link>
                <NumberCarts />
            </div>
        )
    );
}
