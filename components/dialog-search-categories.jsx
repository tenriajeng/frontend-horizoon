import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';
import getCategories from '@/api/category/getCategory';
import CategoryCheckbox from './category-checkbox';
import { Button } from './ui/button';

export default async function DialogSearchCategories({ children }) {
    const categories = await getCategories(1000);
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="h-[500px] sm:max-w-[1000px]">
                <DialogHeader>
                    <DialogTitle>Categories</DialogTitle>
                </DialogHeader>
                {/* <Input
                    placeholder="Search category"
                    className="mt-5 h-12 w-full rounded-md border p-2 text-base"
                /> */}

                <div className="grid overflow-y-scroll xs:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
                    {categories.data.map((category, index) => (
                        <CategoryCheckbox key={index} category={category} />
                    ))}
                </div>
                <DialogFooter className="sm:justify-end">
                    <Button type="button" size="sm" variant="secondary">
                        Apply
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
