import React, { forwardRef, useImperativeHandle } from 'react';

import styled from 'styled-components';

import InputMask, { Props } from 'react-input-mask';

const InputMaskStyled = styled(InputMask)`
    background-color: ${(props) => props.theme.ref.colors['white']};
    border-radius: ${(props) => props.theme.ref.borderRadius.radius_8};
    font-weight: ${(props) => props.theme.ref.fontWeight['regular']};
    font-size: ${(props) => props.theme.ref.fontSize['md']};
    outline: 0;
    padding: ${(props) => `${props.theme.ref.spacing['spacing_12']}`};
    border: 1px solid ${(props) => props.theme.ref.colors['gray500']};
    height: 48px;
    width: 100%;
    color: ${(props) => props.theme.ref.colors['gray500']};
`;

export interface InputCustomMaskProps extends Props {}

const InputCustomMask: React.ForwardRefRenderFunction<React.RefAttributes<object>, InputCustomMaskProps> = (
    { mask, type, name, ...props },
    ref
) => {
    useImperativeHandle(ref, () => ({}), []);

    return <InputMaskStyled mask={mask} type={type} name={name} {...props} />;
};

export default forwardRef(InputCustomMask);
