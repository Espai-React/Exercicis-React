import './App.css';
import { BotoTailwind, BotoCSS } from './components/Boto1';
import { FaAddressBook } from 'react-icons/fa';
import { FaArchive } from 'react-icons/fa';

const App = () => {
  const handleClick = (id: string) => {
    console.log(`Click al botó ${id}`);
  };

  const icona1 = (
    <div className='flex gap-2 items-center'>
      <span>Botó blau</span>
      <FaAddressBook />
    </div>
  );

  const icona2 = (
    <div className='flex gap-2 items-center'>
      <span>Botó vermell</span>
      <FaArchive />
    </div>
  );

  return (
    <div className='min-h-screen bg-gray-800 p-24 rounded-xl flex flex-col gap-6'>
      <div className='w-full'>
        <h2 className='text-orange-300 text-3xl font-semibold'>React TS</h2>
        <hr className='mx-auto w-2/3 border-orange-300 border-2 my-2' />
      </div>
      <BotoTailwind
        background='bg-blue-500'
        color='text-white'
        fontSize='text-xl'
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
          fontSize: 20,
          padding: '8px 25px',
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
    </div>
  );
};
export default App;
