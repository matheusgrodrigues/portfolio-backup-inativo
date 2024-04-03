import React from 'react';

import styled from 'styled-components';

import Field from '@/src/core/components/Form/Field';

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

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({ label, name, ...props }) => {
    return (
        <CheckboxWithLabelContainer>
            <Field name={`${name}`} type="checkbox" render={<Checkbox {...props} />} />

            <Label data-testid={`label-${name}`} htmlFor={name}>
                {label}
            </Label>
        </CheckboxWithLabelContainer>
    );
};

export default CheckboxWithLabel;
