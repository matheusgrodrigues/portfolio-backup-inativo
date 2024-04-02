import React from 'react';

import styled from 'styled-components';

import Label from '../atoms/Label';
import Input, { InputProps } from '../atoms/Input';
import { Controller, useFormContext } from 'react-hook-form';

const InputWithLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.ref.spacing['spacing_8']};
`;

interface InputWithLabelProps extends InputProps {
    label: string;
}

// TODO: criar um componente para o register, para separar UI das regras de negócio.
const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, name }) => {
    const { control } = useFormContext();

    return (
        <InputWithLabelContainer>
            <Label data-testid={`label-${name}-testid`} htmlFor={name}>
                {label}
            </Label>
            <Controller
                defaultValue={''}
                control={control}
                name={`${name}`}
                render={({ field }) => <Input id={name} {...field} />}
            />
        </InputWithLabelContainer>
    );
};

export default InputWithLabel;
