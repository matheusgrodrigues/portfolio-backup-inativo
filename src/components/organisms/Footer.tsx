import React from 'react'

import process from 'process'

import { useRouter } from 'next/navigation'

import styled from 'styled-components'

import { Icon } from '../atoms/Icon'

const FooterStyled = styled.footer`
    background: ${(props) => props.theme.ref.colors['color_gray900']};
`

export const Footer = () => {
    const router = useRouter()

    const date = new Date()

    return (
        <FooterStyled data-testid="footer" id="footer">
            <p>
                © {date.getFullYear()}{' '}
                <a href={`${process.env.NEXT_PUBLIC_SITE_URL}`}>{`${process.env.NEXT_PUBLIC_BRAND_NAME}`}</a>.
            </p>

            <div>
                <Icon
                    icon="github-square"
                    callback={() => router.push(`${process.env.NEXT_PUBLIC_GITHUB_URL}`)}
                    height={32}
                    width={32}
                />
                <Icon
                    icon="linkedin-rounded"
                    callback={() => router.push(`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`)}
                    height={32}
                    width={32}
                />
            </div>
        </FooterStyled>
    )
}
