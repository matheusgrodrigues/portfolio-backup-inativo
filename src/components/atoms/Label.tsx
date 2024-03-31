import React from 'react';

import * as RadixLabel from '@radix-ui/react-label';

import styled from 'styled-components';

const LabelRoot = styled(RadixLabel.Root)`
    color: ${(props) => props.theme.ref.colors['gray50']};
    font-size: ${(props) => props.theme.ref.fontSize['sm']};
    font-weight: ${(props) => props.theme.ref.fontWeight['regular']};
    text-transform: capitalize;
`;

interface LabelProps extends RadixLabel.LabelProps {}

const Label: React.FC<LabelProps> = ({ children, ...props }) => <LabelRoot {...props}>{children}</LabelRoot>;

export default Label;
