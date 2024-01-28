import { useEffect, useMemo, useState } from 'react';
import './App.css';
import {
  Divisor,
  BotoTailwind,
  BotoCSS,
  BotoRest,
  BotoHooks,
  icona1,
  icona2,
  icona3,
  Llista,
  LlistaOmit,
  Generics,
} from './components';

type Tsalutacio = 'Bona tarda tinguem tot' | 'Vite + React + TS' | string;

const App = () => {
  const [count, setcount] = useState(0);
  const [quiEs, setQuiEs] = useState('');
  const [usuari, setUsuari] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { id } = e.currentTarget;
    setcount(count + 1);
    setQuiEs(`Click al botó ${id}`);
  };

  /* Com a const, són només de lectura i te'ls mostra amb un hover' */
  const lis1Llista = ['Inici', 'Sobre nosaltres', 'Contacte'] as const;
  const lis2Llista = ['Projectes', 'Blog', 'FAQ'] as const;

  const salutacio3 = 'O no...';
  const salutacio = useMemo(
    () => ['Bona tarda tinguem tot', 'Vite + React + TS', salutacio3] as const,
    [salutacio3]
  );

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: unknown) => {
        if (Array.isArray(data) && data.every((item) => typeof item === 'string')) {
          const dades: string = data[0].name;
          setUsuari(dades);
        }
      });
  }, []);

  useEffect(() => {
    const textSalutacio = salutacio[
      Math.floor(Math.random() * salutacio.length)
    ] as Tsalutacio;
    document.title = textSalutacio;
  }, [salutacio]);

  return (
    <div className='min-h-screen bg-gray-800 p-24 rounded-xl flex flex-col gap-6 text-orange-300 text-lg font-semibold'>
      <Divisor titol='React TS' fontSize='text-2xl' />
      <BotoTailwind
        background='bg-blue-500'
        color='text-white'
        fontSize='text-sm'
        tupleTypePadding={['py-2', 'px-6']}
        disabled={false}
        handleClick={handleClick}
        children={icona1}
      />
      <BotoCSS
        styles={{
          margin: '0 auto',
          width: 'fit-content',
          background: 'red',
          color: 'white',
          fontSize: 14,
          padding: '4px 16px',
        }}
        borderRadius={{
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}
        disabled={false}
        handleClick={handleClick}
        children={icona2}
      />

      <BotoRest
        className='self-center bg-lime-600 text-white text-sm font-bold py-2 px-4 rounded'
        handleClick={handleClick}
        children={icona3}
      />

      <p>El compte és {count}</p>
      <p>{quiEs}</p>
      <Divisor titol='Hooks' fontSize='text-xl' />
      <BotoHooks />

      <Divisor titol='Llista' fontSize='text-xl' />
      <Llista lis1Llista={lis1Llista} lis2Llista={lis2Llista} />

      <Divisor titol='Llista Omit' fontSize='text-xl' />
      <LlistaOmit lis2Llista={lis2Llista} />

      <Divisor titol='Salutacio' fontSize='text-xl' />
      <p>{salutacio}</p>

      <Divisor titol='Genèrics' fontSize='text-xl' />
      <Generics valorProp={5} historicValor={[10, 20, 30]} />

      <Divisor titol='Usuari placeholder' fontSize='text-xl' />
      <p className='text-white text-sm'>Usuari: {usuari}</p>
    </div>
  );
};
export default App;
