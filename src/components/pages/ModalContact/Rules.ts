import * as yup from 'yup';

yup.setLocale({ ...i18n_validationFields });

import i18n_validationFields from '@/src/config/i18n/Validation/fields';

const formModalContactRules = yup.object({
    nome: yup.string().required(),
    email: yup.string().required(),
    telefone: yup.string().required(),
    mensagem: yup.string().required(),
});

export default formModalContactRules;
