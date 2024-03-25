'use client';

import React, { useCallback } from 'react';

interface GlobalContextProps {
    toast: () => void;
}

export const GlobalContext = React.createContext({} as GlobalContextProps);

interface GlobalContextProviderProps {
    children: React.ReactNode;
}

const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
    const toast = useCallback((): void => console.log('show toast'), []);

    return <GlobalContext.Provider value={{ toast }}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
