import React, { HTMLInputTypeAttribute } from 'react';

import styled from 'styled-components';

import { ErrorMessage } from '@hookform/error-message';

import { Controller, useFormContext } from '@/src/core/components/Form/Form';

const LabelError = styled.p`
    margin-top: ${(props) => props.theme.ref.spacing['spacing_4']};
    font-size: ${(props) => props.theme.ref.fontSize['sm']};
    color: red;

    &:first-letter {
        text-transform: uppercase;
    }
`;

interface FieldProps {
    render: React.ReactElement;
    name: string;
    type?: HTMLInputTypeAttribute;
    id?: string;
}

export const Field: React.FC<FieldProps> = ({ render, name, type, id }) => {
    const { control, formState } = useFormContext();

    return (
        <Controller
            defaultValue={''}
            control={control}
            render={({ field }) => {
                const props =
                    type === 'checkbox'
                        ? { ...field, ref: null, checked: field.value, onCheckedChange: field.onChange }
                        : { ...field, ref: null };

                return (
                    <>
                        {React.cloneElement(render, {
                            ...props,
                            id: id ?? name,
                        })}

                        {formState.errors && (
                            <ErrorMessage
                                errors={formState.errors}
                                name={name}
                                render={({ message }) => <LabelError>{message}</LabelError>}
                            />
                        )}
                    </>
                );
            }}
            name={name}
        />
    );
};
export default Field;
