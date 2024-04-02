import React from 'react';

import styled from 'styled-components';

import Field from '@/src/core/components/Field/Field';

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

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, name }) => {
    return (
        <InputWithLabelContainer>
            <Label data-testid={`label-${name}-testid`} htmlFor={name}>
                {label}
            </Label>

            <Field name={`${name}`} render={<Input />} />
        </InputWithLabelContainer>
    );
};

export default InputWithLabel;
