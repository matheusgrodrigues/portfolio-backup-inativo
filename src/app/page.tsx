'use client';

import React, { useCallback, useContext, useRef } from 'react';

import styled from 'styled-components';

import { darkTheme, themeLight, screen, lineHeight } from '../config/theme/theme';

import { GlobalContext } from '../core/context/GlobalContext';
import useTranslation from '../core/hooks/useTranslation';
import ThemeProvider from '../core/utils/theme-utils/theme-provider';
import useDarkMode from '../core/hooks/useDarkMode';
import Modal, { ModalRef } from '../core/components/Modal/Modal';

import Display from '../components/atoms/Display';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import Avatar from '../components/atoms/Avatar';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';

interface ModalContactProps {
    modalContactRef: React.RefObject<ModalRef>;
}

const ModalContact: React.FC<ModalContactProps> = ({ modalContactRef }) => {
    const { toast } = useContext(GlobalContext);

    return (
        <Modal ref={modalContactRef}>
            <h1>Layout aqui</h1>

            <Button onClick={toast}>Show toast GlobalContext</Button>
        </Modal>
    );
};

const Container = styled.div`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-right: ${({ theme }) => theme.ref.spacing.spacing_20};
    padding-left: ${({ theme }) => theme.ref.spacing.spacing_20};
    padding-top: ${({ theme }) => theme.ref.spacing.spacing_64};

    ${({ theme }) => screen('breakpoint_md', `padding-top: ${theme.ref.spacing.spacing_96};`)}

    background: ${({ theme }) =>
        theme.name === 'light' ? theme.ref.colors['color_white'] : theme.ref.colors['color_gray900']};

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
        line-height: ${({ theme }) => lineHeight(theme.ref.fontSize['fontSize_textXl'])};
    }
`;

const ActionButton = styled.div`
    justify-content: center;
    display: flex;
    margin: ${({ theme }) => theme.ref.spacing.spacing_32} 0;
    gap: ${({ theme }) => theme.ref.spacing.spacing_16};
`;

const Home = () => {
    const { themeToggler, theme } = useDarkMode();

    const { t } = useTranslation();

    const modalContactRef = useRef<ModalRef>(null);

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
        <ThemeProvider theme={theme === 'light' ? themeLight : darkTheme}>
            <Header themeToggler={themeToggler} />

            <Container>
                <BriefDescription>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
                        <Avatar $variant="md" src={'/images/avatar.jpeg'} alt={''} />

                        <div>
                            <Display variant="primary" size="lg">
                                {displayName}
                            </Display>

                            <Display
                                styledProps={{
                                    $color: theme === 'light' ? 'color_gray900' : 'color_white',
                                }}
                                size="lg"
                            >
                                {displayDescription}
                            </Display>
                        </div>

                        <Text
                            styledProps={{
                                $color: theme === 'light' ? 'color_gray900' : 'color_white',
                            }}
                        >
                            {description}
                        </Text>
                    </div>

                    <ActionButton>
                        <Button
                            data-testid="button-downloadCV"
                            styledProps={{
                                $color: theme === 'light' ? 'color_gray500' : 'color_white',
                            }}
                            onClick={handleDownloadCV}
                            variant="link"
                            size="md"
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

            <ModalContact modalContactRef={modalContactRef} />
        </ThemeProvider>
    );
};

export default Home;
