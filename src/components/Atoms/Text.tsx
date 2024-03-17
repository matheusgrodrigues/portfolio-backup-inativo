import React from 'react'

import { ReactNode } from 'react'

import styled from 'styled-components'

import { themeLight } from '@/src/config/theme'
import { ThemeProvider } from '@/src/config/theme/helpers/theme-provider'

type TextFontWeigth = 'regular' | 'semibold'
type TextVariant = 'sm' | 'md' | 'lg' | 'xl'
type TextColor = 'white' | 'black' | 'gradient' | 'gray50' | 'gray500' | 'gray900'

interface TextProps {
    fontWeight: TextFontWeigth
    children: ReactNode
    $variant: TextVariant
    color: TextColor
}

/* eslint-disable no-unreachable */
const TextStyled = styled('p').attrs<TextProps>(() => ({}))`
    ${(props) => {
        const { fw_regular, fw_semibold } = props.theme.ref.font

        switch (props.fontWeight) {
            case 'regular':
                return `font-weight: ${fw_regular}`
                break
            case 'semibold':
                return `font-weight: ${fw_semibold}`
                break
            default:
                return `font-weight: initial`
                break
        }
    }}

    ${(props) => {
        const { fs_textSm, fs_textMd, fs_displayLg, fs_textXl } = props.theme.ref.font

        switch (props.$variant) {
            case 'lg':
                return `font-size: ${fs_displayLg};
        letter-spacing: -0.96px;`
                break
            case 'xl':
                return `font-size: ${fs_textXl}`
                break
            case 'md':
                return `font-size: ${fs_textMd}`
                break
            case 'sm':
                return `font-size: ${fs_textSm}`
                break
        }
    }};

    ${(props) => {
        const { color_gray50, color_primary500, color_primary600, color_gray900 } = props.theme.ref.colors

        switch (props.color) {
            case 'gradient':
                return `color: ${color_primary600}`
                break
            case 'gray50':
                return `color: ${color_gray50}`
            case 'gray500':
                return `color: ${color_primary500}`
                break
            case 'gray900':
                return `color: ${color_gray900}`
                break
        }
    }};
`

export const Text = ({ $variant, fontWeight, color, children }: TextProps) => {
    return (
        <ThemeProvider theme={themeLight}>
            <TextStyled data-testid="a-text" fontWeight={fontWeight} $variant={$variant} color={color}>
                {children}
            </TextStyled>
        </ThemeProvider>
    )
}
