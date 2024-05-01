import React, { useState, useRef, useEffect } from "react";

const UseReact = () => {

  const a = 8;
  const refA = useRef(null);
  const refF = useRef(null);

  const [valor, setValor] = useState(8);
  const [valorA, setValorA] = useState(0);

  const clicam = () => {
    setValor(valor + 1);
    refF.current.innerHTML = (valor % 2 === 0) 
    ? `${valor} (parell)`
    : `${valor} (imparell)`
    ;
    setValorA(a);
    refA.current.innerHTML = a;
  };
  
  useEffect(() => {
    ((valor-1) % 3 === 0) && alert(`El valor és ${valor-1} i és múltiple de 3!`);
  }, [valor]);

  return (
    <div>
      <p>var fixa inicial a: {a}</p>
      <p>setValorA per refA, incial a 0: <span ref={refA}>0</span></p>
      <p>setValor per valor a valor + 1: <span ref={refF}>0</span></p>
      <p>Botó que ho activa tot</p>
      <button onClick={clicam}>Clica!</button>
    </div>
  );
};

export default UseReact;
