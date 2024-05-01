import React, { useState, useEffect } from "react";

const Condicio = () => {
  const [condicio, setCondicio] = useState(true);

  /* const canviSol = () => {
    const interval = setInterval(() => setCondicio(!condicio),3000)
  };
  canviSol(); */

  useEffect(() => {
    const interval = setInterval(() => setCondicio(!condicio), 2000);
    return () => clearInterval(interval);
  }, [condicio]);
  
  const condicioRender = condicio ? <p>Condició certa!</p> : <p>Condició falsa!</p>;
  
  return (
    <div>{condicioRender}</div>
  );
};

export default Condicio;
