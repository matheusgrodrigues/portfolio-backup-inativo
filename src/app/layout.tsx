import React from 'react';

import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import './globals.css';

import i18n_metadata from '../config/i18n/Metadata/metadata';
import GlobalContextProvider from '../core/context/GlobalContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    description: i18n_metadata.metadata.description,
    title: i18n_metadata.metadata.title,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <body className={inter.className}>
                <GlobalContextProvider>{children}</GlobalContextProvider>
            </body>
        </html>
    );
}
