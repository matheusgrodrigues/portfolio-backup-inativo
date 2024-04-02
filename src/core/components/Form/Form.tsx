import React from 'react';

import {
    UseFormRegisterReturn,
    UseFormRegister,
    useFormContext,
    SubmitHandler,
    FieldValues,
    useForm,
    FormProvider,
    useController,
} from 'react-hook-form';

interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    children: React.ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
    const methods = useForm<FieldValues>();

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
                {children}
            </form>
        </FormProvider>
    );
};

export type { UseFormRegisterReturn, UseFormRegister, SubmitHandler, FieldValues };

export { useFormContext, useForm, useController };

export default Form;
