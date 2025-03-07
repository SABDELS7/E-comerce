import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
// import enCommon from './translations/en/common.json';
// import frCommon from './translations/fr/common.json';
// import esCommon from './translations/es/common.json';
// import arCommon from './translations/ar/common.json'; // Add Arabic translations

i18next
  .use(initReactI18next)
  .init({
    resources: {
      // en: { common: enCommon },
      // fr: { common: frCommon },
      // es: { common: esCommon },
      // ar: { common: arCommon }, // Add Arabic
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;