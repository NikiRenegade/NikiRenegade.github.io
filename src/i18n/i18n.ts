import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  eng: {
    translation: {
      home: 'Home',
      login: 'Login',
      register: 'Register',
    },
  },
  rus: {
    translation: {
      home: 'Главная',
      login: 'Вход',
      register: 'Регистрация',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'rus', // язык по умолчанию
  fallbackLng: 'eng', // язык по умолчанию при отсутствии перевода
  interpolation: { escapeValue: false },
});

export default i18n;
