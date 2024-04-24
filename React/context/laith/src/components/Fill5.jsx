import { useContext } from 'react';
import { CompteContext } from '../../context/CompteContext';

const Fill5 = () => {
  const { compte } = useContext(CompteContext);

  return (
    <div className='capsa-fill5'>
      <h2 className='text-capsa'>{compte}</h2>
    </div>
  );
};

export default Fill5;
