import renderer from 'react-test-renderer';

import { ThemeProvider } from '@/src/core/utils/theme-utils/theme-provider';
import { themeLight } from '@/src/config/theme/theme';

import { Header } from '@/src/components/organisms/Header';

describe('Deve renderizar o OHeader corretamente', () => {
    it('Deve preservar a estrutura visual do OHeader', () => {
        const toggleTheme = jest.fn();

        const three = renderer
            .create(
                <ThemeProvider theme={themeLight}>
                    <Header
                        handleToggleTheme={toggleTheme}
                        avatar={{
                            src: '/images/a-avatar.jpeg',
                            alt: '',
                        }}
                    />
                </ThemeProvider>
            )
            .toJSON();

        expect(three).toMatchSnapshot();
    });
});
