import React, { forwardRef, useImperativeHandle } from 'react';

import styled from 'styled-components';

export interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input: React.ForwardRefRenderFunction<React.RefAttributes<HTMLInputElement>, InputProps> = (
    { name, ...props },
    ref
) => {
    useImperativeHandle(ref, () => ({}), []);

    return <InputStyled data-testid={`input-${name}`} {...props} />;
};

const InputStyled = styled.input`
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
export default forwardRef(Input);
