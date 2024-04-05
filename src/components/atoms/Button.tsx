import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';

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

export interface ButtonRef {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    styledProps?: ButtonStyledProps;
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const Button: React.ForwardRefRenderFunction<ButtonRef, ButtonProps> = (
    { children, styledProps, variant, size, ...props },
    ref
) => {
    const [isLoading, setIsLoading] = useState(false);

    const getBackground = useCallback((): ColorName => {
        if (variant === 'primary') {
            return 'gradient_primary600';
        } else if (variant === 'link') {
            return 'transparent';
        } else if (variant === 'default') {
            return 'white';
        } else if (variant == 'primary') {
            return 'gradient_primary600';
        }

        return 'white';
    }, [variant]);

    const getFontWeight = useCallback((): FontWeightName => (size === 'md' ? 'semibold' : 'semibold'), [size]);

    const getFontSize = useCallback((): FontSizeName => {
        if (size === 'md') {
            return 'md';
        }

        return 'md';
    }, [size]);

    const getSize = useCallback(
        (): { height: string; width: string } => ({
            height: size === 'md' ? '42px' : '48px',
            width: size === 'md' ? '172px' : 'auto',
        }),
        [size]
    );

    const getColor = useCallback((): ColorName => (variant === 'primary' ? 'white' : 'gray500'), []);

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

    useImperativeHandle(ref, () => ({ setIsLoading }), []);

    return (
        <ButtonStyled
            {...prepareStyledProps()}
            {...props}
            disabled={isLoading}
            style={{
                opacity: isLoading ? 0.6 : 1,
                cursor: isLoading ? 'progress' : 'pointer',
            }}
        >
            {children}
        </ButtonStyled>
    );
};

export default forwardRef(Button);
