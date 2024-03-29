import React from 'react';

import { UseFormRegisterReturn, UseFormRegister, SubmitHandler, FieldValues, useForm } from 'react-hook-form';

interface FormProps
    extends Omit<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'onSubmit'> {
    children: React.ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
    const { handleSubmit } = useForm<FieldValues>();

    return (
        <form onSubmit={handleSubmit(onSubmit)} {...props}>
            {children}
        </form>
    );
};

export type { UseFormRegisterReturn, UseFormRegister, SubmitHandler, FieldValues };

export { useForm };

export default Form;
