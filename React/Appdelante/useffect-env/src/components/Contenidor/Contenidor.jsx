import { useState, useEffect } from "react";
import MouseColor from "../MouseColor/MouseColor";
import "./Contenidor.css";

const Container = () => {
  const [compte, setCompte] = useState(0);
  const [mostrar, setMostrar] = useState(true);
  console.log("Mostrar: ", mostrar);

  useEffect(() => {
    console.log(`El compte val ${compte}`);
    document.title = `El compte val ${compte}`;
  }, [compte]);

  return (
    <div className="contenidor">
      <h2>El compte és: {compte}</h2>
      <button onClick={() => setCompte(compte + 1)}>Augmenta!</button>
      <button onClick={() => setMostrar((prev) => !prev)}>
        Deixar de Mostrar
      </button>
      <div>{mostrar ? <MouseColor /> : null}</div>
    </div>
  );
};

export default Container;
