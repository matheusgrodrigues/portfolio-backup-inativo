import React, { createRef } from 'react';

import ResizeObserver from 'resize-observer-polyfill';
global.ResizeObserver = ResizeObserver;

import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@/src/core/utils/test-utils/testing-library-render';
import AppRouterContextProviderMock from '@/src/core/utils/test-utils/app-router-provider';
import ThemeProvider from '@/src/core/utils/theme-utils/theme-provider';

import { themeLight } from '@/src/config/theme/theme';

import ModalContact, { ModalContactRef } from '@/src/components/pages/ModalContact/ModalContact';

describe('Deve renderizar o formulario de contato corretamente', () => {
    beforeEach(() => {
        const push = jest.fn();

        const modalRef = createRef<ModalContactRef>();

        render(
            <AppRouterContextProviderMock router={{ push }}>
                <ThemeProvider theme={themeLight}>
                    <button data-testid="button-contact" onClick={() => modalRef.current?.setIsOpen(true)} />

                    <ModalContact ref={modalRef} />
                </ThemeProvider>
            </AppRouterContextProviderMock>
        );

        fireEvent.click(screen.getByTestId('button-contact'));
    });

    it('Deve carregar o campo nome', () => {
        const field = screen.getByTestId('input-nome');

        expect(field).toBeInTheDocument();
    });

    it('Deve carregar o campo email', () => {
        const field = screen.getByTestId('input-email');

        expect(field).toBeInTheDocument();
    });

    it('Deve carregar o campo telefone', () => {
        const field = screen.getByTestId('input-telefone');

        expect(field).toBeInTheDocument();
    });

    it('Deve carregar o campo mensagem', () => {
        const field = screen.getByTestId('input-mensagem');

        expect(field).toBeInTheDocument();
    });

    it('Deve carregar o botão submit', () => {
        const field = screen.getByTestId('button-submit-testid');

        expect(field).toBeInTheDocument();
    });
});
