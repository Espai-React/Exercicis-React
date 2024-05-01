import { useState } from "react";

export const useLocalStorage = (key, valorInicial) => {
  const [valorGuardat, setvalorGuardat] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      return valorInicial;
    }
  });

  const setValor = (valor) => {
    try {
      setvalorGuardat(valor);
      localStorage.setItem(key, JSON.stringify(valor));
    } catch (error) {
      console.error(error);
    }
  };
  return [valorGuardat, setValor];
};
