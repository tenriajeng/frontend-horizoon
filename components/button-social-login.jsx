import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

export default function ButtonSocialLogin() {
    return (
        <>
            <p className="my-4 text-center text-sm dark:text-gray-400">
                Continue with
            </p>
            <div className="flex justify-center space-x-2">
                <Button
                    type="button"
                    className="h-10 w-10 rounded-full border border-gray-300 bg-white p-0"
                >
                    <Image
                        loading="eager"
                        priority={true}
                        src="/github.svg"
                        alt="GitHub Icon"
                        width={22}
                        height={22}
                    />
                </Button>
                <Button
                    type="button"
                    className="h-10 w-10 rounded-full border border-gray-300 bg-white p-0"
                >
                    <Image
                        loading="eager"
                        priority={true}
                        src="/apple.svg"
                        alt="Apple Icon"
                        width={20}
                        height={20}
                    />
                </Button>
                <Button
                    type="button"
                    className="h-10 w-10 rounded-full border border-gray-300 bg-white p-0"
                >
                    <Image
                        loading="eager"
                        priority={true}
                        src="/google.svg"
                        alt="Google Icon"
                        width={20}
                        height={20}
                    />
                </Button>
                <Button
                    type="button"
                    className="h-10 w-10 rounded-full border border-gray-300 bg-white p-0"
                >
                    <Image
                        loading="eager"
                        priority={true}
                        src="/facebook.svg"
                        alt="Facebook Icon"
                        width={22}
                        height={22}
                    />
                </Button>
            </div>
        </>
    );
}
