'use client';

import { Button } from './ui/button';
import { DialogLogin } from './dialog-login';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import addToCart from '@/api/cart/addToCart';
import { useToast } from './ui/use-toast';
import { setCartCount } from '@/redux/features/cartCountSlice';
import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';

const AddToCartButton = ({ course }) => {
    const { toast } = useToast();
    const [isClient, setIsClient] = useState(false);
    const [isPurchase, setIsPurchase] = useState(false);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
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

    useEffect(() => {
        setIsPurchase(course.is_purchased);
        setIsClient(true);
    }, [course.is_purchased]);

    return (
        isClient && (
            <>
                {isAuthenticated && isPurchase && (
                    <Link href={`/courses/${course.slug}/learn/1`}>
                        <Button
                            variant="outline"
                            size="xs"
                            className="xs:hidden md:flex"
                        >
                            Learn
                        </Button>
                    </Link>
                )}

                {isAuthenticated && !isPurchase && (
                    <Button
                        variant="outline"
                        size="xs"
                        className="xs:hidden md:flex"
                        onClick={handleAddToCart}
                    >
                        <FaPlus className="mr-1 h-3 w-3" /> Cart
                    </Button>
                )}

                {!isAuthenticated && (
                    <DialogLogin>
                        <Button
                            variant="outline"
                            size="xs"
                            className="xs:hidden md:flex"
                        >
                            <FaPlus className="mr-1 h-3 w-3" /> Cart
                        </Button>
                    </DialogLogin>
                )}
            </>
        )
    );
};

export default AddToCartButton;
