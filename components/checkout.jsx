'use client';

import formatPrice from '@/lib/moneyFormat';
import { Button } from './ui/button';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Checkout() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const total = useSelector((state) => state.totalPrice.total);
    const count = useSelector((state) => state.cartCount.count);

    return (
        <div>
            {isClient && count > 0 && (
                <div className="top-20 w-full justify-center space-y-2 rounded-lg p-2 md:sticky ">
                    <h2 className="font-bold">Total : </h2>
                    <h2 className="text-2xl font-bold">{formatPrice(total)}</h2>
                    <Button variant="outline" className="w-full font-bold">
                        Checkout
                    </Button>
                </div>
            )}
        </div>
    );
}
