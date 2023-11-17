import { AccountDropdown } from './account-dropdown';
import { DialogLogin } from './dialog-login';
import { Button } from './ui/button';
import { DialogSignUp } from './dialog-sign-up';
import { getAuthToken } from '@/lib/authUtils';

export async function Account() {
    const isAuthenticated = await getAuthToken();

    return isAuthenticated ? (
        <AccountDropdown />
    ) : (
        <>
            <DialogLogin>
                <Button variant="outline" size="sm">
                    Log in
                </Button>
            </DialogLogin>
            <DialogSignUp />
        </>
    );
}
