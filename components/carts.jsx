'use client';

import { IoCartOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getCarts from '@/api/cart/getCarts';
import { setCartCount } from '@/redux/features/cartCountSlice';

export default function Carts() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const count = useSelector((state) => state.cartCount.count);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCartData = async () => {
            const cartData = await getCarts();
            if (cartData) {
                dispatch(setCartCount(cartData.data.length));
            }
        };
        fetchCartData();
    }, [dispatch, isAuthenticated]);

    return (
        isAuthenticated && (
            <div className="relative">
                <Link
                    href={'/carts'}
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border bg-slate-950 hover:bg-slate-800"
                >
                    <span className="sr-only">View Shopping Cart</span>
                    <IoCartOutline className="h-6 w-6" />
                </Link>
                {count > 0 && (
                    <span className="absolute right-0 top-0 -mr-1 -mt-2 flex h-4 items-center justify-center rounded-full border bg-white px-1 text-xs font-bold text-slate-900">
                        {count}
                    </span>
                )}
            </div>
        )
    );
}
