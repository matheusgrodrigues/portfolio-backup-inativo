'use client';

import { useCallback, useEffect, useState } from 'react';

import { ThemeName } from '@/src/config/theme/theme';

const useDarkMode = () => {
    const [themeName, setThemeName] = useState<ThemeName>('dark');

    const setMode = useCallback((mode: ThemeName) => {
        window.sessionStorage.setItem('theme', mode);

        setThemeName(mode);
    }, []);

    const themeToggler = useCallback(() => {
        if (themeName === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    }, [themeName]);

    useEffect(() => {
        const localTheme = window.sessionStorage.getItem('theme');

        localTheme && setThemeName((localTheme as ThemeName) ?? 'dark');
    }, []);

    return { themeToggler, themeName };
};

export default useDarkMode;
