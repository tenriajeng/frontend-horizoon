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
import { Input } from '@/components/ui/input';
import { login } from '@/redux/features/authSclice';
import { useState } from 'react';
import Login from '@/api/auth/login';
import { useDispatch } from 'react-redux';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import FormLogin from './form-login';

export function DialogLogin() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    Log in
                </Button>
            </DialogTrigger>
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
