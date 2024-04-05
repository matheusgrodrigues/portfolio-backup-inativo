import { EmailBodySchema } from '@/schemas/EmailSchema';
import React from 'react';

interface EmailTemplateProps extends EmailBodySchema {}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    nome,
    email,
    telefone,
    mensagem,
    receber_informacoes,
}) => (
    <div>
        <h1>Welcome, {nome}!</h1>
        <h1>Welcome, {email}!</h1>
        <h1>Welcome, {telefone}!</h1>
        <h1>Welcome, {mensagem}!</h1>
        <h1>Welcome, {receber_informacoes}!</h1>
    </div>
);

export default EmailTemplate;
