'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import FormLogin from './form-login';

export function DialogLogin({ children }) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Welcome Back!</DialogTitle>
                    <DialogDescription>
                        Access your profile and start personalizing your
                        experience.
                    </DialogDescription>
                </DialogHeader>
                <FormLogin />
            </DialogContent>
        </Dialog>
    );
}
