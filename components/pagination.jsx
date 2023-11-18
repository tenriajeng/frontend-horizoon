import { ChevronRight } from 'lucide-react';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import DotsButton from './dots-button';
import PaginationButton from './pagination-button';

const Pagination = ({ pagination }) => {
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
        const maxButtons = 3;

        let startPage = Math.max(current_page - Math.floor(maxButtons / 2), 1);
        let endPage = Math.min(startPage + maxButtons - 1, total_pages);

        if (endPage - startPage < maxButtons - 1) {
            startPage = Math.max(endPage - maxButtons + 1, 1);
        }

        if (startPage > 1) {
            pageNumbers.unshift(<DotsButton key={'dots-left'} label="..." />);
        }

        for (let i = startPage; i <= endPage; i++) {
            if (i !== total_pages) {
                pageNumbers.push(
                    <PaginationButton
                        key={i}
                        label={i}
                        page={i}
                        disabled={current_page === i}
                    />,
                );
            }
        }

        if (endPage < total_pages) {
            pageNumbers.push(<DotsButton key={'dots-right'} label="..." />);
        }

        return pageNumbers;
    };

    return (
        <div className="mx-2 flex items-center justify-center xs:col-span-2 xs:my-4 md:col-span-3 md:my-8 lg:col-span-4">
            <nav className="flex space-x-1" aria-label="Pagination">
                <PaginationButton
                    key={'previous_page'}
                    label={<ChevronLeftIcon className="h-4 w-4" />}
                    page={previous_page}
                    disabled={!has_previous}
                    ariaLabel="Go to previous page"
                />
                {current_page > 2 && (
                    <PaginationButton key={1} label={1} page={1} />
                )}
                {renderPageNumbers()}
                <PaginationButton label={total_pages} page={total_pages} />
                <PaginationButton
                    key={'next_page'}
                    label={<ChevronRight className="h-4 w-4" />}
                    page={next_page}
                    disabled={!has_next}
                    ariaLabel="Go to next page"
                />
            </nav>
        </div>
    );
};

export default Pagination;
