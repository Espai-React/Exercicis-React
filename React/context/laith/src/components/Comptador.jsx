import { useContext } from 'react';
import { CompteContext } from '../../context/CompteContext';
import Fill1 from './Fill1';

const Comptador = () => {
  const { compte, setCompte } = useContext(CompteContext);

  return (
    <div>
      <Fill1 />
      <h2 className='text-capsa'>{compte}</h2>
      <button onClick={() => setCompte(compte + 1)}>Comptador clica!</button>
    </div>
  );
};

export default Comptador;
