import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import de from './locales/de/translation.json'
import ru from './locales/ru/translation.json'

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, de: { translation: de }, ru: { translation: ru } },
  lng: localStorage.getItem('lingua-language') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (language) => localStorage.setItem('lingua-language', language))
export default i18n
