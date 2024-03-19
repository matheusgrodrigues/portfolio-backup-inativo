import React from 'react'

import process from 'process'

import { useRouter } from 'next/navigation'

import styled from 'styled-components'

import { Icon } from '../atoms/Icon'

const FooterStyled = styled.footer`
    background: ${(props) => props.theme.ref.colors['color_gray900']};
`

export interface FooterProps {
    linkedinUrl: string
    githubUrl: string
    siteUrl: string
}

export const Footer = ({ linkedinUrl, githubUrl, siteUrl }: FooterProps) => {
    const router = useRouter()

    const date = new Date()

    return (
        <FooterStyled data-testid="footer" id="footer">
            <p>
                © {date.getFullYear()} <a href={siteUrl}>{`${process.env.NEXT_PUBLIC_BRAND_NAME}`}</a>.
            </p>

            <div>
                <Icon icon="github-square" callback={() => router.push(githubUrl)} height={32} width={32} />
                <Icon icon="linkedin-rounded" callback={() => router.push(linkedinUrl)} height={32} width={32} />
            </div>
        </FooterStyled>
    )
}
