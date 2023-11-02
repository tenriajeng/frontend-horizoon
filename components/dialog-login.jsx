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

export function DialogLogin() {
    const [formData, setFormData] = useState({
        email: 'ilhamtenriajeng03@gmail.com',
        password: 'ilhamilham123',
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await Login(formData);

        if (response.success) {
            const user = {
                token: response.data.token,
                name: response.data.name,
            };
            localStorage.setItem('authToken', response.data.token);

            dispatch(login(user));
        } else {
            console.log(response);
        }
    };

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
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="col-span-12"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="col-span-12"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" size="sm">
                            Log In
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
