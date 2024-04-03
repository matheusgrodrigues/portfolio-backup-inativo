import React, { forwardRef, useImperativeHandle } from 'react';

import styled from 'styled-components';

import * as RadixCheckbox from '@radix-ui/react-checkbox';

import Icon from './Icon';

const CheckboxRoot = styled(RadixCheckbox.Root)`
    background-color: ${(props) => props.theme.ref.colors['white']};
    font-weight: ${(props) => props.theme.ref.fontWeight['regular']};
    font-size: ${(props) => props.theme.ref.fontSize['md']};
    outline: 0;
    padding: ${(props) => `${props.theme.ref.spacing['spacing_12']}`};
    border-radius: ${(props) => props.theme.ref.borderRadius['radius_6']};
    border: 1px solid ${(props) => props.theme.ref.colors['gray500']};
    height: 20px;
    width: 20px;
    color: ${(props) => props.theme.ref.colors['gray500']};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CheckboxIndicator = styled(RadixCheckbox.Indicator)<RadixCheckbox.CheckboxIndicatorProps>`
    color: ${(props) => props.theme.ref.colors['primary600']};
    margin-top: ${(props) => props.theme.ref.spacing['spacing_8']};
`;

export interface CheckboxProps extends RadixCheckbox.CheckboxProps {}

const Checkbox: React.ForwardRefRenderFunction<React.RefAttributes<HTMLInputElement>, CheckboxProps> = (props, ref) => {
    useImperativeHandle(ref, () => ({}), []);

    return (
        <CheckboxRoot {...props}>
            <CheckboxIndicator>
                <Icon icon="check" width={23} height={23} />
            </CheckboxIndicator>
        </CheckboxRoot>
    );
};

export default forwardRef(Checkbox);
