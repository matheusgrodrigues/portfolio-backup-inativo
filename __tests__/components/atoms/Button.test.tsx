import renderer from 'react-test-renderer'

import { ThemeProvider } from '@/src/config/theme/helpers/theme-provider'
import { themeLight } from '@/src/config/theme'

import { Button } from '@/src/components/Atoms'

describe('Deve renderizar o Button corretamente', () => {
    it('Deve preservar a estrutura visual do componente', () => {
        const three = renderer
            .create(
                <ThemeProvider theme={themeLight}>
                    <Button
                        $background="color_gradient_primary600"
                        $fontWeight="fw_semibold"
                        $fontSize="fs_textMd"
                        $variant="lg"
                        $color="color_gray500"
                    >
                        AButton
                    </Button>
                </ThemeProvider>
            )
            .toJSON()

        expect(three).toMatchSnapshot()
    })
})
