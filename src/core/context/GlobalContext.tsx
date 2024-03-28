'use client';

import React from 'react';

import ThemeProvider from '../utils/theme-utils/theme-provider';

import { ThemeName, darkTheme, themeLight } from '@/src/config/theme/theme';

import useDarkMode from '../hooks/useDarkMode';

interface GlobalContextProps {
    theme: {
        themeToggler: () => void;
        themeName: ThemeName;
    };
}

export const GlobalContext = React.createContext({} as GlobalContextProps);

interface GlobalContextProviderProps {
    children: React.ReactNode;
}

const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
    const { themeToggler, theme } = useDarkMode();

    return (
        <GlobalContext.Provider
            value={{
                theme: {
                    themeToggler,
                    themeName: theme,
                },
            }}
        >
            <ThemeProvider theme={theme === 'light' ? themeLight : darkTheme}>{children}</ThemeProvider>
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
