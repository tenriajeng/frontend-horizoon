import FormLogin from '@/components/form-login';
import React from 'react';

export default function page() {
    return (
        <div className="relative isolate md:container">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-600 to-teal-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mt-4 xs:mx-0 xs:p-0 md:mx-2 ">
                <div className="xs:mx-2 xs:mb-5 xs:mt-2 md:mx-0 md:mb-10">
                    <div className="flex h-[80vh] items-center justify-center">
                        <div className="rounded-xl border bg-white p-8 backdrop-blur-md dark:bg-slate-950/70 xs:w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                            <h1 className="font-semibold">Welcome Back!</h1>
                            <h2 className="mb-2 text-sm dark:text-gray-400">
                                Access your profile and start personalizing your
                                experience.
                            </h2>
                            <FormLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
