import { useState } from "react";

export const useLocalStorage = (key, valorInicial) => {
  const [valor, setValor] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      return valorInicial;
    }
  });

  const setLocalStorage = (valor) => {
    try {
      setValor(valor);
      window.localStorage.setItem(key, JSON.stringify(valor));
    } catch (error) {
      console.error(error);
    }
  };
  return [valor, setLocalStorage];
};
