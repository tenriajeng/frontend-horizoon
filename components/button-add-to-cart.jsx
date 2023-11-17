'use client';

import addToCart from '@/api/cart/addToCart';
import { Button } from './ui/button';
import { FaPlus } from 'react-icons/fa';
import { useToast } from './ui/use-toast';
import { setCartCount } from '@/redux/features/cartCountSlice';
import { useDispatch } from 'react-redux';

export default function ButtonAddToCart({ course }) {
    const { toast } = useToast();
    const dispatch = useDispatch();

    async function handleAddToCart() {
        const response = await addToCart({ slug: course.slug });
        console.log(response);
        if (response.success) {
            dispatch(setCartCount(response.data.length));
            toast({
                description: response.message,
            });
        }
    }

    return (
        <Button
            variant="outline"
            size="xs"
            className="xs:hidden md:flex"
            onClick={handleAddToCart}
        >
            <FaPlus className="mr-1 h-3 w-3" /> Cart
        </Button>
    );
}
