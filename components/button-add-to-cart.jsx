'use client';

import addToCart from '@/service/cart/addToCart';
import { Button } from './ui/button';
import { FaPlus } from 'react-icons/fa';
import { useToast } from './ui/use-toast';
import { setCartCount } from '@/redux/features/cartCountSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ButtonLoading } from './button-loading';

export default function ButtonAddToCart({ course, children }) {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const dispatch = useDispatch();

    async function handleAddToCart() {
        setLoading(true);
        const response = await addToCart({ slug: course.slug });
        if (response.success) {
            dispatch(setCartCount(response.data.length));
            setLoading(false);
            toast({
                description: response.message,
            });
        }
    }

    return (
        <>
            {loading ? (
                <ButtonLoading customClass={'w-auto mr-2'} />
            ) : (
                <div onClick={handleAddToCart}>{children}</div>
            )}
        </>
    );
}
