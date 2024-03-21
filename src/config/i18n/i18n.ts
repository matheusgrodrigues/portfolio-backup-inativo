import specific from './Specific';

export type TranslationValue = {
    [key: string]: string | TranslationValue;
};

const i18n_translations: { [key: string]: TranslationValue } = {
    specific,
};

export default i18n_translations;
