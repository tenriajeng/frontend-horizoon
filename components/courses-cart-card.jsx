'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Cross2Icon } from '@radix-ui/react-icons';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import getCarts from '@/api/cart/getCarts';
import { Separator } from './ui/separator';
import { getAuthToken } from '@/lib/authUtils';
import { useDispatch } from 'react-redux';
import { addToTotal } from '@/redux/features/totalPriceSlice';
import { setCartCount } from '@/redux/features/cartCountSlice';

export default function CoursesCartCard() {
    const dispatch = useDispatch();

    const [carts, setCarts] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const calculateTotalPrice = useCallback(
        (carts) => {
            let totalPrice = 0;
            for (const item of carts) {
                totalPrice += parseFloat(item.course.price);
            }

            dispatch(addToTotal(totalPrice));
            dispatch(setCartCount(carts.length));
        },
        [dispatch],
    );

    useEffect(() => {
        const fetchCartData = async () => {
            const authToken = getAuthToken();

            if (authToken) {
                try {
                    const cartData = await getCarts(authToken);
                    setCarts(cartData.data);
                    calculateTotalPrice(cartData.data);
                } catch (error) {
                    console.error('Error while fetching carts:', error);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchCartData();
    }, [dispatch, calculateTotalPrice]);

    return (
        <>
            {isLoading
                ? 'loading'
                : carts.map((cart) => (
                      <div key={cart.id}>
                          <div className="relative flex rounded-lg">
                              <div className="grid w-full gap-3 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                                  <div className="">
                                      <Image
                                          width={800}
                                          height={800}
                                          src={cart.course.thumbnail}
                                          alt="Shopping Cart"
                                          className="h-full w-full rounded-lg border sm:aspect-video"
                                      />
                                  </div>
                                  <div className="flex flex-col justify-center xs:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-3">
                                      <h4 className="font-semibold xs:line-clamp-1 xs:text-base sm:text-lg md:line-clamp-1 lg:text-xl">
                                          {cart.course.title}
                                      </h4>

                                      <div className="mt-2 line-clamp-1">
                                          <Badge
                                              variant="secondary"
                                              className="mb-2 me-2 px-2 text-xs font-normal"
                                          >
                                              Art Supplies and Tools
                                          </Badge>
                                          <Badge
                                              variant="secondary"
                                              className="mb-2 me-2 px-2 text-xs font-normal"
                                          >
                                              Techniques and Skills
                                          </Badge>
                                          <Badge
                                              variant="secondary"
                                              className="mb-2 me-2 px-2 text-xs font-normal"
                                          >
                                              Projects and Creative Expression
                                          </Badge>
                                      </div>
                                      <div className="font-semibold xs:text-base sm:text-lg">
                                          IDR{' '}
                                          {` ${Number(
                                              cart.course.price,
                                          ).toLocaleString('id-ID', {
                                              maximumFractionDigits: 3,
                                          })}`}
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
                  ))}
        </>
    );
}
