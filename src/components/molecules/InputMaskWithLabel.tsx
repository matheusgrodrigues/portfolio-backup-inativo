import React from 'react';

import styled from 'styled-components';

import Field from '@/src/core/components/Form/Field';

import InputCustomMask, { InputCustomMaskProps } from '../atoms/InputMask';
import Label from '../atoms/Label';

interface InputMaskWithLabelProps extends InputCustomMaskProps {
    label: string;
}

const InputMaskWithLabel: React.FC<InputMaskWithLabelProps> = ({ mask, label, name, ...props }) => {
    return (
        <InputMaskWithLabelContainer>
            <Label data-testid={`label-${name}`} htmlFor={name}>
                {label}
            </Label>

            <Field name={`${name}`} render={<InputCustomMask mask={mask} />} {...props} />
        </InputMaskWithLabelContainer>
    );
};

const InputMaskWithLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.ref.spacing['spacing_8']};
`;

export default InputMaskWithLabel;
