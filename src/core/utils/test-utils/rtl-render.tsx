import { ReactElement, ReactNode } from 'react'

import { RenderOptions, render as rtlRender } from '@testing-library/react'

import { ThemeProvider } from '../../../config/theme/helpers/theme-provider'
import { themeLight } from '../../../config/theme'

interface WrapperProps {
    children: ReactNode
}

function render(ui: ReactElement, { ...options }: RenderOptions = {}) {
    const wrapper: React.FC<WrapperProps> = ({ children }) => (
        <ThemeProvider theme={themeLight}>{children}</ThemeProvider>
    )

    return rtlRender(ui, { wrapper, ...options })
}

export * from '@testing-library/react'
export { render }
