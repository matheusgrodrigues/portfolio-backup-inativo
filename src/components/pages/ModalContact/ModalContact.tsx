import React, { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';

import styled, { useTheme } from 'styled-components';

import { screen } from '@/src/config/theme/theme';

import useTranslation from '@/src/core/hooks/useTranslation';
import Modal, { ModalRef } from '@/src/core/components/Modal/Modal';
import Form, { FieldValues, SubmitHandler } from '@/src/core/components/Form/Form';

import Display from '../../atoms/Display';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';

import InputWithLabel from '../../molecules/InputWithLabel';

import Footer from '../../organisms/Footer';
import TextareaWithLabel from '../../molecules/TextareaWithLabel';

const Container = styled.div`
    justify-content: center;
    flex-direction: column;
    padding-right: ${({ theme }) => theme.ref.spacing.spacing_20};
    padding-left: ${({ theme }) => theme.ref.spacing.spacing_20};

    ${({ theme }) => screen('md', `padding-top: ${theme.ref.spacing.spacing_96};`)}

    background: ${({ theme }) => (theme.name === 'light' ? theme.ref.colors['white'] : theme.ref.colors['gray900'])};

    min-height: calc(100vh - 72px);
    display: flex;
    width: 100%;

    & > footer {
        margin-top: auto;
    }
`;

const FormTitle = styled.div`
    text-align: center;
    max-width: 480px;
    margin: 0 auto;
    margin-bottom: ${(props) => props.theme.ref.spacing['spacing_96']};
    width: 100%;
`;

const FormContainer = styled.div`
    flex-direction: column;
    max-width: 480px;
    display: flex;
    margin: 0 auto;
    width: 100%;
    gap: ${(props) => props.theme.ref.spacing['spacing_24']};
`;

export interface ModalContactRef {
    setIsOpen: (state: boolean) => void;
}

const ModalContact: React.ForwardRefRenderFunction<object, React.RefAttributes<ModalContactRef>> = (props, ref) => {
    const theme = useTheme();

    const { t } = useTranslation();

    const [tag, title, description] = [
        t('specific.modalContact.tag'),
        t('specific.modalContact.title'),
        t('specific.modalContact.description'),
    ];

    const modalContactRef = useRef<ModalRef>(null);

    const onSubmit: SubmitHandler<FieldValues> = useCallback((data) => console.log('submit', data), []);

    useImperativeHandle(
        ref,
        () => ({
            setIsOpen: (state: boolean) => modalContactRef.current?.setIsOpen(state),
        }),
        []
    );

    return (
        <Modal ref={modalContactRef}>
            <Container>
                <FormTitle>
                    <Display variant="primary" size="sm">
                        {tag}
                    </Display>

                    <div style={{ margin: `${theme.ref.spacing.spacing_12} 0 ${theme.ref.spacing.spacing_32} 0` }}>
                        <Display
                            styledProps={{
                                $color: theme.name === 'light' ? 'gray900' : 'white',
                            }}
                            size="xl"
                        >
                            {title}
                        </Display>
                    </div>

                    <Text
                        styledProps={{
                            $color: theme.name === 'light' ? 'gray900' : 'white',
                        }}
                    >
                        {description}
                    </Text>
                </FormTitle>

                <Form onSubmit={onSubmit}>
                    <FormContainer>
                        <InputWithLabel label="nome" name="nome" maxLength={100} />
                        <InputWithLabel label="email" name="email" maxLength={100} />
                        <InputWithLabel label="telefone" name="telefone" maxLength={11} />
                        <TextareaWithLabel label="mensagem" name="mensagem" maxLength={100} />

                        <p>checkbox</p>

                        <Button>Enviar mensagem</Button>
                    </FormContainer>
                </Form>

                <Footer />
            </Container>
        </Modal>
    );
};

export default forwardRef(ModalContact);
