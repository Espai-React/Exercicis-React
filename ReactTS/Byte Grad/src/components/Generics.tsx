import { useRef, useState } from 'react';

/* Et fa un array del mateix tipus que l'element que li arriba.
     T, és per no confondre-ho amb un element JSX */
const converteixArr = <T,>(valor: T): T[] => [valor];
const separaElements = (valor: unknown[]) => {
  if (Array.isArray(valor) && typeof valor[0] === 'string') {
    return valor[0].split('');
  }
  return null;
};

type TGenerics<T> = {
  valorProp: T;
  historicValor: T[];
};

const Generics: React.FC<TGenerics<T>> = ({
  valorProp,
  historicValor,
}) => {
  //. . .
  const [valor, setValor] = useState<string[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setValor(null);
    let text;
    if (inputRef.current) text = inputRef.current.value;
    const textArr = converteixArr(text);
    console.log(textArr);
    if (textArr) setValor(separaElements(textArr));
    console.log(separaElements(textArr));
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
                <div key={index} className='flex gap-2'>
                  <li>{element}</li>
                </div>
              );
            }
            return (
              <div key={index} className='flex gap-2'>
                <li>{element}</li>
                <li> - </li>
              </div>
            );
          })}
      </ul>
      <p className='flex justify-center gap-2 text-white text-sm'>
        Valor actual:<span>{valorProp}</span>
      </p>
      <ul className='flex justify-center gap-2 p-4 text-white text-sm'>
        <span>Sèrie:</span>
        {historicValor.map((num, index) => {
          if (index == historicValor.length - 1) {
            return (
              <div key={index} className='flex gap-2'>
                <li>{num}</li>
              </div>
            );
          }
          return (
            <div key={index} className='flex gap-2'>
              <li>{num}</li>
              <li> - </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Generics;
