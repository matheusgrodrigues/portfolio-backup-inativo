'use client'

import { useCallback } from 'react'

import styled from 'styled-components'

import { ThemeProvider } from '../config/theme/helpers/theme-provider'
import { darkTheme, themeLight } from '../config/theme'

import { useDarkMode } from '../core/hooks/useDarkMode'

import { Button, Display, Text } from '../components/Atoms'
import { Header, Footer } from '../components/Organisms'

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

                <Display $variant="lg" fontWeight="semibold" color="gradient">
                    Programador Frontend
                </Display>
                <Display $variant="lg" fontWeight="semibold" color="gray900">
                    apaixonado por criação de interfaces inovadoras
                </Display>

                <Text fontWeight="semibold" $variant="xl" color="gray50">
                    Visite meu perfil no Linkedin e explore meus projetos no GitHub para descobrir como minhas habilidades podem agregar valor á sua
                    equipe.
                </Text>

                <Button
                    $variant="lg"
                    $background="color_white"
                    $fontSize="fs_textMd"
                    $fontWeight="fw_semibold"
                    $color="color_gray500"
                    onClick={handleDownloadCV}
                >
                    Download CV
                </Button>

                <Button
                    $variant="lg"
                    $background="color_white"
                    $fontSize="fs_textMd"
                    $fontWeight="fw_semibold"
                    $color="color_gray500"
                    onClick={handleSubmitContactForm}
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
