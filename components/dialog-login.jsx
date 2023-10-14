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
                <div className="grid gap-4 py-4">
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
                </div>
                <DialogFooter>
                    <Button type="submit" size="sm">
                        Log In
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
