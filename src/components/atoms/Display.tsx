import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { ColorName, FontSizeName, FontWeightName } from '@/src/config/theme/theme';

interface DisplayStyledProps {
    fontWeight: FontWeightName;
    fontSize: FontSizeName;
    color: ColorName;
}

const DisplayStyled = styled('h1').attrs<DisplayStyledProps>(() => ({}))`
    ${(props) => {
        if (props.fontSize === 'fontSize_displayLg') {
            return 'letter-spacing: -0.96px;';
        }
    }}

    ${(props) => `font-size: ${props.theme.ref.fontSize[props.fontSize]}`};
    ${(props) => `color: ${props.theme.ref.colors[props.color]}`}
`;

interface DisplayProps {
    styledProps: DisplayStyledProps;
    children: ReactNode;
    variant: 'lg';
}

const Display: React.FC<DisplayProps> = ({ styledProps, children, variant }) => {
    const prepareVariant = (): FontSizeName | undefined => {
        if (variant === 'lg') {
            return 'fontSize_displayLg';
        }
    };

    return (
        <DisplayStyled data-testid="a-display" {...styledProps} fontSize={prepareVariant()!}>
            {children}
        </DisplayStyled>
    );
};

export default Display;
