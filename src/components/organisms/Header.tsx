import React from 'react';

import styled, { useTheme } from 'styled-components';

import { Icon } from '../atoms';

const HeaderStyled = styled.div`
    justify-content: end;
    align-items: end;
    background: ${({ theme }) =>
        theme.name === 'light' ? theme.ref.colors['color_white'] : theme.ref.colors['color_gray900']};
    padding: 0 ${({ theme }) => theme.ref.spacing.sp32};
    display: flex;
    height: 72px;
    width: 100%;
`;

interface HeaderProps {
    themeToggler: () => void;
}

export const Header: React.FC<HeaderProps> = ({ themeToggler }) => {
    const { name, ref } = useTheme();

    return (
        <HeaderStyled>
            <Icon
                onClick={themeToggler}
                width={32}
                height={32}
                style={{ color: name === 'dark' ? ref.colors['color_white'] : ref.colors['color_gray900'] }}
                icon="sun"
            />
        </HeaderStyled>
    );
};
