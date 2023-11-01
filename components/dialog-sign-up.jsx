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

export function DialogSignUp() {
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
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                            type="text"
                            placeholder="Name"
                            className="col-span-12"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                            type="email"
                            placeholder="Email"
                            className="col-span-12"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                            type="password"
                            placeholder="Password"
                            className="col-span-12"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                            type="password"
                            placeholder="Re-enter Password"
                            className="col-span-12"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" size="sm">
                        Register
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
