import React from 'react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Pagination = ({ pagination }) => {
    // pagination = {
    //     current_page: 6,
    //     total_pages: 10,
    //     per_page: 10,
    //     total: 12,
    //     has_next: true,
    //     has_previous: true,
    //     next_page: 7,
    //     previous_page: 5,
    // };

    const {
        current_page,
        total_pages,
        has_next,
        has_previous,
        next_page,
        previous_page,
    } = pagination;

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxButtons = 5; // Adjust this to control the number of visible buttons

        let startPage = Math.max(current_page - Math.floor(maxButtons / 2), 1);
        let endPage = Math.min(startPage + maxButtons - 1, total_pages);

        // Adjust startPage if the current_page is near the end of the total_pages
        if (endPage - startPage < maxButtons - 1) {
            startPage = Math.max(endPage - maxButtons + 1, 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            if (i !== total_pages) {
                pageNumbers.push(
                    <Link href={`/?page=${i}`}>
                        <Button
                            key={i}
                            disabled={current_page === i}
                            variant="outline"
                            className={`${
                                current_page === i &&
                                'bg-gray-300 dark:bg-slate-600'
                            } p-1 xs:h-8 xs:w-8 xs:rounded-md xs:text-xs sm:h-10 sm:w-10 lg:rounded-lg`}
                        >
                            {i}
                        </Button>
                    </Link>,
                );
            }
        }

        if (startPage > 1) {
            pageNumbers.unshift(
                <Button
                    key="dots-start"
                    variant="outline"
                    disabled
                    className="p-1 xs:h-8 xs:w-8 xs:rounded-md xs:text-xs sm:h-10 sm:w-10 lg:rounded-lg"
                >
                    ...
                </Button>,
            );
        }

        if (endPage < total_pages) {
            pageNumbers.push(
                <Button
                    key="dots-end"
                    variant="outline"
                    disabled
                    className="p-1 xs:h-8 xs:w-8 xs:rounded-md xs:text-xs sm:h-10 sm:w-10 lg:rounded-lg"
                >
                    ...
                </Button>,
            );
        }

        return pageNumbers;
    };

    return (
        <div className="mx-2 my-8 flex items-center justify-center">
            <nav className="flex space-x-1" aria-label="Pagination">
                <Link href={`/?page=${previous_page}`}>
                    <Button
                        variant="outline"
                        href="#"
                        disabled={!has_previous}
                        className="p-1 xs:h-8 xs:w-8 xs:rounded-md xs:text-xs sm:h-10 sm:w-10 lg:rounded-lg"
                    >
                        <ChevronLeftIcon className="h-4 w-4" />
                    </Button>
                </Link>
                {current_page > 1 && (
                    <Link href={`/?page=1`}>
                        <Button
                            variant="outline"
                            href="#"
                            disabled={!has_next}
                            className="p-1 xs:h-8 xs:w-8 xs:rounded-md xs:text-xs sm:h-10 sm:w-10 lg:rounded-lg"
                        >
                            1
                        </Button>
                    </Link>
                )}

                {renderPageNumbers()}

                <Link href={`/?page=${total_pages}`}>
                    <Button
                        variant="outline"
                        href="#"
                        disabled={!has_next}
                        className="p-1 xs:h-8 xs:w-8 xs:rounded-md xs:text-xs sm:h-10 sm:w-10 lg:rounded-lg"
                    >
                        {total_pages}
                    </Button>
                </Link>
                <Link href={`/?page=${next_page}`}>
                    <Button
                        variant="outline"
                        href="#"
                        disabled={!has_next}
                        className="p-1 xs:h-8 xs:w-8 xs:rounded-md xs:text-xs sm:h-10 sm:w-10 lg:rounded-lg"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </Link>
            </nav>
        </div>
    );
};

export default Pagination;
