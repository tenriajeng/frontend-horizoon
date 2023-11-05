'use client';

import { Button } from './ui/button';
import { useSelector } from 'react-redux';

export default function Checkout() {
    const total = useSelector((state) => state.totalPrice.total);
    return (
        <div className="w-full justify-center space-y-2 rounded-lg p-2">
            <h4 className="font-bold">Total : </h4>
            <h4 className="text-2xl font-bold">
                IDR{' '}
                {` ${Number(total).toLocaleString('id-ID', {
                    maximumFractionDigits: 3,
                })}`}
            </h4>
            <Button variant="outline" className="w-full font-bold">
                Checkout
            </Button>
        </div>
    );
}
