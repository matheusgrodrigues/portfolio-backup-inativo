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
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: ${({ theme }) =>
        theme.name === 'light' ? theme.ref.colors['color_white'] : theme.ref.colors['color_gray900']};
    min-height: 100vh;
    display: flex;
    width: 100%;
    gap: ${({ theme }) => theme.ref.spacing.sp32};

    & > [id='footer'] {
        margin-top: auto;
    }
`

const ActionButtonStyled = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing.sp16};
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
            <Header themeToggler={themeToggler} />

            <BriefDescriptionStyled>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <Display fontWeight="semibold" $variant="lg" color={theme === 'light' ? 'gray900' : 'primary600'}>
                        {displayName} <br /> {displayDescription}
                    </Display>

                    <Text fontWeight="semibold" $variant="xl" color={theme === 'light' ? 'gray900' : 'gray50'}>
                        {description}
                    </Text>
                </div>

                <ActionButtonStyled>
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
                </ActionButtonStyled>
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
