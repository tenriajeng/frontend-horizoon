'use client';

import React, { useCallback, useEffect, useState } from 'react';
import getCarts from '@/service/cart/getCarts';
import { useDispatch } from 'react-redux';
import { addToTotal } from '@/redux/features/totalPriceSlice';
import { setCartCount } from '@/redux/features/cartCountSlice';
import CartItem from './cart-item';
import EmptyCart from './empty-cart';
import CartItemLoading from './loading/cart-item';

export default function CoursesCartCard() {
    const dispatch = useDispatch();
    const [carts, setCarts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const calculateTotalPrice = useCallback(
        (carts) => {
            const totalPrice = carts.reduce(
                (accumulator, item) =>
                    accumulator + parseFloat(item.course.price),
                0,
            );

            dispatch(addToTotal(totalPrice));
            dispatch(setCartCount(carts.length));
        },
        [dispatch],
    );

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const cartData = await getCarts();
                setCarts(cartData.data);
                calculateTotalPrice(cartData.data);
            } catch (error) {
                console.error('Error while fetching carts:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCartData();
    }, [dispatch, calculateTotalPrice]);

    return (
        <>
            {isLoading ? (
                <CartItemLoading />
            ) : carts.length === 0 ? (
                <EmptyCart />
            ) : (
                carts.map((cart) => <CartItem key={cart.id} cart={cart} />)
            )}
        </>
    );
}
