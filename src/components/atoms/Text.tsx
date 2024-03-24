import React from 'react';

import { ColorName, FontSizeName, FontWeightName } from '@/src/config/theme/theme';

import { ReactNode } from 'react';

import styled from 'styled-components';

interface TextStyledProps {
    $fontWeight: FontWeightName;
    $fontSzie: FontSizeName;
    $color: ColorName;
}

const TextStyled = styled('p').attrs<TextStyledProps>(() => ({}))`
    ${(props) => {
        if (props.$fontSzie === 'fontSize_displayLg') {
            return `font-size: ${props.theme.ref.fontSize['fontSize_displayLg']};
            letter-spacing: -0.96px;`;
        } else {
            return `font-size: ${props.theme.ref.fontSize[props.$fontSzie]}`;
        }
    }};

    ${(props) => `font-weight: ${props.theme.ref.fontWeight[props.$fontWeight]}`}

    ${(props) => `color: ${props.theme.ref.colors[props.$color]}`};
`;

interface TextProps {
    children: ReactNode;
    styledProps: TextStyledProps;
}

export const Text = ({ styledProps, children }: TextProps) => {
    return (
        <TextStyled {...styledProps} data-testid="a-text">
            {children}
        </TextStyled>
    );
};
