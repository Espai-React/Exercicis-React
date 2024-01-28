import { useRef, useState } from 'react';

/* type TFocus = {
  inc: boolean;
  dec: boolean;
}; */

type TFocus = {
  inc: boolean | null;
  dec: boolean | null;
};

const BotoHooks: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("Clica'm");
  /* const [focus, setFocus] = useState<TFocus | null>(null);
  const inc = focus?.inc;
  const dec = focus?.dec; */
  const [focus, setFocus] = useState<TFocus>({
    inc: null,
    dec: null,
  });
  const { inc, dec } = focus;

  const refInc = useRef<HTMLButtonElement | null>(null);
  const refDec = useRef<HTMLButtonElement>(null);
  const refText = useRef<HTMLParagraphElement | null>(null);

  const handleClick = ({
    currentTarget: { id },
  }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (id == 'inc') {
      setCounter(counter + 1);
      setFocus({ inc: false, dec: true });
      setText('incrementant');
      if (refText.current && refInc.current)
        refText.current.textContent = refInc.current.textContent;
    } else if (id == 'dec') {
      setCounter(counter - 1);
      setFocus({ inc: true, dec: false });
      setText('decrementant');
      if (refText.current && refDec.current)
        refText.current.textContent = refDec.current.textContent;
    }
  };

  return (
    <div>
      <div className='flex gap-6 justify-center mb-8'>
        <button
          id='inc'
          ref={refInc}
          onClick={handleClick}
          className={`bg-blue-500 rounded-xl py-2 px-4 text-white text-sm ${
            inc ? 'opacity-50' : ''
          }`}>
          Incrementar <span className='text-xs'>({text})</span>
        </button>
        <button
          id='dec'
          ref={refDec}
          onClick={handleClick}
          className={`bg-red-600 rounded-xl py-2 px-4 text-white text-sm ${
            dec ? 'opacity-50' : ''
          }`}>
          Decrementar <span className='text-xs'>({text})</span>
        </button>
      </div>
      <p ref={refText} className='h-8'></p>
      <p>El compte és {counter}</p>
    </div>
  );
};

export { BotoHooks };
