import React from 'react';

import {
    UseFormRegisterReturn,
    UseFormRegister,
    SubmitHandler,
    FieldValues,
    useForm,
    FormProvider,
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

export { useForm };

export default Form;
