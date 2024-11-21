import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/index.json';
import zhTranslation from './locales/zh/index.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: { translation: enTranslation },
  zh: { translation: zhTranslation },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;