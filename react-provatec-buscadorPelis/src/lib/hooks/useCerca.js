import { useState, useEffect, useRef } from 'react';
import { usePellicules } from '../hooks/usePellicules';

export const useCerca = () => {
  const [cerca, setCerca] = useState('');
  const [errorCerca, setErrorCerca] = useState(null);
  
  const primerInput = useRef(true);

  const { obtenirPellicules } = usePellicules(cerca);

  const handleChange = (e) => {
    if (e.target.value.startsWith(' ')) return;
    setCerca(e.target.value);
    obtenirPellicules(e.target.value);
  };

  const handleError = (cercaActual) => {
    if (cercaActual === '') {
      setErrorCerca('* No deixeu el camp buit');
      return;
    }
    if (cercaActual.match(/^\d+$/)) {
      setErrorCerca('* El camp de cerca no pot ser un número');
      return;
    }
    if (cercaActual.length < 3) {
      setErrorCerca('* El camp de cerca ha de tenir almenys 3 caracters');
      return;
    }
    setErrorCerca(null);
  };

  useEffect(() => {
    errorCerca && console.log('errorCerca -->', errorCerca.substring(2));
  }, [errorCerca]);

  useEffect(() => {
    console.log('primerInput -->', primerInput.current);
    if (primerInput.current) {
      primerInput.current = cerca === '';
      return;
    }
    if (cerca === '') {
      setErrorCerca('* El camp de cerca és obligatori');
      return;
    }
  }, [primerInput, cerca]);

  return {
    cerca,
    errorCerca,
    handleChange,
    handleError,
  };
};
