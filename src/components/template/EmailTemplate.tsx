import React from 'react';

import { EmailBodySchema } from '@/src/schemas/EmailSchema';

interface EmailTemplateProps extends EmailBodySchema {}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    nome,
    email,
    telefone,
    mensagem,
    receber_informacoes,
}) => (
    <ul>
        <li>
            <strong>Nome</strong>: {nome}
        </li>
        <li>
            <strong>E-mail</strong>: {email}
        </li>
        <li>
            <strong>Telefone</strong>: {telefone}
        </li>
        <li>
            <strong>Mensagem</strong>: {mensagem}
        </li>
        <li>
            <strong>Receber Informações</strong>: {receber_informacoes ? 'Sim' : 'Não'}
        </li>
    </ul>
);

export default EmailTemplate;
