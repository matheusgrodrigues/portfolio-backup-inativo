import React, { useImperativeHandle, useCallback, useContext, forwardRef, useRef } from 'react';

import styled, { useTheme } from 'styled-components';

import { screen } from '@/src/config/theme/theme';

import useTranslation from '@/src/core/hooks/useTranslation';
import { UIContext } from '@/src/core/context/UIContext';
import Modal, { ModalRef } from '@/src/core/components/Modal/Modal';
import Form, { FormRef, SubmitHandler } from '@/src/core/components/Form/Form';

import Display from '../../atoms/Display';
import Button, { ButtonRef } from '../../atoms/Button';
import Text from '../../atoms/Text';

import InputMaskWithLabel from '../../molecules/InputMaskWithLabel';
import TextareaWithLabel from '../../molecules/TextareaWithLabel';
import CheckboxWithLabel from '../../molecules/CheckboxWithLabel';
import InputWithLabel from '../../molecules/InputWithLabel';

import Footer from '../../organisms/Footer';

import formModalContactRules from './Rules';

import { EmailBodySchema } from '@/src/schemas/EmailSchema';

import EmailService from '@/src/services/EmailService';

export interface ModalContactRef {
    setIsOpen: (state: boolean) => void;
}

const ModalContact: React.ForwardRefRenderFunction<object, React.RefAttributes<ModalContactRef>> = (props, ref) => {
    const theme = useTheme();

    const { t } = useTranslation();

    const { toast } = useContext(UIContext);

    const modalContactRef = useRef<ModalRef>(null);
    const btnSubmitRef = useRef<ButtonRef>(null);
    const formRef = useRef<FormRef>(null);

    const onSubmit: SubmitHandler<EmailBodySchema> = useCallback(async (data) => {
        const emailService = new EmailService();

        btnSubmitRef.current?.setIsLoading(true);

        try {
            await emailService.sendEmail(data);

            toast.current?.show({
                description: `${t('validation.messages.message.success')}`,
                title: `${t('validation.messages.title.success')}`,
                type: 'success',
            });

            btnSubmitRef.current?.setIsLoading(false);
            formRef.current?.reset();

            setTimeout(() => modalContactRef.current?.setIsOpen(false), 3);
        } catch (error) {
            toast.current?.show({
                description: `${t('validation.messages.message.error')}`,
                title: `${t('validation.messages.title.error')}`,
                type: 'error',
            });

            btnSubmitRef.current?.setIsLoading(false);
        }
    }, []);

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
                        {t('specific.modalContact.title.tag')}
                    </Display>

                    <div style={{ margin: `${theme.ref.spacing.spacing_12} 0 ${theme.ref.spacing.spacing_32} 0` }}>
                        <Display
                            styledProps={{
                                $color: theme.name === 'light' ? 'gray900' : 'white',
                            }}
                            size="xl"
                        >
                            {t('specific.modalContact.title.contato')}
                        </Display>
                    </div>

                    <Text
                        styledProps={{
                            $color: theme.name === 'light' ? 'gray900' : 'white',
                        }}
                    >
                        {t('specific.modalContact.title.description')}
                    </Text>
                </FormTitle>

                <Form validationSchema={formModalContactRules} onSubmit={onSubmit} ref={formRef}>
                    <FormContainer>
                        <InputWithLabel
                            maxLength={100}
                            label={`${t('specific.modalContact.inputLabel.nome')}`}
                            name={t('specific.modalContact.inputName.nome')}
                        />

                        <InputWithLabel
                            maxLength={100}
                            label={`${t('specific.modalContact.inputLabel.email')}`}
                            name={t('specific.modalContact.inputName.email')}
                            type="email"
                        />

                        <InputMaskWithLabel
                            label={`${t('specific.modalContact.inputLabel.telefone')}`}
                            name={t('specific.modalContact.inputName.telefone')}
                            mask={'(99) 99999-9999'}
                        />

                        <TextareaWithLabel
                            maxLength={100}
                            label={`${t('specific.modalContact.inputLabel.mensagem')}`}
                            name={t('specific.modalContact.inputName.mensagem')}
                        />

                        <CheckboxWithLabel
                            label={`${t('specific.modalContact.inputLabel.receber_informacoes')}`}
                            name={t('specific.modalContact.inputName.receber_informacoes')}
                        />

                        <Button
                            data-testid={`${t('specific.modalContact.inputTestID.buttonSubmit')}`}
                            variant="primary"
                            type="submit"
                            ref={btnSubmitRef}
                        >
                            {`${t('specific.modalContact.inputName.button_submit')}`}
                        </Button>
                    </FormContainer>
                </Form>

                <Footer
                    style={{
                        marginTop: theme.ref.spacing['spacing_96'],
                    }}
                />
            </Container>
        </Modal>
    );
};

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

    & > button {
        margin-top: ${(props) => props.theme.ref.spacing['spacing_8']};
    }
`;

export default forwardRef(ModalContact);
