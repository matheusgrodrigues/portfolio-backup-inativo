'use client'

import React from 'react'

import { useCallback } from 'react'

import styled from 'styled-components'

import { ThemeProvider } from '../config/theme/helpers/theme-provider'
import { darkTheme, themeLight } from '../config/theme'

import { useDarkMode } from '../core/hooks/useDarkMode'

import { Header, Footer } from '../components/Organisms'
import { Button, Display, Text } from '../components/Atoms'

const BriefDescriptionStyled = styled.div`
    flex-direction: column;
    background: ${(props) => props.theme.ref.colors.color_white};
    min-height: 100vh;
    display: flex;
    width: 100%;

    & > [id='o-footer'] {
        margin-top: auto;
    }
`

const Home = () => {
    const { themeToggler, theme } = useDarkMode()

    const handleSubmitContactForm = useCallback(() => null, [])
    const handleDownloadCV = useCallback(() => null, [])

    return (
        <ThemeProvider theme={theme === 'light' ? themeLight : darkTheme}>
            <BriefDescriptionStyled>
                <Header handleToggleTheme={themeToggler} avatar={{ src: '/images/avatar.jpeg', alt: '' }} />

                <Display fontWeight="semibold" $variant="lg" color="gradient">
                    Programador Frontend
                </Display>
                <Display fontWeight="semibold" $variant="lg" color="gray900">
                    apaixonado por criação de interfaces inovadoras
                </Display>

                <Text fontWeight="semibold" $variant="xl" color="gray50">
                    Visite meu perfil no Linkedin e explore meus projetos no GitHub para descobrir como minhas
                    habilidades podem agregar valor á sua equipe.
                </Text>

                <Button
                    $background="color_white"
                    $fontWeight="fw_semibold"
                    $fontSize="fs_textMd"
                    $variant="lg"
                    onClick={handleDownloadCV}
                    $color="color_gray500"
                >
                    Download CV
                </Button>

                <Button
                    $background="color_white"
                    $fontWeight="fw_semibold"
                    $fontSize="fs_textMd"
                    $variant="lg"
                    onClick={handleSubmitContactForm}
                    $color="color_gray500"
                >
                    Entre em Contato
                </Button>
            </BriefDescriptionStyled>

            <Footer
                linkedinUrl={'https://www.linkedin.com/in/matheusgomes/'}
                githubUrl={'https://github.com/matheusgrodrigues'}
                siteUrl={'https://matheusgomesdev.com.br'}
            />
        </ThemeProvider>
    )
}

export default Home
