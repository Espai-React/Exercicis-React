import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

//import App from './App.jsx'
import './index.css';

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
    },
  },
  ca: {
    translation: {
      'Welcome to React': 'Benvinguts a React i react-i18next',
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'ca',
    detection: {
      order: [
        'htmlTag',
        'cookie',
        'localStorage',
        'navigator',
        'path',
        'subdomain',
      ]
    },
    interpolation: {
      escapeValue: false,
    },
  });

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('Welcome to React')}</h2>
    </div>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
