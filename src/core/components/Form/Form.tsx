import React from 'react';

import { SubmitHandler, useForm, Form, FormProps } from 'react-hook-form';

interface FieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Field: React.FC<FieldProps> = ({ name, ...props }) => {
    const { register } = useForm();

    return <input {...props} {...register(`${name}`)} />;
};

export type { SubmitHandler, FormProps };

export { useForm, Field };

export default Form;
