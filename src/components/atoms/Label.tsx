import React from 'react';

import styled from 'styled-components';

const LabelStyled = styled.label`
    color: ${(props) => props.theme.ref.colors['gray50']};
    font-size: ${(props) => props.theme.ref.fontSize['sm']};
    font-weight: ${(props) => props.theme.ref.fontWeight['regular']};
    text-transform: capitalize;
`;

interface LabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {}

const Label: React.FC<LabelProps> = ({ children, ...props }) => <LabelStyled {...props}>{children}</LabelStyled>;

export default Label;
