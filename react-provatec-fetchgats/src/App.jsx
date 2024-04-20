import { useEffect, useState } from 'react';
import { endpoints } from './lib/const/endpoints.js';
const { URLFET, URLGAT } = endpoints;
import './App.css';

const App = () => {
  const [fet, setFet] = useState(null);
  const [fetError, setFetError] = useState(null);
  const [gat, setGat] = useState(null);
  const [gatError, setGatError] = useState(null);

  fet && console.log('fet -->', fet);
  gat && console.log('gat -->', gat);
  fetError && console.log('fetError -->', fetError);
  gatError && console.log('gatError -->', gatError);

  useEffect(() => {
    try {
      fetch(URLFET)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Error en res URLFET');
          }
          return res.json();
        })
        .then((data) => {
          setFet(data.fact);
        })
        .catch((err) => {
          setFetError('Error en la petició de fet --> ' + err);
        });
    } catch (err) {
      console.log(err);
      setFetError('Error en la resposta de fet -->' + err);
    }
  }, []);

  useEffect(() => {
    if (!fet) return;
    const tresPrimeresParaules = fet.split(' ', 3).join(' ');
    try {
      fetch(`${URLGAT}${tresPrimeresParaules}?fontSize=50&fontColor=white`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Error en res URLGAT');
          }
          return res;
        })
        .then((data) => {
          setGat(data.url);
        })
        .catch((err) => {
          setGatError('Error en la petició de gat --> ' + err);
        });
    } catch (err) {
      setGatError('Error en la resposta de gat -->' + err);
    }
  }, [fet]);

  return (
    <main>
      <div className='container'>
        <h1>App de gats</h1>
        <div className='fet-gat'>
          {!fetError ? <p>{fet}</p> : <p>{fetError}</p>}
          {!gatError && !fetError && gat ? (
            <img
              className='imatge-gat'
              src={gat}
              alt={`Imatge del gat amb les 3 primeres lletres de ${fet}`}
            />
          ) : gatError ? (
            <p>{gatError}</p>
          ) : (
            <p>No es pot mostrar imatge de gat</p>
          )}
        </div>
      </div>
    </main>
  );
};
export default App;
