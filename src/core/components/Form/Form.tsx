import React from 'react';

import {
    UseFormRegisterReturn,
    UseFormRegister,
    useFormContext,
    SubmitHandler,
    FormProvider,
    FieldValues,
    useForm,
} from 'react-hook-form';

interface FormProps
    extends Omit<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'onSubmit'> {
    children: React.ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
}

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
    const methods = useForm<FieldValues>();

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} style={{ width: '100%' }}>
                {children}
            </form>
        </FormProvider>
    );
};

export type { UseFormRegisterReturn, UseFormRegister, SubmitHandler, FieldValues };

export { useFormContext, useForm };

export default Form;
