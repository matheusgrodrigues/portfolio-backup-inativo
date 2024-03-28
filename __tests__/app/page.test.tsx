import React from 'react';

import '@testing-library/jest-dom';

import AppRouterContextProviderMock from '@/src/core/utils/test-utils/app-router-provider';
import { render, screen } from '@/src/core/utils/test-utils/testing-library-render';

import Home from '@/src/app/page';

describe('Deve renderizar a pagina home corretamente', () => {
    beforeEach(() => {
        render(
            <AppRouterContextProviderMock router={{}}>
                <Home />
            </AppRouterContextProviderMock>
        );
    });

    it('Deve renderizar o botão Download CV', () => {
        const getBtnDownloadCV = screen.getByTestId('button-downloadCV');

        expect(getBtnDownloadCV).toBeInTheDocument();
    });

    it('Deve renderizar o botão de Contato', () => {
        const getBtnContact = screen.getByTestId('button-contact');

        expect(getBtnContact).toBeInTheDocument();
    });
});
