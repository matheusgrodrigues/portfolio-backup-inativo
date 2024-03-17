import i18next from 'i18next'

i18next.init({
    lgn: 'en',
    resources: {
        en: {
            translations: {
                key: 'test',
            },
        },
    },
})

console.log(i18next.t('key'))
