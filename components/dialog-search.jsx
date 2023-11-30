'use client';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { useRouter, useSearchParams } from 'next/navigation';

export default function DialogSearch({ children }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
    const [isOpen, setIsOpen] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && searchQuery !== '') {
            const params = new URLSearchParams(searchParams);
            params.delete('page');
            params.delete('q');
            params.append('q', searchQuery);
            router.push(`/explore?${params.toString()}`);
            setIsOpen(false);
        }
    };

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="flex h-full max-w-full items-center justify-center bg-transparent">
                <div className="mx-2 flex w-full justify-center space-x-2">
                    <div className="w-full xs:w-full lg:w-6/12">
                        <Input
                            value={searchQuery}
                            onChange={handleChange}
                            onKeyDown={handleKeyPress}
                            className="rounded-md dark:bg-transparent/60 xs:h-12 xs:text-lg md:h-14 md:text-xl "
                            placeholder="Search course..."
                        />
                        <span className="xs:text-md mx-1 text-gray-500 md:text-lg">
                            Press Enter to Search
                        </span>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
