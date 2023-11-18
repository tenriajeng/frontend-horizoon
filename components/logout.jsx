'use client';

import { DropdownMenuItem, DropdownMenuShortcut } from './ui/dropdown-menu';
import { usePathname, useRouter } from 'next/navigation';
import { logout } from '@/redux/features/authSclice';
import { useDispatch } from 'react-redux';
import { removeAuthToken } from '@/lib/authUtils';

export default function Logout() {
    const dispatch = useDispatch();
    const router = useRouter();
    const currentPath = usePathname();

    const handleLogout = async () => {
        // await removeAuthToken();
        dispatch(logout());
        router.replace(currentPath);
    };

    return (
        <DropdownMenuItem onClick={handleLogout}>
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
    );
}
