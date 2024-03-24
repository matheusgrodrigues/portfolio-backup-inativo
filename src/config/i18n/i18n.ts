import i18n_metadata from './Metadata/metadata';
import i18n_home from './Specific/home';

export type TranslationValue = {
    [key: string]: string | TranslationValue;
};

const i18n_translations: { [key: string]: TranslationValue } = {
    specific: { ...i18n_home },
    metadata: { ...i18n_metadata },
};

export default i18n_translations;
