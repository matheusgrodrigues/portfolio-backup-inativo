import React from 'react';

import { Controller, useFormContext } from '@/src/core/components/Form/Form';
import { ErrorMessage } from '@hookform/error-message';

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
                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
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
