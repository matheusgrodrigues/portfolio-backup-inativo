import React from 'react';

import styled, { useTheme } from 'styled-components';

import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

const HeaderStyled = styled.div`
    justify-content: end;
    align-items: end;
    background: ${({ theme }) => (theme.name === 'light' ? theme.ref.colors['white'] : theme.ref.colors['gray900'])};
    padding: 0 ${({ theme }) => theme.ref.spacing.spacing_32};
    display: flex;
    height: 72px;
    width: 100%;
`;

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

export default Header;
