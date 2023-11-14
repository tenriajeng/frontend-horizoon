import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '@/redux/providers';
import Navigation from '@/components/navigation';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: {
        template: '%s — Showcasething',
    },
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className="dark" suppressHydrationWarning={true}>
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>

            <body
                className={`${inter.className} bg-gradient-to-r from-white via-white to-white dark:bg-gradient-to-r dark:via-slate-950 dark:to-black dark:xs:from-slate-950 dark:sm:from-slate-900`}
            >
                <Providers>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Navigation />
                        {children}
                        <Toaster />
                    </ThemeProvider>
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;
