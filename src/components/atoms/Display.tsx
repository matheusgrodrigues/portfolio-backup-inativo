import React, { useCallback } from 'react';

import styled from 'styled-components';

import { FontWeightName, FontSizeName, ColorName } from '@/src/config/theme/theme';

interface DisplayStyledProps {
    $fontWeight?: FontWeightName;
    $fontSize?: FontSizeName;
    $color?: ColorName;
}

const DisplayStyled = styled.h1<DisplayStyledProps>`
    ${(props) => {
        if (props.$fontSize === 'fontSize_displayLg') {
            return 'letter-spacing: -0.96px;';
        }
    }}

    font-size: ${(props) => props.theme.ref.fontSize[props.$fontSize!]};
    color: ${(props) => props.theme.ref.colors[props.$color!]};
`;

interface DisplayProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: React.ReactNode;
    size: 'lg';
    variant?: 'primary';
    styledProps?: DisplayStyledProps;
}

const Display: React.FC<DisplayProps> = ({ children, variant, size, styledProps, ...props }) => {
    const getFontWeight = useCallback((): FontWeightName => 'fontWeight_semibold', []);

    const getFontSize = useCallback((): FontSizeName => {
        if (size === 'lg') {
            return 'fontSize_displayLg';
        }

        return 'fontSize_displayLg';
    }, [size]);

    const getColor = useCallback((): ColorName => {
        if (variant === 'primary') {
            return 'color_primary600';
        }

        return 'color_gray900';
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

export default Display;
