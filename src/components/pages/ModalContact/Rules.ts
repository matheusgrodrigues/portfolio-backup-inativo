import * as yup from 'yup';

import i18n_validationFields from '@/src/config/i18n/Errors/Fields';

const formModalContactRules = yup.object({
    nome: yup.string().required(i18n_validationFields.required['nome']),
    email: yup.string().required(i18n_validationFields.required['email']),
    telefone: yup.string().required(i18n_validationFields.required['telefone']),
    mensagem: yup.string().required(i18n_validationFields.required['mensagem']),
});

export default formModalContactRules;
