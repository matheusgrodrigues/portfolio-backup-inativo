import React, { useCallback } from 'react';

import styled from 'styled-components';

import { FontWeightName, FontSizeName, ColorName } from '@/src/config/theme/theme';

interface DisplayStyledProps {
    $fontWeight?: FontWeightName;
    $fontSize?: FontSizeName;
    $color?: ColorName;
}

interface DisplayProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: React.ReactNode;
    size: 'sm' | 'lg' | 'xl';
    variant?: 'primary';
    styledProps?: DisplayStyledProps;
}

const Display: React.FC<DisplayProps> = ({ children, variant, size, styledProps, ...props }) => {
    const getFontWeight = useCallback((): FontWeightName => 'semibold', []);

    const getFontSize = useCallback((): FontSizeName => {
        if (size === 'sm') {
            return 'sm';
        } else if (size === 'lg') {
            return 'lg';
        } else if (size == 'xl') {
            return 'xl';
        }

        return 'lg';
    }, [size]);

    const getColor = useCallback((): ColorName => {
        if (variant === 'primary') {
            return 'primary600';
        }

        return 'gray900';
    }, []);

    const prepareStyledProps = useCallback(
        (): DisplayStyledProps => ({
            $fontWeight: styledProps?.$fontWeight ?? getFontWeight(),
            $fontSize: styledProps?.$fontSize ?? getFontSize(),
            $color: styledProps?.$color ?? getColor(),
        }),
        [styledProps]
    );

    return (
        <DisplayStyled data-testid="a-display" {...prepareStyledProps()} {...props}>
            {children}
        </DisplayStyled>
    );
};

const DisplayStyled = styled.h1<DisplayStyledProps>`
    ${(props) => {
        if (props.$fontSize === 'lg') {
            return 'letter-spacing: -0.96px;';
        }
    }}

    font-size: ${(props) => props.theme.ref.fontSize[props.$fontSize!]};
    color: ${(props) => props.theme.ref.colors[props.$color!]};
`;

export default Display;
