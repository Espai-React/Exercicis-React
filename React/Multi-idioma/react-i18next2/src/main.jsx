import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpAPi from 'i18next-http-backend';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'flag-icon-css/css/flag-icons.min.css';

import App, { AvisCarrega } from './App.jsx';
import './index.css';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpAPi)
  .init({
    supportedLngs: ['en', 'fr', 'ar'],
    fallbackLng: 'fr',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/src/translation/locales/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<AvisCarrega />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
