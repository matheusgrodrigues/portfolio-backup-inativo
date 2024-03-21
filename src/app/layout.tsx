import React from 'react';

import type { Metadata } from 'next';

import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    description: 'Programador Frontend apaixonado por criação de interfaces inovadoras.',
    title: 'MatheusGomesDev',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <body className={inter.className} id="app">
                {children}
            </body>
        </html>
    );
}
