import React from 'react';

import styled, { useTheme } from 'styled-components';

import { screen } from '@/src/config/theme/theme';

import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

interface HeaderProps {
    themeToggler: () => void;
}

const Header: React.FC<HeaderProps> = ({ themeToggler }) => {
    const { name, ref } = useTheme();

    return (
        <HeaderStyled>
            <Button variant="link" onClick={themeToggler}>
                <Icon
                    height={32}
                    width={32}
                    style={{ color: name === 'dark' ? ref.colors['white'] : ref.colors['gray900'] }}
                    icon="sun"
                />
            </Button>
        </HeaderStyled>
    );
};

const HeaderStyled = styled.div`
    justify-content: end;
    align-items: end;
    background: ${({ theme }) => (theme.name === 'light' ? theme.ref.colors['white'] : theme.ref.colors['gray900'])};

    padding: 0 ${({ theme }) => theme.ref.spacing['spacing_20']};

    ${({ theme }) => screen('md', `padding: 0 ${theme.ref.spacing['spacing_32']}`)};

    display: flex;
    height: 72px;
    width: 100%;
`;
export default Header;
