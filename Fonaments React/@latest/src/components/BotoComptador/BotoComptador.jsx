import PropTypes from 'prop-types';
import './BotoComptador.css';

const BotoComptador = (props) => {
  const { setComptador } = props;

  const handleIncrement = () => {
    setComptador((comptador) => comptador + 1);
  };

  const handleDecrement = () => {
    setComptador((comptador) => comptador - 1);
  };

  return (
    <div className='bloc-botons'>
      <button className="botoIncrement" onClick={handleIncrement}>Inrecmentar</button>
      <button className="botoDecrement"onClick={handleDecrement}>Decrementar</button>
    </div>
  );
};

BotoComptador.propTypes = {
  comptador: PropTypes.number,
  setComptador: PropTypes.func
};

export default BotoComptador;
