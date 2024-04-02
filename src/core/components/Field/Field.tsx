import React from 'react';

import { Controller, useFormContext } from '@/src/core/components/Form/Form';

interface FieldProps {
    render: React.ReactElement;
    name: string;
    id?: string;
}

export const Field: React.FC<FieldProps> = ({ name, render, id }) => {
    const { control } = useFormContext();

    return (
        <Controller
            defaultValue={''}
            control={control}
            render={({ field }) => React.cloneElement(render, { ...field, id: id ?? name })}
            name={name}
        />
    );
};
export default Field;
