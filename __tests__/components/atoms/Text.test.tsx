import renderer from 'react-test-renderer'

import { themeLight } from '@/src/config/theme'
import { ThemeProvider } from '@/src/config/theme/utils/theme-provider'

import { Text } from '@/src/components/atoms/Text'

describe('Deve renderizar o AText corretamente', () => {
    it('Deve preservar a estrutura visual do componente', () => {
        const three = renderer
            .create(
                <ThemeProvider theme={themeLight}>
                    <Text $variant="lg" fontWeight="semibold" color="gradient">
                        A-Text
                    </Text>
                </ThemeProvider>
            )
            .toJSON()

        expect(three).toMatchSnapshot()
    })
})
