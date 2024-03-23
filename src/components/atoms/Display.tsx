import React, { ReactNode } from 'react';

import { DefaultTheme } from 'styled-components/dist/types';
import styled from 'styled-components';

import { ThemeProvider } from '@/src/core/utils/theme-utils/theme-provider';
import { themeLight } from '@/src/config/theme/theme';

type DisplayColor = 'primary600' | 'color_white' | 'gradient' | 'gray900';

interface DisplayProps {
    fontWeight: 'semibold';
    children: ReactNode;
    $variant: 'lg';
    color: DisplayColor;
}

/* eslint-disable no-unreachable */
const DisplayStyled = styled('h1').attrs<DisplayProps>(() => ({}))`
    ${(props) => {
        const { fs_displayLg } = props.theme.ref.font;

        if (props.$variant == 'lg') {
            return `letter-spacing: -0.96px;
                    font-size: ${fs_displayLg};`;
        }
    }};

    ${(props) => {
        const { color_gradient_primary600, color_gray900, color_primary600, color_white } = props.theme.ref.colors;

        switch (props.color) {
            case 'gradient':
                return `color: ${color_gradient_primary600}`;
                break;
            case 'gray900':
                return `color: ${color_gray900}`;
                break;
            case 'primary600':
                return `color: ${color_primary600}`;
                break;
            case 'color_white':
                return `color: ${color_white}`;
                break;
        }
    }};
`;

export const Display = ({ fontWeight, $variant, children, color }: DisplayProps) => {
    return (
        <>
            {$variant === 'lg' && (
                <ThemeProvider theme={themeLight as DefaultTheme}>
                    <DisplayStyled data-testid="a-display" fontWeight={fontWeight} $variant={$variant} color={color}>
                        {children}
                    </DisplayStyled>
                </ThemeProvider>
            )}
        </>
    );
};
