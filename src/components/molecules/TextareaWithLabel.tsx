import React from 'react';

import styled from 'styled-components';

import { useFormContext } from '@/src/core/components/Form/Form';

import Label from '../atoms/Label';
import Textarea, { TextareaProps } from '../atoms/Textarea';

const TextareaWithLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.ref.spacing['spacing_8']};
`;

interface TextareaWithLabelProps extends TextareaProps {
    label: string;
}

// TODO: criar um componente para o register, para separar UI das regras de negócio.
const TextareaWithLabel: React.FC<TextareaWithLabelProps> = ({ label, name, ...props }) => {
    const { register } = useFormContext();

    return (
        <TextareaWithLabelContainer>
            <Label data-testid={`label-${name}-testid`} htmlFor={name}>
                {label}
            </Label>
            <Textarea id={name} {...props} {...register(`${name}`)} ref={null} />
        </TextareaWithLabelContainer>
    );
};

export default TextareaWithLabel;
