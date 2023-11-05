'use client';

import { Button } from './ui/button';
import { useSelector } from 'react-redux';

export default function Checkout() {
    const total = useSelector((state) => state.totalPrice.total);
    return (
        <div className="top-20 w-full justify-center space-y-2 rounded-lg p-2 md:sticky ">
            <h2 className="font-bold">Total : </h2>
            <h2 className="text-2xl font-bold">
                IDR{' '}
                {` ${Number(total).toLocaleString('id-ID', {
                    maximumFractionDigits: 3,
                })}`}
            </h2>
            <Button variant="outline" className="w-full font-bold">
                Checkout
            </Button>
        </div>
    );
}
