import React, { useCallback } from 'react';

import styled from 'styled-components';

import { FontWeightName, FontSizeName, ColorName } from '@/src/config/theme/theme';

interface TextStyledProps {
    $fontWeight?: FontWeightName;
    $fontSize?: FontSizeName;
    $color?: ColorName;
}

const TextStyled = styled.p<TextStyledProps>`
    ${(props) => {
        if (props.$fontSize === 'fontSize_displayLg') {
            return `letter-spacing: -0.96px;`;
        }
    }};

    font-weight: ${(props) => props.theme.ref.fontWeight[props.$fontWeight!]};
    font-size: ${(props) => props.theme.ref.fontSize[props.$fontSize!]};
    color: ${(props) => props.theme.ref.colors[props.$color!]};
`;

interface TextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: React.ReactNode;
    styledProps?: TextStyledProps;
    variant?: 'primary';
}

const Text: React.FC<TextProps> = ({ styledProps, variant, children, ...props }) => {
    const getFontWeight = useCallback((): FontWeightName => 'fontWeight_regular', []);

    const getFontSize = useCallback((): FontSizeName => 'fontSize_textXl', []);

    const getColor = useCallback((): ColorName => {
        if (variant === 'primary') {
            return 'color_primary600';
        }

        return 'color_gray900';
    }, [variant]);

    const prepareStyledProps = useCallback(
        (): TextStyledProps => ({
            $fontWeight: styledProps?.$fontWeight ?? getFontWeight(),
            $fontSize: styledProps?.$fontSize ?? getFontSize(),
            $color: styledProps?.$color ?? getColor(),
        }),
        [styledProps]
    );

    return (
        <TextStyled {...prepareStyledProps()} data-testid="a-text" {...props}>
            {children}
        </TextStyled>
    );
};

export default Text;
