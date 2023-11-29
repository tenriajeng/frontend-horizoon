'use client';

import { Button } from './ui/button';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import directCheckout from '@/service/checkout';
import { useState } from 'react';
import { ButtonLoading } from './button-loading';
import { useRouter } from 'next/navigation';

export default function ButtonDirectCheckout({ course }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const hadleDirectCheckout = async () => {
        setLoading(true);
        const response = await directCheckout({ slug: course.slug });
        if (response.success) {
            // console.log(response);
            router.push(`/invoice/${response.data.id}`);
            // setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <ButtonLoading customClass={'w-auto'} />
            ) : (
                <Button className="me-2" onClick={hadleDirectCheckout}>
                    Checkout
                    <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Button>
            )}
        </>
    );
}
