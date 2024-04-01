import React from 'react';

import { UseFormRegisterReturn, UseFormRegister, FieldValues } from '@/src/core/components/Form/Form';

interface FieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    register?: UseFormRegister<FieldValues>;
    render: (
        inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
        data: UseFormRegisterReturn
    ) => React.ReactElement;
}

export const Field: React.FC<FieldProps> = ({ render, register, ...props }) => {
    return render(props, register!(`${props.name}`));
};
export default Field;
