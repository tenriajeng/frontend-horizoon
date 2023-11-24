'use client';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Badge } from './ui/badge';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip';
import { Button } from './ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SelectedFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [categories, setCategories] = useState(
        searchParams.getAll('c') || [],
    );
    const [keyword, setKeyword] = useState(searchParams.get('q') || '');
    const [minPrice, setMinPrice] = useState(
        searchParams.get('min-price') || null,
    );
    const [maxPrice, setMaxPrice] = useState(
        searchParams.get('max-price') || null,
    );

    const formatCategory = (category) =>
        category
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());

    const formatPrice = (price) => {
        if (price === null) {
            return null;
        }
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
        return formatter.format(price);
    };

    const removeFilterFromUrl = (param) => {
        const urlSearchParams = new URLSearchParams(searchParams);
        urlSearchParams.delete(param);
        router.push(pathname + '?' + urlSearchParams.toString());
    };

    const clearAllFilters = () => {
        const urlSearchParams = new URLSearchParams(searchParams);
        urlSearchParams.delete('c');
        urlSearchParams.delete('q');
        urlSearchParams.delete('min-price');
        urlSearchParams.delete('max-price');
        urlSearchParams.delete('page');
        router.push(pathname + '?' + urlSearchParams.toString());
    };

    useEffect(() => {
        setCategories(searchParams.getAll('c') || []);
        setKeyword(searchParams.get('q') || '');
        setMinPrice(searchParams.get('min-price') || null);
        setMaxPrice(searchParams.get('max-price') || null);
    }, [searchParams]);

    const renderBadge = (value, label, index) =>
        value && (
            <Badge
                key={index}
                variant={'secondary'}
                className="mb-2 mr-1 h-8 px-3 text-sm font-medium"
            >
                {value}
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Cross2Icon
                                onClick={() => removeFilterFromUrl(label)}
                                className="ml-[6px] cursor-pointer rounded-full bg-gray-200 p-[1px] hover:rounded-full dark:bg-slate-600"
                            />
                        </TooltipTrigger>
                        <TooltipContent className="dark:bg-slate-800">
                            Remove
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </Badge>
        );

    return (
        <>
            {categories.map((category, index) =>
                renderBadge(formatCategory(category), 'c', index),
            )}
            {renderBadge(keyword, 'q')}
            {renderBadge(formatPrice(minPrice), 'min-price')}
            {renderBadge(formatPrice(maxPrice), 'max-price')}

            {(!categories.every((value) => value === null) ||
                keyword ||
                minPrice ||
                maxPrice) && (
                <Button variant="link" size="xs" onClick={clearAllFilters}>
                    Clear All
                </Button>
            )}
        </>
    );
}
