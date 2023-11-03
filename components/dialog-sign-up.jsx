'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import FormSignUp from './form-sign-up';

export function DialogSignUp() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" variant="outline">
                    Register
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Join Us Today!</DialogTitle>
                    <DialogDescription>
                        Unlock a world of possibilities. Register now and create
                        your profile.
                    </DialogDescription>
                </DialogHeader>
                <FormSignUp />
            </DialogContent>
        </Dialog>
    );
}
