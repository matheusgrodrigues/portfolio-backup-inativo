import * as yup from 'yup';

yup.setLocale({ ...i18n_validationFields });

import i18n_validationFields from '@/src/config/i18n/Validation/fields';

import regex from '@/src/core/utils/regex/regex';

const formModalContactRules = yup.object({
    nome: yup.string().required(),
    email: yup.string().required().matches(regex.email, 'E-mail inválido'),
    telefone: yup.string().required().matches(regex.telefone, 'Formato do telefone está incorreto'),
    mensagem: yup.string().required().max(100),
});

export default formModalContactRules;
