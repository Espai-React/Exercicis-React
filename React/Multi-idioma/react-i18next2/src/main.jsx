import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import App from './App.jsx'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'flag-icon-css/css/flag-icons.min.css';

import App, { AvisCarrega } from './App.jsx';
import './index.css';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLanguaes: ['en', 'fr', 'ar'],
    fallbackLng: 'en',
    detection: {
      order: [
        'cookie', 'htmlTag',
       
        'localStorage',
        'navigator',
        'path',
        'subdomain',
      ]
    },
    caches: ['cookie'],
    backend: {
      loadPath: 'src/translation/locales/{{lng}}/translation.json',
    },/* 
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },*/
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<AvisCarrega />}>
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
      <App />
      </I18nextProvider>
  </React.StrictMode>
  </Suspense>
);
