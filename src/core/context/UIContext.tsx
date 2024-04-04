'use client';

import React, { useRef } from 'react';

import ThemeProvider from '../utils/theme-utils/theme-provider';

import { ThemeName, darkTheme, themeLight } from '@/src/config/theme/theme';

import useDarkMode from '../hooks/useDarkMode';

import Toast, { ToastRef } from '../components/Toast/Toast';

interface UIContextProps {
    themeToggler: () => void;
    themeName: ThemeName;
    toast: React.RefObject<ToastRef>;
}

export const UIContext = React.createContext({} as UIContextProps);

interface UIContextProviderProps {
    children: React.ReactNode;
}

const UIContextProvider: React.FC<UIContextProviderProps> = ({ children }) => {
    const { themeToggler, themeName } = useDarkMode();

    const toastRef = useRef<ToastRef>(null);

    return (
        <UIContext.Provider
            value={{
                themeToggler,
                themeName,
                toast: toastRef,
            }}
        >
            <ThemeProvider theme={themeName === 'light' ? themeLight : darkTheme}>
                {children}

                <Toast ref={toastRef} />
            </ThemeProvider>
        </UIContext.Provider>
    );
};

export default UIContextProvider;
