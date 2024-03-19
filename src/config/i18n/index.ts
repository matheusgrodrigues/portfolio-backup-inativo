import specific from './Specific'

export interface TranslationValue {
    [key: string]: string | TranslationValue
}

interface I18nTranslations {
    [key: string]: TranslationValue
}

const i18n_translations: I18nTranslations = {
    specific,
}

export default i18n_translations
