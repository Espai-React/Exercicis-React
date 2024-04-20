import './App.css';
import { useRef } from 'react';
import { usePellicules, useCerca } from './lib/hooks';
import PintarPellicules from './components/PintarPellicules';

const App = () => {  
  const inputRef = useRef();
  const { cerca, errorCerca, handleChange, handleError } =
    useCerca();
  const { pellicules, loading, error, obtenirPellicules, ordena,setOrdena} =
    usePellicules(cerca);
  console.log("pellicules -->",pellicules);  

  const handleSubmit = (e) => {
    e.preventDefault(cerca);
    obtenirPellicules(cerca);
    console.log('cerca -->', cerca);
    
    /* const dadesFormulari = new FormData(e.currentTarget);
    const dadesCerca = dadesFormulari.get('input-cerca'); */
    
    /* const campsFormluari = Object.fromEntries(new FormData(e.currentTarget));
    console.log('campsFormulari -->', campsFormluari);
    const { inputCerca: cercaActual } = campsFormluari;
    console.log('cerca -->', cerca); */
    
    const cercaActual = inputRef.current.value;
    handleError(cercaActual);
  };

  return (
    <div className='container'>
      <header>
        <h2>Buscador de pel·lícules</h2>
        <form onSubmit={handleSubmit} className='bloc-form'>
          <div className='bloc-input'>
            <input
              style={{
                border: '1px solid transparent',
                borderColor: errorCerca ? 'crimson' : 'transparent',
              }}
              name='inputCerca'
              ref={inputRef}
              type='text'
              placeholder='Escriu...'
              value={cerca}
              onChange={handleChange}
            />
            <button type='submit'>Cercar</button>
          </div>
          <label htmlFor="checkOrdena"><input id="checkOrdena" type="checkbox" checked={ordena} onChange={()=>setOrdena(!ordena)} />Ordenar per any</label>
        </form>
        {errorCerca && <p style={{ color: 'crimson' }}>{errorCerca}</p>}
      </header>
      <main className='bloc-main'>
        <PintarPellicules
          pellicules={pellicules}
          loading={loading}
          error={error}
        />
      </main>
    </div>
  );
};

export default App;
