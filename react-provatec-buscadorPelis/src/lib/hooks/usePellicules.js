import { useMemo, useRef, useState } from 'react';
import { fetchPellicules } from '../utils/fetchPellicules';

export const usePellicules = (cerca) => {
  const [pellicules, setPellicules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ordena, setOrdena] = useState(false);
  const cercaAnterior = useRef(cerca);

  const obtenirPellicules = async (cerca) => {
    if (cerca === cercaAnterior.current) return;
    try {
      setLoading(true);
      setError(null);
      cercaAnterior.current = cerca;
      const peticioPellicules = await fetchPellicules(cerca);
      setPellicules(peticioPellicules);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const pelliculesOrdenades = useMemo(() => {
    if (!pellicules) {
      setOrdena(false);
      console.count('Ordena');
      return;
    }
    console.log('pellicules -->', pellicules);
    console.log('ordena -->', ordena);

    return ordena
      ? [...pellicules].sort((a, b) => {
          if (a.any === b.any) return a.titol.localeCompare(b.titol);
          return a.any.localeCompare(b.any);
        })
      : pellicules;
  }, [ordena, pellicules]);

  return {
    pellicules: pelliculesOrdenades,
    loading,
    error,
    obtenirPellicules,
    ordena,
    setOrdena,
  };
};
