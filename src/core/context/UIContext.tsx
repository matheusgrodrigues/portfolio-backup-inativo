'use client';

import React from 'react';

import ThemeProvider from '../utils/theme-utils/theme-provider';

import { ThemeName, darkTheme, themeLight } from '@/src/config/theme/theme';

import useDarkMode from '../hooks/useDarkMode';

interface UIContextProps {
    theme: {
        themeToggler: () => void;
        themeName: ThemeName;
    };
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
                theme: {
                    themeToggler,
                    themeName: theme,
                },
            }}
        >
            <ThemeProvider theme={theme === 'light' ? themeLight : darkTheme}>{children}</ThemeProvider>
        </UIContext.Provider>
    );
};

export default UIContextProvider;
