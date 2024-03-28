import React from 'react';

import { AppRouterContext, AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import UIContextProvider from '../../context/UIContext';

export interface AppRouterContextProviderProps {
    children: React.ReactNode;
    router: Partial<AppRouterInstance>;
}

const AppRouterContextProvider = ({ children, router }: AppRouterContextProviderProps): React.ReactNode => {
    const mockedRouter: AppRouterInstance = {
        prefetch: jest.fn(),
        forward: jest.fn(),
        replace: jest.fn(),
        refresh: jest.fn(),
        back: jest.fn(),
        push: jest.fn(),
        ...router,
    };
    return (
        <AppRouterContext.Provider value={mockedRouter}>
            <UIContextProvider>{children}</UIContextProvider>
        </AppRouterContext.Provider>
    );
};

export default AppRouterContextProvider;
