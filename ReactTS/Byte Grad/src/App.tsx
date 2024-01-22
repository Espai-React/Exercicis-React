import './App.css';
import { BotoTailwind, BotoCSS } from './components/Boto1';

const App = () => (
  <div className='min-h-screen bg-gray-800 p-24 rounded-xl flex flex-col gap-6'>
    <div className='w-full'>
      <h2 className='text-orange-300 text-3xl font-semibold'>React TS</h2>
      <hr className='mx-auto w-2/3 border-orange-300 border-2 my-2' />
    </div>
    <BotoTailwind
      background='bg-blue-500'
      color='text-white'
      fontSize='text-xl'
      padding={['py-4','px-8']}
      disabled={false}
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
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      }}
      disabled={false}
    />
  </div>
);

export default App;
