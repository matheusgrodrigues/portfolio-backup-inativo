import React from 'react';

import styled, { useTheme } from 'styled-components';

import { bpHelper } from '@/src/config/theme/ref/breakpoint';

import { Avatar, Icon } from '../atoms';

const HeaderStyled = styled.div`
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) =>
        theme.name === 'light' ? theme.ref.colors['color_white'] : theme.ref.colors['color_gray900']};
    padding: 0 ${({ theme }) => theme.ref.spacing.sp16};
    display: flex;
    height: 72px;
    width: 100%;

    ${() => bpHelper('bp_sm', `height: 82px;`)};
`;

interface HeaderProps {
    themeToggler: () => void;
}

export const Header: React.FC<HeaderProps> = ({ themeToggler }) => {
    const { name, ref } = useTheme();

    return (
        <HeaderStyled>
            <Avatar src={'/images/avatar.jpeg'} alt={''} />
            <Icon
                onClick={themeToggler}
                width={32}
                height={32}
                icon="sun"
                style={{ color: name === 'dark' ? ref.colors['color_white'] : ref.colors['color_gray900'] }}
            />
        </HeaderStyled>
    );
};
