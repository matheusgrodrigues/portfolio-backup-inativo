'use client';

import { useCallback, useEffect, useState } from 'react';

import { ThemeName } from '@/src/config/theme';

export const useDarkMode = () => {
    const [theme, setTheme] = useState<ThemeName>('dark');

    const setMode = useCallback((mode: ThemeName) => {
        window.localStorage.setItem('theme', mode);

        setTheme(mode);
    }, []);

    const themeToggler = useCallback(() => {
        if (theme === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    }, [theme]);

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');

        localTheme && setTheme(localTheme as ThemeName);
    }, []);

    return { themeToggler, theme };
};
