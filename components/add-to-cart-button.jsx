'use client';

import { Button } from './ui/button';
import { DialogLogin } from './dialog-login';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import addToCart from '@/api/cart/addToCart';
import { useToast } from './ui/use-toast';
import { setCartCount } from '@/redux/features/cartCountSlice';
import { useEffect, useState } from 'react';

const AddToCartButton = ({ slug }) => {
    const { toast } = useToast();
    const [isClient, setIsClient] = useState(false);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    async function handleAddToCart() {
        const response = await addToCart({ slug: slug });

        if (response.success) {
            dispatch(setCartCount(response.data.length));
            toast({
                description: response.message,
            });
        }
    }

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        isClient && (
            <>
                {isAuthenticated ? (
                    <Button
                        variant="outline"
                        size="sm"
                        className="xs:hidden md:flex"
                        onClick={handleAddToCart}
                    >
                        <FaPlus className="mr-1 h-3 w-3" /> Cart
                    </Button>
                ) : (
                    <DialogLogin>
                        <Button
                            variant="outline"
                            size="sm"
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
