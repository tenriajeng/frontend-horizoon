'use client';

import { Button } from './ui/button';
import { DialogLogin } from './dialog-login';
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ButtonAddToCart from './button-add-to-cart';

const ButtonCardCourse = ({ course }) => {
    const [isPurchase, setIsPurchase] = useState(false);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        setIsPurchase(course.is_purchased);
    }, [course.is_purchased]);

    return (
        <>
            {isAuthenticated && isPurchase && (
                <Link href={`/explore/${course.slug}/learn/1`}>
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
                <ButtonAddToCart course={course}>
                    <Button
                        variant="outline"
                        size="xs"
                        className="xs:hidden md:flex"
                    >
                        <FaPlus className="mr-1 h-3 w-3" /> Cart
                    </Button>
                </ButtonAddToCart>
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
    );
};

export default ButtonCardCourse;
