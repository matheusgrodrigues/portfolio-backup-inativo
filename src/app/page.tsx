'use client'

import React, { useCallback } from 'react'

import process from 'process'

import styled from 'styled-components'

import { ThemeProvider } from '../config/theme/utils/theme-provider'
import { darkTheme, themeLight } from '../config/theme'

import useTranslation from '../core/hooks/useTranslation'
import { useDarkMode } from '../core/hooks/useDarkMode'

import { Button, Display, Text } from '../components/atoms'
import { Header, Footer } from '../components/organisms'

const BriefDescriptionStyled = styled.div`
    flex-direction: column;
    background: ${(props) => props.theme.ref.colors['color_gray900']};
    min-height: 100vh;
    display: flex;
    width: 100%;

    & > [id='footer'] {
        margin-top: auto;
    }
`

const Home = () => {
    const { themeToggler, theme } = useDarkMode()

    const { t } = useTranslation()

    const handleSubmitContactForm = useCallback(() => null, [])
    const handleDownloadCV = useCallback(() => null, [])

    const [displayDescription, displayName, description] = [
        t('specific.home.brief_description.display_description'),
        t('specific.home.brief_description.display_name'),
        t('specific.home.brief_description.description'),
    ]

    const [buttonDownloadCV, buttonContact] = [
        t('specific.home.brief_description.button_download_cv'),
        t('specific.home.brief_description.button_contact'),
    ]

    return (
        <ThemeProvider theme={theme === 'light' ? themeLight : darkTheme}>
            <BriefDescriptionStyled>
                <Header handleToggleTheme={themeToggler} avatar={{ src: '/images/avatar.jpeg', alt: '' }} />

                <Display fontWeight="semibold" $variant="lg" color="gradient">
                    {displayName}
                </Display>

                <Display fontWeight="semibold" $variant="lg" color="gray900">
                    {displayDescription}
                </Display>

                <Text fontWeight="semibold" $variant="xl" color="gray50">
                    {description}
                </Text>

                <Button
                    $background="color_white"
                    $fontWeight="fw_semibold"
                    $fontSize="fs_textMd"
                    $variant="lg"
                    onClick={handleDownloadCV}
                    $color="color_gray500"
                >
                    {buttonDownloadCV}
                </Button>

                <Button
                    $background={theme === 'light' ? 'color_white' : 'color_gradient_primary600'}
                    $fontWeight="fw_semibold"
                    $fontSize="fs_textMd"
                    $variant="lg"
                    onClick={handleSubmitContactForm}
                    $color={theme === 'light' ? 'color_gray500' : 'color_white'}
                >
                    {buttonContact}
                </Button>
            </BriefDescriptionStyled>

            <Footer
                linkedinUrl={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
                githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
                siteUrl={`${process.env.NEXT_PUBLIC_SITE_URL}`}
            />
        </ThemeProvider>
    )
}

export default Home
