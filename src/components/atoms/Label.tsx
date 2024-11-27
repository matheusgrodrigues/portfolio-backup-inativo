import React from 'react';

import * as RadixLabel from '@radix-ui/react-label';

import styled from 'styled-components';

interface LabelProps extends RadixLabel.LabelProps {}

const Label: React.FC<LabelProps> = ({ children, ...props }) => <LabelRoot {...props}>{children}</LabelRoot>;

const LabelRoot = styled(RadixLabel.Root)`
    color: ${(props) => props.theme.ref.colors[props.theme.name === 'light' ? 'gray900' : 'gray50']};
    font-size: ${(props) => props.theme.ref.fontSize['sm']};
    font-weight: ${(props) => props.theme.ref.fontWeight['regular']};
    text-transform: capitalize;
`;

export default Label;
