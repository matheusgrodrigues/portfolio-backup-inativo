import React from 'react';

import styled from 'styled-components';

import { ErrorMessage } from '@hookform/error-message';

import { Controller, useFormContext } from '@/src/core/components/Form/Form';

const LabelError = styled.p`
    color: red;

    &:first-letter {
        text-transform: uppercase;
    }
`;

interface FieldProps {
    render: React.ReactElement;
    name: string;
    id?: string;
}

export const Field: React.FC<FieldProps> = ({ name, render, id }) => {
    const { control, formState } = useFormContext();

    return (
        <Controller
            defaultValue={''}
            control={control}
            render={({ field }) => {
                return (
                    <>
                        {React.cloneElement(render, {
                            ...{ ...field, ref: null },
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
