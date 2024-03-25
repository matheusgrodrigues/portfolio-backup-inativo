import React from 'react';

import renderer from 'react-test-renderer';

import { themeLight } from '@/src/config/theme/theme';
import ThemeProvider from '@/src/core/utils/theme-utils/theme-provider';

import Icon from '@/src/components/atoms/Icon';

describe('Deve renderizar o Icon corretamente', () => {
    it('Deve preservar a UI do componente', () => {
        const three = renderer
            .create(
                <ThemeProvider theme={themeLight}>
                    <Icon icon="sun" />
                </ThemeProvider>
            )
            .toJSON();

        expect(three).toMatchSnapshot();
    });
});
