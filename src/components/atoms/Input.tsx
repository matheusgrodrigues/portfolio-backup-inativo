import React from 'react';

import styled from 'styled-components';

interface InputStyledProps {}

const InputStyled = styled.input<InputStyledProps>`
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

export interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ ...props }) => <InputStyled {...props} />;

export default Input;
