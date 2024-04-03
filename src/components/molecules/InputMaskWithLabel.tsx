import React from 'react';

import styled from 'styled-components';

import Field from '@/src/core/components/Form/Field';

import InputCustomMask, { InputCustomMaskProps } from '../atoms/InputMask';
import Label from '../atoms/Label';

const InputMaskWithLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.ref.spacing['spacing_8']};
`;

interface InputMaskWithLabelProps extends InputCustomMaskProps {
    label: string;
}

const InputMaskWithLabel: React.FC<InputMaskWithLabelProps> = ({ label, name, ...props }) => {
    return (
        <InputMaskWithLabelContainer>
            <Label data-testid={`label-${name}-testid`} htmlFor={name}>
                {label}
            </Label>

            <Field name={`${name}`} render={<InputCustomMask mask={'(99) 99999-9999'} />} {...props} />
        </InputMaskWithLabelContainer>
    );
};

export default InputMaskWithLabel;
