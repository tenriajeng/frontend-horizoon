import { useCallback, useState, useEffect } from 'react';
import { Input } from './ui/input';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function PriceFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const getQueryParam = useCallback(
        (param) => searchParams.get(param) || '',
        [searchParams],
    );

    const [minPrice, setMinPrice] = useState(getQueryParam('min-price'));
    const [maxPrice, setMaxPrice] = useState(getQueryParam('max-price'));

    useEffect(() => {
        setMinPrice(getQueryParam('min-price'));
        setMaxPrice(getQueryParam('max-price'));
    }, [getQueryParam, searchParams]);

    const updateUrlParams = useCallback(() => {
        const params = new URLSearchParams(searchParams.toString());
        console.log(minPrice);
        minPrice
            ? params.set('min-price', minPrice)
            : params.delete('min-price');

        maxPrice
            ? params.set('max-price', maxPrice)
            : params.delete('max-price');

        const newUrl = `${pathname}?${params.toString()}`;
        router.push(newUrl);
    }, [searchParams, minPrice, maxPrice, pathname, router]);

    const handleChange = (key) => (event) => {
        if (key === 'min') setMinPrice(event.target.value);
        if (key === 'max') setMaxPrice(event.target.value);
    };

    const handleBlur = useCallback(() => updateUrlParams(), [updateUrlParams]);

    return (
        <div className="mt-2 xs:w-full lg:w-10/12">
            <Input
                placeholder="Min"
                value={minPrice}
                className="my-2 h-9 rounded-md xs:dark:bg-slate-950 dark:lg:bg-slate-900"
                onBlur={handleBlur}
                onChange={handleChange('min')}
            />
            <Input
                placeholder="Max"
                value={maxPrice}
                className="my-2 h-9 rounded-md xs:dark:bg-slate-950 dark:lg:bg-slate-900"
                onBlur={handleBlur}
                onChange={handleChange('max')}
            />
        </div>
    );
}
