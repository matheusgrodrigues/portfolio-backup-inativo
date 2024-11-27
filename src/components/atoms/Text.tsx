import React, { useCallback } from 'react';

import styled from 'styled-components';

import { FontWeightName, FontSizeName, ColorName } from '@/src/config/theme/theme';

interface TextStyledProps {
    $fontWeight?: FontWeightName;
    $fontSize?: FontSizeName;
    $color?: ColorName;
}

interface TextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: React.ReactNode;
    styledProps?: TextStyledProps;
    variant?: 'primary';
}

const Text: React.FC<TextProps> = ({ styledProps, variant, children, ...props }) => {
    const getFontWeight = useCallback((): FontWeightName => 'regular', []);

    const getFontSize = useCallback((): FontSizeName => 'lg', []);

    const getColor = useCallback((): ColorName => {
        if (variant === 'primary') {
            return 'primary600';
        }

        return 'gray900';
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

const TextStyled = styled.p<TextStyledProps>`
    ${(props) => {
        if (props.$fontSize === 'lg') {
            return `letter-spacing: -0.96px;`;
        }
    }};

    font-weight: ${(props) => props.theme.ref.fontWeight[props.$fontWeight!]};
    font-size: ${(props) => props.theme.ref.fontSize[props.$fontSize!]};
    color: ${(props) => props.theme.ref.colors[props.$color!]};
`;
export default Text;
