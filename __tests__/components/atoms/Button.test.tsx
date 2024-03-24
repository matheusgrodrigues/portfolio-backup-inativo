import React from 'react';

import renderer from 'react-test-renderer';

import ThemeProvider from '@/src/core/utils/theme-utils/theme-provider';

import { themeLight } from '@/src/config/theme/theme';

import Button from '@/src/components/atoms/Button';

describe('Deve renderizar o Button corretamente', () => {
    it('Deve preservar a estrutura visual do componente', () => {
        const three = renderer
            .create(
                <ThemeProvider theme={themeLight}>
                    <Button onClick={() => null} variant="link" size="md">
                        AButton
                    </Button>
                </ThemeProvider>
            )
            .toJSON();

        expect(three).toMatchSnapshot();
    });
});
