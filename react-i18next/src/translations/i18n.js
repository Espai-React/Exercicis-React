import i18next from 'i18next';
import global_es from '../../src/translations/languages/es/global.json';
import global_ca from '../../src/translations/languages/ca/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'ca',
  resources: {
    es: {
      global: global_es,
    },
    ca: {
      global: global_ca,
    },
  },
});

export default i18next;
