import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

export default function Hero() {
    return (
        <div className="relative isolate">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-800 to-sky-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="max-w-2xl xs:py-20 sm:py-28">
                <div className="hidden sm:mb-8 sm:flex ">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-200 dark:ring-gray-100/10 dark:hover:ring-white/50">
                        Announcing our next round of funding.
                        <Link
                            href="#"
                            className="font-semibold text-indigo-600"
                        >
                            <span
                                className="absolute inset-0"
                                aria-hidden="true"
                            />
                            {` `}Read more{' '}
                            <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
                <div className="text-start">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                        Expand Your Horizoon
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Revamped education, sustainability, swift platform
                        performance, and user-centric design. Our courses
                        showcase meticulously curated content, guaranteeing an
                        exceptional learning journey.
                    </p>
                    <div className="mt-10 flex items-center gap-x-2">
                        <Link href="#">
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-indigo-600 text-sm font-semibold text-white outline-indigo-600  hover:bg-indigo-500 hover:text-white"
                            >
                                Get started
                            </Button>
                        </Link>
                        <Link href={'explore'}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent text-sm font-semibold outline-indigo-600  hover:bg-indigo-600 hover:text-white"
                            >
                                Explore Courses
                                <span aria-hidden="true">→</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-cyan-300 to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    );
}
