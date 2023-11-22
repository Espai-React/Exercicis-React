import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import './App.css';

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'fr',
    name: 'French',
    country_code: 'fr',
  },
  {
    code: 'ar',
    name: 'عربي',
    country_code: 'sa',
  },
];

const App = () => {
  const { t } = useTranslation('global');
  const diesPassats = Math.floor(
    (new Date() - new Date('2021-03-07')) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className='container my-4 d-flex flex-row justify-content-between'>
      <div className='d-flex flex-column align-items-start'>
        <h2 className='font-weight-normal mb-3'>{t('welcome_message')}</h2>
        <p>{t('days_since_release', { number_of_days: diesPassats })}</p>
      </div>
      <div className='dropdown'>
        <button
          className='btn btn-secondary dropdown-toggle'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          Language
        </button>
        <ul className='dropdown-menu'>
          {languages.map(({ code, name, country_code }) => (
            <li key={code}>
              <button className='dropdown-item' href='#'>
                <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
