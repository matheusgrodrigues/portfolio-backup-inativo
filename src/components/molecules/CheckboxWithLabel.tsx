import React from 'react';

import styled from 'styled-components';

import { useForm } from '@/src/core/components/Form/Form';

import Label from '../atoms/Label';
import Checkbox, { CheckboxProps } from '../atoms/Checkbox';

const CheckboxWithLabelContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.ref.spacing['spacing_12']};

    & > label {
        text-transform: initial;
        font-size: ${(props) => props.theme.ref.fontSize['md']};
    }
`;

interface CheckboxWithLabelProps extends CheckboxProps {
    label: string;
}

// TODO: criar um componente para o register, para separar UI das regras de negócio.
const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({ label, name, ...props }) => {
    const { register } = useForm();

    return (
        <CheckboxWithLabelContainer>
            <Checkbox id={name} {...props} {...register(`${name}`)} />
            <Label data-testid={`label-${name}-testid`} htmlFor={name}>
                {label}
            </Label>
        </CheckboxWithLabelContainer>
    );
};

export default CheckboxWithLabel;
