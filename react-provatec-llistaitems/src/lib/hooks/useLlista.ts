import { useState, useEffect } from 'react';
import { llistaInicial } from '../data/llistaInicial';
import { uuid, moment } from '../utils/valorsIdMoment';
import type { ElementId } from '../../types';

export const useLlista = () => {
  const [llista, setLlista] = useState(llistaInicial);

  const afegirElement = (text: string) => {
    const nouaLlista = {
      id: uuid(),
      timestamp: moment(),
      text,
    };
    setLlista((prev) => [...prev, nouaLlista]);
  };

  const esborrarElement = (id: ElementId): void =>
    setLlista((prev) => prev.filter((actual) => actual.id !== id));

  useEffect(() => {
    const llista = document.querySelector('ol') as HTMLElement;
    console.log('llista -->', llista);
  }, [llista]);

  return {
    llista,
    afegirElement,
    esborrarElement,
  };
};
