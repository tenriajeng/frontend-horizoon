import React from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

export default function PriceFilter() {
    return (
        <RadioGroup defaultValue="comfortable">
            <div className="mb-1 mt-3 flex items-center space-x-2">
                <RadioGroupItem
                    aria-label="free"
                    className="h-5 w-5"
                    value="free"
                    id="free"
                />
                <Label
                    className="cursor-pointer text-sm dark:text-gray-300"
                    htmlFor="free"
                >
                    Free
                </Label>
            </div>
            <div className="mb-1 flex items-center space-x-2">
                <RadioGroupItem
                    aria-label="0-100000"
                    className="h-5 w-5"
                    value="0-100000"
                    id="0-100"
                />
                <Label
                    className="cursor-pointer text-sm dark:text-gray-300"
                    htmlFor="0-100"
                >
                    IDR 0 - 100.000
                </Label>
            </div>
            <div className="mb-1 flex items-center space-x-2">
                <RadioGroupItem
                    aria-label="100000-200000"
                    className="h-5 w-5"
                    value="100000-200000"
                    id="100-200"
                />
                <Label
                    className="cursor-pointer text-sm dark:text-gray-300"
                    htmlFor="100-200"
                >
                    IDR 100.000 - 200.000
                </Label>
            </div>
            <div className="mb-1 flex items-center space-x-2">
                <RadioGroupItem
                    aria-label="200000"
                    className="h-5 w-5"
                    value="200000"
                    id="200"
                />
                <Label
                    className="cursor-pointer text-sm dark:text-gray-300"
                    htmlFor="200"
                >
                    {'IDR 200.000 >'}{' '}
                </Label>
            </div>
        </RadioGroup>
    );
}
