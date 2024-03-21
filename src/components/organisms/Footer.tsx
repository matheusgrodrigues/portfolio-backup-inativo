import React from 'react'

import process from 'process'

import { useRouter } from 'next/navigation'

import styled, { useTheme } from 'styled-components'

import { Icon } from '../atoms/Icon'

const FooterStyled = styled.footer`
    justify-content: space-between;
    background: ${({ theme }) =>
        theme.name === 'light' ? theme.ref.colors['color_white'] : theme.ref.colors['color_gray900']};
    padding: 0 ${({ theme }) => theme.ref.spacing.sp16};
    display: flex;
    height: 72px;
    width: 100%;
`

export const Footer = () => {
    const router = useRouter()

    const { name, ref } = useTheme()

    const date = new Date()

    return (
        <FooterStyled data-testid="footer">
            <p style={{ color: name === 'dark' ? ref.colors['color_white'] : ref.colors['color_gray900'] }}>
                © {date.getFullYear()}{' '}
                <a href={`${process.env.NEXT_PUBLIC_SITE_URL}`}>{`${process.env.NEXT_PUBLIC_BRAND_NAME}`}</a>.
            </p>

            <div style={{ display: 'flex', gap: ref.spacing.sp8 }}>
                <Icon
                    callback={() => router.push(`${process.env.NEXT_PUBLIC_GITHUB_URL}`)}
                    height={32}
                    width={32}
                    style={{ color: name === 'dark' ? ref.colors['color_white'] : ref.colors['color_gray900'] }}
                    icon="github-square"
                />
                <Icon
                    callback={() => router.push(`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`)}
                    height={32}
                    width={32}
                    style={{ color: name === 'dark' ? ref.colors['color_white'] : ref.colors['color_gray900'] }}
                    icon="linkedin-rounded"
                />
            </div>
        </FooterStyled>
    )
}
