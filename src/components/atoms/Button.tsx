import React, { useCallback } from 'react';

import styled from 'styled-components';

import { FontWeightName, FontSizeName, ColorName } from '@/src/config/theme/theme';

interface ButtonStyledProps {
    $dataTestID?: string;
    $background?: ColorName;
    $fontWeight?: FontWeightName;
    $fontSize?: FontSizeName;
    $height?: string;
    $width?: string;
    $color?: ColorName;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
    border-radius: 8px;
    border: none;
    cursor: pointer;
    width: 100%;
    font-weight: ${(props) => props.theme.ref.fontWeight[props.$fontWeight!]};
    background: ${(props) => props.theme.ref.colors[props.$background!]};
    font-size: ${(props) => props.theme.ref.fontSize[props.$fontSize!]};
    outline: none;
    height: ${(props) => props.$height};
    width: ${(props) => props.$width};
    color: ${(props) => props.theme.ref.colors[props.$color!]};
    transition: 0.3s;

    &:hover {
        opacity: 0.8;
    }
`;

type ButtonVariant = 'default' | 'primary' | 'link';
type ButtonSize = 'md';

interface ButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    styledProps?: ButtonStyledProps;
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({ children, styledProps, variant, size, ...props }) => {
    const getBackground = useCallback((): ColorName => {
        if (variant === 'primary') {
            return 'color_gradient_primary600';
        } else if (variant === 'link') {
            return 'color_transparent';
        } else if (variant === 'default') {
            return 'color_white';
        }

        return 'color_white';
    }, [variant]);

    const getFontWeight = useCallback(
        (): FontWeightName => (size === 'md' ? 'fontWeight_semibold' : 'fontWeight_semibold'),
        [size]
    );
    const getFontSize = useCallback((): FontSizeName => {
        if (size === 'md') {
            return 'fontSize_textMd';
        }

        return 'fontSize_textMd';
    }, [size]);

    const getSize = useCallback(
        (): { height: string; width: string } => ({
            height: size === 'md' ? '42px' : 'auto',
            width: size === 'md' ? '172px' : 'auto',
        }),
        [size]
    );

    const getColor = useCallback((): ColorName => (variant === 'primary' ? 'color_white' : 'color_gray500'), []);

    const prepareStyledProps = useCallback(
        (): ButtonStyledProps => ({
            $background: styledProps?.$background ?? getBackground(),
            $fontWeight: styledProps?.$fontWeight ?? getFontWeight(),
            $fontSize: styledProps?.$fontSize ?? getFontSize(),
            $height: styledProps?.$height ?? getSize().height,
            $width: styledProps?.$width ?? getSize().width,
            $color: styledProps?.$color ?? getColor(),
        }),
        [styledProps]
    );

    return (
        <ButtonStyled {...prepareStyledProps()} {...props}>
            {children}
        </ButtonStyled>
    );
};

export default Button;
