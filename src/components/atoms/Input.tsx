import React from 'react';

import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

interface InputStyledProps {}

const InputStyled = styled.input<InputStyledProps>`
    background-color: ${(props) => props.theme.ref.colors['white']};
    border-radius: ${(props) => props.theme.ref.borderRadius.radius_8};
    font-weight: ${(props) => props.theme.ref.fontWeight['regular']};
    font-size: ${(props) => props.theme.ref.fontSize['md']};
    outline: 0;
    padding: ${(props) => `${props.theme.ref.spacing.spacing_12} ${props.theme.ref.spacing.spacing_20}`};
    border: 2px solid ${(props) => props.theme.ref.colors['gray500']};
    height: 48px;
    width: 100%;
    color: ${(props) => props.theme.ref.colors['gray500']};
`;

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

// TODO: isolar o register em um component Field, para separar UI da regra de negocio.
const Input: React.FC<InputProps> = ({ name, ...props }) => {
    const { register } = useFormContext();

    return <InputStyled {...props} {...register(`${name}`)} />;
};

export default Input;
