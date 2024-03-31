import React from 'react';

import styled from 'styled-components';

import { useFormContext } from '@/src/core/components/Form/Form';

import Label from '../atoms/Label';
import Input, { InputProps } from '../atoms/Input';

const InputWithLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.ref.spacing['spacing_8']};
`;

interface InputWithLabelProps extends InputProps {
    label: string;
}

// TODO: criar um componente para o register, para separar UI das regras de negócio.
const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, name, ...props }) => {
    const { register } = useFormContext();

    return (
        <InputWithLabelContainer>
            <Label data-testid={`label-${name}-testid`} htmlFor={name}>
                {label}
            </Label>
            <Input id={name} {...props} {...register(`${name}`)} ref={null} />
        </InputWithLabelContainer>
    );
};

export default InputWithLabel;
