'use client';

import getCarts from '@/api/cart/getCarts';
import { setCartCount } from '@/redux/features/cartCountSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function NumberCarts() {
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
    }, [dispatch]);

    return (
        <>
            {count > 0 && (
                <span className="absolute right-0 top-0 -mr-1 -mt-2 flex h-4 items-center justify-center rounded-full border bg-white px-1 text-xs font-bold text-slate-900">
                    {count}
                </span>
            )}
        </>
    );
}
