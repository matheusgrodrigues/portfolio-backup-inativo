import React from 'react';

import { useRouter } from 'next/navigation';

import process from 'process';

import styled, { useTheme } from 'styled-components';

import Icon from '../atoms/Icon';
import Button from '../atoms/Button';

const FooterStyled = styled.footer`
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => (theme.name === 'light' ? theme.ref.colors['white'] : theme.ref.colors['gray900'])};
    padding: 0 ${({ theme }) => theme.ref.spacing.spacing_16};
    display: flex;
    height: 102px;
    width: 100%;
`;

const Footer = () => {
    const router = useRouter();

    const { name, ref } = useTheme();

    const date = new Date();

    return (
        <FooterStyled data-testid="footer">
            <p style={{ color: name === 'dark' ? ref.colors['white'] : ref.colors['gray900'] }}>
                © {date.getFullYear()}{' '}
                <a href={`${process.env.NEXT_PUBLIC_SITE_URL}`}>{`${process.env.NEXT_PUBLIC_BRAND_NAME}`}</a>.
            </p>

            <div style={{ display: 'flex', gap: ref.spacing.spacing_8 }}>
                <Button variant="link" onClick={() => router.push(`${process.env.NEXT_PUBLIC_GITHUB_URL}`)}>
                    <Icon
                        height={32}
                        width={32}
                        style={{ color: name === 'dark' ? ref.colors['white'] : ref.colors['gray900'] }}
                        icon="github-square"
                    />
                </Button>

                <Button variant="link" onClick={() => router.push(`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`)}>
                    <Icon
                        height={32}
                        width={32}
                        style={{ color: name === 'dark' ? ref.colors['white'] : ref.colors['gray900'] }}
                        icon="linkedin-rounded"
                    />
                </Button>
            </div>
        </FooterStyled>
    );
};

export default Footer;
