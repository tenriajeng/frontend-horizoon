import Image from 'next/image';
import { Badge } from './ui/badge';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Separator } from './ui/separator';
import Link from 'next/link';
import formatPrice from '@/lib/moneyFormat';

export default function CartItem({ cart }) {
    console.log(cart);
    return (
        <div key={cart.id}>
            <div className="relative flex rounded-lg">
                <div className="grid w-full gap-3 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                    <div className="aspect-video">
                        <Image
                            width={400}
                            height={225}
                            src={cart.course.thumbnail}
                            priority
                            loading="eager"
                            alt={cart.course.title}
                            className="aspect-video rounded-lg border"
                        />
                    </div>
                    <div className="flex flex-col justify-center xs:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-3">
                        <Link href={`explore/${cart.course.slug}`}>
                            <h1 className="font-semibold hover:underline xs:line-clamp-1 xs:text-base sm:text-lg md:line-clamp-1 lg:text-xl">
                                {cart.course.title}
                            </h1>
                        </Link>

                        <div className="line-clamp-1 xs:mt-1 sm:mt-2">
                            {cart.course.categories.map((category, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="me-2 px-2 text-xs font-normal xs:mb-1 sm:mb-2"
                                >
                                    {category.name}
                                </Badge>
                            ))}
                        </div>
                        <div className="font-semibold xs:text-sm sm:text-lg">
                            {formatPrice(cart.course.price)}
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 top-0">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger aria-label="Delete">
                                <Cross2Icon className="h-4 w-4 text-slate-400 hover:text-black dark:hover:text-white" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Remove from cart</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
            <Separator className="my-4" />
        </div>
    );
}
