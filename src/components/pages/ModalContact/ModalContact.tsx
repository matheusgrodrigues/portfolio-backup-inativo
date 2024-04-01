import React, { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';

import styled, { useTheme } from 'styled-components';

import { screen } from '@/src/config/theme/theme';

import useTranslation from '@/src/core/hooks/useTranslation';
import Modal, { ModalRef } from '@/src/core/components/Modal/Modal';
import Form, { SubmitHandler, FieldValues } from '@/src/core/components/Form/Form';
import Field from '@/src/core/components/Field/Field';

import Display from '../../atoms/Display';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';

import InputMaskWithLabel from '../../molecules/InputMaskWithLabel';
import TextareaWithLabel from '../../molecules/TextareaWithLabel';
import CheckboxWithLabel from '../../molecules/CheckboxWithLabel';
import InputWithLabel from '../../molecules/InputWithLabel';

import Footer from '../../organisms/Footer';

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
    margin-bottom: ${(props) => props.theme.ref.spacing['spacing_96']};
    text-align: center;
    max-width: 480px;
    margin: 0 auto;
    width: 100%;
`;

export interface ModalContactRef {
    setIsOpen: (state: boolean) => void;
}

const ModalContact: React.ForwardRefRenderFunction<object, React.RefAttributes<ModalContactRef>> = (props, ref) => {
    const theme = useTheme();

    const modalContactRef = useRef<ModalRef>(null);

    const { t } = useTranslation();

    const [description, title, tag] = [
        t('specific.modalContact.title.description'),
        t('specific.modalContact.title.contato'),
        t('specific.modalContact.title.tag'),
    ];

    const [
        inputLabel_receber_informacoes,
        inputLabel_telefone,
        inputLabel_mensagem,
        inputLabel_email,
        inputLabel_nome,
    ] = [
        t('specific.modalContact.inputLabel.receber_informacoes'),
        t('specific.modalContact.inputLabel.telefone'),
        t('specific.modalContact.inputLabel.mensagem'),
        t('specific.modalContact.inputLabel.email'),
        t('specific.modalContact.inputLabel.nome'),
    ];

    const [inputName_receber_informacoes, inputName_telefone, inputName_mensagem, inputName_email, inputName_nome] = [
        t('specific.modalContact.inputName.receber_informacoes'),
        t('specific.modalContact.inputName.telefone'),
        t('specific.modalContact.inputName.mensagem'),
        t('specific.modalContact.inputName.email'),
        t('specific.modalContact.inputName.nome'),
    ];

    const [btn_enviar_mensagem] = [t('specific.modalContact.button.enviar_mensagem')];

    const onSubmit: SubmitHandler<FieldValues> = useCallback((data) => {
        console.log('submit', data);
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

                <Form
                    onSubmit={onSubmit}
                    style={{
                        width: '100%',
                        maxWidth: '480px',
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0 auto',
                        gap: theme.ref.spacing['spacing_24'],
                    }}
                >
                    <Field
                        name={inputName_nome}
                        render={(props, register) => (
                            <InputWithLabel maxLength={100} label={`${inputLabel_nome}`} {...props} {...register} />
                        )}
                    />

                    <InputWithLabel maxLength={100} label={`${inputLabel_email}`} name={inputName_email} />

                    <InputMaskWithLabel
                        maxLength={11}
                        type="telefone"
                        label={`${inputLabel_telefone}`}
                        name={inputName_telefone}
                    />

                    <TextareaWithLabel maxLength={100} label={`${inputLabel_mensagem}`} name={inputName_mensagem} />

                    <CheckboxWithLabel
                        label={`${inputLabel_receber_informacoes}`}
                        name={inputName_receber_informacoes}
                    />

                    <Button variant="primary" style={{ marginTop: theme.ref.spacing['spacing_8'] }}>
                        {btn_enviar_mensagem}
                    </Button>
                </Form>

                <Footer />
            </Container>
        </Modal>
    );
};

export default forwardRef(ModalContact);
