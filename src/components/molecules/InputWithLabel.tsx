import React from 'react';

import styled from 'styled-components';

import { useFormContext } from '@/src/core/components/Form/Form';

import Input, { InputProps } from '../atoms/Input';

const InputWithLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.ref.spacing['spacing_8']};
`;

const LabelStyled = styled.label`
    color: ${(props) => props.theme.ref.colors['gray50']};
    font-size: ${(props) => props.theme.ref.fontSize['sm']};
    font-weight: ${(props) => props.theme.ref.fontWeight['regular']};
    text-transform: capitalize;
`;

interface InputWithLabelProps extends InputProps {
    label: string;
}

// TODO: criar um componente para o register, para separar UI das regras de negócio.
const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, name, ...props }) => {
    const { register } = useFormContext();

    return (
        <InputWithLabelContainer>
            <LabelStyled htmlFor={name}>{label}</LabelStyled>
            <Input id={name} {...props} {...register(`${name}`)} ref={null} />
        </InputWithLabelContainer>
    );
};

export default InputWithLabel;
