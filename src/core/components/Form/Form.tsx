import React from 'react';

import {
    UseFormRegisterReturn,
    UseFormRegister,
    useFormContext,
    SubmitHandler,
    FieldValues,
    useForm,
} from 'react-hook-form';

interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    children: React.ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
    const { handleSubmit, register } = useForm<FieldValues>();

    return (
        <form onSubmit={handleSubmit(onSubmit)} {...props}>
            {Array.isArray(children)
                ? children.map((child) => {
                      return child.props.name
                          ? React.createElement(child.type, {
                                ...{
                                    ...child.props,
                                    register,
                                    key: child.props.name,
                                },
                            })
                          : child;
                  })
                : children}
        </form>
    );
};

export type { UseFormRegisterReturn, UseFormRegister, SubmitHandler, FieldValues };

export { useFormContext, useForm };

export default Form;
