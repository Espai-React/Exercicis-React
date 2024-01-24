import { useState } from 'react';
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
} from './components';

const App = () => {
  const [count, setcount] = useState<number>(0);
  const [quiEs, setQuiEs] = useState<string>('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { id } = e.currentTarget;
    setcount(count + 1);
    setQuiEs(`Click al botó ${id}`);
  };

  return (
    <div className='min-h-screen bg-gray-800 p-24 rounded-xl flex flex-col gap-6 text-orange-300 text-lg font-semibold'>
      <Divisor titol='React TS' fonSize='text-2xl' />
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
      <Divisor titol='Hooks' fonSize='text-xl' />
      <BotoHooks />
    </div>
  );
};
export default App;
