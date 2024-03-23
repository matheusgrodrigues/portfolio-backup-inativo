import styled from 'styled-components';

import { FontSizeName, FontWeightName } from '@/src/config/theme/theme';

/*
type Background = 'color_white' | 'color_gradient_primary600';
type FontSize = 'fs_textMd';
type Color = 'color_white' | 'color_gray500'; */

interface ButtonProps {
    $background: Background;
    $fontWeight: FontWeightName;
    $fontSize: FontSizeName;
    $variant: 'lg';
    $color: Color;
}

export const Button = styled.button<ButtonProps>`
    border-radius: 8px;
    border: none;
    cursor: pointer;
    width: 100%;

    ${(props) => {
        if (props.$variant === 'lg') {
            return `
                height: 44px;
                width: 172px;
            `;
        }
    }}

    font-weight: ${(props) => props.theme.ref.fontWeight[props.$fontWeight]};
    background: ${(props) => props.theme.ref.colors[props.$background]};
    font-size: ${(props) => props.theme.ref.font[props.$fontSize]};
    color: ${(props) => props.theme.ref.colors[props.$color]};
`;

export const ButtonTransparent = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`;
