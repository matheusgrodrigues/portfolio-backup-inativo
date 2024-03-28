import i18n_metadata from './Metadata/metadata';

import i18n_home from './Specific/home';
import i18n_modalContact from './Specific/modalContact';

export type TranslationValue = {
    [key: string]: string | TranslationValue;
};

const i18n_translations: { [key: string]: TranslationValue } = {
    metadata: { ...i18n_metadata },
    specific: { ...i18n_home, ...i18n_modalContact },
};

export default i18n_translations;
