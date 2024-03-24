import React from 'react';

import renderer from 'react-test-renderer';

import { themeLight } from '@/src/config/theme/theme';
import ThemeProvider from '@/src/core/utils/theme-utils/theme-provider';

import Text from '@/src/components/atoms/Text';

describe('Deve renderizar o Display corretamente', () => {
    it('Deve preservar a UI do componente', () => {
        const three = renderer
            .create(
                <ThemeProvider theme={themeLight}>
                    <Text>A-Text</Text>
                </ThemeProvider>
            )
            .toJSON();

        expect(three).toMatchSnapshot();
    });
});
