'use client';

import React, { useCallback, useContext, useRef } from 'react';

import styled, { useTheme } from 'styled-components';

import { screen, lineHeight } from '../config/theme/theme';

import { UIContext } from '../core/context/UIContext';
import useTranslation from '../core/hooks/useTranslation';

import Display from '../components/atoms/Display';
import Avatar from '../components/atoms/Avatar';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';

import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

import ModalContact, { ModalContactRef } from '../components/pages/ModalContact/ModalContact';

const Container = styled.div`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-right: ${({ theme }) => theme.ref.spacing.spacing_20};
    padding-left: ${({ theme }) => theme.ref.spacing.spacing_20};
    padding-top: ${({ theme }) => theme.ref.spacing.spacing_64};

    ${({ theme }) => screen('md', `padding-top: ${theme.ref.spacing.spacing_96};`)}

    background: ${({ theme }) => (theme.name === 'light' ? theme.ref.colors['white'] : theme.ref.colors['gray900'])};

    min-height: calc(100vh - 72px);
    display: flex;
    width: 100%;

    & > footer {
        margin-top: auto;
    }
`;

const BriefDescription = styled.div`
    flex-direction: column;
    text-align: center;
    max-width: 700px;
    display: flex;
    width: 100%;
    gap: ${({ theme }) => theme.ref.spacing.spacing_32};

    & p {
        line-height: ${({ theme }) => lineHeight(theme.ref.fontSize['lg'])};
    }
`;

const ActionButton = styled.div`
    justify-content: center;
    display: flex;
    margin: ${({ theme }) => theme.ref.spacing['spacing_32']} 0;
    gap: ${({ theme }) => theme.ref.spacing['spacing_24']};
`;

const Home = () => {
    const theme = useTheme();

    const { themeToggler, themeName, toast } = useContext(UIContext);

    const modalContactRef = useRef<ModalContactRef>(null);

    const { t } = useTranslation();

    const [displayDescription, displayName, description] = [
        t('specific.home.brief_description.display_description'),
        t('specific.home.brief_description.display_name'),
        t('specific.home.brief_description.description'),
    ];

    const [buttonDownloadCV, buttonContact] = [
        t('specific.home.brief_description.button_download_cv'),
        t('specific.home.brief_description.button_contact'),
    ];

    const handleSubmitContactForm = useCallback(() => modalContactRef.current?.setIsOpen(true), []);

    const handleDownloadCV = useCallback(() => {
        const fileName = 'curriculo-matheus-gomes-rodrigues-de-jesus';

        const pdfUrl = `/images/${fileName}.pdf`;

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = fileName;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }, []);

    return (
        <>
            <button
                onClick={() =>
                    toast.current?.show({
                        type: 'success',
                        title: `${t('validation.messages.title.success')}`,
                        description: `${t('validation.messages.message.success')}`,
                    })
                }
            >
                Show TOast
            </button>

            <Header themeToggler={themeToggler} />

            <Container>
                <BriefDescription>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: theme.ref.spacing['spacing_32'],
                        }}
                    >
                        <Avatar $variant="md" src={'/images/avatar.jpeg'} alt={''} />

                        <div>
                            <Display variant="primary" size="xl">
                                {displayName}
                            </Display>

                            <Display
                                styledProps={{
                                    $color: themeName === 'light' ? 'gray900' : 'white',
                                }}
                                size="xl"
                            >
                                {displayDescription}
                            </Display>
                        </div>

                        <Text
                            styledProps={{
                                $color: themeName === 'light' ? 'gray900' : 'white',
                            }}
                        >
                            {description}
                        </Text>
                    </div>

                    <ActionButton>
                        <Button
                            data-testid="button-downloadCV"
                            styledProps={{
                                $color: themeName === 'light' ? 'gray500' : 'white',
                            }}
                            onClick={handleDownloadCV}
                            variant="link"
                        >
                            {buttonDownloadCV}
                        </Button>

                        <Button
                            data-testid="button-contact"
                            variant="primary"
                            onClick={handleSubmitContactForm}
                            size="md"
                        >
                            {buttonContact}
                        </Button>
                    </ActionButton>
                </BriefDescription>

                <Footer />
            </Container>

            <ModalContact ref={modalContactRef} />
        </>
    );
};

export default Home;
