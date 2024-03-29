import React from 'react';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ ...props }) => {
    return <input {...props} />;
};

export default Input;
