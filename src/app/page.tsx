'use client';

import React, { useCallback } from 'react';

import { DefaultTheme } from 'styled-components/dist/types';
import styled from 'styled-components';

import { ThemeProvider } from '../config/theme/utils/theme-provider';
import { darkTheme, themeLight } from '../config/theme';
import { bpHelper } from '../config/theme/ref/breakpoint';

import useTranslation from '../core/hooks/useTranslation';
import { useDarkMode } from '../core/hooks/useDarkMode';

import { Button, Display, Text } from '../components/atoms';
import { Header, Footer } from '../components/organisms';

const ContainerStyled = styled.div`
    justify-content: center;
    flex-direction: column;
    align-items: center;

    padding-right: ${({ theme }) => theme.ref.spacing.sp20};
    padding-left: ${({ theme }) => theme.ref.spacing.sp20};
    padding-top: ${({ theme }) => theme.ref.spacing.sp64};

    ${({ theme }) => bpHelper('bp_md', `padding-top: ${theme.ref.spacing.sp96};`)}
    ${({ theme }) => bpHelper('bp_lg', `padding-top: ${theme.ref.spacing.sp128};`)}
    ${({ theme }) => bpHelper('bp_xl', `padding-top: ${theme.ref.spacing.sp160};`)}   

    background: ${({ theme }) =>
        theme.name === 'light' ? theme.ref.colors['color_white'] : theme.ref.colors['color_gray900']};

    min-height: calc(100vh - 82px);

    display: flex;
    width: 100%;

    & > footer {
        margin-top: auto;
    }
`;

const BriefDescriptionStyled = styled.div`
    flex-direction: column;
    text-align: center;
    max-width: 700px;
    display: flex;
    width: 100%;

    gap: ${({ theme }) => theme.ref.spacing.sp32};
`;

const ActionButtonStyled = styled.div`
    justify-content: center;
    display: flex;

    margin: ${({ theme }) => theme.ref.spacing.sp32} 0;
    gap: ${({ theme }) => theme.ref.spacing.sp16};
`;

const Home = () => {
    const { themeToggler, theme } = useDarkMode();

    const { t } = useTranslation();

    const handleSubmitContactForm = useCallback(() => null, []);
    const handleDownloadCV = useCallback(() => null, []);

    const [displayDescription, displayName, description] = [
        t('specific.home.brief_description.display_description'),
        t('specific.home.brief_description.display_name'),
        t('specific.home.brief_description.description'),
    ];

    const [buttonDownloadCV, buttonContact] = [
        t('specific.home.brief_description.button_download_cv'),
        t('specific.home.brief_description.button_contact'),
    ];

    return (
        <ThemeProvider theme={theme === 'light' ? (themeLight as DefaultTheme) : (darkTheme as DefaultTheme)}>
            <Header themeToggler={themeToggler} />

            <ContainerStyled>
                <BriefDescriptionStyled>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <div>
                            <Display
                                fontWeight="semibold"
                                $variant="lg"
                                color={theme === 'light' ? 'gray900' : 'primary600'}
                            >
                                {displayName}
                            </Display>

                            <Display
                                fontWeight="semibold"
                                $variant="lg"
                                color={theme === 'light' ? 'gray900' : 'color_white'}
                            >
                                {displayDescription}
                            </Display>
                        </div>

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

                <Footer />
            </ContainerStyled>
        </ThemeProvider>
    );
};

export default Home;
