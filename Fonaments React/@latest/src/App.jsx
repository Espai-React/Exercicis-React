import { useState, useEffect } from 'react';
import BotoComptador from './components/BotoComptador/BotoComptador';


const App = () => {
  const [comptador, setComptador] = useState(10);

  useEffect(() => {
    console.log('Nou renderitzat');
    document.title = `El compte és ${comptador}`;
    console.log('comptador -->', comptador);
  }, [comptador]);

  return (
    <>
      <h2>Comptador</h2>
      {comptador > 20 || comptador < 1 ? (
        <p>Comptador fora del rang</p>
      ) : (
        <>
          <BotoComptador comptador={comptador} setComptador={setComptador} />
          <p>{comptador}</p>
        </>
      )}
    </>
  );
};

export default App;
