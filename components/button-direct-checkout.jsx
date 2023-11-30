'use client';

import { Button } from './ui/button';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import directCheckout from '@/service/checkout';
import { useState } from 'react';
import { ButtonLoading } from './button-loading';
import { usePathname, useRouter } from 'next/navigation';
import getURL from '@/utils/getUrl';

export default function ButtonDirectCheckout({ course }) {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const hadleDirectCheckout = async () => {
        setLoading(true);

        const response = await directCheckout({
            slug: course.slug,
            redirect: getURL(`${pathname}`),
        });

        if (response.success && response.data.id) {
            router.push(`/invoice/${response.data.id}`);
        } else {
            router.refresh();
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
