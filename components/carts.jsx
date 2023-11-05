'use client';

import { IoCartOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Carts() {
    const count = useSelector((state) => state.cartCount.count);

    return (
        <div className="relative">
            <Link
                href={'/carts'}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border bg-slate-950 hover:bg-slate-800"
            >
                <IoCartOutline className="h-6 w-6" />
            </Link>
            <span className="absolute right-0 top-0 -mr-1 -mt-2 flex h-4 items-center justify-center rounded-full border bg-white px-[2px] text-xs font-bold text-slate-900">
                {count}
            </span>
        </div>
    );
}
