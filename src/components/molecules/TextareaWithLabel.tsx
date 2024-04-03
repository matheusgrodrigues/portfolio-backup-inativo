import React from 'react';

import styled from 'styled-components';

import Field from '@/src/core/components/Form/Field';

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

const TextareaWithLabel: React.FC<TextareaWithLabelProps> = ({ label, name, ...props }) => {
    return (
        <TextareaWithLabelContainer>
            <Label data-testid={`label-${name}`} htmlFor={name}>
                {label}
            </Label>

            <Field name={`${name}`} render={<Textarea />} {...props} />
        </TextareaWithLabelContainer>
    );
};

export default TextareaWithLabel;
