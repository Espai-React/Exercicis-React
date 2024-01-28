type TdadesLlista = {
  lis1Llista: readonly string[];
  lis2Llista: readonly string[];
};

type TdadesLlistaOmit = Omit<TdadesLlista, 'lis1Llista'>;

const Llista: React.FC<TdadesLlista> = ({ lis1Llista, lis2Llista }) => (
  <div className='flex justify-center'>
    <ul className='w-48 flex flex-col items-start text-white text-sm'>
      {[...lis1Llista, ...lis2Llista].map((li) => (
        <li key={li}>{li}</li>
      ))}
    </ul>
  </div>
);

const LlistaOmit: React.FC<TdadesLlistaOmit> = ({ lis2Llista }) => (
  <div className='flex justify-center'>
    <ul className='w-48 flex flex-col items-start text-white text-sm'>
      {lis2Llista.map((li) => (
        <li key={li}>{li}</li>
      ))}
    </ul>
  </div>
);

export { Llista, LlistaOmit };
