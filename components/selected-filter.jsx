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

export default function SelectedFilter({ categories }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    function formatCategory(category) {
        return category
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());
    }

    function removeCategoryFromUrl(category) {
        const urlSearchParams = new URLSearchParams(searchParams);
        if (category == 'all') {
            urlSearchParams.delete('c');
        }
        urlSearchParams.delete('c', category);
        router.push(pathname + '?' + urlSearchParams.toString());
    }

    return (
        <>
            {categories.map(
                (category, index) =>
                    category && (
                        <Badge
                            variant={'secondary'}
                            key={index}
                            className="mb-2 mr-1 h-8 px-3 text-sm font-medium"
                        >
                            {formatCategory(category)}
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Cross2Icon
                                            onClick={() => {
                                                removeCategoryFromUrl(category);
                                            }}
                                            className="ml-[6px] cursor-pointer rounded-full bg-slate-600 p-[1px] hover:rounded-full"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent className="dark:bg-slate-800">
                                        Remove
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Badge>
                    ),
            )}
            {!categories.every((value) => value === null) && (
                <Button
                    variant="link"
                    size="xs"
                    onClick={() => {
                        removeCategoryFromUrl('all');
                    }}
                >
                    Clear All
                </Button>
            )}
        </>
    );
}
