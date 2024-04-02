import React from 'react';

import styled from 'styled-components';

import Field from '@/src/core/components/Form/Field';

import Label from '../atoms/Label';
import InputMask, { InputMaskProps } from '../atoms/InputMask';

const InputMaskWithLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.ref.spacing['spacing_8']};
`;

interface InputMaskWithLabelProps extends InputMaskProps {
    label: string;
}

const InputMaskWithLabel: React.FC<InputMaskWithLabelProps> = ({ label, name, ...props }) => {
    return (
        <InputMaskWithLabelContainer>
            <Label data-testid={`label-${name}-testid`} htmlFor={name}>
                {label}
            </Label>

            <Field name={`${name}`} render={<InputMask type="telefone" ref={null} />} {...props} />
        </InputMaskWithLabelContainer>
    );
};

export default InputMaskWithLabel;
