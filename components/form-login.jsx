'use client';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { useDispatch } from 'react-redux';
import { Button } from './ui/button';
import Login from '@/service/auth/login';
import { login } from '@/redux/features/authSclice';
import { setAuthToken } from '@/lib/authUtils';
import LoginValidation from '@/validation/login';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { ButtonLoading } from './button-loading';
import ButtonSocialLogin from './button-social-login';

function FormLogin() {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const { toast } = useToast();
    const form = useForm({
        resolver: zodResolver(LoginValidation),
        defaultValues: {
            email: 'ilhamtenriajeng30@gmail.com',
            password: 'ilham123',
        },
    });

    async function onSubmit(formData) {
        setIsLoading(true);
        const response = await Login(formData);

        if (response.success) {
            const user = {
                token: response.data.token,
                name: response.data.name,
            };

            setAuthToken(response.data.token);
            dispatch(login(user));
            setIsLoading(false);
        } else {
            toast({
                variant: 'destructive',
                title: 'Login Failed',
                description: `Oops! 😞 It seems we couldn't find your account. Please double-check your credentials or contact our support team for assistance.`,
            });
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-3"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    name="email"
                                    placeholder="Email"
                                    className="col-span-12"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="col-span-12"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {isLoading ? (
                    <ButtonLoading />
                ) : (
                    <>
                        <Button type="submit" className="xs:w-full">
                            Log in
                        </Button>
                    </>
                )}
                <ButtonSocialLogin />
            </form>
        </Form>
    );
}

export default FormLogin;
