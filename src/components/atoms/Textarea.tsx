import React, { forwardRef, useImperativeHandle } from 'react';

import styled from 'styled-components';

const TextareaStyled = styled.textarea`
    background-color: ${(props) => props.theme.ref.colors['white']};
    border-radius: ${(props) => props.theme.ref.borderRadius.radius_8};
    font-weight: ${(props) => props.theme.ref.fontWeight['regular']};
    font-size: ${(props) => props.theme.ref.fontSize['md']};
    outline: 0;
    padding: ${(props) => `${props.theme.ref.spacing['spacing_12']}`};
    border: 1px solid ${(props) => props.theme.ref.colors['gray500']};
    height: 128px;
    width: 100%;
    color: ${(props) => props.theme.ref.colors['gray500']};
`;

export interface TextareaProps
    extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

const Textarea: React.ForwardRefRenderFunction<object, TextareaProps> = ({ name, ...props }, ref) => {
    useImperativeHandle(ref, () => ({}), []);

    return <TextareaStyled data-testid={`input-${name}`} {...props} />;
};

export default forwardRef(Textarea);
