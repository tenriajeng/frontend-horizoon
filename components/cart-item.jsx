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

export default function CartItem({ cart }) {
    return (
        <div key={cart.id}>
            <div className="relative flex rounded-lg">
                <div className="grid w-full gap-3 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                    <div className="">
                        <Image
                            width={800}
                            height={800}
                            src={cart.course.thumbnail}
                            priority
                            loading="eager"
                            alt="Shopping Cart"
                            className="h-full w-full rounded-lg border sm:aspect-video"
                        />
                    </div>
                    <div className="flex flex-col justify-center xs:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-3">
                        <Link href={`courses/${cart.course.slug}`}>
                            <h4 className="font-semibold hover:underline xs:line-clamp-1 xs:text-base sm:text-lg md:line-clamp-1 lg:text-xl">
                                {cart.course.title}
                            </h4>
                        </Link>

                        <div className="mt-2 line-clamp-1">
                            <Badge
                                variant="secondary"
                                className="mb-2 me-2 px-2 text-xs font-normal"
                            >
                                Artificial Intelligence
                            </Badge>
                        </div>
                        <div className="font-semibold xs:text-base sm:text-lg">
                            IDR{' '}
                            {` ${Number(cart.course.price).toLocaleString(
                                'id-ID',
                                {
                                    maximumFractionDigits: 3,
                                },
                            )}`}
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 top-0">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Cross2Icon className="h-4 w-4 text-slate-400 hover:text-white" />
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
