import { useMemo, useState } from 'react';

const BotoMode = () => {
  const [fosc, setFosc] = useState(false);

  const handleClick = () => {
    document.documentElement.classList.toggle('dark');
    setFosc(!fosc);
  };

  const textBoto = useMemo(()=>(fosc ? 'Tema fosc' : 'Tema clar'),[fosc]);

  return (
    <button
      className="absolute right-6 top-4 rounded-xl border-2 bg-gray-800 px-4 py-2 text-white text-xs"
      onClick={handleClick}
    >
      {textBoto}
    </button>
  );
};

export default BotoMode;
