import React, { forwardRef, useImperativeHandle } from 'react';

import styled from 'styled-components';

import { PatternFormat } from 'react-number-format';

const InputMaskStyled = styled.input`
    background-color: ${(props) => props.theme.ref.colors['white']};
    border-radius: ${(props) => props.theme.ref.borderRadius.radius_8};
    font-weight: ${(props) => props.theme.ref.fontWeight['regular']};
    font-size: ${(props) => props.theme.ref.fontSize['md']};
    outline: 0;
    padding: ${(props) => `${props.theme.ref.spacing['spacing_12']}`};
    border: 1px solid ${(props) => props.theme.ref.colors['gray500']};
    height: 48px;
    width: 100%;
    color: ${(props) => props.theme.ref.colors['gray500']};
`;

export interface InputMaskProps
    extends Omit<
        React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
        'defaultValue' | 'value' | 'type'
    > {
    defaultValue?: 'string' | 'number' | null | undefined;
    value?: 'string' | 'number' | null | undefined;
    type: 'telefone';
}

const InputMask: React.ForwardRefRenderFunction<React.RefAttributes<object>, InputMaskProps> = (
    { type, name, ...props },
    ref
) => {
    useImperativeHandle(ref, () => ({}), []);

    return (
        <>
            {type === 'telefone' && (
                <PatternFormat
                    allowEmptyFormatting
                    customInput={(props) => <InputMaskStyled name={name} {...props} />}
                    format="+1 (###) #### ###"
                    value={props.value}
                    mask="_"
                />
            )}
        </>
    );
};

export default forwardRef(InputMask);
