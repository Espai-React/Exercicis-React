import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation('global');

  return (
    <div>
      <h2>{t('header.title')}</h2>
      <button onClick={() => i18n.changeLanguage('es')}>ES</button>
      <button onClick={() => i18n.changeLanguage('ca')}>CA</button>
    </div>
  );
};
export default Header;
