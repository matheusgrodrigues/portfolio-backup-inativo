import React from 'react';

import { AppRouterContext, AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export type AppRouterContextProviderMockProps = {
    children: React.ReactNode;
    router: Partial<AppRouterInstance>;
};

/* eslint-disable no-undef */
const AppRouterContextProviderMock = ({ children, router }: AppRouterContextProviderMockProps): React.ReactNode => {
    const mockedRouter: AppRouterInstance = {
        prefetch: jest.fn(),
        forward: jest.fn(),
        replace: jest.fn(),
        refresh: jest.fn(),
        back: jest.fn(),
        push: jest.fn(),
        ...router,
    };
    return <AppRouterContext.Provider value={mockedRouter}>{children}</AppRouterContext.Provider>;
};

export default AppRouterContextProviderMock;
