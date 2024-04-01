import * as yup from 'yup';

const formModalContactRules = yup.object({
    nome: yup.string().required(),
    email: yup.string().required(),
    telefone: yup.string().required(),
    mensagem: yup.string().required(),
});

export default formModalContactRules;
