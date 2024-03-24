'use client';

import { useCallback, useEffect, useState } from 'react';

import { ThemeName } from '@/src/config/theme/theme';

const useDarkMode = () => {
    const [theme, setTheme] = useState<ThemeName>('dark');

    const setMode = useCallback((mode: ThemeName) => {
        window.sessionStorage.setItem('theme', mode);

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
        const localTheme = window.sessionStorage.getItem('theme');

        localTheme && setTheme((localTheme as ThemeName) ?? 'dark');
    }, []);

    return { themeToggler, theme };
};

export default useDarkMode;
