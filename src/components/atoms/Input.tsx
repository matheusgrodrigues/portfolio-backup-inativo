import React from 'react';

import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

interface InputStyledProps {}

const InputStyled = styled.input<InputStyledProps>`
    background-color: ${(props) => props.theme.ref.colors['white']};
    border-radius: ${(props) => props.theme.ref.borderRadius.radius_8}
    padding: ${(props) => `${props.theme.ref.spacing.spacing_12} ${props.theme.ref.spacing.spacing_20}`};
    height: 48px;
    width: 100%;
`;

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

// TODO: isolar o register em um component Field, para separar UI da regra de negocio.
const Input: React.FC<InputProps> = ({ name, ...props }) => {
    const { register } = useFormContext();

    return <InputStyled {...props} {...register(`${name}`)} />;
};

export default Input;
