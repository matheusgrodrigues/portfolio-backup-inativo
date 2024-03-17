import styled from 'styled-components'

interface ButtonProps {
    $background: 'color_white' | 'color_gradient_primary600'
    $fontWeight: 'fw_semibold'
    $fontSize: 'fs_textMd'
    $variant: 'lg'
    $color: 'color_white' | 'color_gray500'
}

const setButtonLgStyles = () => `
max-width: 172px;
height: 44px;
`

export const Button = styled.button<ButtonProps>`
    border-radius: 8px;
    border: none;
    cursor: pointer;
    width: 100%;

    ${(props) => {
        switch (props.$variant) {
            case 'lg':
                return setButtonLgStyles()
                break
        }
    }}

    font-weight: ${(props) => props.theme.ref.font[props.$fontWeight]};
    background: ${(props) => props.theme.ref.colors[props.$background]};
    font-size: ${(props) => props.theme.ref.font[props.$fontSize]};
    color: ${(props) => props.theme.ref.colors[props.$color]};
`

export const ButtonTransparent = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`
