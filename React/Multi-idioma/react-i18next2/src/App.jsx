import { useTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import cookies from 'js-cookie';
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
    dir: 'rtl',
  },
];

const GlobeIcon = ({ width = 24, height = 24, color = '#fff' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    fill={color}
    viewBox='0 0 16 16'>
    <path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z' />
  </svg>
);

GlobeIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

const App = () => {
  const { t, i18n } = useTranslation();
  const idiomaActual = cookies.get('i18next');
  const diesPassats = Math.floor(
    (new Date() - new Date('2021-03-07')) / (1000 * 60 * 60 * 24)
  );

  useEffect(() => {
    console.log('idiomaActual -->', idiomaActual);
    idiomaActual === 'ar'
      ? document.querySelector('html').setAttribute('dir', 'rtl')
      : document.querySelector('html').setAttribute('dir', 'ltr');
    document.title = t('app_title');
  }, [idiomaActual, t]);

  return (
    <div className='container my-4 d-flex flex-row justify-content-between'>
      <div className='d-flex flex-column align-items-start'>
        <h2 className='font-weight-normal mb-3'>{t('welcome_message')}</h2>
        <p>{t('days_since_release', { number_of_days: diesPassats })}</p>
      </div>
      <div className='dropdown'>
        <button
          className='btn btn-link dropdown-toggle text-white'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          <GlobeIcon />
        </button>
        <ul className='dropdown-menu'>
          {languages.map(({ code, name, country_code }) => (
            <li key={code}>
              <button
                className='dropdown-item'
                href='#'
                onClick={() => i18n.changeLanguage(code)}>
                <span
                  className={`flag-icon flag-icon-${country_code} mx-2`}></span>
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

const AvisCarrega = () => {
  const [mostrar, setMostrar] = useState(true);

  useEffect(() => {
    const temporitzador = setTimeout(() => {
      setMostrar(false);
    }, 3000);
    return () => {
      setMostrar(true);
      clearTimeout(temporitzador);
    };
  }, []);

  return mostrar && <div className='py-4 text-center'>Carregant...</div>;
};

export { AvisCarrega };
