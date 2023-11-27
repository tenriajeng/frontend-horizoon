'use client';

import addToCart from '@/api/cart/addToCart';
import { Button } from './ui/button';
import { FaPlus } from 'react-icons/fa';
import { useToast } from './ui/use-toast';
import { setCartCount } from '@/redux/features/cartCountSlice';
import { useDispatch } from 'react-redux';

export default function ButtonAddToCart({ course, children }) {
    const { toast } = useToast();
    const dispatch = useDispatch();

    async function handleAddToCart() {
        const response = await addToCart({ slug: course.slug });
        if (response.success) {
            dispatch(setCartCount(response.data.length));
            toast({
                description: response.message,
            });
        }
    }

    return <div onClick={handleAddToCart}>{children}</div>;
}
