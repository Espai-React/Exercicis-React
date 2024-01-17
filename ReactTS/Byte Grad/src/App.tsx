import './App.css';
import { Boto1 } from './components/Boto1';

const App = () => (
  <div className='min-h-screen bg-gray-800 p-10 rounded-xl flex flex-col gap-6'>
    <div className='w-full'>
      <h2 className='text-orange-300 text-3xl font-semibold'>React TS</h2>
      <hr className='mx-auto w-1/2 border-orange-300 border-2 my-2' />
    </div>
    <Boto1 background='blue' fontSize={40} pillShape={true} />
  </div>
);

export default App;
