import './App.css';
import { BotoTailwind, BotoCSS } from './components/Boto1';

const App = () => (
  <div className='min-h-screen bg-gray-800 p-24 rounded-xl flex flex-col gap-6'>
    <div className='w-full'>
      <h2 className='text-orange-300 text-3xl font-semibold'>React TS</h2>
      <hr className='mx-auto w-2/3 border-orange-300 border-2 my-2' />
    </div>
    <BotoTailwind
      background='blue-500'
      color='white'
      fontSize='20'
      padding={[6, 4]}
      disabled={false}
    />
    <BotoCSS
      styles={{
        background: 'red',
        color: 'white',
        fontSize: 20,
        padding: '2px 4px',
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
