import { useContext } from 'react';
import { CompteContext } from '../../context/CompteContext';
import Fill2 from './Fill2';

const Fill1 = () => {
  const { compte } = useContext(CompteContext);

  return (
    <div className='capsa-fill1'>
      <Fill2 />
      <h2 className='text-capsa'>{compte}</h2>
    </div>
  );
};

export default Fill1;
