import { useRef, useState } from 'react';

const Generics: React.FC = () => {
  const [valor, setValor] = useState<string[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Et fa un array del mateix tipus que l'element que li arriba.
     T, és per no confondre-ho amb un element JSX */
  const converteixArr = <T,>(valor: T): T[] => [valor];
  const separaElements = (valor: string[]) => valor[0].split('');

  const handleClick = () => {
    setValor(null);
    let text;
    if (inputRef.current) text = inputRef.current.value;
    const textArr = converteixArr(text);
    console.log(textArr);
    if (textArr) setValor(separaElements(textArr));
    console.log(valor);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex justify-center gap-4 p-4 text-white text-sm'>
        <input
          type='text'
          ref={inputRef}
          className='py-1 px-2 rounded-md bg-slate-600 '
        />
        <button
          onClick={handleClick}
          className='py-1 px-4 rounded-md border-2 border-slate-400'>
          Converteix
        </button>
      </div>
      <ul className='flex justify-center gap-2 p-4 text-white text-sm'>
        {valor &&
          valor.map((element, index) => {
            if (index == valor.length - 1) {
              return (
                <div className='flex gap-2'>
                  <li key={index}>{element}</li>
                </div>
              );
            }
            return (
              <div className='flex gap-2'>
                <li key={index}>{element}</li>
                <li> - </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default Generics;
