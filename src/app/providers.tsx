'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface Providers {
    children: React.ReactNode;
}

export default function Providers({ children }: Providers) {
    return (
        <SessionProvider>
            <NextUIProvider>
                <NextThemesProvider
                    attribute='class'
                    defaultTheme='dark'
                    themes={['light', 'dark', 'system']}>
                    {children}
                </NextThemesProvider>
            </NextUIProvider>
        </SessionProvider>
    );
}
