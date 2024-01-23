import { useState } from 'react';

const BotoHook: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("Clica'm");
  const [focus, setFocus] = useState({ inc: false, dec: false });
  const { inc, dec } = focus;

  const handleClick = ({
    currentTarget: { id },
  }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (id == 'inc') {
      setCounter(counter + 1);
      setFocus({ inc: false, dec: true });
    } else if (id == 'dec') {
      setCounter(counter - 1);
      setFocus({ inc: true, dec: false });
    }
    setText(id == 'inc' ? 'incrementant' : 'decrementant');
  };

  return (
    <div>
      <div className='flex gap-6 justify-center mb-8'>
        <button
          id='inc'
          onClick={handleClick}
          className={`bg-blue-500 rounded-xl py-2 px-4 text-white text-sm ${
            inc ? 'opacity-50' : ''
          }`}>
          Incrementar <span className='text-xs'>({text})</span>
        </button>
        <button
          id='dec'
          onClick={handleClick}
          className={`bg-red-600 rounded-xl py-2 px-4 text-white text-sm ${
            dec ? 'opacity-50' : ''
          }`}>
          Decrementar <span className='text-xs'>({text})</span>
        </button>
      </div>
      <p>El compte és {counter}</p>
    </div>
  );
};

export default BotoHook;
