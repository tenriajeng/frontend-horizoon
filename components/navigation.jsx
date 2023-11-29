import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Account } from './account';
import Carts from './carts';
import ModeToggle from './mode-toggle';
import Search from './search';
import Notification from './notification';

function Navigation() {
    return (
        <header className="sticky top-0 z-20 flex justify-center border-b border-gray-400 border-opacity-20 bg-opacity-80 bg-gradient-to-r from-white/80 via-white/80 to-white/80 py-4 shadow-lg backdrop-blur-sm dark:bg-opacity-70 dark:bg-gradient-to-r dark:from-slate-950/80 dark:via-slate-950/80 dark:to-black/80 dark:backdrop-blur-md">
            <nav className="xs:container-fluid flex items-center justify-between md:container xs:mx-2 xs:w-full md:mx-0">
                <Link
                    href={'/'}
                    className="text-2xl font-bold text-slate-900 dark:text-white md:mx-2"
                >
                    HORIZOON
                </Link>

                <div className="flex items-center space-x-2 md:mx-2">
                    <Search />
                    <Carts />
                    <Notification />
                    <ModeToggle />
                    <Account />
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
