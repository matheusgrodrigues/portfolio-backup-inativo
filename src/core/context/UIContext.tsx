'use client';

import React from 'react';

import ThemeProvider from '../utils/theme-utils/theme-provider';

import { darkTheme, themeLight } from '@/src/config/theme/theme';

import useDarkMode from '../hooks/useDarkMode';

interface UIContextProps {
    themeToggler: () => void;
}

export const UIContext = React.createContext({} as UIContextProps);

interface UIContextProviderProps {
    children: React.ReactNode;
}

const UIContextProvider: React.FC<UIContextProviderProps> = ({ children }) => {
    const { themeToggler, theme } = useDarkMode();

    return (
        <UIContext.Provider
            value={{
                themeToggler,
            }}
        >
            <ThemeProvider theme={theme === 'light' ? themeLight : darkTheme}>{children}</ThemeProvider>
        </UIContext.Provider>
    );
};

export default UIContextProvider;
