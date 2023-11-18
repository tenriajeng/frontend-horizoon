import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '@/redux/providers';
import Navigation from '@/components/navigation';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import { HandleAuthentication } from '@/utils/authUtils';
import { getAuthToken } from '@/lib/authUtils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Horizoon',
    description: 'Horizoon',
};

const RootLayout = ({ children }) => {
    const token = getAuthToken();
    return (
        <html lang="en" className="dark" suppressHydrationWarning={true}>
            <body
                className={`${inter.className} bg-gradient-to-r from-white via-white to-white dark:bg-gradient-to-r dark:via-slate-950 dark:to-black dark:xs:from-slate-950 dark:sm:from-slate-900`}
            >
                <Providers>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <HandleAuthentication token={token} />
                        <Navigation />
                        {children}
                        <Analytics />
                        <Toaster />
                    </ThemeProvider>
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;
