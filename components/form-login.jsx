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
import Login from '@/api/auth/login';
import { login } from '@/redux/features/authSclice';
import { setAuthToken } from '@/lib/authUtils';
import LoginValidation from '@/validation/login';
import { useToast } from '@/components/ui/use-toast';

function FormLogin() {
    const dispatch = useDispatch();
    const { toast } = useToast();
    const form = useForm({
        resolver: zodResolver(LoginValidation),
        defaultValues: {
            email: 'ilhamtenriajeng03@gmail.com',
            password: 'ilhamilham123',
        },
    });

    async function onSubmit(formData) {
        const response = await Login(formData);

        if (response.success) {
            const user = {
                token: response.data.token,
                name: response.data.name,
            };

            setAuthToken(response.data.token);
            dispatch(login(user));
        } else {
            toast({
                variant: 'destructive',
                title: 'Login Failed',
                description:
                    'Oops! 🙁 It seems like we couldnt find your account. Please double-check your credentials and try again. If you need assistance, reach out to our support team. ',
            });
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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

                <Button type="submit">Login</Button>
            </form>
        </Form>
    );
}

export default FormLogin;