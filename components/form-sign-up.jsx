import React from 'react';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form';
import { useDispatch } from 'react-redux';
import { useToast } from './ui/use-toast';
import { Button } from './ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import RegisterValidation from '@/validation/register';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import Register from '@/api/auth/register';
import { setAuthToken } from '@/lib/authUtils';
import { login } from '@/redux/features/authSclice';

function FormSignUp() {
    const dispatch = useDispatch();
    const { toast } = useToast();
    const form = useForm({
        resolver: zodResolver(RegisterValidation),
        defaultValues: {
            name: 'ilham',
            email: 'ilhamtenriajeng03@gmail.com',
            password: 'IlhamIlham!2#',
            c_password: 'IlhamIlham!2#',
        },
    });

    async function onSubmit(formData) {
        const response = await Register(formData);

        if (response.success) {
            const user = {
                token: response.data.token,
                name: response.data.name,
            };

            setAuthToken(response.data.token);
            dispatch(login(user));
        } else {
            Object.keys(response.data).forEach((field) => {
                form.setError(field, {
                    type: 'manual',
                    message: response.data[field][0],
                });
            });
            toast({
                variant: 'destructive',
                title: 'Registration Failed',
                description:
                    'Oh no! 😔 It seems like there was an issue with your registration. Please verify the information you provided and try again. If you require assistance, dont hesitate to contact our support team. Were here to help!',
            });
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Name"
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
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
                <FormField
                    control={form.control}
                    name="c_password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="col-span-12"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Sign up</Button>
            </form>
        </Form>
    );
}

export default FormSignUp;
