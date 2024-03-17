'use client'

import { useCallback, useEffect, useState } from 'react'

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light')

    const setMode = useCallback((mode: string) => {
        window.localStorage.setItem('theme', mode)

        setTheme(mode)
    }, [])

    const themeToggler = useCallback(() => {
        if (theme === 'light') {
            setMode('dark')
        } else {
            setMode('light')
        }
    }, [setMode, theme])

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')

        localTheme && setTheme(localTheme)
    }, [])

    return { themeToggler, theme }
}
