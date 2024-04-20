import './PintarPellicules.css';
import propTypes from 'prop-types';

const LlistaPellicules = ({ pellicules }) => (
  <ul className='llista'>
    {pellicules.map(({ id, titol, any, cartell }) => (
      <div key={id} className='element-llista'>
        <div className='titol-element-llista'>
          <h3>Títol: {titol}</h3>
          <p>Any: {any}</p>
        </div>
        <div className='cartell-element'>
          <img src={cartell} alt={titol} />
        </div>
      </div>
    ))}
  </ul>
);

LlistaPellicules.propTypes = {
  pellicules: propTypes.array,
};

const SensePellicules = () => <p>No hem trobat pel·lícules</p>;

const PintarPellicules = ({ pellicules, loading, error }) => {
  console.log("PintarPellicules -->",pellicules);
  
  if (loading) return <p>carregant la pàgina...</p>;
  if (error) return <p>Error: {error}</p>;
  return pellicules?.length > 0 ? (
    <LlistaPellicules pellicules={pellicules} />
  ) : (
    <SensePellicules />
  );
};

PintarPellicules.propTypes = {
  pellicules: propTypes.array,
  loading: propTypes.bool,
  error: propTypes.string,
};

export default PintarPellicules;
