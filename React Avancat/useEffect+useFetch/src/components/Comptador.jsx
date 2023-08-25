import { useState, useEffect } from "react";

const Comptador = () => {
  const [count, setCount] = useState(10);
  const [doubleCount, setDoubleCount] = useState(20);
  const [tripleCount, setTripleCount] = useState(30);

  const handleClick = () => setCount(count + 1);
  const holaNois = () => console.log("Hola Nois");

  useEffect(() => {
    setDoubleCount(count * 2);
    setTripleCount(count * 3);
    window.addEventListener("click", holaNois);
    return () => window.removeEventListener("click", holaNois);
  }, [count]);

  return (
    <div>
      <h3>Hola a tothom</h3>
      <p>El comptador, compta: {count}</p>
      <p>L'altre comptador compta doble: {doubleCount}</p>
      <p>I l'altre comptador compta triple: {tripleCount}</p>
      <button onClick={handleClick}>Comptador: {count}</button>
    </div>
  );
};

export default Comptador;
