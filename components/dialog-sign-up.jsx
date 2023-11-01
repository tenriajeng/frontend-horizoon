import register from '@/api/register';
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
import { useState } from 'react';

export function DialogSignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        c_password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await register(formData);
        console.log(response);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm">Register</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Join Us Today!</DialogTitle>
                    <DialogDescription>
                        Unlock a world of possibilities. Register now and create
                        your profile.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Input
                                name="name"
                                type="text"
                                placeholder="Name"
                                className="col-span-12"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
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
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Input
                                name="c_password"
                                type="password"
                                placeholder="Re-enter Password"
                                className="col-span-12"
                                value={formData.c_password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" size="sm">
                            Register
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
