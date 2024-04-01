import React from 'react';

import styled from 'styled-components';

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

// TODO: criar um componente para o register, para separar UI das regras de negócio.
const InputMaskWithLabel: React.FC<InputMaskWithLabelProps> = ({ label, name, ...props }) => {
    return (
        <InputMaskWithLabelContainer>
            <Label data-testid={`label-${name}-testid`} htmlFor={name}>
                {label}
            </Label>

            <InputMask id={name} {...props} ref={null} />
        </InputMaskWithLabelContainer>
    );
};

export default InputMaskWithLabel;
