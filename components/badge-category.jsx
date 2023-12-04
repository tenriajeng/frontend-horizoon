import { Badge } from './ui/badge';
import Link from 'next/link';

export const BadgeCategory = ({ category }) => {
    return (
        <Link href={`/explore?c=${category.slug}`}>
            <Badge
                variant="secondary"
                className="mb-2 me-2 px-2 py-1 text-xs font-normal"
            >
                {category.name}
            </Badge>
        </Link>
    );
};
